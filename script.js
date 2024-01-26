const gameContainer=document.querySelector(".container"),
    userResult=document.querySelector(".user_result img"),
    cpuResult=document.querySelector(".cpu_result img"),
    result=document.querySelector(".result"),
    optionImages=document.querySelectorAll(".option_image"),
    user_output=document.querySelector(".user_result1"),
    cpu_output=document.querySelector(".cpu_result1"),
    reset=document.querySelector(".reset");
    
let cpuScore=0
let userScore=0
let gameIsOver = false;
user_output.textContent=0
cpu_output.textContent=0
// console.log(gameContainer,userResult,cpuResult,result,optionImages);
optionImages.forEach((image,index) => {
    image.addEventListener("click",(e)=>{
        if (gameIsOver) {
            return;
        }
        image.classList.add("active")

        optionImages.forEach((image2,index2) =>{
            index!==index2 && image2.classList.remove("active");
            
        });
        // Source of clicked Image
        let imgSrc=e.target.querySelector("img").src;
        // User Image to selected Image
        userResult.src=imgSrc;

        //Random number for cpu
        let rand=Math.floor(Math.random()*3);
        //Cpu Images array
        let cpuImage=["images/rock.png","images/paper.png","images/scissors.png"]
        // Set CPu image
        cpuResult.src=cpuImage[rand];
        let cpuOption=["R","P","S"][rand];
        let userOption=["R","P","S"][index]
        let outcomes={
            RR:"Draw",
            RP:"CPU",
            RS:"User",
            PR:"User",
            PP:"Draw",
            PS:"CPU",
            SR:"CPU",
            SP:"User",
            SS:"Draw",
        
        }
        
        let outComeValue=outcomes[userOption+cpuOption]
        
        //Display output
        result.textContent=userOption===cpuOption ? "Round Draw" : "Keep Going";
        if (outComeValue=="CPU"){
                cpuScore++;
                cpu_output.textContent=cpuScore;
        }
        else if(outComeValue=="User"){
            userScore++;
            user_output.textContent=userScore;
        }
        // console.log(outComeValue)
        if (cpuScore==5 && userScore<cpuScore){
            result.textContent="CPU Won!!";
            gameIsOver = true;
            setTimeout(resetGame, 5000);
        }
        else  if (userScore==5 && cpuScore<userScore){
            result.textContent="User Won!!";
            gameIsOver = true;
            setTimeout(resetGame, 5000);
        }

    });
}); 


function resetGame() {
    location.reload();
}

//Reset the Page
reset.addEventListener("click",(e)=>{
    location.reload()
    
});

