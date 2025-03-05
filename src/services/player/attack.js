class PlayerAttack {
    execute(player, enemy) {
        const damage = player.attackPower - enemy.defense;

        if (damage < 0) {
            let lossAttackPower = player.attackPower -= Math.abs(damage)
            if (lossAttackPower <= 0) player.attackPower = 0

            return {
                isWon: false,
                player,
                enemy,
                results: {
                    playerAttackPower: Math.abs(damage * 10)
                }
            }
        }

        const oldEnemyLife = enemy.life
        const oldEnemyDefensePower = enemy.defense

        const enemyLife = enemy.life -= (damage * 10);
        if (enemyLife <= 0) {
            enemy.life = 0
            enemy.defense = 0

            return {
                isWon: true,
                player,
                enemy,
                results: {
                    enemyLife: (((damage * 10) * oldEnemyLife) / 100),
                    enemyDefensePower: Math.floor((damage / oldEnemyDefensePower) * 100)
                }
            }
        }

        enemy.life = enemyLife
        enemy.defense -= damage

        return {
            isWon: true,
            player,
            enemy,
            results: {
                enemyLife: (((damage * 10) * oldEnemyLife) / 100),
                enemyDefensePower: Math.floor((damage / oldEnemyDefensePower) * 100)
            }
        }
    }
}

module.exports = { PlayerAttack }
