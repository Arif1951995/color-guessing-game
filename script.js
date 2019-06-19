






let status = document.querySelector('.btns span');
status.innerHTML = '';
let squares = document.querySelectorAll('.square');
const randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
 
    
     return `rgb(${r}, ${g}, ${b})`
  }


 
 
for(let i = 0; i < squares.length; i++) {
   
    squares[i].style.backgroundColor = randomColor();
}



let  randomNum = Math.floor(Math.random() * 6);
let pickedColor = squares[randomNum].style.backgroundColor;
document.querySelector('h1').innerHTML = pickedColor;








 for(let i =0; i < squares.length; i++) {
    squares[i].addEventListener('click', function() {
      if(this.style.backgroundColor === pickedColor) {
            document.querySelector('header').style.backgroundColor = this.style.backgroundColor;
            for(let i = 0; i < squares.length; i++) {
               squares[i].style.backgroundColor = this.style.backgroundColor; 
           }
            status.innerHTML = 'Correct';
           
        }else {
           
            status.innerHTML ='Try Again';
            this.style.backgroundColor = 'white';
        }
    })
 }
 const reset = () => {
    status.innerHTML = '';
    document.querySelector('header').style.backgroundColor = 'rebeccapurple';
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = randomColor();
    }

      randomNum = Math.floor(Math.random() * 6);
 pickedColor = squares[randomNum].style.backgroundColor;
 }


 document.getElementById('newColors').addEventListener('click', reset);
 document.getElementById('playAgain').addEventListener('click', reset);
