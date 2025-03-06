# RPG game

## Como o jogo vai funcionar?

Depois que seu personagem for criado, ele vai ter algumas habilidades como `ataque`, `defesa` e `mineração`, essas habilidades poderão ser melhoradas, mas isso custara alguns `coins`, mas com a habilidade de minerar, você pode conseguir alguns `diamantes` e vende-los em troca de `coins`.  

## sistema de ataque

```js
/*player01 = { life: 100, attackPower: 3, defensePower: 2 }
player02 = { life: 100, attackPower: 8, defensePower: 4 }

player02 ataca player01

(8-2) = 6

player01.life -= (6*100)*/ 

attack(player, enemy) {
    const damage = player.attackPower - enemy.defensePower;

    if (damage === 0) return { success: false }

    if (damage < 0) {
        let oldAttackPower = player.attackPower
        let playerAttackPower = 0
        let positvieDamage = Math.abs(damage)

        let currentAttackPower = player.attackPower -= positvieDamage
        if (currentAttackPower <= 0) {
            player.attackPower = 0
        } else {
            player.attackPower = currentAttackPower
        }

        playerAttackPower = Math.floor((positvieDamage / oldAttackPower) * 100)

        return {
            success: true,
            player,
            enemy,
            results: {
                playerAttackPower
            }
        }
    }

    const oldEnemyLife = enemy.life
    const oldEnemyDefensePower = enemy.defensePower

    var enemyDefensePower = 0
    var enemyLife = 0

     const currentEnemyDefensePower = enemy.defensePower -= damage
     if (currentEnemyDefensePower <= 0) {
        enemy.defensePower = 0

        const currentEnemyLife = enemy.life -= damage;
        if (currentEnemyLife <= 0) {
            enemy.life = 0
        } else {
            enemy.life = currentEnemyLife
        }
    } else {
       enemy.defensePower = currentEnemyDefensePower
    }

    enemyDefensePower = Math.floor((damage / oldEnemyDefensePower) * 100)
    enemyLife = ((damage * oldEnemyLife) / 100)

    return {
        success: true,
        isWon: true,
        player,
        jenemy,
        results: {
           enemyLife,
           enemyDefensePower
       }
    }
}
```

## sistema de restauração de vida

```js
function execute(player) {
    const calculate = (player.currentLife - player.life ) * 10

    return {
      life: player.currentLife,
      price: calculate
    }
}
```

## sistema de mineração 

- O player poder ter uma opção de minerar, essa opção é valida para ganhar diamantes, e os diamantes pode ser vendido e ganhar coins 

- a quantidade de diamantes vai ser com base no nível do player

```js
function execute(minePower) {
    const diamondsRandom = (start, end) => Math.floor(Math.random() * (end - start) + start)
    let result = 0

    if (minePower >= 90) {
        result = diamondsRandom(20, 31)
    } else if (minePower >= 70) {
        result = diamondsRandom(15, 21)
    } else if (minePower >= 50) {
        result = diamondsRandom(10, 16)
    } else if (minePower >= 30) {
        result = diamondsRandom(5, 11)
    } else {
        result = diamondsRandom(1, 6)
    }

    return result
}
```

## estrutura do Player

```json
{
    "serialized": "",
    "name": "Robert",
    "health": 100,
    "currentHealth": 100,
    "level": 1,
    "xp": 0,
    "requiredXp": 10, 
    "coins": 0,
    "diamonds": 0,
    "attacksSuccessful": 0,
    "skills": {
        "attackPower": 10,
        "defensePower": 10,
        "minerPower": 10
    },
   "timestamps": {
       "nextAttack": null, 
       "nextMine": null, 
       "nextAttackUpdate": null, 
       "nextDefenseUpdate": null, 
       "nextMineUpdate": null 
   }, 
   "isAdmin": false, 
   "createdAt": null,
   "updatedAt": null
}
```

## sistema de vendas

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
    const _skill = skill + 10
    return Math.floor(Math.pow((_skill/10), 2) * 10)
}
```
## ganhos de XP

1. ### vendendo diamantes
    - ao vender os diamantes, o ganho do **XP** é calculado com base no **coins** ganhos.

2. ### ganhando uma batalha
    - ao atacar e vencer seu oponente, você recebera **XP** com base no dano causado.

3. ### melhorando suas habilidades
     - ao melhorar sua habilidade, você vai ganhar **XP** com base nos **coins** gostos.

## comandos do usuário 

- `jogar`: cria seu personagem.
- `me`: mostra informações do seu personagem.
- `minerar`: coleta de diamantes.
- `atacar [@user]`: ataca outro personagem.
- `vida`: restauração da saúde.
- `up [skill]`: melhora sua habilidade.
- `vender`: vender seus diamantes.

## comandos do admin

- `grupo`: cria o grupo.
- `on`: abre o jogo.
- `off`: fecha o jogo. 
- `clean`: remove os jogadore que não estão mais no grupo. 
- `ban [@user]`: bane/remove o player do jogo. 
- `get-groups`: lista todos os grupos. 
- `get-group [session]`: obtem um grupo especifico. 

## sistema de timestamps 

- `minerar`: **10 minutos**
- `atacar`:  **30 minutos**
- `up [🗡️,🛡️]`:  **1 hora**
- `up [⛏️]`:  **24 horas**

## informações do player

> 👤  〔**Nick**〕**1**

> 🥉  **iniciante**  
>   
> 💰  **$0**   
> 💎  **0**
>
> ❤️   **100**  
> 🗡️  **10%**  
> 🛡️  **10%**  
> ⛏️   **10%**

## estrutura de arquivos

```
src
├── commands
│   ├── admin
│   │   ├── create.js
│   │   ├── get-group.js
│   │   ├── get-groups.js
│   │   ├── off.js
│   │   └── on.js
│   └── player
│       ├── attack.js
│       ├── create.js
│       ├── health.js
│       ├── me.js
│       ├── mine.js
│       ├── sell.js
│       └── up.js
└── helper
    └── timeAgo.js

4 directories, 13 files
```
