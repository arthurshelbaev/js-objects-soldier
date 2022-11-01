const soldier = {
	name: 'Johnny',
	health: 20,
	gun: {
		weapon: 'Ar-15',
		bullets: 30,
	},
	inventory: 3,

	shoot () {
    if (soldier.gun.bullets > 0) {
    console.log('too-too-too')
	  soldier.gun.bullets -= 3
    } else {
      console.log('empty clip')
      soldier.reload()
    }
	},

  reload () {
    if (soldier.inventory > 0) {
    console.log('reload...')
    soldier.gun.bullets = 30
    soldier.inventory -= 1
    } else {
      console.log('no ammo')
    }
	},

	hit () {
    if (soldier.health > 0) {
      soldier.health -= 10
      console.log ('Oh, shit, I was hit! Damn gooks!')
    } else if (soldier.health === 0) {
    return ('Tell my wife I love her')
    }
	},
}