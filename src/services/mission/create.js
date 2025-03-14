const { Mission } = require("../../models/Mission")

class MissionCreate {
    execute(missionProps) {
        const { title, description, tag, icon } = missionProps

        const { info, ...newMission } = new Mission(title, description, tag, icon) 

        return newMission
    }
}

module.exports = { MissionCreate }
