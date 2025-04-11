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
        this.coins = 1000 
        this.diamonds = 0
        this.keys = 0
        this.attacksSuccessful = 0
        this.scoreSeason = 0
        this.pickaxeUse = 10 
        this.storageDiamonds = 100
        this.mission = null
        this.boosts = []
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
            nextMineUpdate: Date.now(),
            nextDuel: Date.now(),
            nextMission: this.nextSetMission() 
        }
        this.isAdmin = false
        this.createdAt = Date.now()
        this.updatedAt = Date.now()
    }

    requiredXpCalculate(level) {
        return Math.floor(Math.pow(level, 2) * 10)
    }

    nextSetMission() {
        let nextMidnight = new Date();
        nextMidnight.setDate(nextMidnight.getDate() + 1)
        nextMidnight.setHours(0, 0, 0, 0)
        return nextMidnight.getTime()
    }
}

module.exports = { Player }
