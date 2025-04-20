class PlayerBattle {
    execute(player, opponent) {
        let oldOpponentHealth = 0
        let oldOpponentDefensePower = 0
        let opponentDefensePower = 0
        let opponentHealth = 0

        const damage = player.attackPower - opponent.defensePower;

        player.attackPower -= 10
        if (player.attackPower <= 0) player.attackPower = 0

        if (damage === 0) {
            return {
                isWon: false,
                draw: true,
                player,
                opponent,
                results: {
                    playerAttackPower: 0,
                    opponentDefensePower: 0
                }
            }
        }

        if (damage < 0) {
            oldOpponentDefensePower = opponent.defensePower
            let damageCaused = oldOpponentDefensePower - Math.abs(damage)
            opponent.defensePower -= damageCaused
            if (opponent.defensePower < 0) opponent.defensePower = 0

            opponentDefensePower = (oldOpponentDefensePower === 0) ? 0 : Math.floor((damageCaused / oldOpponentDefensePower) * 100)

            return {
                isWon: false,
                player,
                opponent,
                results: {
                    opponentDefensePower
                }
            }
        }

        oldOpponentHealth = opponent.health
        opponent.defensePower = 0
        opponent.health -= damage;

        if (opponent.health <= 0) {
            opponent.health = 0

            return {
                isWon: true,
                player,
                opponent,
                results: {
                    opponentHealth: 100,
                    opponentDefensePower: 100
                }
            }
        }

        opponentHealth = Math.floor((damage / oldOpponentHealth) * 100)
        if (opponentHealth > 100) opponentHealth = 100

        return {
            isWon: false,
            player,
            opponent,
            results: {
                opponentHealth,
                opponentDefensePower: 100
            }
        }
    }
}

module.exports = { PlayerBattle }
