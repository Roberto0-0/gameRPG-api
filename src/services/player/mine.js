class PlayerMine {
    execute(minePowerLevel) {
        const RNG = (x, y) => Math.floor(Math.random() * (y - x) + x)

        const maximumDiamonds = Math.floor((minePowerLevel * 50) / 100)

        let minimalDiamonds = (maximumDiamonds - 15)
        if (minimalDiamonds <= 0) minimalDiamonds = 1

        return RNG((maximumDiamonds + 1), minimalDiamonds)
    }
}

module.exports = { PlayerMine }
