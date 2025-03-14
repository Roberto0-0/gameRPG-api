const { readFileSync } = require("node:fs")
const path = require("node:path")

class MissionSet {
    constructor(missionCreate) {
        this._missionCreate = missionCreate
    }

    execute() {
        const content = readFileSync(path.join(__dirname, "..", "..", "public", "missions.json"))
        const data = JSON.parse(content)

        const mission = data[Math.floor(Math.random() * (data.length - 0) + 0)]
        const setMission = this._missionCreate.execute(mission)

        return setMission
    }
}

module.exports = { MissionSet }
