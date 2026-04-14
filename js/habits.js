// ===== MICRO-HABIT ROULETTE - HABIT POOL =====
// 20+ science-backed micro-habits across 4 categories

const HABITS = [
    // === STRENGTH (💪) ===
    {
        id: 1,
        name: "10 Air Squats",
        description: "Stand with feet shoulder-width apart, squat until thighs are parallel to the ground, push through heels to stand. Repeat 10 times.",
        category: "strength",
        icon: "💪",
        duration: 120, // seconds
        fact: "Squats activate over 300 muscles and boost dopamine in under 60 seconds — even a short set improves mood and focus."
    },
    {
        id: 2,
        name: "5 Push-ups",
        description: "Start in plank position, lower your chest to the ground, push back up. Modify on knees if needed. Quality over quantity.",
        category: "strength",
        icon: "💪",
        duration: 120,
        fact: "Push-ups engage your chest, shoulders, triceps, and core simultaneously, releasing endorphins that reduce stress hormones."
    },
    {
        id: 3,
        name: "30-Second Wall Sit",
        description: "Lean against a wall, slide down until thighs are parallel to floor. Hold for 30 seconds. Feel the burn!",
        category: "strength",
        icon: "💪",
        duration: 120,
        fact: "Isometric exercises like wall sits improve muscular endurance and can lower blood pressure over time."
    },
    {
        id: 4,
        name: "30-Second Plank",
        description: "Hold a plank position on forearms or hands. Keep your body in a straight line from head to heels. Breathe steadily.",
        category: "strength",
        icon: "💪",
        duration: 120,
        fact: "Planks strengthen your entire core, improving posture and reducing lower back pain risk."
    },
    {
        id: 5,
        name: "10 Calf Raises",
        description: "Stand tall, rise onto your toes, hold for a second, lower back down. Use a wall for balance if needed.",
        category: "strength",
        icon: "💪",
        duration: 120,
        fact: "Calf raises improve ankle stability and blood circulation in your lower legs, reducing fatigue from sitting."
    },

    // === MOVEMENT (🏃) ===
    {
        id: 6,
        name: "Desk Stretch Sequence",
        description: "Reach arms overhead, interlace fingers and stretch side to side. Roll shoulders back 5 times. Twist torso gently each direction.",
        category: "movement",
        icon: "🏃",
        duration: 120,
        fact: "Regular stretching increases blood flow to muscles, reducing tension headaches and improving concentration."
    },
    {
        id: 7,
        name: "Walk 100 Steps",
        description: "Get up and walk around your space. Count 100 steps. Take the scenic route if you can!",
        category: "movement",
        icon: "🏃",
        duration: 120,
        fact: "Even brief walking breaks every hour can counteract the negative effects of prolonged sitting on metabolism."
    },
    {
        id: 8,
        name: "20 Jumping Jacks",
        description: "Jump feet apart while raising arms overhead, then jump back to starting position. Keep a steady rhythm.",
        category: "movement",
        icon: "🏃",
        duration: 120,
        fact: "Jumping jacks elevate heart rate quickly, improving cardiovascular health and boosting energy levels instantly."
    },
    {
        id: 9,
        name: "Neck Roll Sequence",
        description: "Slowly roll your head in a circle, 5 times clockwise, then 5 times counter-clockwise. Move gently and breathe.",
        category: "movement",
        icon: "🏃",
        duration: 120,
        fact: "Neck stretches release tension from screen time and can prevent chronic neck pain and headaches."
    },
    {
        id: 10,
        name: "Hip Circles",
        description: "Stand with hands on hips, make large circles with your hips. 10 clockwise, 10 counter-clockwise.",
        category: "movement",
        icon: "🏃",
        duration: 120,
        fact: "Hip mobility exercises counteract the tightness from sitting and improve overall movement quality."
    },

    // === BREATHING (🌬) ===
    {
        id: 11,
        name: "Box Breathing",
        description: "Inhale for 4 counts, hold for 4 counts, exhale for 4 counts, hold for 4 counts. Repeat 4 cycles.",
        category: "breathing",
        icon: "🌬",
        duration: 120,
        fact: "Box breathing activates the parasympathetic nervous system and reduces cortisol in under 90 seconds."
    },
    {
        id: 12,
        name: "4-7-8 Breath",
        description: "Inhale through nose for 4 counts, hold for 7 counts, exhale through mouth for 8 counts. Repeat 3 times.",
        category: "breathing",
        icon: "🌬",
        duration: 120,
        fact: "The 4-7-8 technique acts as a natural tranquilizer for the nervous system, reducing anxiety quickly."
    },
    {
        id: 13,
        name: "Deep Belly Breaths",
        description: "Place hand on belly. Breathe deeply so your belly rises (not chest). Slow exhale. Repeat 10 times.",
        category: "breathing",
        icon: "🌬",
        duration: 120,
        fact: "Diaphragmatic breathing increases oxygen exchange and stimulates the vagus nerve, promoting calm."
    },
    {
        id: 14,
        name: "Energizing Breath",
        description: "Take 20 quick, sharp breaths through your nose (like sniffing). Then one deep breath and hold for 10 seconds.",
        category: "breathing",
        icon: "🌬",
        duration: 120,
        fact: "Rapid breathing techniques increase alertness by boosting oxygen levels and activating the sympathetic nervous system."
    },
    {
        id: 15,
        name: "Alternate Nostril Breathing",
        description: "Close right nostril, inhale left. Close left, exhale right. Inhale right, exhale left. Repeat 5 cycles.",
        category: "breathing",
        icon: "🌬",
        duration: 120,
        fact: "This yogic technique balances the left and right hemispheres of the brain, improving focus and reducing stress."
    },

    // === MINDFULNESS (🧘) ===
    {
        id: 16,
        name: "Body Scan",
        description: "Close eyes. Slowly scan attention from toes to head, noticing any tension. Breathe into tight areas.",
        category: "mindfulness",
        icon: "🧘",
        duration: 120,
        fact: "Body scans increase interoceptive awareness, helping you recognize and release physical stress before it builds."
    },
    {
        id: 17,
        name: "Gratitude Moment",
        description: "Think of 3 specific things you're grateful for right now. Visualize each one. Feel the appreciation.",
        category: "mindfulness",
        icon: "🧘",
        duration: 120,
        fact: "Gratitude practices increase dopamine and serotonin production, creating lasting improvements in mood."
    },
    {
        id: 18,
        name: "Mindful Observation",
        description: "Pick one object near you. Study it for 2 minutes — its color, texture, shape, shadows. Just observe.",
        category: "mindfulness",
        icon: "🧘",
        duration: 120,
        fact: "Focused attention exercises strengthen the prefrontal cortex, improving concentration and decision-making."
    },
    {
        id: 19,
        name: "5-4-3-2-1 Grounding",
        description: "Notice 5 things you see, 4 you hear, 3 you feel, 2 you smell, 1 you taste. Anchors you to the present.",
        category: "mindfulness",
        icon: "🧘",
        duration: 120,
        fact: "Grounding techniques interrupt anxiety spirals by engaging the sensory cortex and reducing amygdala activity."
    },
    {
        id: 20,
        name: "Loving-Kindness Pause",
        description: "Silently repeat: 'May I be happy. May I be healthy. May I be at peace.' Then extend to someone you care about.",
        category: "mindfulness",
        icon: "🧘",
        duration: 120,
        fact: "Loving-kindness meditation increases positive emotions and social connection, even in brief sessions."
    },
    {
        id: 21,
        name: "Mindful Listening",
        description: "Close your eyes and listen to all the sounds around you for 2 minutes. Don't judge, just notice.",
        category: "mindfulness",
        icon: "🧘",
        duration: 120,
        fact: "Mindful listening activates the auditory cortex differently than passive hearing, enhancing present-moment awareness."
    },
    {
        id: 22,
        name: "Intention Setting",
        description: "Take a moment to set one clear intention for the next hour. Visualize yourself accomplishing it.",
        category: "mindfulness",
        icon: "🧘",
        duration: 120,
        fact: "Setting micro-intentions activates the reticular activating system, helping your brain filter for relevant opportunities."
    }
];

// Category metadata
const CATEGORIES = {
    strength: {
        name: "Strength",
        icon: "💪",
        color: "#2EB873",
        bgColor: "rgba(46, 184, 115, 0.15)"
    },
    movement: {
        name: "Movement",
        icon: "🏃",
        color: "#FF7A45",
        bgColor: "rgba(255, 122, 69, 0.15)"
    },
    breathing: {
        name: "Breathing",
        icon: "🌬",
        color: "#55ABEE",
        bgColor: "rgba(85, 171, 238, 0.15)"
    },
    mindfulness: {
        name: "Mindfulness",
        icon: "🧘",
        color: "#9978EB",
        bgColor: "rgba(153, 120, 235, 0.15)"
    }
};

// Get a random habit
function getRandomHabit() {
    const randomIndex = Math.floor(Math.random() * HABITS.length);
    return HABITS[randomIndex];
}

// Get habits by category
function getHabitsByCategory(category) {
    return HABITS.filter(habit => habit.category === category);
}

// Get category info
function getCategoryInfo(category) {
    return CATEGORIES[category];
}

// Export for use in app.js
window.HABITS = HABITS;
window.CATEGORIES = CATEGORIES;
window.getRandomHabit = getRandomHabit;
window.getHabitsByCategory = getHabitsByCategory;
window.getCategoryInfo = getCategoryInfo;