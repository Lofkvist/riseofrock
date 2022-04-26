const numOfSongs = 6
for (var i = 0; i < numOfSongs; i++) {

  document.querySelectorAll(".honorable-mention")[i].addEventListener("click", function() {

    var string = this.getAttribute('id');
        makeSound(string);
  });

}

function makeSound(key) {
    switch (key) {
        case "one":
        var lowEString = new Audio("../sounds/seventies/fortunate-son.m4a");
        lowEString.play();
        break;

    case "two":
        var aString = new Audio("../sounds/seventies/any-way-you-want-it.m4a");
        aString.play();

        break;

    case "three":
        var dString = new Audio('../sounds/seventies/la-grange.m4a');
        dString.play();
        break;

    case "four":
        var gString = new Audio('../sounds/seventies/i-was-made.m4a');
        gString.play();
        break;

    case "five":
        var bString = new Audio('../sounds/seventies/one-way-or-another.m4a');
        bString.play();
        break;

    case "six":
        var highEString = new Audio('../sounds/seventies/reelin-in-the-years.m4a');
        highEString.play();
        break;

    default:

  }
}