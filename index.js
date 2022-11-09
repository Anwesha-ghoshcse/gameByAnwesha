score = 0;
cross = true;

audio = new Audio('game.mp3');
audiogo = new Audio('gameover.mp3.wav');
audio.play();
let a = setInterval(() =>{
    audio.play()
    console.log("set time is working");
},1000);
console.log("script is running");
document.onkeydown = function (e) {
    console.log("key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        hero = document.querySelector('.hero');
        hero.classList.add('animatehero');
        setTimeout(() => {
            hero.classList.remove('animatehero');
        }, 700);
    }
    if (e.keyCode == 39) {
        hero = document.querySelector('.hero');
        heroX = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'));
        hero.style.left = (heroX + 212) + "px";
    }
    if (e.keyCode == 37) {
        hero = document.querySelector('.hero');
        heroX = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'));
        hero.style.left = (heroX - 212) + "px";
    }
}
setInterval(() => {
    hero = document.querySelector('.hero');
    obstacle = document.querySelector('.obstacle');
    gameover = document.querySelector('.gameover');

    hx = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'));
    hy = parseInt(window.getComputedStyle(hero, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offSetX = Math.abs(hx - ox);
    offSetY = Math.abs(hy - oy);
   // console.log(offSetX, offSetY);
    if (offSetX < 65 && offSetY < 72) {
        gameover.style.visibility ='visible';
        obstacle.classList.remove('obstacleani');
        clearInterval(a);
        audio.pause();
        audiogo.play();
       hero.style.bottom = -15;
        /*setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 2000);*/
    }
    else if (offSetX < 95 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newdur = anidur - 0.3;
            obstacle.style.animationDuration = newdur + 's';
            console.log('new animation duration',newdur);

        }, 500);

    }
}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score:" + score
}