class PlayerAttack {
    execute(player, opponent) {
        const damage = player.attackPower - opponent.defensePower;

        let oldPlayerAttackPower = 0
        let playerAttackPower = 0
        let oldOpponentHealth = 0
        let oldOpponentDefensePower = 0
        let opponentDefensePower = 0
        let opponentHealth = 0

        if (damage === 0) {
            oldPlayerAttackPower = player.attackPower
            oldOpponentDefensePower = opponent.defensePower

            const currentPlayerAttackPower = 10
            const currentOpponentDefensePower = 10
            player.attackPower -= currentPlayerAttackPower
            opponent.defensePower -= currentOpponentDefensePower

            playerAttackPower = Math.floor((currentPlayerAttackPower / oldPlayerAttackPower) * 100)
            opponentDefensePower = Math.floor((currentOpponentDefensePower / oldOpponentDefensePower) * 100)

            return {
                succces: false,
                player,
                opponent,
                results: {
                    playerAttackPower,
                    opponentDefensePower
                }
            }

        }

        if (damage < 0) {
            oldPlayerAttackPower = player.attackPower
            playerAttackPower = 0
            const damageReturned = Math.abs(damage)

            let currentAttackPower = player.attackPower -= damageReturned
            if (currentAttackPower <= 0) {
                player.attackPower = 0
            } else {
                player.attackPower = currentAttackPower
            }

            playerAttackPower = (oldPlayerAttackPower === 0) ? 0 : Math.floor((damageReturned / oldPlayerAttackPower) * 100)

            return {
                success: true,
                isWon: false,
                player,
                opponent,
                results: {
                    playerAttackPower
                }
            }
        }

        oldOpponentHealth = opponent.health
        oldOpponentDefensePower = opponent.defensePower

        opponentDefensePower = 0
        opponentHealth = 0

        const currentOpponentDefensePower = opponent.defensePower -= damage
        if (currentOpponentDefensePower <= 0) {
            opponent.defensePower = 0

            const currentOppponentHealth = opponent.health -= damage;
            if (currentOppponentHealth <= 0) {
                opponent.health = 0
            } else {
                opponent.health = currentOppponentHealth
            }

            opponentHealth = Math.floor((damage / oldOpponentHealth) * 100)
        } else {
            opponent.defensePower = currentOpponentDefensePower
        }

        opponentDefensePower = (oldOpponentDefensePower === 0) ? 0 : Math.floor((damage / oldOpponentDefensePower) * 100)

        return {
            success: true,
            isWon: true,
            player,
            opponent,
            results: {
                opponentHealth,
                opponentDefensePower
            }
        }
    }
}

module.exports = { PlayerAttack }
