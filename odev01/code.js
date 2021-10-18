let indexArr = [];
let isClicked = 0;

// create random number
const chooseRandomNumbers = () => {
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
// increase counter
const isClickedCounter = () => {
    ++isClicked;
    checkTwoPress();
}
// check img and show alert
const clickedImg0 = () => {
    if (indexArr[0] === 2 && isClicked < 3) {
        alert("Congrats! You found the cat!");
        setTimeout(refreshPage(), 2000);
    }
}

const clickedImg1 = () => {
    if (indexArr[1] === 2 && isClicked < 3) {
        alert("Congrats! You found the cat!");
        setTimeout(refreshPage(), 2000);
    }
}

const clickedImg2 = () => {
    if (indexArr[2] === 2 && isClicked < 3) {
        alert("Congrats! You found the cat!");
        setTimeout(refreshPage(), 2000);
    }
}
// check two press
const checkTwoPress = () => {
    if (isClicked == 3) {
        alert("Game is over!!");
        // refresh page
        refreshPage();

    } else {

    }
}
// change img src to random numbers
const newPuzzleForImg0 = () => {
    if (indexArr[0] === 1) {
        document.getElementById("img0").src = "assets/dog.png";
    } else {
        document.getElementById("img0").src = "assets/cat.png";
    }
}

const newPuzzleForImg1 = () => {
    if (indexArr[1] === 1) {
        document.getElementById("img1").src = "assets/dog.png";
    } else {
        document.getElementById("img1").src = "assets/cat.png";
    }
}

const newPuzzleForImg2 = () => {
    if (indexArr[2] === 1) {
        document.getElementById("img2").src = "assets/dog.png";
    } else {
        document.getElementById("img2").src = "assets/cat.png";
    }
}

const refreshPage = () => {
    location.reload();
}

