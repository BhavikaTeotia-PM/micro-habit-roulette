// ===== MICRO-HABIT ROULETTE - MAIN APP =====

// App State
const AppState = {
    currentScreen: 'home',
    currentHabit: null,
    timerInterval: null,
    timerRemaining: 120,
    timerStartTime: null,
    spinStartTime: null,
    
    // Persisted data (loaded from localStorage)
    totalWins: 43,
    currentStreak: 7,
    todayHabits: 2,
    todayTarget: 3,
    recentWins: [],
    heatmapData: [3, 0, 2, 1, 3, 2, 0, 3, 1, 2, 3, 1, 2, 3], // Last 14 days
    settings: {
        dailyNudge: true,
        darkMode: false,
        habitDuration: 120
    }
};

// ===== INITIALIZATION =====

document.addEventListener('DOMContentLoaded', () => {
    loadFromStorage();
    initializeApp();
    updateGreeting();
    renderHeatmaps();
    updateAllStats();
});

function initializeApp() {
    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const screen = item.dataset.screen;
            if (screen) navigateTo(screen);
        });
    });

    // Atomic Action Button
    document.getElementById('atomic-action-btn').addEventListener('click', startRoulette);

    // Roulette Back Button
    document.getElementById('roulette-back').addEventListener('click', () => navigateTo('home'));

    // Done Button
    document.getElementById('done-btn').addEventListener('click', completeHabit);

    // Spin Again Button
    document.getElementById('spin-again-btn').addEventListener('click', () => navigateTo('home'));

    // Progress Spin Button
    document.getElementById('progress-spin-btn').addEventListener('click', startRoulette);

    // Toggle Switches
    document.getElementById('toggle-nudge').addEventListener('click', function() {
        this.classList.toggle('active');
        AppState.settings.dailyNudge = this.classList.contains('active');
        saveToStorage();
    });

    document.getElementById('toggle-dark').addEventListener('click', function() {
        this.classList.toggle('active');
        AppState.settings.darkMode = this.classList.contains('active');
        saveToStorage();
        // Dark mode would be implemented here
    });
}

// ===== NAVIGATION =====

function navigateTo(screenName) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Show target screen
    const targetScreen = document.getElementById(`screen-${screenName}`);
    if (targetScreen) {
        targetScreen.classList.add('active');
        AppState.currentScreen = screenName;
    }

    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.screen === screenName) {
            item.classList.add('active');
        }
    });

    // Special handling for progress screen
    if (screenName === 'progress') {
        updateProgressScreen();
    }
}

// ===== ROULETTE / SPIN =====

function startRoulette() {
    navigateTo('roulette');
    AppState.spinStartTime = Date.now();
    
    // Reset progress bar
    const progressFill = document.getElementById('spin-progress');
    progressFill.style.width = '0%';
    
    // Animate progress bar over 1.2 seconds (meeting the ≥0.8s requirement)
    const spinDuration = 1200; // 1.2 seconds
    const startTime = Date.now();
    
    function updateProgress() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min((elapsed / spinDuration) * 100, 100);
        progressFill.style.width = `${progress}%`;
        
        if (elapsed < spinDuration) {
            requestAnimationFrame(updateProgress);
        } else {
            // Spin complete - select habit and show task
            selectHabitAndShowTask();
        }
    }
    
    requestAnimationFrame(updateProgress);
}

function selectHabitAndShowTask() {
    // Get random habit
    AppState.currentHabit = getRandomHabit();
    
    // Update task screen with habit details
    const habit = AppState.currentHabit;
    const category = getCategoryInfo(habit.category);
    
    // Update badge
    const badge = document.getElementById('task-badge');
    badge.className = `task-badge ${habit.category}`;
    document.getElementById('task-badge-text').textContent = `${habit.icon} ${category.name}`;
    
    // Update task details
    document.getElementById('task-name').textContent = habit.name;
    document.getElementById('task-desc').textContent = habit.description;
    document.getElementById('fact-text').textContent = habit.fact;
    
    // Reset timer
    AppState.timerRemaining = habit.duration;
    AppState.timerStartTime = Date.now();
    updateTimerDisplay();
    
    // Navigate to task screen
    setTimeout(() => {
        navigateTo('task');
        startTimer();
    }, 300);
}

// ===== TIMER =====

function startTimer() {
    // Clear any existing timer
    if (AppState.timerInterval) {
        clearInterval(AppState.timerInterval);
    }
    
    const totalDuration = AppState.currentHabit.duration;
    AppState.timerStartTime = Date.now();
    
    AppState.timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - AppState.timerStartTime) / 1000);
        AppState.timerRemaining = Math.max(0, totalDuration - elapsed);
        
        updateTimerDisplay();
        
        // Update progress bar
        const progress = ((totalDuration - AppState.timerRemaining) / totalDuration) * 100;
        document.getElementById('timer-fill').style.width = `${100 - progress}%`;
        
        if (AppState.timerRemaining <= 0) {
            clearInterval(AppState.timerInterval);
            // Timer complete - could auto-complete or just wait for user
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(AppState.timerRemaining / 60);
    const seconds = AppState.timerRemaining % 60;
    const display = `${minutes}:${seconds.toString().padStart(2, '0')} left`;
    document.getElementById('timer-value').textContent = display;
}

function stopTimer() {
    if (AppState.timerInterval) {
        clearInterval(AppState.timerInterval);
        AppState.timerInterval = null;
    }
}

// ===== COMPLETE HABIT =====

function completeHabit() {
    stopTimer();
    
    const habit = AppState.currentHabit;
    const totalDuration = habit.duration;
    const timeSpent = totalDuration - AppState.timerRemaining;
    
    // Update stats
    AppState.totalWins++;
    AppState.todayHabits++;
    
    // Check if this is a new day for streak
    const today = new Date().toDateString();
    const lastWinDate = localStorage.getItem('lastWinDate');
    if (lastWinDate !== today) {
        // Check if it's consecutive
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (lastWinDate === yesterday.toDateString()) {
            AppState.currentStreak++;
        } else if (lastWinDate !== today) {
            // Reset streak if not consecutive (but not if same day)
            AppState.currentStreak = 1;
        }
        localStorage.setItem('lastWinDate', today);
    }
    
    // Add to recent wins
    AppState.recentWins.unshift({
        name: habit.name,
        icon: habit.icon,
        time: 'Just now',
        timestamp: Date.now()
    });
    
    // Keep only last 10 wins
    if (AppState.recentWins.length > 10) {
        AppState.recentWins.pop();
    }
    
    // Update heatmap (increment today's value)
    AppState.heatmapData[AppState.heatmapData.length - 1] = 
        Math.min(3, AppState.heatmapData[AppState.heatmapData.length - 1] + 1);
    
    // Save to storage
    saveToStorage();
    
    // Update win screen
    const minutes = Math.floor(timeSpent / 60);
    const seconds = timeSpent % 60;
    const timeString = minutes > 0 ? `${minutes} min ${seconds} sec` : `${seconds} sec`;
    document.getElementById('win-subtitle').textContent = `${habit.name} · ${timeString}`;
    document.getElementById('win-streak-day').textContent = AppState.currentStreak;
    document.getElementById('win-total').textContent = AppState.totalWins;
    document.getElementById('win-streak').textContent = AppState.currentStreak;
    
    // Update progress dots
    updateProgressDots();
    
    // Navigate to win screen
    navigateTo('win');
    
    // Trigger confetti
    createConfetti();
    
    // Update all stats displays
    updateAllStats();
    renderHeatmaps();
}

// ===== CONFETTI =====

function createConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = '';
    
    const colors = ['#2EB873', '#FF9920', '#55ABEE', '#9978EB', '#FF7A45'];
    const confettiCount = 30;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = `${Math.random() * 0.5}s`;
        confetti.style.animationDuration = `${2 + Math.random() * 2}s`;
        container.appendChild(confetti);
    }
    
    // Clean up after animation
    setTimeout(() => {
        container.innerHTML = '';
    }, 4000);
}

// ===== PROGRESS DOTS =====

function updateProgressDots() {
    const dots = document.querySelectorAll('.progress-dots .dot');
    const completed = Math.min(AppState.todayHabits, 5);
    
    dots.forEach((dot, index) => {
        if (index < completed) {
            dot.classList.add('filled');
        } else {
            dot.classList.remove('filled');
        }
    });
}

// ===== HEATMAP =====

function renderHeatmaps() {
    const heatmapGrids = ['heatmap-grid', 'progress-heatmap-grid'];
    
    heatmapGrids.forEach(gridId => {
        const grid = document.getElementById(gridId);
        if (!grid) return;
        
        grid.innerHTML = '';
        
        AppState.heatmapData.forEach(level => {
            const cell = document.createElement('div');
            cell.className = `heatmap-cell level-${level}`;
            grid.appendChild(cell);
        });
    });
}

// ===== UPDATE STATS =====

function updateAllStats() {
    // Home screen
    document.getElementById('total-wins').textContent = AppState.totalWins;
    document.getElementById('today-habits').textContent = `${AppState.todayHabits} / ${AppState.todayTarget}`;
    document.getElementById('streak-text').textContent = `${AppState.currentStreak}-day streak`;
    
    // Progress screen
    const progressTotal = document.getElementById('progress-total');
    const progressStreak = document.getElementById('progress-streak');
    if (progressTotal) progressTotal.textContent = AppState.totalWins;
    if (progressStreak) progressStreak.textContent = AppState.currentStreak;
    
    // Update recent wins lists
    updateRecentWinsList('recent-list');
    updateRecentWinsList('progress-recent-list');
}

function updateRecentWinsList(listId) {
    const list = document.getElementById(listId);
    if (!list || AppState.recentWins.length === 0) return;
    
    list.innerHTML = '';
    
    const winsToShow = AppState.recentWins.slice(0, 3);
    winsToShow.forEach(win => {
        const item = document.createElement('div');
        item.className = 'recent-item';
        item.innerHTML = `
            <span class="recent-icon">${win.icon}</span>
            <span class="recent-name">${win.name}</span>
            <span class="recent-time">${getRelativeTime(win.timestamp)}</span>
        `;
        list.appendChild(item);
    });
}

function getRelativeTime(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;
    
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days === 1) return 'Yesterday';
    return `${days} days ago`;
}

// ===== PROGRESS SCREEN =====

function updateProgressScreen() {
    document.getElementById('progress-total').textContent = AppState.totalWins;
    document.getElementById('progress-streak').textContent = AppState.currentStreak;
    renderHeatmaps();
    updateRecentWinsList('progress-recent-list');
}

// ===== GREETING =====

function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = 'Good morning ☀️';
    
    if (hour >= 12 && hour < 17) {
        greeting = 'Good afternoon 🌤️';
    } else if (hour >= 17 && hour < 21) {
        greeting = 'Good evening 🌅';
    } else if (hour >= 21 || hour < 5) {
        greeting = 'Good night 🌙';
    }
    
    document.querySelector('.greeting').textContent = greeting;
}

// ===== LOCAL STORAGE =====

function saveToStorage() {
    const data = {
        totalWins: AppState.totalWins,
        currentStreak: AppState.currentStreak,
        todayHabits: AppState.todayHabits,
        recentWins: AppState.recentWins,
        heatmapData: AppState.heatmapData,
        settings: AppState.settings,
        lastSaveDate: new Date().toDateString()
    };
    
    localStorage.setItem('microHabitRoulette', JSON.stringify(data));
}

function loadFromStorage() {
    const saved = localStorage.getItem('microHabitRoulette');
    
    if (saved) {
        try {
            const data = JSON.parse(saved);
            
            AppState.totalWins = data.totalWins || 43;
            AppState.currentStreak = data.currentStreak || 7;
            AppState.recentWins = data.recentWins || [];
            AppState.heatmapData = data.heatmapData || [3, 0, 2, 1, 3, 2, 0, 3, 1, 2, 3, 1, 2, 3];
            AppState.settings = data.settings || { dailyNudge: true, darkMode: false, habitDuration: 120 };
            
            // Reset today's habits if it's a new day
            const today = new Date().toDateString();
            if (data.lastSaveDate !== today) {
                AppState.todayHabits = 0;
                // Shift heatmap data
                AppState.heatmapData.shift();
                AppState.heatmapData.push(0);
            } else {
                AppState.todayHabits = data.todayHabits || 0;
            }
            
            // Update toggle states
            if (AppState.settings.dailyNudge) {
                document.getElementById('toggle-nudge')?.classList.add('active');
            }
            if (AppState.settings.darkMode) {
                document.getElementById('toggle-dark')?.classList.add('active');
            }
            
        } catch (e) {
            console.error('Error loading saved data:', e);
        }
    }
}

// ===== UTILITY =====

// Prevent zoom on double tap (mobile)
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - (window.lastTouchEnd || 0) < 300) {
        e.preventDefault();
    }
    window.lastTouchEnd = now;
}, { passive: false });

// Service Worker registration (for PWA - optional)
if ('serviceWorker' in navigator) {
    // Could register a service worker here for offline support
}

console.log('🎯 Micro-Habit Roulette loaded! Ready for your 2-minute win.');