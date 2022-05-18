// shoting enemies

function iShoot(enemy){
    enemy.classList.add('dead')

    /* if there are no more living enemies, then you win */

    if(!livingEnemies().length){
        alert('You win!')
        window.location.reload()
    }
}

function enemyAttacksMe(enemy){
    enemy.classList.add('showing')

    setTimeout( () => {
        enemyShootsMe(enemy)
    }, 1000)

    setTimeout( () => {
        enemy.classList.remove('showing')
    }, 3000)
}

function enemyShootsMe(enemy){

    /* will add a condition to make sure that the enemy does 
    not have the class dead */

    if(!enemy.classList.contains('dead')){
        enemy.classList.add('shooting')
        updateHealthPoints(healthPoints - 20)
    
        setTimeout( () => {
            enemy.classList.remove('shooting')
        }, 200)
    }
}

function livingEnemies(){
    return document.querySelectorAll('.enemy:not(.dead')
}

function randomEnemyAttacks(){
    var randomEnemyNo = Math.random() * livingEnemies().length
    randomEnemyNo = Math.floor(randomEnemyNo)
    var enemy = livingEnemies()[randomEnemyNo]

    var randomDelay = Math.random() * 2000 + 1000

    setTimeout( () => {
        enemyAttacksMe(enemy)
        randomEnemyAttacks()
    }, randomDelay)
}

// var enemy1 = document.querySelector('#enemy1')
var healthPoints = 100

enemyAttacksMe(enemies)

function updateHealthPoints(points){
    healthPoints = points
    var healthBar = document.querySelector('#healthBar')

    healthBar.style.width = points + '%'

    if(healthPoints < 1){
        alert('Game Over!')
        window.location.reload()
        /* El metodo location.reload() carga de nuevo la URL actual, 
        como lo hace el boton de Refresh de los navegadores */
    }
}