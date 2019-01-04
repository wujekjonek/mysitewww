//
//
//
var wysokoscOkna = window.screen.availHeight;
var szereokoscOkna = window.screen.availWidth;
var ilosc = menu.kafelki["length"];
var i, j, k;
var aktualnyObrazek = 0;
var wysokoscObrazka = 550;
var res;


// console.log('wysokoscOkna: ', wysokoscOkna);
// console.log('szereokoscOkna: ', szereokoscOkna);


// ------------------------------------------

var glowneOknoDiv = document.createElement('div');
glowneOknoDiv.setAttribute('id', 'glownydiv');
// glowneOknoDiv.style.height = '1000px';
// glowneOknoDiv.style.width = '1500px';
glowneOknoDiv.style.height = '1000px';
glowneOknoDiv.style.width = '80%';
document.body.appendChild(glowneOknoDiv);


// ------------------------------------------

for (i = 0; i < ilosc; i++) {

    var pp = '';


    var katalogzObrazkami = menu.kafelki[i].katalog;
    var myDiv = document.createElement('div');
    myDiv.className = 'menuitem';
    myDiv.setAttribute('id', 'id_' + i + '');
    myDiv.style.backgroundImage = "url('" + katalogzObrazkami + '/' + menu.kafelki[i].obrazek + " ')";
    document.getElementById('glownydiv').appendChild(myDiv);
    var x = document.createElement('text');
    x.className = 'klasax';
    x.innerHTML = menu.kafelki[i].nazwa;
    document.getElementById('id_' + i).appendChild(x);


    for (j = 0; j < menu.kafelki[i].podmenu.length; j++) {
        console.log('odczyt: ', menu.kafelki[i].podmenu[j].val);


        //   x.innerHTML = menu.kafelki[i].podmenu[j].val;

        // x.innerHTML = menu.kafelki[i].podmenu[j].val;
        // x.innerHTML = '<br>';
        // $('.klasax').html(menu.kafelki[i].podmenu[j].val);
        // $('.klasax').html('#####');


        pp = pp + menu.kafelki[i].podmenu[j].val + '__' + '<br>';


    }

    console.log('------------------ ');


    x.innerHTML = menu.kafelki[i].nazwa + '<br>' + pp;


}


var div_003 = document.createElement('div');
div_003.setAttribute('id', 'modal-background');
document.body.appendChild(div_003);


var div_004 = document.createElement('div');
div_004.setAttribute('id', 'modal-content');
// var pozycjaOkienkawPionie = (($(window).height()/2) - 300);
// var pozycjaOkienkawPoziomie = (($(window).width()/2) - 400);
// div_004.setAttribute('style', 'left:' + pozycjaOkienkawPoziomie + 'px; top:' + pozycjaOkienkawPionie + 'px');
document.body.appendChild(div_004);


var div_nafotke = document.createElement('div');
div_nafotke.setAttribute('id', 'div_nafotke_id');
document.getElementById('modal-content').appendChild(div_nafotke);


var div_naopisfotki = document.createElement('div');
div_naopisfotki.setAttribute('id', 'div_naopisfotki_id');
div_naopisfotki.innerHTML = ' ';
document.getElementById('modal-content').appendChild(div_naopisfotki);


var div_nalewo = document.createElement('div');
div_nalewo.setAttribute('id', 'div_nalewo_id');
div_nalewo.innerHTML = '<img src=\'prev.png\', id="prev_id">';
document.getElementById('modal-content').appendChild(div_nalewo);


var div_naprawo = document.createElement('div');
div_naprawo.setAttribute('id', 'div_naprawo_id');
div_naprawo.innerHTML = '<img src=\'next.png\', id="next_id">';
document.getElementById('modal-content').appendChild(div_naprawo);


// ------------------------------------------

// var showPreviousSlideButton = document.createElement('button');
// showPreviousSlideButton.textContent = "Previous";
// showPreviousSlideButton.className = "button";
// showPreviousSlideButton.onclick = function () {
//     console.log('1: ', aktualnyObrazek);
//     aktualnyObrazek--;
//     if (aktualnyObrazek > 0) {
//         wyswietl_kafelke();
//     }
//     else if (aktualnyObrazek === 0) {
//         wyswietl_kafelke();
//         aktualnyObrazek = (menu.kafelki[res].obrazki.length);
//     }
//     else if (aktualnyObrazek === -1) {
//         aktualnyObrazek = (menu.kafelki[res].obrazki.length);
//         wyswietl_kafelke();
//         console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ');
//     }
// };
// document.getElementById('div_nabuttony_id').appendChild(showPreviousSlideButton);


// ------------------------------------------

//
// var closeModalWindowButton = document.createElement('button');
// closeModalWindowButton.textContent = 'Close';
// closeModalWindowButton.id = 'modal-close';
// document.getElementById('div_nabuttony_id').appendChild(closeModalWindowButton);


// ------------------------------------------


// var showNextSlideButton = document.createElement('button');
// showNextSlideButton.textContent = "Next";
// showNextSlideButton.className = "button";
//
//
// showNextSlideButton.onclick = function () {
//     console.log('showNextSlideButton.aktualnyObrazek: ', aktualnyObrazek);
//     aktualnyObrazek++;
//     if (aktualnyObrazek < (menu.kafelki[res].obrazki.length)) {
//         wyswietl_kafelke();
//         console.log('nazwa pliku slajdu: ', menu.kafelki[res].obrazki[aktualnyObrazek].val);
//
//     } else if (aktualnyObrazek === (menu.kafelki[res].obrazki.length)) {
//         console.log('koniec');
//         aktualnyObrazek = 0;
//         wyswietl_kafelke();
//         aktualnyObrazek = 0;
//     }
// };
// document.getElementById('div_nabuttony_id').appendChild(showNextSlideButton);


// ------------------------------------------


$(function () {
    $(".menuitem, #modal-background, #modal-close").click(function () {
        $("#modal-content,#modal-background").toggleClass("active");
    });
});


// ------------------------------------------


function wyswietl_kafelke() {

    $('#lolo').css('display', 'none');

    var theImage = new Image();
    theImage.src = menu.kafelki[res].katalog + '/' + menu.kafelki[res].obrazki[aktualnyObrazek].val;
    theImage.onload = function () {
        console.log('1) theImage.height: ', theImage.height);
        console.log('1) theImage.width: ', theImage.width);
        console.log('1)  ', theImage.src);

        var h = theImage.height;
        var w = theImage.width;

        var pozycjaOkienkawPionie = (($(window).height() / 2) - (h / 2));
        var pozycjaOkienkawPoziomie = (($(window).width() / 2) - (w / 2));

        div_004.setAttribute('style', 'left:' + pozycjaOkienkawPoziomie + 'px; top:' + pozycjaOkienkawPionie + 'px');

        $('#next_id').css('margin-top', ((h / 2) - 25));
        $('#prev_id').css('margin-top', ((h / 2) - 25));


        $("#div_nafotke_id").html("<img src='" + menu.kafelki[res].katalog + '/' + menu.kafelki[res].obrazki[aktualnyObrazek].val + "' id='lolo'>");

        $('#div_naopisfotki_id').html(menu.kafelki[res].obrazki[aktualnyObrazek].desc);
    };


    console.log('---------------------------------------------------------------');


}


// ------------------------------------------


$(document).ready(function () {
    $(".menuitem").click(function () {

        aktualnyObrazek = 0;

        // $("#panel").slideToggle("slow");
        // console.log('aaaaaaa');
        // alert("ple");
        // console.log(this.className);
        // console.log('id: ', this.id);

        res = this.id.substring(3);
        // console.log('res: ', res);

        // var pozycjaOkienkawPionie = (($(window).height() / 2) - 300);
        // var pozycjaOkienkawPoziomie = (($(window).width() / 2) - 400);
        // div_004.setAttribute('style', 'left:' + pozycjaOkienkawPoziomie + 'px; top:' + pozycjaOkienkawPionie + 'px');
        // $("#div_nafotke_id").html("<img src='" + menu.kafelki[res].katalog + '/' + menu.kafelki[res].obrazki[0].val + "' id='lolo'>");
        // $('#div_naopisfotki_id').html(menu.kafelki[res].obrazki[0].desc);

        wyswietl_kafelke();


    });
});


// ------------------------------------------

$(document).ready(function () {
    $(".menuitem").mouseover(function () {
        // $(this).css("background-color", "yellow");
        //    $( "#foo" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
        $(this).css('filter', 'grayscale(0%)');
        // $(this).css('background-size', 'cover');
        $(this).css('background-size', '400%');
        $(this).css('box-shadow', '10px 10px 30px #484848');
        // $(this).css('width', '320px');
        // $(this).css('height', '320px');
        // $(this).css('margin-top', '-20px');
    });
});

// ------------------------------------------

$(document).ready(function () {
    $(".menuitem").mouseout(function () {
        // $(this).css("background-color", "green");
        $(this).css("filter", "grayscale(100%)");
        $(this).css('background-size', '100%');
        $(this).css('box-shadow', '0px 0px 0px #484848');
        // $(this).css('width', '300px');
        // $(this).css('height', '300px');
        // $(this).css('margin-top', '20px');
    });
});


// ------------------------------------------

$(document).ready(function () {
    $(".menuitem").click(function () {
        // $('body').css('background', 'url:(tapeta.jpg)');
        // $('body').css('background-image', 'url(tapeta.jpg)');
    });
});


$(document).ready(function () {
    $('#div_nafotke_id, #div_naopisfotki_id, #div_nalewo_id, #div_naprawo_id').mouseover(function () {

        $('#div_naopisfotki_id, #div_nalewo_id, #div_naprawo_id').css('display', 'inline');

        // $(this).css('box-shadow', '10px 10px 30px #484848');
        // $(this).append("<span class='label label-important'>"+   menu.kafelki[res].obrazki[aktualnyObrazek-1].val +'</span>');

    });
});


$(document).ready(function () {
    $('#div_nafotke_id,#div_naopisfotki_id, #div_nalewo_id, #div_naprawo_id ').mouseout(function () {

        $('#div_naopisfotki_id, #div_nalewo_id, #div_naprawo_id').css('display', 'none');

        // $(this).css('box-shadow', '0px 0px 0px #484848');
        //    $(this).append("<span class='label label-important'>"'</span>');
        // $(this).find('span').remove();

    });
});


$(document).ready(function () {
    $('#div_naprawo_id').click(function () {
        // console.log('naprawo!!!!!!!!!!!!!!!');
        aktualnyObrazek++;
        if (aktualnyObrazek < (menu.kafelki[res].obrazki.length)) {
            wyswietl_kafelke();
            // console.log('nazwa pliku slajdu: ', menu.kafelki[res].obrazki[aktualnyObrazek].val);

            // console.log('nastepny obrazek');

        } else if (aktualnyObrazek === (menu.kafelki[res].obrazki.length)) {
            console.log('koniec');
            aktualnyObrazek = 0;
            wyswietl_kafelke();
            aktualnyObrazek = 0;
        }
    });
});


$(document).ready(function () {
    $('#div_nalewo_id').click(function () {
        // console.log('nalewo ############');


        aktualnyObrazek--;
        if (aktualnyObrazek > 0) {
            wyswietl_kafelke();
        }
        else if (aktualnyObrazek === 0) {
            wyswietl_kafelke();
            aktualnyObrazek = (menu.kafelki[res].obrazki.length);
        }
        else if (aktualnyObrazek === -1) {
            aktualnyObrazek = (menu.kafelki[res].obrazki.length);
            wyswietl_kafelke();
            // console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ');
        }


    });
});
