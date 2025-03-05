const { xpRequired } = require("./xpRequired")

class PlayerXpUpgrade {
    execute(player, xpAmount) {
        const xpAdded = player.xp += Number(xpAmount)
        var newXp = 0

        if (player.level == 100) return {
            updated: false,
            newXp: 0
        }

        if (xpAdded >= player.requiredXp) {
            newXp = xpAdded - player.requiredXp

            player.level++
            player.requiredXp = xpRequired(player.level)

            if (newXp >= player.requiredXp) {
                do {
                    newXp = newXp - player.requiredXp
                    player.level++
                    player.requiredXp = xpRequired(player.level)
                } while (newXp >= player.requiredXp);

                return {
                    updated: true,
                    newLevel: player.level,
                    newXp
                }
            }

            return {
                updated: true,
                newLevel: player.level,
                newXp
            }
        }

        return {
            updated: false,
            newXp: xpAdded
        }
    }
}

module.exports = { PlayerXpUpgrade }
