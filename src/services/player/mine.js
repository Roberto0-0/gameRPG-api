class PlayerMine {
    execute(minePower) {
        const diamondsRandom = (start, end) => Math.floor(Math.random() * (end - start) + start)
        let result = 0

        switch (minePower) {
            case 10:
                result = diamondsRandom(1, 6)
                break;
            case 20:
                result = diamondsRandom(5, 11)
                break;
            case 30:
                result = diamondsRandom(10, 16)
                break;
            case 40:
                result = diamondsRandom(15, 21)
                break;
            case 50:
                result = diamondsRandom(20, 26)
                break;
            case 60:
                result = diamondsRandom(25, 31)
                break;
            case 70:
                result = diamondsRandom(30, 36)
                break;
            case 80:
                result = diamondsRandom(35, 41)
                break;
            case 90:
                result = diamondsRandom(40, 46)
                break;
            case 100:
                result = diamondsRandom(45, 51)
                break;
        }

        return result
    }
}

module.exports = { PlayerMine }
