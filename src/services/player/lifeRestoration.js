class PlayerLifeRestaurestion {
    execute(player) {
        const calculate = (player.currentLife - player.life ) * 10

        return {
            life: player.currentLife,
            price: calculate
        }
    }
}

module.exports = { PlayerLifeRestaurestion }
