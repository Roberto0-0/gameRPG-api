const { GroupGetBySession } = require("../services/group/getBySession")
const { PlayerCreate } = require("../services/player/create")
const { PlayerGetBySerialized } = require("../services/player/getBySerialized")
const { PlayerBattle } = require("../services/player/battle")
const { PlayerMine } = require("../services/player/mine")
const { PlayerXpUpgrade } = require("../services/player/xpUpgrade")
const { PlayerCoinsTaxa } = require("../services/player/coinsTaxa")
const { PlayerSellDiamond } = require("../services/player/diamondSell")
const { PlayerSkillsUpgrade } = require("../services/player/skillsUpgrade")
const { PlayerHealthRestaurestion } = require("../services/player/healthRestoration")
const { PlayerGetRank } = require("../services/player/getRank")

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

    battle(player, enemy, battleMode) {
        return new PlayerBattle().execute(player, enemy, battleMode)
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

    getRank(level) {
        return new PlayerGetRank().execute(level)
    }
}

module.exports = { PlayerController }
