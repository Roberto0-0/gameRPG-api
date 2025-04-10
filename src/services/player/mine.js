class PlayerMine {
    execute(powerLevel) {
        const minePowerlevel = [
            { level: 10, minDiamonds: 1, maxDiamonds: 5 },
            { level: 20, minDiamonds: 1, maxDiamonds: 10 },
            { level: 30, minDiamonds: 5, maxDiamonds: 15 },
            { level: 40, minDiamonds: 5, maxDiamonds: 20 },
            { level: 50, minDiamonds: 10, maxDiamonds: 25 },
            { level: 60, minDiamonds: 15, maxDiamonds: 30 },
            { level: 70, minDiamonds: 20, maxDiamonds: 35 },
            { level: 80, minDiamonds: 25, maxDiamonds: 40 },
            { level: 90, minDiamonds: 30, maxDiamonds: 45 },
            { level: 100, minDiamonds: 35, maxDiamonds: 50 }
        ]

        const diamondsRandom = (x, y) => Math.floor(Math.random() * (y - x) + x)

        const minePower = minePowerlevel.find(x => x.level === powerLevel)

        return diamondsRandom(minePower.minDiamonds, (minePower.maxDiamonds + 1))
    }
}

module.exports = { PlayerMine }
