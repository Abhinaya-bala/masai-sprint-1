var capslock = false;//initialise key as false(off)
var shiftkey = false;
var passwordkey = false;
var cleankey = false;
var reversekey = false;
var masterText = '';

function keyClick(key1, key2, isSymbol) { //issymbol denotes to check its symbol

    var input = document.querySelector("#input")
    var text = input.value;
    if (key1 === 'DEL') {
        //    input.value = text.substr(0,text.length-1);
        var temp = ""
        for (i = 0; i < text.length - 1; i++) {
            temp = temp + text[i]
        }
        input.value = temp
        return;
    }
    if (capslock === true && !isSymbol) {
        key1 = key2; //if pressed key is not symbol then print its uppercase
    }
    if (shiftkey === true && isSymbol) {
        key1 = key2; //if we pressed shift + number key it prints symbol
        toggleShift()
    }

    input.value = text + key1;
    masterText = input.value;// for reusing the current value
    if (passwordkey === true) {
        convertPasswd();

    }
    if (cleankey == true) {
        cleanWords()
    }

}
function toggleCaps() {
    var capsbtn = document.querySelector("#caps")
    if (capslock === true) {
        capslock = false // if caplock is already on by clicking it will go to off mode
        capsbtn.style.color = 'black'
    }
    else {
        capslock = true;// if capslock is in onmode change color to green
        capsbtn.style.color = 'green'
    }
}

function toggleShift() {
    var shiftbtn = document.querySelector("#shift")
    if (shiftkey === true) {
        shiftkey = false
        shiftbtn.style.color = 'black'
    }
    else {
        shiftkey = true;
        shiftbtn.style.color = 'green'
    }
}

function togglePasswd() {
    var passwdbtn = document.querySelector("#passwd")
    var input = document.querySelector('#input')
    if (passwordkey === true) {
        passwordkey = false
        passwdbtn.style.color = 'black'
        input.value = masterText; // if passwd key turnoff again put mastertext into display
    }
    else {
        passwordkey = true;
        passwdbtn.style.color = 'green'
        convertPasswd()
    }


}

function toggleClean() {
    var cleanbtn = document.querySelector("#clean")
    if (cleankey === true) {
        cleankey = false
        cleanbtn.style.color = 'black'
        input.value = masterText;
    }
    else {
        cleankey = true;
        cleanbtn.style.color = 'green'
        cleanWords();
    }
}
function toggleReverse() {
    var reversebtn = document.querySelector("#reverse")
    if (reversekey === true) {
        reversekey = false
        reversebtn.style.color = 'black'
    }
    else {
        reversekey = true;
        reversebtn.style.color = 'green'
    }
    var input = document.querySelector("#input")
    var text = input.value;
    var revtext = ""
    for (i = text.length - 1; i >= 0; i--) { //reserve the existing text 
        revtext = revtext + text[i]
    }
    input.value = revtext // store reverse text for display


}

function convertPasswd() {
    var input = document.querySelector('#input')
    var text = input.value;
    var password = ""
    for (i = 0; i < text.length - 1; i++) {
        password = password + "*"
    }
    input.value = password + text[text.length - 1];

    return;

}

function cleanWords() {
    var input = document.querySelector('#input')
    var text = input.value;
    var badwords = ['ass', 'shit', 'fuck', 'pornography', 'asshole', 'assmunch', 'autoerotic', 'autoerotic', 'babeland', 'babybatter',
        'babyjuice', 'ballgag'];
    var result = '';

    if (badwords.indexOf(text) > -1) {
        for (i = 1; i < text.length - 1; i++) {
            result = result + "*"
        }
        result = text[0] + result + text[text.length - 1];
    } else {
        result = text;
    }

    input.value = result;

    return;


}