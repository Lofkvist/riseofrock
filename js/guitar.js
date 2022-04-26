const numOfStrings = 6
for (var i = 0; i < numOfStrings; i++) {

  document.querySelectorAll(".string")[i].addEventListener("click", function() {

    var string = this.getAttribute('id');
    if (document.title == 'Contact me'){
        makeSoundContact(string);
        stringAnimation(string);
    } else {
        makeSound(string);
        stringAnimation(string);
    }

  });

}

document.addEventListener("keypress", function(event) {
    if (document.title == 'Contact me'){
        makeSoundContact(event.key);
    } else {
        makeSound(event.key);
        stringAnimation(event.key);
    }
});

function makeSound(key) {
    switch (key) {
        case "e":
        var lowEString = new Audio("sounds/LowE.m4a");
        lowEString.play();
        break;

    case "a":
        var aString = new Audio("sounds/A.m4a");
        aString.play();

        break;

    case "d":
        var dString = new Audio('sounds/D.m4a');
        dString.play();
        break;

    case "g":
        var gString = new Audio('sounds/G.m4a');
        gString.play();
        break;

    case "b":
        var bString = new Audio('sounds/B.m4a');
        bString.play();
        break;

    case "h":
        var highEString = new Audio('sounds/highE.m4a');
        highEString.play();
        break;

    default: console.log(key);

  }
}


function makeSoundContact(key) {
    switch (key) {
        case "e":
        var lowEString = new Audio("../sounds/LowE.m4a");
        lowEString.play();
        break;

    case "a":
        var aString = new Audio("../sounds/A.m4a");
        aString.play();

        break;

    case "d":
        var dString = new Audio('../sounds/D.m4a');
        dString.play();
        break;

    case "g":
        var gString = new Audio('../sounds/G.m4a');
        gString.play();
        break;

    case "b":
        var bString = new Audio('../sounds/B.m4a');
        bString.play();
        break;

    case "h":
        var highEString = new Audio('../sounds/highE.m4a');
        highEString.play();
        break;

    default: console.log(key);

  }
}

function stringAnimation(currentKey) {
    var activeButton = document.getElementById(currentKey);
    activeButton.classList.add("played");
    setTimeout(function() {
        activeButton.classList.remove("played");
    }, 100);

}
