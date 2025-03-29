class Mission {
    constructor(title, description, tag, icon) {
        this.title = title
        this.info = this.setMission(description, tag)
        this.description = this.info.description
        this.tag = tag
        this.icon = icon
        this.objective = this.info.objective
        this.reward = this.info.reward
    }

    setMission(description, tag) {
        let result = {}
        const randomValue = (min, max) => Math.floor(Math.random() * (max - min) + min)

        switch (tag) {
            case "mine":
                let diamonds = randomValue(50, 500)
                result = {
                    description: description.replace("#quantity#", diamonds),
                    reward: 1000,
                    objective: {
                        expected: diamonds,
                        currentValue: 0
                    }
                }
                break
            case "sell":
                let sales = randomValue(50, 500)
                result = {
                    description: description.replace("#quantity#", sales),
                    reward: 1000,
                    objective: {
                        expected: sales,
                        currentValue: 0
                    }
                }
                break

            case "attack":
                let opponents = randomValue(1, 3)
                description = description.replace("#quantity#", opponents)
                description = description.replace("oponentes", (opponents == 1) ? "oponente" : "oponentes")

                result = {
                    description: description,
                    reward: 1000,
                    objective: {
                        expected: opponents,
                        currentValue: 0
                    }
                }
                break
            case "up":
                result = {
                    description: description.replace("#quantity#", 1),
                    reward: 1000,
                    objective: {
                        expected: 1,
                        currentValue: 0
                    }
                }
                break
            case "duel":
                let duels = randomValue(1, 3)
                description = description.replace("#quantity#", duels)
                description = description.replace("palpites", (duels == 1) ? "palpite" : "palpites")
                result = {
                    description: description,
                    reward: 1000,
                    objective: {
                        expected: duels,
                        currentValue: 0
                    }
                }
                break
        }

        return result
    }
}

module.exports = { Mission }
