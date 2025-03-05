class PlayerMine {
    execute(minePower) {
        const diamondsRandom = (start, end) => Math.floor(Math.random() * (end - start) + start)
        let result = 0

        if (minePower >= 90) {
            result = diamondsRandom(20, 31)
        } else if (minePower >= 70) {
            result = diamondsRandom(15, 21)
        } else if (minePower >= 50) {
            result = diamondsRandom(10, 16)
        } else if (minePower >= 30) {
            result = diamondsRandom(5, 11)
        } else {
            result = diamondsRandom(1, 6)
        }

        return result
    }
}

module.exports = { PlayerMine }
