//FUNCTIONS//

/* need function that keeps track of rounds. 1 round will be when an enemy dies*/

/* need function that keeps track of lose/win states.

If round input is met and cash requirement is not met, player loses.

If player falls to 0 hp, player loses.

If player reaches input round and has necessary money, player wins.


///MODULE SETUP/////////////////

/* Should include input line linking to function that determines number of rounds*/

/* Need a start Button. this will be linked to a function that pushes Math.RandomFloor(EnemyArray.length). It will randomly push generated enemies into an array. Each time an enemy is defeated, a new round begins. This button will also hide the module once clicked*/


/////COMBAT////////

/*Need a character sheet for our hero complete with skills!

HP:
Attack:
AC:
SpellCheck:
SpellPower:
EP:
Skills: {
    
}



Need a class for the 4 difficulties of enemies.

Regenerate base 3 EP every Turn.

Attacking:

based on chosen skill (Var AttackModifier = hero.Attack - Enemy.AC
    Enemy.HP = Enemy.HP - AttackModifier.
    
    Var SpellModifier = hero.Spellpower - Enemy.Spellcheck
    Enemy.HP = Enemy.HP - SpellModifier
    This.EP = This.EP - This.Skill.EP)


    for enemies: same but replace hero with enemy and enemy with hero.