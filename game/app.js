let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msgContainer")
let msg = document.querySelector("#msg");

let turnO = true; // playerO, playerX

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

let clicks = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        clicks++;
        if (turnO) {  // player O
            box.innerText = "O";
            turnO = false;
        }
        else { // player X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    resetbtn.classList.remove("hide");
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const showWinner = (Winner) => {
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    resetbtn.classList.add("hide");
};

const checkWinner = () => {
    for (const pattern of winPatterns) {
    
        let pos1Val = boxes[pattern[0]].innerText; 
        let pos2Val = boxes[pattern[1]].innerText; 
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val);
            }
        } 

        if(clicks == 9){
            msg.innerText = "DRAW";
            msgContainer.classList.remove("hide");
        }

    }
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);

