const { GroupController } = require("./src/controllers/groupController")
const { PlayerController } = require("./src/controllers/playerController")
const { MissionController } = require("./src/controllers/missionController")

class GameRPG {
    constructor(storagePath)  {
        this.storage = storagePath
        this.group = new GroupController(this.storage)
        this.player = new PlayerController(this.storage)
        this.mission = new MissionController()
    }
}

module.exports = GameRPG
