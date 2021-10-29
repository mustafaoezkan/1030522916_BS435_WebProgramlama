let indexArr = [];
let isClicked = 0;

export const chooseRandomNumber = () => {
    document.getElementById("img0").style.display = "inline";
    document.getElementById("img1").style.display = "inline";
    document.getElementById("img2").style.display = "inline";
    document.getElementById("areaId").style.display = "inline";

    // create random number
    indexArr[0] = Math.floor(Math.random() * 2) + 1;
    if (indexArr[0] === 2) {
        indexArr[1] = 1;
        indexArr[2] = 1;
    } else {
        indexArr[1] = Math.floor(Math.random() * 2) + 1;
        if (indexArr[1] === 2) {
            indexArr[2] = 1;
        } else {
            indexArr[2] = 2;
        }
    }
    console.log(indexArr);
}




export function newPuzzle() {
    document.getElementById("img0").src = "card.jpg";
    document.getElementById("img1").src = "card.jpg";
    document.getElementById("img2").src = "card.jpg";
}


// increase counter
export const isClickedCounter = () => {
    ++isClicked;
    checkTwoPress();
}
// check img and show alert and show img
export const clickedImg0 = () => {
    console.log("tıklandı");

    if (indexArr[0] === 2 && isClicked < 3) {
        document.getElementById("img0").src = "https://i.hizliresim.com/gyj9rks.png";
        alert("Congrats! You found the cat!");
        refreshPage();
    } else if (indexArr[0] === 1 && isClicked < 3) {
        document.getElementById("img0").src = "https://i.hizliresim.com/rajrm65.png";
    }
}

export const clickedImg1 = () => {
    if (indexArr[1] === 2 && isClicked < 3) {
        document.getElementById("img1").src = "https://i.hizliresim.com/gyj9rks.png";
        alert("Congrats! You found the cat!");
        refreshPage();
    } else if (indexArr[1] === 1 && isClicked < 3) {
        document.getElementById("img1").src = "https://i.hizliresim.com/rajrm65.png";
    }
}

export const clickedImg2 = () => {
    if (indexArr[2] === 2 && isClicked < 3) {
        document.getElementById("img2").src = "https://i.hizliresim.com/gyj9rks.png";
        alert("Congrats! You found the cat!");
        refreshPage();
    } else if (indexArr[2] === 1 && isClicked < 3) {
        document.getElementById("img2").src = "https://i.hizliresim.com/rajrm65.png";
    }
}
// check two press
const checkTwoPress = () => {
    if (isClicked == 3) {
        alert("Game is over!!");
        // refresh page
        refreshPage();

    }
}


export const refreshPage = () => {
    location.reload();
}

