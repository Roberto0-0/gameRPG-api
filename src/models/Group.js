class Group {
    constructor(session, name) {
        this.session = session
        this.name = name
        this.players = []
        this.currentSeason = 1
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
            return date.toString()
        }

        let lastWeekDay = 6
        let daysRemaining = lastWeekDay - day

        date.setDate(date.getDate() + daysRemaining + 1)
        date.setHours(0, 0, 0)

        return date.getTime()
    }

    resetSeason(_group) {
        _group.players.sort((x, y) => {
            return x.seasonScore - y.seasonScore
        }).reverse()

        let topPlayer = _group.palyers[0]

        const newSeason = {
            season: _group.currentSeason,
            player: {
                serialized: topPlayer.serialized,
                name: topPlayer.name,
                seasonScore: topPlayer.seasonScore
            }
        }

        _group.nextSeason = this.setNextSeason()
        _group.seasons.push(newSeason)
        _group.currentSeason += 1

        for (let player of _group.players) {
            player.seasonScore = 0
        }

        return
    }
}

module.exports = { Group }
