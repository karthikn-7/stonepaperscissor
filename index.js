


var stone = document.getElementById("stone")
var paper = document.getElementById("paper")
var scissor = document.getElementById("scissor")
var printad = document.getElementById("print")

var score = document.getElementById("score")
var computer = document.getElementById("computer")

var scorepoint = document.getElementById("scorepoint")

var result = 0;
if(result <0){
    alert("You lost the game!")
}





//stone

stone.addEventListener("click", function()
    {
        let stoneresult;
        let rn = Math.round(Math.random() *10 +2)
         console.log(rn)

         //computer
         if(rn >=0 && rn <=4){
            console.log("stone")
            stoneresult = "stone"
            computer.innerHTML = "Computer: Stone"
        }
        else if (rn >4 && rn <= 8){
            console.log("paper")
            stoneresult = "paper"
            computer.innerHTML = "Computer: Paper"
        }
        else if (rn >8 && rn <=12){
            console.log("scissor")
            stoneresult = "scissor"
            computer.innerHTML = "Computer: scissor"
        }
        

        //you
        if(stoneresult === "stone"){
            printad.innerHTML = "You: stone"
            score.innerHTML = result += 0
            
        }
        else if(stoneresult === "paper"){
            printad.innerHTML = "You: stone"
            score.innerHTML =result -=1
            
        }
        else if(stoneresult === "scissor"){
            printad.innerHTML = "You: stone"
            score.innerHTML = result += 1
            
        }
        
    }
)

//paper

paper.addEventListener("click", function()
    {
        let stoneresult;
        let rn = Math.round(Math.random() *10 +2)
         console.log(rn)

         //computer
         if(rn >=0 && rn <=4){
            console.log("stone")
            stoneresult = "stone"
            computer.innerHTML = "Computer: Stone"
        }
        else if (rn >4 && rn <= 8){
            console.log("paper")
            stoneresult = "paper"
            computer.innerHTML = "Computer: Paper"
        }
        else if (rn >8 && rn <=12){
            console.log("scissor")
            stoneresult = "scissor"
            computer.innerHTML = "Computer: scissor"
        }

        //you
        if(stoneresult === "stone"){
            printad.innerHTML = "You: paper"
            score.innerHTML = result += 1
            
        }
        else if(stoneresult === "paper"){
            printad.innerHTML = "You: paper"
            score.innerHTML =result +=0
            
        }
        else if(stoneresult === "scissor"){
            printad.innerHTML = "You: paper"
            score.innerHTML = result -= 1
            
        }
        
    }
)


//scissor

scissor.addEventListener("click", function()
    {
        let stoneresult;
        let rn = Math.round(Math.random() *10 +2)
         console.log(rn)

         //computer
         if(rn >=0 && rn <=4){
            console.log("stone")
            stoneresult = "stone"
            computer.innerHTML = "Computer: Stone"
        }
        else if (rn >4 && rn <= 8){
            console.log("paper")
            stoneresult = "paper"
            computer.innerHTML = "Computer: Paper"
        }
        else if (rn >8 && rn <=12){
            console.log("scissor")
            stoneresult = "scissor"
            computer.innerHTML = "Computer: scissor"
        }

        //you
        if(stoneresult === "stone"){
            printad.innerHTML = "You: scissor"
            score.innerHTML = result -= 1
            
        }
        else if(stoneresult === "paper"){
            printad.innerHTML = "You: scissor"
            score.innerHTML =result +=1
            
        }
        else if(stoneresult === "scissor"){
            printad.innerHTML = "You: scissor"
            score.innerHTML = result += 0
            
        }
        
    }
)


