var richardStep = 1
var elvisStep = 1
var chuckStep = 1

document.addEventListener("keypress", function(event) {
    makeSound(event.code);
});


document.querySelectorAll(".little-richard")[0].addEventListener("click", function() {
    var richard = "l";
    makeSound(richard);
});

document.querySelectorAll(".elvis-presley")[0].addEventListener("click", function() {
    var richard = "e";
    makeSound(richard);
});

document.querySelectorAll(".chuck-berry")[0].addEventListener("click", function() {
    var richard = "c";
    makeSound(richard);
});


function makeSound(key) {
    if (key === "l") {
        if (richardStep === 1) {
            var firstAudio = new Audio("../sounds/fifties/wap_bambaloom_bam.m4a");
            firstAudio.play();
        } else if (richardStep === 2) {
            var secondAudio = new Audio("../sounds/fifties/bla_bam_bam.m4a");
            secondAudio.play();
        } else {
            var thirdAudio = new Audio("../sounds/fifties/all_rudey.m4a");
            thirdAudio.play();
        }
        richardStep += 1
        if (richardStep === 4) {
            richardStep = 1
        }
    }

    if (key === 'e') {
        if (elvisStep === 1) {
            var firstAudio = new Audio("../sounds/fifties/you_aint_nothing.m4a");
            firstAudio.play();
        } else if (elvisStep === 2) {
            var secondAudio = new Audio("../sounds/fifties/crying_all_the_time.m4a");
            secondAudio.play();
        } else {
            var thirdAudio = new Audio("../sounds/fifties/aint_no_friend_of_mine.m4a");
            thirdAudio.play();
        }
        elvisStep += 1
        if (elvisStep === 4) {
            elvisStep = 1
        }
    }

    if (key == 'c') {
        if (chuckStep === 1) {
            var firstAudio = new Audio("../sounds/fifties/maybellene.m4a");
            firstAudio.play();
        } else if (chuckStep === 2) {
            var secondAudio = new Audio("../sounds/fifties/why_cant_you.m4a");
            secondAudio.play();
        } else {
            var thirdAudio = new Audio("../sounds/fifties/you-done.m4a");
            thirdAudio.play();
        }
        chuckStep += 1
        if (chuckStep === 4) {
            chuckStep = 1
        }
    }
}
