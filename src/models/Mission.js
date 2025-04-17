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

    setReward() {
        const rewards = [
            { name: "coins", icon: "🪙", value: 1000 },
            { name: "keys", icon: "🗝️", value: 10 },
            { name: "diamonds", icon: "💎", value: 50 }
        ]

        return rewards[Math.floor(Math.random() * (rewards.length - 0) + 0)]
    }

    setMission(description, tag) {
        let result = {}
        const RNG = (min, max) => Math.floor(Math.random() * (max - min) + min)

        switch (tag) {
            case "mine":
                let diamonds = RNG(50, 500)
                result = {
                    description: description.replace("#quantity#", diamonds),
                    reward: this.setReward(),
                    objective: {
                        expected: diamonds,
                        currentValue: 0
                    }
                }
                break
            case "sell":
                let sales = RNG(50, 500)
                result = {
                    description: description.replace("#quantity#", sales),
                    reward: this.setReward(),
                    objective: {
                        expected: sales,
                        currentValue: 0
                    }
                }
                break

            case "attack":
                let opponents = RNG(1, 3)
                description = description.replace("#quantity#", opponents)
                description = description.replace("oponentes", (opponents == 1) ? "oponente" : "oponentes")

                result = {
                    description: description,
                    reward: this.setReward(),
                    objective: {
                        expected: opponents,
                        currentValue: 0
                    }
                }
                break
            case "up":
                result = {
                    description: description.replace("#quantity#", 1),
                    reward: this.setReward(),
                    objective: {
                        expected: 1,
                        currentValue: 0
                    }
                }
                break
            case "duel":
                let duels = RNG(1, 3)
                description = description.replace("#quantity#", duels)
                description = description.replace("palpites", (duels == 1) ? "palpite" : "palpites")
                result = {
                    description: description,
                    reward: this.setReward(),
                    objective: {
                        expected: duels,
                        currentValue: 0
                    }
                }
                break
            case "slot":
                let slots = RNG(1, 3)
                description = description.replace("#quantity#", slots)
                description = description.replace("rodadas", (slots == 1) ? "rodada" : "rodadas")
                result = {
                    description: description,
                    reward: this.setReward(),
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
