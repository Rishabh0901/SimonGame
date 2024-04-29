let gameSeq = [];
let userSeq = [];

let btns = ['btn1', 'btn2', 'btn3', 'btn4'];

let start = false;
let level = 0;

let h2 = document.querySelector('h2');
// let btn = document.querySelector('button'); 


document.addEventListener('keypress', function()
{
    if(start == false)
    {
        console.log('Game is started');
        start = true;
    levelUp();
    }
}); 

function levelUp()
{
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`; 

    // random button
    let randIx = Math.floor(Math.random()*4);
    let randColor = btns[randIx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    // console.log(randBtn);
    // console.log(randIx);
    // console.log(randColor);
    gameFlash(randBtn);
}

//Here btn is a local argument for function flash not related to class btn.
//Here all btn are used are local variable sof there function.
function userFlash(btn)
{
    btn.classList.add('userFlash');
    setTimeout(function()
    {
        btn.classList.remove('userFlash');
    }, 150); 
}

function gameFlash(btn)
{
    btn.classList.add('gameFlash');
    setTimeout(function()
    {
        btn.classList.remove('gameFlash');
    }, 50); 
}


function check(index)
{
    // console.log('current level:', level);

    if(gameSeq[index] === userSeq[index])
    {
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else
    {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to restart!`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = 'white'
        },200)
        reset();
    }
}

 
function press()
{
    console.log(this);
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    check(userSeq.length-1);
}

let allbtn = document.querySelectorAll('.btn');
for(btn of allbtn)
{
    btn.addEventListener('click',press);
}

function reset()
{
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}