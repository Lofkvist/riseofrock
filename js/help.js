
string7 = document.querySelectorAll(".string7")[0]
string8 = document.querySelectorAll(".string8")[0]
string9 = document.querySelectorAll(".string9")[0]
string10 = document.querySelectorAll(".string10")[0]
string11 = document.querySelectorAll(".string11")[0]
string12 = document.querySelectorAll(".string12")[0]
ball2 = document.querySelectorAll(".playing-ball2")[0]
ball3 = document.querySelectorAll(".playing-ball3")[0]
john = document.querySelectorAll(".john")[0]
paul = document.querySelectorAll(".paul")[0]
george = document.querySelectorAll(".george")[0]
ringo = document.querySelectorAll(".ringo")[0]

const quick_delay = 145
const drumBeat = 314.5

async function beatlesSinging(){
    await delay(200)
    sing(500, george)
    sing(500, paul)
    await delay(1250)
    sing(1200, john)
    await delay(1200)
    sing(500, george)
    sing(500, paul)
    await delay(1000)
    sing(1500, john)
    await delay(1500)
    sing(500, george)
    sing(500, paul)
    await delay(950)
    sing(1450, john)
    await delay(1600)
    sing(700, george)
    sing(700, paul)
    await delay(2700)
    sing(1700, john)
}

async function ringoDrum(){
    await delay(100)
    for (var i = 0; i < 38; i++) {
        drum(70, ringo)
        await delay(drumBeat)
    }
}

document.querySelectorAll(".help-guitar")[0].addEventListener("click", async function() {
    console.log("Help");
    var firstAudio = new Audio("../sounds/sixties/help.m4a");
    firstAudio.play();

    beatlesSinging()

    ringoDrum()

    await delay(100)
    str2Frt2_ball2(600)
    await delay(1200)
    str2Frt2_ball2(400)
    await delay(590)
    open2str_ball2(400)
    await delay(590)
    str1Frt3_ball2(400)
    await delay(1300)
    str1Frt3_ball2(400)
    await delay(650)
    str1frt2_ball2(400)
    await delay(590)
    open1str_ball2(600)
    await delay(2610)

    //String 2 fast playing
    str2frt7_ball2(400)
    await delay(70)
    str3frt5_ball3(400)
    await delay(70)
    open4str_ball3(400)
    await delay(70)
    open5str_ball3(400)
    await delay(400)

    //String 3 fast playing
    str2frt6_ball2(400)
    await delay(quick_delay)
    str3frt4_ball3(400)
    await delay(quick_delay)
    open4str_ball3(400)
    await delay(quick_delay)
    open5str_ball3(400)
    await delay(620 - 3*quick_delay)

    //String 4 fast playing
    str2frt5_ball2(400)
    await delay(quick_delay)
    str3frt3_ball3(400)
    await delay(quick_delay)
    open4str_ball3(400)
    await delay(quick_delay)
    open5str_ball3(400)
    await delay(620 - 3*quick_delay)

    //String 5 fast playing
    str2frt4_ball2(400)
    await delay(quick_delay)
    str3frt2_ball3(400)
    await delay(quick_delay)
    open4str_ball3(400)
    await delay(quick_delay)
    open5str_ball3(400)
    await delay(620 - 3*quick_delay)



});


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

//Make them sing
async function sing(time, beatle) {
  beatle.classList.add("sing")

  await delay(time);

  beatle.classList.remove("sing");
}

//Make Ringo drum
async function drum(time, beatle) {
  beatle.classList.add("drum")

  await delay(time);

  beatle.classList.remove("drum");
}


//Play the correct string and correct fret
async function str2Frt2_ball2(time) {
  string8.classList.add("beatles-played")
  ball2.classList.add("str2frt2-ball2")

  await delay(time);

  string8.classList.remove("beatles-played");
  ball2.classList.remove("str2frt2-ball2")
}


async function str1Frt3_ball2(time) {
    string7.classList.add("beatles-played")
    ball2.classList.add("str1frt3-ball2")

    await delay(time);

    string7.classList.remove("beatles-played");
    ball2.classList.remove("str1frt3-ball2")
}


async function open2str_ball2(time){
    string8.classList.add("beatles-played")

    await delay(time);

    string8.classList.remove("beatles-played");
}

async function open1str_ball2(time){
    string7.classList.add("beatles-played")

    await delay(time);

    string7.classList.remove("beatles-played");
}

async function str1frt2_ball2(time){
    string7.classList.add("beatles-played")
    ball2.classList.add("str1frt2-ball2")

    await delay(time);

    string7.classList.remove("beatles-played");
    ball2.classList.remove("str1frt2-ball2")
}

//Fast playing string 2
async function str2frt7_ball2(time){
    string8.classList.add("beatles-played")
    ball2.classList.add("str2frt7-ball2")

    await delay(time);

    string8.classList.remove("beatles-played");
    ball2.classList.remove("str2frt7-ball2")
}

async function str2frt6_ball2(time){
    string8.classList.add("beatles-played")
    ball2.classList.add("str2frt6-ball2")

    await delay(time);

    string8.classList.remove("beatles-played");
    ball2.classList.remove("str2frt6-ball2")
}

async function str2frt5_ball2(time){
    string8.classList.add("beatles-played")
    ball2.classList.add("str2frt5-ball2")

    await delay(time);

    string8.classList.remove("beatles-played");
    ball2.classList.remove("str2frt5-ball2")
}

async function str2frt4_ball2(time){
    string8.classList.add("beatles-played")
    ball2.classList.add("str2frt4-ball2")

    await delay(time);

    string8.classList.remove("beatles-played");
    ball2.classList.remove("str2frt4-ball2")
}

//Fast playing string 3
async function str3frt5_ball3(time){
    string9.classList.add("beatles-played")
    ball3.classList.add("str3frt5-ball3")

    await delay(time);

    string9.classList.remove("beatles-played");
    ball3.classList.remove("str3frt5-ball3")
}

async function str3frt4_ball3(time){
    string9.classList.add("beatles-played")
    ball3.classList.add("str3frt4-ball3")

    await delay(time);

    string9.classList.remove("beatles-played");
    ball3.classList.remove("str3frt4-ball3")
}

async function str3frt3_ball3(time){
    string9.classList.add("beatles-played")
    ball3.classList.add("str3frt3-ball3")

    await delay(time);

    string9.classList.remove("beatles-played");
    ball3.classList.remove("str3frt3-ball3")
}

async function str3frt2_ball3(time){
    string9.classList.add("beatles-played")
    ball3.classList.add("str3frt2-ball3")

    await delay(time);

    string9.classList.remove("beatles-played");
    ball3.classList.remove("str3frt2-ball3")
}

async function open4str_ball3(time){
    string10.classList.add("beatles-played")

    await delay(time);

    string10.classList.remove("beatles-played");
}

async function open5str_ball3(time){
    string11.classList.add("beatles-played")

    await delay(time);

    string11.classList.remove("beatles-played");
}