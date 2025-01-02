const body = document.querySelector('body')
const boxes = document.querySelectorAll('.box');
const h1 = document.querySelector('h1');
const restart = document.querySelector('.restart');
let count = 1
let num = parseInt(Math.random()*10 + 1);
h1.innerText = `Find number ${num} in the box`;

boxes.forEach((box,index)=>{
    let randNum = parseInt(Math.random()*10 + 1);
    box.innerText = randNum;
    box.addEventListener('click',(e)=>{
        
        if(count<2){
            count++;
            if(num == randNum){
                boxes.forEach((colorBox)=>{
                colorBox.style.backgroundColor = 'green';
                h1.innerText = 'You chose the right box';
            });
            }else{
                boxes.forEach((colorBox)=>{
                colorBox.style.backgroundColor = '#bc4749';
                body.style.backgroundColor = '#212529';
                h1.innerText = 'You chose the wrong box';
            });
            }
        }
    });
});

restart.addEventListener('click',()=>{
    window.location.reload()
})
