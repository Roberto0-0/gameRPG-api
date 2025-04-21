class GroupGetAllDTO {
    constructor(session, serialized, name) {
        this.session = session
        this.serialized = serialized
        this.name = name
    }
} 

module.exports = { GroupGetAllDTO }
