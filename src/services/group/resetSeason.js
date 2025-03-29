class GroupResetSeason {
    execute(_group) {
        function setNextSeason() {
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

        _group.players.sort((x, y) => {
            return x.scoreSeason - y.scoreSeason
        }).reverse()

        let topPlayer = _group.palyers[0]

        const newSeason = {
            season: _group.currentSeason.season,
            player: {
                serialized: topPlayer.serialized,
                name: topPlayer.name,
                seasonScore: topPlayer.scoreSeason
            },
            createdAt: _group.currentSeason.createdAt
        }

        _group.nextSeason = setNextSeason()
        _group.seasons.push(newSeason)
        _group.currentSeason.season += 1
        _group.currentSeason.createdAt = Date.now()

        for (let player of _group.players) {
            player.scoreSeason = 0
        }

        return
    }
}

module.exports = { GroupResetSeason }
