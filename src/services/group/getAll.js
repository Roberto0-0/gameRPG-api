const { readFileSync, readFileSync } = require("node:fs")
const { GroupGetAllDTO } = require("../../DTOS/groupGetAllDTO")

class GroupGetAll {
    constructor(storage) {
        this._storage = storage
    }

    async execute() {
        const files = readdirSync(this._storage)

        function readfiles(files, _storage) {
            let _files = []

            for (var file of files) {
                _files.push(JSON.parse(readFileSync(`${_storage}/${file}`, "utf8")))
            }

            return _files
        }

        const _storage = this._storage
        const groups = readfiles(files, _storage)
        const data = []

        for (let group of groups) {
            data.push(new GroupGetAllDTO(group.session, group.serialized, group.name))
        }

        return {
            success: true,
            data
        }
    }
}

module.exports = { GroupGetAll }
