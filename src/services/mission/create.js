const { Mission } = require("../../models/Mission")

class MissionCreate {
    execute(missionProps) {
        const { title, description, tag } = missionProps

        const { info, ...newMission } = new Mission(title, description, tag) 

        return newMission
    }
}

module.exports = { MissionCreate }
