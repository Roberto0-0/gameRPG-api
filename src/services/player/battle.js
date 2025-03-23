class PlayerBattle {
    execute(player, opponent, battleMode) {
        const battleOptions = {
            attackX(player, opponent) {
                let oldOpponentHealth = 0
                let opponentHealth = 0

                const newOpponentHealth = opponent.health - player.attackPower

                if (newOpponentHealth <= 0) {
                    opponent.health = 0

                    return {
                        mode: "attackX",
                        isWon: true,
                        player,
                        opponent,
                        results: {
                            opponentHealth: 100
                        }
                    }
                }

                oldOpponentHealth = opponent.health
                const currentOppponentHealth = opponent.health -= newOpponentHealth
                opponent.health = newOpponentHealth
                opponentHealth = Math.floor((currentOppponentHealth / oldOpponentHealth) * 100)

                return {
                    mode: "attackX",
                    isWon: false,
                    player,
                    opponent,
                    results: {
                        opponentHealth
                    }
                }
            },
            attackXattack(player, opponent) {
                let oldPlayerHealth = 0
                let playerHealth = 0
                let oldOpponentHealth = 0
                let opponentHealth = 0

                const newOpponentHealth = opponent.health - player.attackPower

                if (newOpponentHealth <= 0) {
                    opponent.health = 0

                    return {
                        mode: "attackXattack",
                        isWon: true,
                        player,
                        opponent,
                        results: {
                            opponentHealth: 100
                        }
                    }
                }

                oldOpponentHealth = opponent.health
                const currentOppponentHealth = opponent.health -= newOpponentHealth
                opponent.health = newOpponentHealth
                opponentHealth = Math.floor((currentOppponentHealth / oldOpponentHealth) * 100)

                const newPlayerHealth = player.health - opponent.attackPower

                oldPlayerHealth = player.health
                const currentPlayerHealth = player.health -= Math.max(newPlayerHealth, 0)

                if (newPlayerHealth <= 0) {
                    player.health = 0

                    playerHealth = Math.floor((Math.abs(currentPlayerHealth) / oldPlayerHealth) * 100)

                    return {
                        mode: "attackXattack",
                        isWon: false,
                        player,
                        opponent,
                        results: {
                            playerHealth,
                            opponentHealth
                        }
                    }
                }

                player.health = newPlayerHealth
                playerHealth = Math.floor((currentPlayerHealth / oldPlayerHealth) * 100)
                if (playerHealth > 100) playerHealth = 100

                return {
                    mode: "attackXattack",
                    isWon: false,
                    player,
                    opponent,
                    results: {
                        playerHealth,
                        opponentHealth
                    }
                }
            },
            attackXdefense(player, opponent) {
                let oldOpponentHealth = 0
                let oldOpponentDefensePower = 0
                let opponentDefensePower = 0
                let opponentHealth = 0

                const damage = player.attackPower - opponent.defensePower;

                if (damage === 0) {
                    return {
                        mode: "attackXdefense",
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
                    opponent.defensePower -= Math.abs(damage)
                    if (opponent.defensePower < 0) opponent.defensePower = 0

                    opponentDefensePower = (oldOpponentDefensePower === 0) ? 0 : Math.floor((Math.abs(damage) / oldOpponentDefensePower) * 100)

                    return {
                        mode: "attackXdefense",
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
                if (opponent.health < 0) opponent.health = 0

                opponentHealth = Math.floor((damage / oldOpponentHealth) * 100)
                if (opponentHealth > 100) opponentHealth = 100

                return {
                    mode: "attackXdefense",
                    isWon: true,
                    player,
                    opponent,
                    results: {
                        opponentHealth,
                        opponentDefensePower: 100
                    }
                }
            }
        }

        const battle = battleOptions[battleMode]
        return battle(player, opponent)
    }
}

module.exports = { PlayerBattle }
