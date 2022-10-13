const result = document.querySelector(".result")
const random = document.querySelector(".random")
let chance = document.querySelector(".chance");
let score = document.querySelector(".score");
console.log(chance, score)
const btn1 = document.querySelector(".btn-1")
const btn2 = document.querySelector(".btn-2")
const btn3 = document.querySelector(".btn-3")
const btns = document.querySelectorAll(".btn")
const img1 = document.getElementById("1");

let rock = 1;
let paper = 2;
let scissor = 3;
const img = [
    "rock.png",
    "paper.png",
    "scissor.png"
];
const img2 = [
    "scissor.png",
    "rock.png",
    "paper.png"
]
let gamescore = 0;
let chanceplayed = 0;
let images = "rock.png"
Array.from(btns).forEach(btn => {
    btn.addEventListener('click', (e) => {
        let num = Math.floor(Math.random()*3 +1);
        
        if(e.target.id == num)
        {
           gamescore++;
            chanceplayed++;
            console.log(score);
            console.log(num)
            result.innerHTML = `<img src="${img[e.target.id -1]}" alt="" style="border-radius:50%">`;
            random.innerHTML = `<img src="${img2[num -1]}" alt="" style="border-radius:50%">`;
            console.log(img[num]);
            score.innerHTML = gamescore;
            chance.innerText = chanceplayed
        }
        else{
            
            chanceplayed++;
            score.innerHTML = gamescore;
            chance.innerText = chanceplayed
            result.innerHTML = `<img src="${img[e.target.id -1]}" alt="" style="border-radius:50%">`;
            random.innerHTML = `<img src="${img2[num -1]}" alt="" style="border-radius:50%"> `;
            console.log(e.target.id)
            console.log(score);
            console.log(num)
           
        }
        score.innerText = gamescore;
        chance.innerText = chanceplayed
    })
})
