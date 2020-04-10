const vibes = [
    'mein Regenbogen 🌈',
    'mein Herblatt 💝',
    'meine Sonne ☀️',
    'ich liebe Dich 🏩'
]

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))]
document.querySelector('.vibes').append(vibe);