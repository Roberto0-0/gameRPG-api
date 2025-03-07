class PlayerAttack {
    execute(player, opponent) {
        const damage = player.attackPower - opponent.defensePower;

        if (damage === 0) return { success: false }

        if (damage < 0) {
            let oldPlayerAttackPower = player.attackPower
            let playerAttackPower = 0
            let damageReturned = Math.abs(damage)

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

        const oldOpponentHealth = opponent.health
        const oldOpponentDefensePower = opponent.defensePower

        var opponentDefensePower = 0
        var opponentHealth = 0

        const currentOpponentDefensePower = opponent.defensePower -= damage
        if (currentOpponentDefensePower <= 0) {
            opponent.defensePower = 0

            const currentOppponentHealth = opponent.health -= damage;
            if (currentOppponentHealth <= 0) {
                opponent.health = 0
            } else {
                opponent.health = currentOppponentHealth
            }

            opponentHealth = ((damage * oldOpponentHealth) / 100)
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
                opponentHealth: opponentHealth,
                opponentDefensePower: opponentDefensePower
            }
        }
    }
}

module.exports = { PlayerAttack }
