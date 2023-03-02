window.onload = function(){

let HeroFRA = document.getElementById("FRA")

let HeroViet = document.getElementById("Vietcong")

// ---------------------------------------------------------------------------------------


let FranceHP = document.getElementById("healthfra")
FranceHP.value = 100;

let VietHP = document.getElementById("healthviet")
VietHP.value = 100;

// ---------------------------------------------------------------------------------------

document.getElementById("defense").addEventListener("click", defensefra);

var DefenseFRA = document.getElementById("defense1")

document.getElementById("damage").addEventListener("click", attackfra);

var AttaqueFRA = document.getElementById("attaque1")

document.getElementById("defenseviet").addEventListener("click", defenseviet);

var DefenseVIET = document.getElementById("defense2")

document.getElementById("damageviet").addEventListener("click", attackviet);

var AttaqueVIET = document.getElementById("attaque2")

// ---------------------------------------------------------------------------------------

document.getElementById("damageviet").style.visibility = "hidden";
document.getElementById("defenseviet").style.visibility = "hidden";

// ---------------------------------------------------------------------------------------

document.getElementById("bouclierviet").style.visibility = "hidden";
document.getElementById("bouclierfra").style.visibility = "hidden";
// ---------------------------------------------------------------------------------------

function attackfra(){
    if (document.getElementById("bouclierviet").style.visibility == "visible"){
    var dPoint = Math.floor((Math.random()*10) + 5);
    } else {
    var dPoint = Math.floor((Math.random()*15) + 15);}
    VietHP.value = VietHP.value - dPoint;
    bottomRow.innerHTML = "Il a pété les chevilles du Vietcong Risitas, lui faisant" + dPoint + "de dégats, il lui reste"+ `${VietHP.value} HP\n`;
    AttaqueFRA.play();
    AttaqueFRA.volume = 0.5;
    HeroFRA.style.transform="translateX(150px)"
    setTimeout(function(){
        HeroFRA.style.transform="translateX(0px)"
    },1000)
        if (VietHP.value <= 0){
        document.getElementById("damageviet").style.visibility = "hidden";
        document.getElementById("defenseviet").style.visibility = "hidden";
        document.getElementById("damage").style.visibility = "hidden";
        document.getElementById("defense").style.visibility = "hidden";
        bottomRow.innerHTML = "Tu as gagné !!!"
        var audio = document.getElementById("victoire");
        audio.play();
        } else {
            document.getElementById("damageviet").style.visibility = "visible";
            document.getElementById("defenseviet").style.visibility = "visible";
            document.getElementById("damage").style.visibility = "hidden";
            document.getElementById("defense").style.visibility = "hidden";
            document.getElementById("bouclierviet").style.visibility = "hidden";
        }
        
}

// ---------------------------------------------------------------------------------------

  function defensefra(){
    bottomRow.innerHTML = "Il a bu de l'eau (dans 20-30 ans y'en aura plus) divisant les dégâts au tour suivant par 2s";
    DefenseFRA.play();
    DefenseFRA.volume = 0.5;
    document.getElementById("bouclierfra").style.visibility = "visible";
    document.getElementById("bouclierviet").style.visibility = "hidden";
    document.getElementById("damageviet").style.visibility = "visible";
    document.getElementById("defenseviet").style.visibility = "visible";
    document.getElementById("damage").style.visibility = "hidden";
    document.getElementById("defense").style.visibility = "hidden";
      }

// ---------------------------------------------------------------------------------------

function attackviet(){

    if (document.getElementById("bouclierfra").style.visibility == "visible"){
        var dPoint = Math.floor((Math.random()*10) + 5);
        } else {
        var dPoint = Math.floor((Math.random()*15) + 15);}
    FranceHP.value = FranceHP.value - dPoint;
    bottomRow.innerHTML = "Tu as mis un Yatangakick a ton ennemi lui faisant" + dPoint + "de dégats, il lui reste"+ `${FranceHP.value} HP\n`;
    if (FranceHP.value <= 0){
        document.getElementById("damageviet").style.visibility = "hidden";
        document.getElementById("defenseviet").style.visibility = "hidden";
        document.getElementById("damage").style.visibility = "hidden";
        document.getElementById("defense").style.visibility = "hidden";
        bottomRow.innerHTML = "Tu as gagné !!!"
    }
    AttaqueVIET.play();
    AttaqueVIET.volume = 0.5;
    HeroViet.style.transform="translateX(-150px)"
    setTimeout(function(){
        HeroViet.style.transform="translateX(0px)"
    },1000)
    if (VietHP.value <= 0){
        document.getElementById("damageviet").style.visibility = "hidden";
        document.getElementById("defenseviet").style.visibility = "hidden";
        document.getElementById("damage").style.visibility = "hidden";
        document.getElementById("defense").style.visibility = "hidden";
        bottomRow.innerHTML = "Tu as gagné !!!"
        var audio = document.getElementById("victoire");
        audio.play();
        } else {
    document.getElementById("damageviet").style.visibility = "hidden";
    document.getElementById("defenseviet").style.visibility = "hidden";
    document.getElementById("damage").style.visibility = "visible";
    document.getElementById("defense").style.visibility = "visible";
    document.getElementById("bouclierfra").style.visibility = "hidden";
    }
}

    
    
    function defenseviet(){
    DefenseVIET.play();
    DefenseVIET.volume = 0.5;
    bottomRow.innerHTML = "Il a insulté tellement fort son ennemi qu'il a peur, il aura les dégâts divisés par 2 parce qu'il a peur";
    document.getElementById("bouclierviet").style.visibility = "visible";
    document.getElementById("damageviet").style.visibility = "hidden";
    document.getElementById("defenseviet").style.visibility = "hidden";
    document.getElementById("damage").style.visibility = "visible";
    document.getElementById("defense").style.visibility = "visible";
    document.getElementById("bouclierfra").style.visibility = "hidden";
        }


// ---------------------------------------------------------------------------------------
    }