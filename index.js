let values;
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let click = document.querySelector("a");

randomNoGenerator();
let randomDice1 = values[2];
let randomNo1 = values[0];

randomNoGenerator();
let randomDice2 = values[2];
let randomNo2 = values[0];

click.addEventListener("click",randomDice());
gameWinner()

function randomNoGenerator()
{
    let random= Math.floor(Math.random()*6)+1;
    let randomImg = "dice"+random+".png";   
    let source = "./images/"+randomImg;
    values = [random,randomImg,source]
    return values;
}

function randomDice()
{   
    img1.src = randomDice1;
    img2.src = randomDice2;
}

function gameWinner()
{
    if(randomNo1>randomNo2)
    {
        document.querySelector(".result").innerHTML = "🏴Player 1 Wins ✨ 🥳";
    }
    else if (randomNo2 > randomNo1)
    {
        document.querySelector(".result").innerHTML = "🏳️ Player 2 Wins ✨ 🥳";
    }
    else if(randomNo1===randomNo2)
    {
        document.querySelector(".result").innerHTML = "🪢It' a Tie (Draw) 🤔";
    }
    else
    {
        document.querySelector(".result").innerHTML = "There is some issue 😥😧 (Try Again or Reload)";
    }

}



