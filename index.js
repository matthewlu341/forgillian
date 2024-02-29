//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

data = {
    "Great Mosque of Córdoba": "Begun under Abd Al-Rahman I in 780 and expanded in the ninth and tenth centuries, additions of Abbasid caliph al-Hakam II between 961 and 976",
    "Leire Casket": "1004 to 1005",
    "Hagia Sophia (Zoe and Constantine mosaic)": "1028 to 1055",
    "Crown of Hungary":"1074 to 1077",
    "Hebrew primer from the Cairo geniza":"Between the ninth and twelfth centuries",
    "Quran of Ibn Bawwab": "1001",
    "Fatimid block-print scroll amulet":"eleventh century",
    "Mosque of al-Hakim":"990 to 1013",
    "Sviata Sofiia":"1040",
    "Lothar Cross":"1000",
    "Bernward’s column at Hildesheim":"1020",
    "Monastery of Hosios Loukas":"tenth and eleventh centuries",
    "Majesty of Sainte-Foy":"1000",
    "Jelling Stone":"965",
    "Bayeux Embroidery":"1080",
    "Durham Cathedral":"1093",
    "Life of St. Cuthbert (manuscript)":"1180",
    "Mantle of Roger II":"1133",
    "Cappella Palatina":"1130 to 1154",
    "Melisende Psalter":"1135",
    "Church of Sainte-Foy":"1050 to 1130",
    "Stavelot Triptych":"1150s (mid-twelfth century)",
    "Urnes Stave Church":"late eleventh and early twelfth centuries",
    "Lisbjerg Golden Altar":"1135",
    "Cloisters Cross":"1150",
    "Pisa Griffin":" late eleventh or early twelfth centuries",
    "Isfahan Friday Mosque":"late eleventh and twelfth centuries",
    "Pantokrator Monastery":"1118 to 1136,",
    "Homilies of Gregory of Nazianzos (manuscript)":"1136 and 1155",
    "Saint-Denis":"1140s"
};
correct = 0
incorrect = []
pieces = Object.keys(data);
pieces = shuffle(pieces);
setQuestions();

function setQuestions(){
    if (pieces.length !== 0){
        piece = pieces.pop();
        document.getElementById("pieceName").innerHTML = piece;
    }
    else{
        document.getElementById("pieceName").innerHTML = "You're done!";
        document.getElementById("pieceDate").textContent = "Your score is: " + correct + " out of 30 😍";
        document.getElementById('revealButton').style.display = 'none';
        document.getElementById('incorrectDates').style.visibility = 'visible'
        document.getElementById('incorrectDateList').textContent = incorrect
    }
}

function showDate(){
    document.getElementById("pieceDate").innerHTML = data[document.getElementById("pieceName").textContent]
    document.getElementById("revealButton").textContent = "Were you correct?"
    showResultButtons();
}

function incrementCorrect(){
    correct += 1;
    hideResultButtons();
    document.getElementById("revealButton").textContent = "Click to reveal date"
    document.getElementById("pieceDate").textContent = "The date will show up here when the button is clicked";
    setQuestions();
}

function addToIncorrect(){
    pieceName = document.getElementById("pieceName").textContent;
    incorrect.push(pieceName);
    hideResultButtons();
    document.getElementById("revealButton").textContent = "Click to reveal date"
    document.getElementById("pieceDate").textContent = "The date will show up here when the button is clicked";
    setQuestions();
}

function showResultButtons(){
    document.getElementById("resultButtons").style.visibility='visible';
}

function hideResultButtons(){
    document.getElementById("resultButtons").style.visibility='hidden';
}
document.getElementById('revealButton').onclick = showDate;
document.getElementById('correctButton').onclick = incrementCorrect
incorrectButton = document.getElementById('incorrectButton')
incorrectButton.onclick = addToIncorrect
