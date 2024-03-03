const colors=["green","red","rgba(133,122,200)","#f15025"]
const btn = document.getElementById(`btn`);
const color= document.getElementsByClassName(`color`);

btn.addEventListener('click',()=>{
    // console.log(document.body);
    // get random number between 0-3
    const randomNumber =getRandomNumber()  ;
    console.log(randomNumber) ;
    document.body.style.backgroundColor = colors[randomNumber];

})


getRandomNumber= ()=>{
    return Math.random() ;
}

console.log("Access Granted!");