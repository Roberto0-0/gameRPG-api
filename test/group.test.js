const gameRPG = require("../index")
const { test } = require("node:test")
const assert = require("assert")

const session = "02390230"
const storagePath = ("test/storage")
const { group } = new gameRPG(storagePath)
var data

test("should get group by session", async () => {
    const groupGetBySession = await group.getBySession(session)
    assert.equal(groupGetBySession.success, false)
})

test("should create a group", async () => {
    const groupProps = {
        session,
        name: "group name"
    }

    const groupCreateService = group.create(groupProps)
    data = groupCreateService
    assert.equal(groupCreateService.session, groupProps.session)
})

test("should save group changes", async () => {
    const groupSaveChanges = await group.saveChanges(session, data)
    assert.equal(groupSaveChanges.success, true)
})
