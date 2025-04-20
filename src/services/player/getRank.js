class PlayerGetRank {
    execute(score) {
        const ranks = [
            { name: "𝐁𝐫𝐨𝐧𝐳𝐞", icon: "🥉", minScore: 0, maxScore: 614, tiers: 5 },
            { name: "𝐏𝐫𝐚𝐭𝐚", icon: "🥈", minScore: 615, maxScore: 1537, tiers: 5 },
            { name: "𝐎𝐮𝐫𝐨", icon: "🥇", minScore: 1538, maxScore: 2921, tiers: 5 },
            { name: "𝐌𝐞𝐬𝐭𝐫𝐞", icon: "🏅", minScore: 2922, maxScore: 4996, tiers: 1 },
            { name: "𝐋𝐞𝐧𝐝𝐚", icon: "🎖️", minScore: 4.997, maxScore: Infinity, tiers: 1 }
        ]

        const divisions = ["𝐈", "𝐈𝐈", "𝐈𝐈𝐈", "𝐈𝐕", "𝐕"]

        for (let rank of ranks) {
            if (score >= rank.minScore && score <= rank.maxScore) {
                if (rank.name === "𝐌𝐞𝐬𝐭𝐫𝐞" || rank.name === "𝐋𝐞𝐧𝐝𝐚") {
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
