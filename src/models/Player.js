class Player {
    constructor(serialized, name) {
        this.serialized = serialized
        this.name = name
        this.life = 100
        this.currentLife = 100
        this.level = 1
        this.xp = 0
        this.requiredXp = this.requiredXpCalculate(this.level)
        this.coins = 0
        this.diamonds = 0
        this.attackSuccessful = 0
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
        this.createdAt = Date.now()
        this.updatedAt = Date.now()
    }

    requiredXpCalculate(level) {
        return Math.floor(Math.pow(level, 2) * 10)
    }
}

module.exports = { Player }
