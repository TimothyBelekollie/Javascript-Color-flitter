const colors=["green","red","rgba(133,122,200)",'#f15025',"orange","purple","blue"];


const btn=document.getElementById('btn');
const color =document.querySelector('.color');

btn.addEventListener('click',()=>{

    // get a random number between 0 and 3
    const randomNumber=getRandomNumb();
   // console.log(randomNumber);
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];

});

function getRandomNumb(){
    return Math.floor(Math.random()*colors.length);
}