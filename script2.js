let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let h3 = document.querySelector('h3');
let allbtnclr = ['red', 'green', 'orange', 'black'];


document.addEventListener('keypress', function () {
    if (started == false) {
        console.log("game started");
        started = true;
        LevelUp()
    }
})


function LevelUp() {
    userseq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let radidx = Math.floor(Math.random() * 4);
    // console.log(radidx);
    let randcolor = allbtnclr[radidx];
    // console.log(randcolor)
    gameseq.push(randcolor);
    console.log("gameseq=",gameseq);
    let randBtn = document.querySelector(`.${randcolor}`);
    // console.log(randBtn)
    gameflush(randBtn)
}

function gameflush(btn) {
    btn.classList.add('flash');
    setTimeout(() => {
        btn.classList.remove('flash')
    }, 500);
}
function userflush(btn) {
    btn.classList.add('userflash');
    setTimeout(() => {
        btn.classList.remove('userflash')
    }, 400);
}


function btnpress(btn) {
    userflush(this);
    // console.log('bn was pressd');
    // console.log(btn.target.id);
    let clorbtn = btn.target.id;
    userseq.push(clorbtn);
    console.log('userseq=',userseq);
    btncheck(userseq.length-1);
    // let clorbtn2=document.querySelector(`.${clorbtn}`)
    // console.log(clorbtn2);
    // clorbtn2.classList.add('userflash');
    // setTimeout(() => {
    //     clorbtn2.classList.remove('userflash')
    // }, 700);

}

let allbtns = document.querySelectorAll('.btn');
for (btn of allbtns) {
    // console.log(btn);
    btn.addEventListener('click', btnpress)
    // console.dir(btn.id);
    // btnpress(btn.id);
    
}

function btncheck(idx) {
    // let idx = level- 1;
    if (gameseq[idx] === userseq[idx]) {
        if (gameseq.length === userseq.length) {
            setTimeout(() => {
                LevelUp()
            }, 1000);
        }
    } else {
        h3.innerText = 'Game Over!';
        gamereset();
    }
}


function gamereset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
    h3.innerText = 'Game Over! press any key to start';
}