let boxes = document.querySelectorAll(".box");
let newbtn = document.querySelector("#newbtn");
let reset=document.querySelector("#reset");
let msg=document.querySelector(".msg");
let msgcontainer=document.querySelector(".msg-container");


let winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

turn0 = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {
            box.innerText = "O"
            turn0 = false
        }
        else {
            box.innerText = "X"
            turn0 = true
        }
        box.disabled = true
        checkwinner();

    });
});
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const winner = (winplayer)=>{
      msg.innerText=`Congrats , Winner is ${winplayer}`
      msgcontainer.classList.remove("hide")
      disablebox();
       
}
const checkwinner= () => {
    for (let pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText
      
        if(pos1val !="" && pos2val !="" && pos3val!=""){
            if(pos1val == pos2val && pos2val == pos3val){
                console.log("winner",pos1val);
                winner(pos1val);
            }
        }
    }
}

const resetgame = ()=>{
    turn0=true;
    enablebox();
    msgcontainer.classList.add("hide");
}

newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);