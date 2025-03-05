class PlayerSkillsUpgrade {
    execute(skill) {
        if (skill === 100) return { success: false }

        const _skill = skill + 10
        const price = Math.floor(Math.pow((_skill / 10), 2) * 10)

        return {
            success: true,
            skillUpdted: _skill,
            price
        }
    }
}

module.exports = { PlayerSkillsUpgrade }
