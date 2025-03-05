class PlayerGetBySerialized {
    constructor(groupGetBySession) {
        this._groupGetBySession = groupGetBySession
    }

    async execute(session, serialized) {
        const group = await this._groupGetBySession.execute(session)
        if (!group.success) return {
            success: true,
            message: group.message
        }

        const { data } = group

        const player = data.players.find(x => x.serialized === serialized)
        if (!player) return {
            success: false,
            message: "Jogador não encontrado."
        }

        return {
            success: true,
            data: player
        }
    }
}

module.exports = { PlayerGetBySerialized }

