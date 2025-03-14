const gameRPG = require("../index")
const { test } = require("node:test")
const assert = require("assert")

const session = "02390230"
const serialized = "2039023940@c.us"
const storagePath = ("test/storage")
const { group, mission } = new gameRPG(storagePath)
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
// })

test("should set a daily mission", () => {
    const playerExist = groupData.players.find(x => x.serialized === serialized)
    if (!playerExist) return console.log("player not found")
    playerData = playerExist

    if (!playerData.mission) {
        if (Date.now() < playerData.timestamps.nextMission) return

        const newMission = mission.set()

        newMission.description = newMission.description.replace("#playername#", `*${playerData.name}*`)
        playerData.mission = newMission

        let newNextMission = new Date()
        newNextMission.setHours(newNextMission.getHours() + 24)

        playerData.timestamps.nextMission = newNextMission.getTime()
    }

    assert.ok(playerData.mission)
})

test("should complete the mission", () => {
    const tags = ["mine", "attack", "sell", "up"]
    const randomTag = tags[Math.floor(Math.random() * (tags.length - 0) + 0)]
    console.log(randomTag)

    const mission = (playerData.mission.tag === randomTag) ? playerData.mission : null
    if (mission) {
        if (mission.tag === "mine") {
            const diamonds = Math.floor(Math.random() * (100 - 10) - 10)
            const newDiamond = mission.objective.currentValue += diamonds
            if (newDiamond >= mission.objective.expected) {
                console.log("Missão diaria completada.")
                console.log("recompensa", mission.reward)
                playerData.coins += mission.reward
                playerData.missions = []

            } else {
                mission.objective.currentValue = newDiamond
            }
            console.log(mission)
        }

        if (mission.tag === "attack") {
            const attacks = 1
            const newDiamond = mission.objective.currentValue += attacks
            if (newDiamond >= mission.objective.expected) {
                console.log("Missão diaria completada.")
                console.log("recompensa", mission.reward)
                playerData.coins += mission.reward
                playerData.mission = null

            } else {
                mission.objective.currentValue = newDiamond
            }
            console.log(mission)
        }

        if (mission.tag === "sell") {
            const diamonds = Math.floor(Math.random() * (100 - 10) - 10)
            const newDiamond = mission.objective.currentValue += diamonds
            if (newDiamond >= mission.objective.expected) {
                console.log("Missão diaria completada.")
                console.log("recompensa", mission.reward)
                playerData.coins += mission.reward
                playerData.mission = null

            } else {
                mission.objective.currentValue = newDiamond
            }
            playerData.diamonds = 0
            console.log(mission)
        }

        if (mission.tag === "up") {
            const power = 1
            const newDiamond = mission.objective.currentValue += power
            if (newDiamond >= mission.objective.expected) {
                console.log("Missão diaria completada.")
                console.log("recompensa", mission.reward)
                playerData.coins += mission.reward
                playerData.mission = null

            } else {
                mission.objective.currentValue = newDiamond
            }
            playerData.diamonds = 0
            console.log(mission)
        }
    }
})

test("should save group changes", async () => {
    const groupSaveChanges = await group.saveChanges(session, groupData)
    assert.equal(groupSaveChanges.success, true)
})
