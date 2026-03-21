import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '🎸', name: 'Guitar' },
    { emoji: '🦊', name: 'Fox' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🌈', name: 'Rainbow' },
    { emoji: '🐉', name: 'Dragon' },
    { emoji: '🎃', name: 'Pumpkin' },
    { emoji: '🦄', name: 'Unicorn' },
    { emoji: '🍦', name: 'Ice Cream' },
    { emoji: '🎯', name: 'Bullseye' },
    { emoji: '🌵', name: 'Cactus' },
    { emoji: '🦋', name: 'Butterfly' },
    { emoji: '🍄', name: 'Mushroom' },
    { emoji: '🎹', name: 'Piano' },
    { emoji: '🦀', name: 'Crab' },
    { emoji: '🌺', name: 'Flower' },
    { emoji: '🎲', name: 'Dice' },
    { emoji: '🦁', name: 'Lion' },
    { emoji: '🍓', name: 'Strawberry' },
    { emoji: '🌙', name: 'Moon' },
    { emoji: '🐙', name: 'Octopus' },
    { emoji: '🎪', name: 'Circus' },
];

// In-memory leaderboard
const leaderboard = [];

function getRandomEmoji(exclude = null) {
    const pool = exclude ? emojis.filter(e => e.name !== exclude) : emojis;
    return pool[Math.floor(Math.random() * pool.length)];
}

function generateOptions(correct) {
    const options = [correct.name];
    while (options.length < 4) {
        const distractor = getRandomEmoji(correct.name);
        if (!options.includes(distractor.name)) {
            options.push(distractor.name);
        }
    }
    return options.sort(() => Math.random() - 0.5);
}

// GET /api/question — serve a new emoji question
app.get('/api/question', (req, res) => {
    const correct = getRandomEmoji();
    const options = generateOptions(correct);
    res.json({ emoji: correct.emoji, options, correctName: correct.name });
});

// POST /api/guess — check a guess
app.post('/api/guess', (req, res) => {
    const { guess, correctName } = req.body;
    if (!guess || !correctName) {
        return res.status(400).json({ error: 'Missing guess or correctName' });
    }
    const isCorrect = guess.trim().toLowerCase() === correctName.trim().toLowerCase();
    res.json({ isCorrect, correctName });
});

// POST /api/leaderboard — submit a score
app.post('/api/leaderboard', (req, res) => {
    const { name, score } = req.body;
    if (!name || score === undefined) {
        return res.status(400).json({ error: 'Missing name or score' });
    }
    leaderboard.push({ name: name.trim().slice(0, 20), score, date: new Date().toISOString() });
    leaderboard.sort((a, b) => b.score - a.score);
    res.json({ success: true, leaderboard: leaderboard.slice(0, 10) });
});

// GET /api/leaderboard — fetch top scores
app.get('/api/leaderboard', (req, res) => {
    res.json(leaderboard.slice(0, 10));
});

app.listen(PORT, () => {
    console.log(`🎮 Emoji Game running at http://localhost:${PORT}`);
});