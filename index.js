let buttons = document.querySelectorAll(".button");            
let resetBtn = document.querySelector(".reset");
let turn0 = true; 

const winPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]; 



buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
       if(turn0) {
        btn.innerText="0";         
        turn0=false;
        }
        else{
            btn.innerText="X";          
            turn0=true; 
        }
        btn.disabled = true;
        checkWinner();
    });
});


const checkWinner = ()=>{
    for(let pattern of winPatterns){            
      let pos1=buttons[pattern[0]].innerText;
      let pos2=buttons[pattern[1]].innerText;
      let pos3=buttons[pattern[2]].innerText; 
      if(pos1!="" && pos2!="" && pos3!=""){ 
        if(pos1==pos2 && pos2==pos3){
            document.querySelector("h2").innerText="Player "+pos1+" Wins!";
            buttons.forEach((btn) => {
            btn.disabled=true;
            });
        }
    }
 }
}

resetBtn.addEventListener("click",()=>{
    turn0=true;
    document.querySelector("h2").innerText="";
    for(let btn of buttons){
        btn.innerText="";
        btn.disabled=false;
    }
});
