class PlayerSkillsUpgrade {
    execute(skill) {
        if (skill === 100) return { success: false }

        const _skill = skill + 10
        const cost = Math.floor(Math.pow((_skill / 10), 2) * 10)

        return {
            skillUpdated: _skill,
            cost
        }
    }
}

module.exports = { PlayerSkillsUpgrade }
