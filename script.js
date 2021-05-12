var objects = [
    "backpack.jpg",
    "bacteria.jpg",
    "bdaycake.jpg",
    "belt.jpg",
    "bicycle.jpg",
    "bread.jpg",
    "diaper.jpg",
    "dildo.jpg",
    "drum.jpg",
    "envelope.jpg",
    "fannybag.jpg",
    "guitar.jpg",
    "hat.jpg",
    "headphones.jpg",
    "lipstick.jpg",
    "mirror.jpg",
    "plant.jpg",
    "sandals.jpg",
    "skateboard.jpg",
    "spoon.jpg",
    "trashbin.jpg",
    "umbrella.jpg",
    "wine.jpg"
]

var peoplePlaces = [
    "be-yourself.jpg"
]

var situations = [
    "access.jpg",
    "amplify.jpg",
    "anonimity.jpg",
    "children.jpg",
    "economy.jpg",
    "expression.jpg",
    "governance.jpg",
    "information.jpg",
    "memory.jpg",
    "pornography.jpg",
    "privacydata.jpg",
    "resistance.jpg",
    "violence.jpg"
]

var values = [
    "accountability.jpg",
    "agency.jpg",
    "autonomy.jpg",
    "consent.jpg",
    "cooperation.jpg",
    "decentralization.jpg",
    "decoloniality.jpg",
    "diversity.jpg",
    "embodiedness.jpg",
    "empathy.jpg",
    "horizontality.jpg",
    "interoperability.jpg",
    "intersectionality.jpg",
    "intuition.jpg",
    "multiespesciesim.jpg",
    "nonbinary.jpg",
    "opensource.jpg",
    "pleasure.jpg",
    "queerness.jpg",
    "resilience.jpg",
    "security.jpg",
    "socio-environmental-justice.jpg",
    "solidarity.jpg"
]

var audio = new Audio('./assets/tada.mp3');

function newSelection() {

    var randomObject = objects[Math.floor(Math.random() * (objects.length))];
    var objectUrl = "./assets/objects/" + randomObject;

    var randomPeoplePlaces = peoplePlaces[Math.floor(Math.random() * (peoplePlaces.length))];
    var peoplePlacesUrl = "./assets/people-places/" + randomPeoplePlaces;

    var randomSituation = situations[Math.floor(Math.random() * (situations.length))];
    var situationUrl = "./assets/situations/" + randomSituation;

    var randomValue = values[Math.floor(Math.random() * (values.length))];
    var valueUrl = "./assets/values/" + randomValue;


    // audio.load();
    // audio.pause();
    // audio.play();

    document.getElementById('objectsImg').src = objectUrl;
    document.getElementById('peoplePlacesImg').src = peoplePlacesUrl;
    document.getElementById('situationsImg').src = situationUrl;
    document.getElementById('valuesImg').src = valueUrl;


}