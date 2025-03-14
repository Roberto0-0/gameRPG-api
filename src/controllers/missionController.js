const { MissionCreate } = require("../services/mission/create")
const { MissionSet } = require("../services/mission/setMission")

class MissionController {
    create(missionProps) {
        return new MissionCreate().execute(missionProps)
    }

    set() {
        const missionCreateService = new MissionCreate()
        return new MissionSet(missionCreateService).execute() 
    }
}

module.exports = { MissionController }
