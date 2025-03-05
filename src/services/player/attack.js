class PlayerAttack {
    execute(player, enemy) {
        const damage = player.attackPower - enemy.defensePower;

        if (damage === 0) return { success: false }

        if (damage < 0) {
            let oldAttackPower = player.attackPower
            let playerAttackPower = 0
            let positvieDamage = Math.abs(damage)

            let currentAttackPower = player.attackPower -= positvieDamage
            if (currentAttackPower <= 0) {
                player.attackPower = 0
            } else {
                player.attackPower = currentAttackPower
            }

            playerAttackPower = Math.floor((positvieDamage / oldAttackPower) * 100)

            return {
                success: true,
                isWon: false,
                player,
                enemy,
                results: {
                    playerAttackPower
                }
            }
        }

        const oldEnemyLife = enemy.life
        const oldEnemyDefensePower = enemy.defensePower

        var enemyDefensePower = 0
        var enemyLife = 0

        const currentEnemyDefensePower = enemy.defensePower -= damage
        if (currentEnemyDefensePower <= 0) {
            enemy.defensePower = 0

            const currentEnemyLife = enemy.life -= damage;
            if (currentEnemyLife <= 0) {
                enemy.life = 0
            } else {
                enemy.life = currentEnemyLife
            }
        } else {
            enemy.defensePower = currentEnemyDefensePower
        }

        enemyDefensePower = Math.floor((damage / oldEnemyDefensePower) * 100)
        enemyLife = ((damage * oldEnemyLife) / 100)

        return {
            success: true,
            isWon: true,
            player,
            enemy,
            results: {
                enemyLife,
                enemyDefensePower
            }
        }
    }
}

module.exports = { PlayerAttack }
