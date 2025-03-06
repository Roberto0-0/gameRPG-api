class PlayerHealthRestaurestion {
    execute(player) {
        const cost = (player.currentHealth - player.health ) * 10

        return {
            healthRestored: player.currentHealth,
            cost
        }
    }
}

module.exports = { PlayerHealthRestaurestion }
