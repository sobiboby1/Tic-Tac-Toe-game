let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.reset');
let turn0 = true;

const winspatt = [ 
    [0,1,2], [0,3,6], [0,4,8],
    [1,4,7], [2,5,8], [2,4,6],
    [3,4,5], [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "X";
            turn0 = false;
        } else {
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const checkwinner = () => {
    for (let pattern of winspatt) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner: " + pos1);
                disablebox();
            }
        }
    }
};

const disablebox = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turn0 = true;
});
