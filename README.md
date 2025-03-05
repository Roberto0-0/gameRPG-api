# RPG game

## Como o jogo vai funcionar?

- O jogo é voltado para estrategias, o jogador tem habilidades de atacar e de se defender, podendo melhorar suas habilidades em combate. Melhorar sua habilidade de ataque atacando, mas sem perder, melhorar sua habilidade de defesa 

## Sistema de ataque

```js
/*player01 = { life: 100, attackPower: 3, defensePower: 2 }
player02 = { life: 100, attackPower: 8, defensePower: 4 }

player02 ataca player01

(8-2) = 6

player01.life -= (6*100)*/ 

attack(player, enemy) {
    const damage = player.attackPower - enemy.defense;

    if (damage < 0) {
        let lossAttackPower = player.attackPower -= Math.abs(damage)
        if (lossAttackPower <= 0) player.attackPower = 0

        return {
            isWon: false,
            player,
            enemy,
            results: {
                playerAttackPower: Math.abs(damage * 10)
            }
         }
     }

     const oldEnemyLife = enemy.life
     const oldEnemyDefensePower = enemy.defense

     const enemyLife = enemy.life -= (damage * 10);
     if (enemyLife <= 0) {
        enemy.life = 0
        enemy.defense = 0

        return {
            isWon: true,
            player,
            enemy,
            results: {
                enemyLife: (((damage * 10) * oldEnemyLife) / 100),
                enemyDefensePower: Math.floor((damage / oldEnemyDefensePower) * 100)
            }
        }
    }

    enemy.life = enemyLife
    enemy.defense -= damage

     return {
        isWon: true,
        player,
        enemy,
        results: {
            enemyLife: (((damage * 10) * oldEnemyLife) / 100),
            enemyDefensePower: Math.floor((damage / oldEnemyDefensePower) * 100)
        }
    }        
}
```

## Sistema de restauração de vida

```js
function execute(player) {
    const calculate = (player.currentLife - player.life ) * 10

    return {
      life: player.currentLife,
      price: calculate
    }
}
```

## Sistema de mineração 

- O player poder ter uma opção de minerar, essa opção é valida para ganhar diamantes, e os diamantes pode ser vendido e ganhar coins 

- a quantidade de diamantes vai ser com base no nível do player

```js
function execute(minePower) {
    const diamondsRandom = (start, end) => Math.floor(Math.random() * (end - start) + start)
    let result = 0

    if (minePower >= 9) {
        result = diamondsRandom(20, 31)
    } else if (minePower >= 7) {
        result = diamondsRandom(15, 21)
    } else if (minePower >= 5) {
        result = diamondsRandom(10, 16)
    } else if (minePower >= 3) {
        result = diamondsRandom(5, 11)
    } else {
        result = diamondsRandom(1, 6)
    }

    return result
}
```

## Estrutura do Player

```json

player = {
    "serialized": "",
    "name": "Robert",
    "life": 100,
    "currentLife": 100,
    "level": 1,
    "xp": 0,
    "requiredXp": 100, 
    "coins": 0,
    "diamonds": 0,
    "attacksSuccessful": 0,
    "skills": {
        "attackPower": 1,
        "defensePower": 1,
        "minerPower": 1
    },
   "timestamps": {
       "nextAttack": null, 
       "nextMine": null 
   }, 
   "createdAt": null,
   "updatedAt": null
}

```

## Sistema de vendas

```js

function execute() {
        const coins = [3, 7, 15]
        const weight = [50, 30, 20]
        const allWeight = 100
        let result = 0

        const numberRandom = Math.floor(Math.random() * (allWeight - 0) + 0)

        if (numberRandom <= weight[0]) {
            result = coins[0]
        } else if (numberRandom <= weight[0] + weight[1]) {
            result = coins[1]
        } else {
            result = coins[2]
        }

        return result
}
```

## sistema de atualizar habilidades

```js
function skillsUpgrade(skill) {
    return Math.floor(Math.pow((skill + 1), 2) * 100)
}

```
