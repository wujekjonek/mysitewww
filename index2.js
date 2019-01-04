var wysokoscOkna = window.screen.availHeight;
var szereokoscOkna = window.screen.availWidth;
// var ilosc = menu.kafelki["length"];
// var i, j, k;
// var zestaw = menu.kafelki[0].obrazki.length;
// menu.kafelki[0].obrazki[1].val


var aktualnyObrazek = 0;
var wysokoscObrazka = 200;


console.log('wysokoscOkna: ', wysokoscOkna);
console.log('szereokoscOkna: ', szereokoscOkna);

// ------------------------------------------

var glowneOknoDiv = document.createElement('div');
glowneOknoDiv.setAttribute('id', 'glownydiv');
document.body.appendChild(glowneOknoDiv);

// ------------------------------------------

// var obrazeklego = 'testowy.jpg';
// obrazeklego.id = 'testowy_Id';
$("#glownydiv").html("<img src='testowy.jpg' id = 'tojestidkosmosu'>");

// ------------------------------------------

var div_003 = document.createElement('div');
div_003.setAttribute('id', 'modal-background');
document.body.appendChild(div_003);

// ------------------------------------------

var div_004 = document.createElement('div');
div_004.setAttribute('id', 'modal-content');
// div_004.innerHTML = 'zawartosc okna modalnego <br> asdgadg,d g gsdsgos dgs<br><br><br><br>';
document.body.appendChild(div_004);

// ------------------------------------------

var div_nafotke = document.createElement('div');
div_nafotke.setAttribute('id', 'div_nafotke_id');
// div_nafotke.innerHTML = 'na fotke';
document.getElementById('modal-content').appendChild(div_nafotke);

$("#div_nafotke_id").html("<img src='" + menu.kafelki[0].obrazki[aktualnyObrazek].val + "' id='lolo'>");
$('#lolo').height(wysokoscObrazka);

// ------------------------------------------

var div_nabuttony = document.createElement('div');
div_nabuttony.setAttribute('id', 'div_nabuttony_id');
// div_nabuttony.innerHTML = 'na butony';
document.getElementById('modal-content').appendChild(div_nabuttony);

// ------------------------------------------

var button002 = document.createElement('button');
button002.textContent = 'Modal Window';
button002.id = "modal-launcher";
document.body.appendChild(button002);


// ------------------------------------------

var buttonPrev = document.createElement('button');
buttonPrev.textContent = "poprz";
// buttonPrev.value = "4";
buttonPrev.className = "button";
buttonPrev.onclick = function () {
    console.log(aktualnyObrazek);
    aktualnyObrazek--;
    $("#div_nafotke_id").html("<img src='" + menu.kafelki[0].obrazki[aktualnyObrazek].val + "' id='lolo'>");
    $('#lolo').height(wysokoscObrazka);
};
// document.body.appendChild(buttonPrev);
document.getElementById('div_nabuttony_id').appendChild(buttonPrev);


// ------------------------------------------


var button005 = document.createElement('button');
button005.textContent = 'zamknij okno modalne';
button005.id = 'modal-close';
document.getElementById('div_nabuttony_id').appendChild(button005);

// ------------------------------------------


var buttonNext = document.createElement('button');
buttonNext.textContent = "nast";
// buttonNext.value = "4";
buttonNext.className = "button";
buttonNext.onclick = function () {
    console.log(aktualnyObrazek);
    aktualnyObrazek++;
    $("#div_nafotke_id").html("<img src='" + menu.kafelki[0].obrazki[aktualnyObrazek].val + "' id='lolo'>");
    $('#lolo').height(wysokoscObrazka);
};
document.getElementById('div_nabuttony_id').appendChild(buttonNext);



// ------------------------------------------

$(function () {
    $("#modal-launcher, #modal-background, #modal-close").click(function () {
        $("#modal-content,#modal-background").toggleClass("active");
    });
});


// ------------------------------------------

$(document).ready(function () {
    $("#tojestidkosmosu").click(function () {
        // $('body').css('background', 'url:(tapeta.jpg)');
        $('body').css('background-image', 'url(tapeta.jpg)');
        console.log(this.id)
    });
});
