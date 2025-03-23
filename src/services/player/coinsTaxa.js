class PlayerCoinsTaxa {
    execute(coins) {
        const taxas = [
            { coins: 1, xp: 0.75, limite: 100 },
            { coins: 101, xp: 0.25, limite: 500 },
            { coins: 501, xp: 0.15, limite: 1000 },
            { coins: 1001, xp: 0.1, limite: 999999 }
        ]

        let xp = 0;

        for (let i = 0; i < taxas.length; i++) {
            const taxa = taxas[i];
            const coinsProcessados = Math.min(coins, taxa.limite);

            if (coinsProcessados > 0) {
                xp += Math.floor(coinsProcessados * taxa.xp);
            }

            coins -= coinsProcessados;

            if (coins <= 0) break;
        }

        return xp;
    }
}

module.exports = { PlayerCoinsTaxa }
