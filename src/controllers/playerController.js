const { GroupGetBySession } = require("../services/group/getBySession")
const { PlayerCreate } = require("../services/player/create")
const { PlayerGetBySerialized } = require("../services/player/getBySerialized")
const { PlayerAttack } = require("../services/player/attack")
const { PlayerMine } = require("../services/player/mine")
const { PlayerXpUpgrade } = require("../services/player/xpUpgrade")
const { PlayerCoinsTaxa } = require("../services/player/coinsTaxa")
const { PlayerSellDiamond } = require("../services/player/diamondSell")
const { PlayerSkillsUpgrade } = require("../services/player/skillsUpgrade")
const { PlayerHealthRestaurestion } = require("../services/player/healthRestoration")

const path = require("node:path")

class PlayerController {
    constructor(storagePath) {
        this.storage = path.join(process.cwd(), `${storagePath}/RPG_storage`)
    }

    create(playerProps) {
        return new PlayerCreate().execute(playerProps)
    }

    async getBySerialized(session, serialized) {
        const groupGetBySessionService = new GroupGetBySession(this.storage)
        const service = new PlayerGetBySerialized(groupGetBySessionService)
        return await service.execute(session, serialized)
    }

    attack(player, enemy) {
        return new PlayerAttack().execute(player, enemy)
    }

    healthRestoration(player) {
        return new PlayerHealthRestaurestion().execute(player)
    }

    mine(minePower) {
        return new PlayerMine().execute(minePower)
    }

    xpUpgrade(player, xp) {
        return new PlayerXpUpgrade().execute(player, xp)
    }

    coinsTaxa(coins) {
        return new PlayerCoinsTaxa().execute(coins)
    }

    diamondSell(diamonds) {
        return new PlayerSellDiamond().execute(diamonds)
    }

    skillsUpgrade(skill) {
        return new PlayerSkillsUpgrade().execute(skill)
    }
}

module.exports = { PlayerController }
