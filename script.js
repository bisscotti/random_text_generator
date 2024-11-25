const generateRandom = num => {
    return Math.floor(Math.random()* num);
}


const winner = {
    firstNumber: [1 , 3 , 5, 7, 9],
    secondNumber: [1 , 3 , 5, 7, 9],
    thirdNumber: [1 , 3 , 5, 7, 9]
}
const randomFirst = winner.firstNumber[generateRandom(winner.firstNumber.length)];
const randomSecond = winner.secondNumber[generateRandom(winner.secondNumber.length)];
const randomThird = winner.thirdNumber[generateRandom(winner.thirdNumber.length)];
for(let i in winner){
    switch(i){
        case 'firstNumber':
            console.log(`Your 1st number is: ${randomFirst}`);
            break;
        case 'secondNumber':
            console.log(`Your 2nd number is: ${randomSecond}`);
            break;
        case 'thirdNumber':
            console.log(`Your 3nd number is: ${randomThird}`);
            break;
    }
}
if (randomFirst === randomSecond && randomSecond === randomThird){
    console.log(`Congratulations!!! It's your Lucky day 🎆✨💥`);
}else if (randomFirst === randomSecond || randomSecond === randomThird || randomFirst === randomThird){
    console.log(`Nice try, you almost won, let's give it a shot again 😉`);
}else {
    console.log(`What an unluck, but don't be sad, you will definitely win! 🤩`);
}
