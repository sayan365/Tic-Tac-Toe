let boxes = document.querySelectorAll(".boxes");
let reset = document.querySelector(".resets");
let resets = document.querySelector(".reset-btn");
let msg = document.querySelector(".msgcon");
let msgt = document.querySelector(".msgt");
let game = document.querySelector(".Game");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const disabledboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
    msg.classList.remove("hide");  
};
const enablesdboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    } 
    msg.classList.add("hide");
    game.classList.remove("hide");   
};

const resetgame = () =>{
    enablesdboxes();
}

const showwinner = (winner) => {
    msgt.innerText = `Congratulations! Winner is ${winner}`;
    disabledboxes();
    game.classList.add("hide");
};
const showdraw = () => {
    msgt.innerText = "It's a Draw! 🤝";
    disabledboxes();
    game.classList.add("hide");
};
boxes.forEach((Box) => {
    Box.addEventListener("click", () => {
        if (turn0) {
            Box.innerText = "X";
            turn0 = false;
            Box.style.color = "red";
        } else {
            Box.innerText = "O";
            turn0 = true;
            Box.style.color = "black";
        }
        Box.disabled = true;

        checkwinner();
    });
});

const checkwinner = () => {
    for (let pettern of winPatterns) {
        let pos1v = boxes[pettern[0]].innerText;
        let pos2v = boxes[pettern[1]].innerText;
        let pos3v = boxes[pettern[2]].innerText;

        if(pos1v != "" && pos2v != "" && pos2v != ""){
            if( pos1v === pos2v && pos2v === pos3v){
                showwinner(pos1v);
                return;
            }
        }
    };

    let isDraw = true;
    boxes.forEach((box) => {
        if (box.innerText === "") {
            isDraw = false; // If any box is empty, it's not a draw
        }
    });

    if (isDraw) {
        showdraw();
    }
};

reset.addEventListener("click", resetgame);
resets.addEventListener("click", resetgame);