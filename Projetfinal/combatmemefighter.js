var bottomRow = document.getElementById('bottomRow');
var stats = document.getElementsByClassName('stats');
var FRAStats = document.getElementsById('FRAStats');
var FRAHP = document.getElementsById('FRAHP');
var VietcongHP = document.getElementsById('VietcongHP');

var FRAHP = 100;
var VietcongHP = 100;

function beginBattle(){
    bottomRow.innerHTML = "Trouve les abilités du Risitas Français en cliquant sur le bouton.";
    for (var x=0; x<stats.length; x++){
        stats[x].style.visibility = "visible";
    }
}

function blast(){
    var hitChance = Math.round(Math.random()*30);
    if (hitChance <=7){
        var dmg = Math.round(Math.random()*30);
        VietcongHP -= dmg;
        bottomRow.innerHTML = "Tu as touché le Risitas Vietcong avec ton MAS 49, lui faisant" + dmg + "de dégats, continue Soldat, l'ennemi n'a plus que" + VietcongHP + "hp";
    } else {
        bottomRow.innerHTML = "Tu t'es raté, le Risitas Vietcong n'a rien eu"
    }
}