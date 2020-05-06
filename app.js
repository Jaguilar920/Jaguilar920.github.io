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
*/
    var Modal = document.getElementById("Modal");
   
    var start = document.getElementsByClassName("start");

    onload = function () {
        Modal.style.display = "block";
    }

    


    
function reflectMod() {
    var StrScore = document.getElementById('StrScore').value;
    document.getElementById("StrMod").value= Math.floor((StrScore - 10)/2);

    var ConScore = document.getElementById('ConScore').value;
    document.getElementById("ConMod").value= Math.floor((ConScore - 10)/2);

    var DexScore = document.getElementById('DexScore').value;
    document.getElementById("DexMod").value= Math.floor((DexScore - 10)/2);

    var WisScore = document.getElementById('WisScore').value;
    document.getElementById("WisMod").value= Math.floor((WisScore - 10)/2);

    var CharScore = document.getElementById('CharScore').value;
    document.getElementById("CharMod").value= Math.floor((CharScore - 10)/2);
}

function reflectProficiency() {
    var Level = parseInt(document.getElementById('level').value);

        if(Level >= 17) {
            document.getElementById("proficiency").value = 6;
        } else if (Level >= 13) {
            document.getElementById("proficiency").value = 5;
        } else if(Level >= 9) {
            document.getElementById("proficiency").value = 4;
        } else if (Level >= 5) {
            document.getElementById("proficiency").value = 3;
        } else {
            document.getElementById("proficiency").value = 2;
        }}

function LevelUp() {
    reflectProficiency();
    reflectMod();
}




function reflectMod2() {
    var StrScore2 = document.getElementById('StrScore2').value;
    document.getElementById("StrMod2").value= Math.floor((StrScore2 - 10)/2);

    var ConScore2 = document.getElementById('ConScore2').value;
    document.getElementById("ConMod2").value= Math.floor((ConScore2 - 10)/2);

    var DexScore2 = document.getElementById('DexScore2').value;
    document.getElementById("DexMod2").value= Math.floor((DexScore2 - 10)/2);

    var WisScore2 = document.getElementById('WisScore2').value;
    document.getElementById("WisMod2").value= Math.floor((WisScore2 - 10)/2);

    var CharScore2 = document.getElementById('CharScore2').value;
    document.getElementById("CharMod2").value= Math.floor((CharScore2 - 10)/2);
}


function reflectProficiency2() {
    var Level = parseInt(document.getElementById('level2').value);

        if(Level >= 17) {
            document.getElementById("proficiency2").value = 6;
        } else if (Level >= 13) {
            document.getElementById("proficiency2").value = 5;
        } else if(Level >= 9) {
            document.getElementById("proficiency2").value = 4;
        } else if (Level >= 5) {
            document.getElementById("proficiency2").value = 3;
        } else {
            document.getElementById("proficiency2").value = 2;
        }}

        function LevelUp2() {
            reflectProficiency2();
            reflectMod2();
        }

        function Armor(activeArmor) {
            var armor = activeArmor.value;
            if (armor == 'cloth') {
                document.getElementById('AC').value = parseInt(document.getElementById('IntMod').value) + 11;
            } else if (armor == 'leather') {
                document.getElementById('AC').value = parseInt(document.getElementById('DexMod').value) + 13;
        } else if (armor == 'plate') {
            document.getElementById('AC').value = parseInt(document.getElementById('StrMod').value) + 15;
        } else {
            document.getElementById('AC').value = parseInt(document.getElementById('ConMod').value) + 9;
        }}

        function Armor2(activeArmor) {
            var armor2 = activeArmor2.value;
            if (armor2 == 'cloth') {
                document.getElementById('AC2').value = parseInt(document.getElementById('IntMod2').value) + 11;
            } else if (armor2 == 'leather') {
                document.getElementById('AC2').value = parseInt(document.getElementById('DexMod2').value) + 13;
        } else if (armor2 == 'plate') {
            document.getElementById('AC2').value = parseInt(document.getElementById('StrMod2').value) + 15;
        } else {
            document.getElementById('AC2').value = parseInt(document.getElementById('ConMod2').value) + 9;
        }}