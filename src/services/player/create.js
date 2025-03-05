const { Player } = require("../../models/Player")

class PlayerCreate {
    execute(memberProps) {
        const { serialized, name } = memberProps

        const newMember = new Player(serialized, name)

        return {
            success: true,
            data: newMember
        }
    }
}

module.exports = { PlayerCreate }

