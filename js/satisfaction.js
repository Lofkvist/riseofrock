string1 = document.querySelectorAll(".string1")[0]
string2 = document.querySelectorAll(".string2")[0]
string3 = document.querySelectorAll(".string3")[0]
string4 = document.querySelectorAll(".string4")[0]
string5 = document.querySelectorAll(".string5")[0]
string6 = document.querySelectorAll(".string6")[0]
ball = document.querySelectorAll(".playing-ball")[0]


document.querySelectorAll(".satisfaction-guitar")[0].addEventListener("click", async function() {
    var firstAudio = new Audio("../sounds/sixties/satisfaction.m4a");
    firstAudio.play();
    await delay(150)
    str2Frt2(120)
    await delay(450)
    str2Frt2(500)
    await delay(670)
    str2Frt2(200)
    await delay(250)
    str2Frt4(200)
    await delay(250)
    open3str(700)
    await delay(800)
    str2Frt5(200)
    await delay(300)
    str2Frt5(50)
    await delay(90)
    str2Frt4(200)
    await delay(270)
    str2Frt4(100)
    await delay(200)
    str2Frt2(120)
});

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }


async function str2Frt2(time) {
    string2.classList.add("stones-played")
    ball.classList.add("str2frt2")

    await delay(time);

    string2.classList.remove("stones-played");
    ball.classList.remove("str2frt2")
  }


async function str2Frt4(time) {
    string2.classList.add("stones-played")
    ball.classList.add("str2frt4")

    await delay(time);

    string2.classList.remove("stones-played");
    ball.classList.remove("str2frt4")
}


async function open3str(time){
    string3.classList.add("stones-played")

    await delay(time);

    string3.classList.remove("stones-played");
}


async function str2Frt5(time) {
    string2.classList.add("stones-played")
    ball.classList.add("str2frt5")

    await delay(time);

    string2.classList.remove("stones-played");
    ball.classList.remove("str2frt5")
}



//--------------------------------------------------