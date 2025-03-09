class Player {
    constructor(serialized, name) {
        this.serialized = serialized
        this.avatar = "👤"
        this.name = name
        this.health = 100
        this.currentHealth = 100
        this.level = 1
        this.xp = 0
        this.requiredXp = this.requiredXpCalculate(this.level)
        this.coins = 0
        this.diamonds = 0
        this.attacksSuccessful = 0
        this.skills = {
            attackPower: 10,
            defensePower: 10,
            minePower: 10 
        }
        this.timestamps = {
            nextAttack: Date.now(),
            nextMine: Date.now(),
            nextAttackUpdate: Date.now(),
            nextDefenseUpdate: Date.now(),
            nextMineUpdate: Date.now()
        }
        this.isAdmin = false
        this.createdAt = Date.now()
        this.updatedAt = Date.now()
    }

    requiredXpCalculate(level) {
        return Math.floor(Math.pow(level, 2) * 10)
    }
}

module.exports = { Player }
