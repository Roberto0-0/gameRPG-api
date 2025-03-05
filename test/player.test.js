const gameRPG = require("../index")
const { test } = require("node:test")
const assert = require("assert")

const session = "02390230"
const serialized = "2039023940@c.us"
const storagePath = ("test/storage")
const { group, player } = new gameRPG(storagePath)
var playerData
var groupData

test("should get group by session", async () => {
    const groupGetBySession = await group.getBySession(session)
    groupData = groupGetBySession.data
    assert.equal(groupGetBySession.success, true)
})

// test("should get a player by serialized", async () => {
//     const playerGetBySerialized = await player.getBySerialized(session, serialized)
//     playerData = playerGetBySerialized.data
//     assert.equal(playerGetBySerialized.success, true)
//     // assert.equal(playerGetBySerialized.success, false)
// })

// test("should create a player", () => {
//     const playerProps = {
//         serialized,
//         name: "group name"
//     }

//     const playerCreateService = player.create(playerProps)
//     playerData = playerCreateService.data
//     groupData.players.push(playerData)
//     assert.equal(playerCreateService.success, true)
// })

test("should player XP upgrade", () => {
    const playerExist = groupData.players.find(x => x.serialized === serialized)
    if (!playerExist) return console.log("player not found")
    playerData = playerExist

    const PlayerProps = {
        level: playerData.level,
        xp: playerData.xp,
        requiredXp: playerData.requiredXp
    }

    //minerar
    const playerMineService = player.mine(playerData.skills.minePower)
    console.log("diamonds", playerMineService)

    //vender os diamantes
    const playerSellDiamondService = player.diamondSell()
    console.log("price", playerSellDiamondService)

    const coins = playerMineService * playerSellDiamondService
    console.log("coins", coins)

    //coins taxa
    const playerCoinsTaxa = player.coinsTaxa(coins)
    console.log("xp", playerCoinsTaxa)
    const xp = playerCoinsTaxa

    // xp updgrade
    const playerXpUpdate = player.xpUpgrade(PlayerProps, xp)
    console.log(playerXpUpdate)

    playerData.coins += coins

    if (playerXpUpdate.updated) {
        playerData.xp = playerXpUpdate.newXp
        playerData.level = playerXpUpdate.newLevel
        playerData.requiredXp = playerXpUpdate.newXpRequired
    } else {
        playerData.xp = playerXpUpdate.newXp
    }

    assert.equal(playerXpUpdate.updated, true)
})

test("should save group changes", async () => {
    const groupSaveChanges = await group.saveChanages(session, groupData)
    assert.equal(groupSaveChanges.success, true)
})
