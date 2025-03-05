class PlayerSkillsUpgrade {
    execute(skill) {
        const _skill = skill + 1
        const price = Math.floor(Math.pow((_skill), 2) * 100)

        return {
            skillUpdted: _skill, 
            price
        }
    }
}
