class PlayerMine {
    execute(powerLevel) {
        const minePowerlevel = [
            { level: 10, diamonds: 5 },
            { level: 20, diamonds: 10 },
            { level: 30, diamonds: 15 },
            { level: 40, diamonds: 20 },
            { level: 50, diamonds: 25 },
            { level: 60, diamonds: 30 },
            { level: 70, diamonds: 35 },
            { level: 80, diamonds: 40 },
            { level: 90, diamonds: 45 },
            { level: 100, diamonds: 50 }
        ]

        const diamondsRandom = (start, end) => Math.floor(Math.random() * (end - start) + start)

        const minePower = minePowerlevel.find(x => x.level === powerLevel)

        return diamondsRandom(1, (minePower.diamonds + 1))
    }
}

module.exports = { PlayerMine }
