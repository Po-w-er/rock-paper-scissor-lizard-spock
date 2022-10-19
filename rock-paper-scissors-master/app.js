const overlay = document.querySelector('.overlay')
const ruleBtn = document.getElementById('rule')
const closeBtn = document.querySelector(".close-btn")
const scissor = document.querySelector(".scissor")
const spock = document.querySelector(".spock")
const paper = document.querySelector(".paper")
const lizard = document.querySelector(".lizard")
const rock = document.querySelector(".rock")
const mainSection = document.querySelector(".hero")
const section = document.querySelector(".section")
const youPlayed = document.querySelector(".playerPicked")
const gameThrow = [
    'rock', 'scissor', 'paper', 'spock', 'lizard'
]
let myThrow;
let answer;

function didPlayerWin(playerThrow, Throw){
    if(playerThrow === "rock" && (Throw ==="scissor" || Throw === "lizard") ){
         answer = "you win"
         return answer
        };
    if(playerThrow ==="rock" && (Throw === "paper" || Throw === "spock") ){
        answer = "you lose"
        return answer
    };
    if(playerThrow === "scissor" && (Throw === "paper" || Throw === "lizard") ){
         answer = "you win"
         return answer
        };
    if((playerThrow === "scissor" && Throw === "spock") || (playerThrow === "scissor" && Throw === "rock") ){
        answer = "you lose"
        return answer
    };
    if(playerThrow === "paper" && (Throw === "spock" || Throw === "rock")){
        answer = "you win"
        return answer
    };
    if(playerThrow === "paper" && (Throw === "scissor" || Throw === "lizard")){
        answer = "you lose"
        return answer
    };
    if(playerThrow === "spock" && (Throw === "scissor" || Throw === "rock")){
        answer = "you win"
        return answer
    } else if(playerThrow === "spock" && (Throw === "paper" || Throw === "lizard")){
        answer = "you lose"
        return answer
    };
    if(playerThrow === "lizard" && (Throw === "paper" || Throw === "spock")){
        answer = "you win"
        return answer
    } else if(playerThrow === "lizard" && (Throw === "scissor" || Throw === "rock")){
        answer = "you lose"
        return answer
    };
     return "tie"
}


function player2(){
    const randomThrow = Math.floor(Math.random() * gameThrow.length)
    const computerThrow = gameThrow[randomThrow]
    return computerThrow
}






function playGame(){
    let computerPick;
    let didYouWin = false;
     
    scissor.addEventListener('click',()=>{
            myThrow = "scissor"
            computerPick = player2()
            let whatHappened = didPlayerWin(myThrow,computerPick)
            mainSection.classList.add("hide")
            youPlayed.classList.remove("hide")
            youPlayed.innerHTML = `
                    <div class="played-container ">
                    <div class="userBtn">
                    <h1> You picked </h1>
                    <button class="${myThrow} large" type="button"> <img class="${myThrow}-svg" src="images/icon-${myThrow}.svg" alt=""></button></div>
                    <div class="play-again"><h1>${whatHappened} </h1>
                    <button class="play-again-btn" type="button"> play again </button>
                    </div>
                    <div class="playerBtn">
                    <h1>The house picked</h1> 
                    <button class="${computerPick} large" type="button"> <img class="${computerPick}-svg" src="images/icon-${computerPick}.svg" alt=""></button></div>
                </div>
            `
            const playAgainBtn = document.querySelector(".play-again-btn")
             playAgainBtn.addEventListener("click", () => {
                youPlayed.classList.add("hide")
                mainSection.classList.remove("hide")
               
             })
            if(whatHappened === "you win"){
                didYouWin = true
            } else if(whatHappened === "you lose"){
                 didYouWin = false
            }else{
            return null
        }
            score(didYouWin)
          
          
    })
    
    rock.addEventListener('click',()=>{
        myThrow = "rock"
        computerPick = player2()
        let whatHappened = didPlayerWin(myThrow,computerPick)
        mainSection.classList.add("hide")
        youPlayed.classList.remove("hide")
        youPlayed.innerHTML = `
                <div class="played-container ">
                <div class="userBtn">
                <h1> You picked </h1>
                <button class="${myThrow} large" type="button"> <img class="${myThrow}-svg" src="images/icon-${myThrow}.svg" alt=""></button></div>
                <div class="play-again"><h1>${whatHappened} </h1>
                <button class="play-again-btn" type="button"> play again </button>
                </div>
                <div class="playerBtn">
                <h1>The house picked</h1> 
                <button class="${computerPick} large" type="button"> <img class="${computerPick}-svg" src="images/icon-${computerPick}.svg" alt=""></button></div>
            </div>
        `
        const playAgainBtn = document.querySelector(".play-again-btn")
         playAgainBtn.addEventListener("click", () => {
            youPlayed.classList.add("hide")
            mainSection.classList.remove("hide")
           
         })
         if(whatHappened === "you win"){
            didYouWin = true
        } else if(whatHappened === "you lose"){
             didYouWin = false
        }else{
            return null
        }
        score(didYouWin)
     
       
    })
    
    spock.addEventListener('click',()=>{
        myThrow = "spock"
        computerPick = player2()
        let whatHappened = didPlayerWin(myThrow,computerPick)
        mainSection.classList.add("hide")
        youPlayed.classList.remove("hide")
        youPlayed.innerHTML = `
                <div class="played-container ">
                <div class="userBtn">
                <h1> You picked </h1>
                <button class="${myThrow} large" type="button"> <img class="${myThrow}-svg" src="images/icon-${myThrow}.svg" alt=""></button></div>
                <div class="play-again"><h1>${whatHappened} </h1>
                <button class="play-again-btn" type="button"> play again </button>
                </div>
                <div class="playerBtn">
                <h1>The house picked</h1> 
                <button class="${computerPick} large" type="button"> <img class="${computerPick}-svg" src="images/icon-${computerPick}.svg" alt=""></button></div>
            </div>
        `
        const playAgainBtn = document.querySelector(".play-again-btn")
         playAgainBtn.addEventListener("click", () => {
            youPlayed.classList.add("hide")
            mainSection.classList.remove("hide")
           
         })
         if(whatHappened === "you win"){
            didYouWin = true
        } else if(whatHappened === "you lose"){
             didYouWin = false
        }else{
            return null
        }
        score(didYouWin)
    
       
      
       
    })
    
    paper.addEventListener('click',()=>{
        myThrow = "paper"
        computerPick = player2()
        let whatHappened = didPlayerWin(myThrow,computerPick)
        mainSection.classList.add("hide")
        youPlayed.classList.remove("hide")
        youPlayed.innerHTML = `
                <div class="played-container ">
                <div class="userBtn">
                <h1> You picked </h1>
                <button class="${myThrow} large" type="button"> <img class="${myThrow}-svg" src="images/icon-${myThrow}.svg" alt=""></button></div>
                <div class="play-again"><h1>${whatHappened} </h1>
                <button class="play-again-btn" type="button"> play again </button>
                </div>
                <div class="playerBtn">
                <h1>The house picked</h1> 
                <button class="${computerPick} large" type="button"> <img class="${computerPick}-svg" src="images/icon-${computerPick}.svg" alt=""></button></div>
            </div>
        `
        const playAgainBtn = document.querySelector(".play-again-btn")
         playAgainBtn.addEventListener("click", () => {
            youPlayed.classList.add("hide")
            mainSection.classList.remove("hide")
           
         })
         if(whatHappened === "you win"){
            didYouWin = true
        } else if(whatHappened === "you lose"){
             didYouWin = false
        }else{
            return null
        }
        score(didYouWin)
       
        
    })
    
    lizard.addEventListener('click',()=>{
       myThrow = "lizard"
       computerPick = player2()
       let whatHappened = didPlayerWin(myThrow,computerPick)
       mainSection.classList.add("hide")
       youPlayed.classList.remove("hide")
       youPlayed.innerHTML = `
               <div class="played-container ">
               <div class="userBtn">
               <h1> You picked </h1>
               <button class="${myThrow} large" type="button"> <img class="${myThrow}-svg" src="images/icon-${myThrow}.svg" alt=""></button></div>
               <div class="play-again"><h1>${whatHappened} </h1>
               <button class="play-again-btn" type="button"> play again </button>
               </div>
               <div class="playerBtn">
               <h1>The house picked</h1> 
               <button class="${computerPick} large" type="button"> <img class="${computerPick}-svg" src="images/icon-${computerPick}.svg" alt=""></button></div>
           </div>
       `
       const playAgainBtn = document.querySelector(".play-again-btn")
        playAgainBtn.addEventListener("click", () => {
           youPlayed.classList.add("hide")
           mainSection.classList.remove("hide")
          
        })
        if(whatHappened === "you win"){
            didYouWin = true
        } else if(whatHappened === "you lose"){
             didYouWin = false
        }else{
            return null
        }
        score(didYouWin)
     
       
    })

   
 
}

playGame()
const number  = document.querySelector(".count")
// let number = 3
number.textContent = 1
function score(value){
 
    if(value === true){
        if( number.textContent <= 11){
            return number.textContent++
         } else if(number.textContent == 12 ){
            return "you win, play again"
         }
    } 
    if( value === false){
        if( number.textContent >= 1 ){
            return number.textContent--
         } else if(number.textContent == 0){
            return "you lose, play again"
         }
    }
     
    
}

ruleBtn.addEventListener('click',()=>{
    overlay.classList.add("add")
})

closeBtn.addEventListener('click', () =>{
    overlay.classList.remove("add")
})