class Group {
    constructor(session, name) {
        this.session = session
        this.name = name
        this.players = []
        this.currentSeason = {
            season: 1,
            createdAt: Date.now() 
        }
        this.seasons = []
        this.nextSeason = this.setNextSeason()
        this.status = true
        this.createdAt = Date.now()
    }

    setNextSeason() {
        let date = new Date()
        let day = date.getDay()

        if (day === 0) {
            date.setDate(date.getDate() + 7)
            date.setHours(0, 0, 0)
            return date.getTime()
        }

        let lastWeekDay = 6
        let daysRemaining = lastWeekDay - day

        date.setDate(date.getDate() + daysRemaining + 1)
        date.setHours(0, 0, 0)

        return date.getTime()
    }
}

module.exports = { Group }
