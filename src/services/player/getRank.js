class PlayerGetRank {
    execute(level) {
        const ranks = [
            "bronze",
            "prata",
            "ouro",
            "mestre",
            "lenda"
        ]

        const divisions = ["V", "IV", "III", "II", "I"];
        const icons = ["🥉", "🥈", "🥇", "🏅", "🎖️"]

        const rankIndex = Math.floor((level - 1) / 20)
        const divisionProgress = (level - 1) % 20
        const divisionIndex = Math.floor((divisionProgress + 1) / 5)

        const currentRank = ranks[rankIndex];
        const currentDivision = divisions[divisionIndex];
        const currentIcon = icons[rankIndex]

        return `${currentIcon}   *${currentRank} ${currentDivision}*`;
    }
}

module.exports = { PlayerGetRank }
