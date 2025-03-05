const { Group } = require("../../models/Group")

class GroupCreate {
    execute(groupProps) {
        const { session, name } = groupProps

        var newGroup = new Group(session, name)

        return newGroup
    }
}

module.exports = { GroupCreate }

