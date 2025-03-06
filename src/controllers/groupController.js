const { GroupCreate } = require("../services/group/create")
const { GroupGetBySession } = require("../services/group/getBySession")
const { GroupSaveChanges } = require("../services/group/saveChanges")
const { existsSync, mkdirSync } = require("node:fs")

const path = require("node:path")

class GroupController {
    constructor(storagePath) {
        this.storage = path.join(process.cwd(), `${storagePath}/RPG_storage`)
        this._storagePathExist()
    }

    create(groupProps) {
        return new GroupCreate().execute(groupProps)
    }

    async getBySession(session) {
        const service = new GroupGetBySession(this.storage)
        return await service.execute(session)
    }

    async saveChanages(session, data) {
        const service = new GroupSaveChanges(this.storage)
        return await service.execute(session, data)
    }

    _storagePathExist() {
        if(!existsSync(this.storage)) mkdirSync(this.storage)
    }
}

module.exports = { GroupController }
