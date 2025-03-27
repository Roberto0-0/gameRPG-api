class PlayerGetRank {
    execute(score) {
        const ranks = [
            { name: "Bronze", icon: "🥉", minScore: 0, maxScore: 429, tiers: 5 },
            { name: "Prata", icon: "🥈", minScore: 430, maxScore: 1074, tiers: 5 },
            { name: "Ouro", icon: "🥇", minScore: 1075, maxScore: 2041, tiers: 5 },
            { name: "Mestre", icon: "🏅", minScore: 2042, maxScore: 3492, tiers: 1 },
            { name: "Lenda", icon: "🎖️", minScore: 3493, maxScore: Infinity, tiers: 1 }
        ]

        const divisions = ["I", "II", "III", "IV", "V"]

        for (let rank of ranks) {
            if (score >= rank.minScore && score <= rank.maxScore) {
                if (rank.name === "Mestre" || rank.name === "Lenda") {
                    return `${rank.icon}   *${rank.name}*`;
                }

                const scorePerTier = (rank.maxScore - rank.minScore + 1) / rank.tiers;
                const tierLevel = Math.min(
                    rank.tiers,
                    Math.ceil((score - rank.minScore + 1) / scorePerTier)
                );

                const tier = divisions[(rank.tiers - tierLevel + 1) - 1]

                return `${rank.icon}   *${rank.name} ${tier}*`;
            }
        }
    }
}

module.exports = { PlayerGetRank }
