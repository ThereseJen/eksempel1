function verktøy1() {
clearall();
document.getElementById('Theresestag1').innerHTML = /*HTML*/`
<div class="innercard">
De to viktigste verktøyene vi skal bruke er disse:
<ul>
<li> De to viktigste verktøyene vi skal bruke er disse:
Koderedigeringsprogrammet
<a href="https://code.visualstudio.com/">Visual Studio Code</a>
<br>
Vi skal bruke noen <i>extensions:</i>
<ul>
<li>JavaScript-booster</li>
<li>es6-string-html</li>
<li>live-server </li>
<li>live-share</li>
</ul>
</li>
<li>
Nettleseren
<a href="https://www.google.com/intl/no/chrome/"> Google Chrome </a>
</li>
</ul>
</div>
</div>
 `;
                    }

function HTML1() {
clearall();
document.getElementById('Theresestag2').innerHTML = /*HTML*/`
<div class="innercard">
Vi bruker HTML for å definere et dokument
<ul>
     <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
     <li>Tagger for grunnleggende formatering av tekst</li>
     <li><tt>&lt;div&gt;</tt></li>
     <li><tt>&lt;input type="text"&gt;</tt></li>
     <li><tt>&lt;button&gt;</tt></li>
     <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a> </li>
     <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
    </li>
     </ul>
</div>

`

                    }

function CSS1() {
clearall();
document.getElementById('Theresestag3').innerHTML = /*HTML*/ `
<div class="innercard"> 
Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
<ul>
<li><tt>background-color</tt></li>
<li><tt>color</tt></li>
<li><tt>padding</tt></li>
<li><tt>margin</tt></li>
<li><tt>border</tt></li>
<li><tt>text-align</tt></li>
<li><tt>font-size</tt></li>
</li>
</ul>
</div>
`         }

function Javascript1() {
clearall();
document.getElementById('Theresestag4').innerHTML = /*HTML*/`
<div class="innercard"> 
 Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering
ved å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
<ul>
<li> Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på Moodle.</li>
<li> <a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript Reference</a></li>
</ul>
</div>
`
}

function Hodekroppbein1() {
    clearall();
    document.getElementById('hkb').innerHTML =/*HTML*/ `
    <div class="container" id="hoder"></div>

    <div class="container" id="kropper"></div>

    <div class="container" id="bein"></div>
    `;
    hode1();
    kropp1();
    bein1();
    }

function hode1() {
    document.getElementById('hoder').innerHTML = /*HTML*/`
    <button onclick="hode4()">◀</button>
        <img src="img/head1.png">
    <button onclick="hode2()">▶</button>
    `;
    }
function hode2() {
    document.getElementById('hoder').innerHTML = /*HTML*/`
    <button onclick="hode1()">◀</button>
        <img src="img/head2.png">
    <button onclick="hode3()">▶</button>
    `;
    }
function hode3() {
    document.getElementById('hoder').innerHTML = /*HTML*/`
    <button onclick="hode2()">◀</button>
        <img src="img/head3.png">
    <button onclick="hode4()">▶</button>
    `;
    }
function hode4() {
    document.getElementById('hoder').innerHTML = /*HTML*/`
    <button onclick="hode3()">◀</button>
        <img src="img/head4.png">
    <button onclick="hode1()">▶</button>
    `;
    }
function kropp1() {
    document.getElementById('kropper').innerHTML = /*HTML*/`
    <button onclick="kropp4()">◀</button>
        <img src="img/body1.png">
    <button onclick="kropp2()">▶</button>
    `;
    }
function kropp2() {
    document.getElementById('kropper').innerHTML = /*HTML*/`
    <button onclick="kropp1()">◀</button>
        <img src="img/body2.png">
    <button onclick="kropp3()">▶</button>
    `;
    }
function kropp3() {
    document.getElementById('kropper').innerHTML = /*HTML*/`
    <button onclick="kropp2()">◀</button>
        <img src="img/body3.png">
    <button onclick="kropp4()">▶</button>
    `;
    }
function kropp4() {
    document.getElementById('kropper').innerHTML = /*HTML*/`
    <button onclick="kropp3()">◀</button>
        <img src="img/body4.png">
    <button onclick="kropp1()">▶</button>
    `;
    }
function bein1() {
    document.getElementById('bein').innerHTML = /*HTML*/`
    <button onclick="bein4()">◀</button>
        <img src="img/legs1.png">
    <button onclick="bein2()">▶</button>
    `;
}
function bein2() {
    document.getElementById('bein').innerHTML = /*HTML*/`
    <button onclick="bein1()">◀</button>
        <img src="img/legs2.png">
    <button onclick="bein3()">▶</button>
    `;
}
function bein3() {
    document.getElementById('bein').innerHTML = /*HTML*/`
    <button onclick="bein2()">◀</button>
        <img src="img/legs3.png">
    <button onclick="bein4()">▶</button>
    `;
}
function bein4() {
    document.getElementById('bein').innerHTML = /*HTML*/`
    <button onclick="bein3()">◀</button>
        <img src="img/legs4.png">
    <button onclick="bein1()">▶</button>
    `;
    }

    //timer-koden
var count= 0;

function showcounter1() {   
    clearall();  
document.getElementById("teller1").innerHTML = /*HTML*/`
<div class="container">
<button id="minus" onclick="minus()">◀</button>
<p id="display"></p> 
<button id="plus" onclick="plus()">▶</button>
</div>
`;
doucument.getElementById("display").innerHTML = count;
}
    
function plus() {
count++;
document.getElementById("display").innerHTML = count;
}

function minus() {
count--;
document.getElementById("display").innerHTML = count;
}

//Knappene som skal endre layout på siden
function vertical() {
nostyle();
document.getElementById('cards').classList.add('vertical')
}

function horisontal() {
nostyle();
document.getElementById('cards').classList.add('horisontal')
}

function gridlayout() {
nostyle();
document.getElementById('cards').classList.add('gridlayout')
}

function nostyle() {
document.getElementById('cards').classList = ('')
}

//få lukket cardet over når du klikker på et nytt
function clearall() {
document.getElementById("Theresestag1").innerHTML = "";
document.getElementById("Theresestag2").innerHTML = "";
document.getElementById("Theresestag3").innerHTML = "";
document.getElementById("Theresestag4").innerHTML = "";
document.getElementById("hkb").innerHTML = "";
document.getElementById("teller1").innerHTML = "";
}
 
