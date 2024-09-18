let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let trunO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetgame = () => {
    trunO = true;
    enablebtn();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Clicked");
        if(trunO)
        {
            box.innerText = "O";
            trunO = false;
        }
        else
        {
            box.innerText = "X";
            trunO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const disablebtn = () => {
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const enablebtn = () => {
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congrats, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebtn();
}

const checkwinner = () => {
    for(let pattern of winPatterns)
    {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "")
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
                console.log("Winner",pos1val);
                showWinner(pos1val); 
            }

        }
    }
};

newGamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);Z