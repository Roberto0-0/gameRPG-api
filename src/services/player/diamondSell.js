class PlayerSellDiamond {
    execute() {
        const coins = [5, 15, 30]
        const weight = [50, 30, 20]
        const allWeight = 100
        let result = 0

        const numberRandom = Math.floor(Math.random() * (allWeight - 1) + 0)

        if (numberRandom <= weight[0]) {
            result = coins[0]
        } else if (numberRandom <= weight[0] + weight[1]) {
            result = coins[1]
        } else {
            result = coins[2]
        }

        return result
    }
}

module.exports = { PlayerSellDiamond }
