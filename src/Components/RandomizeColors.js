import React from 'react'

export default function RandomizeColors() {
    
    function getRandomColor(){
        let letters = "0123456789ABCDEF";
        let colorCode = "#";
        for(let i=0; i<8; i++)
        {
            colorCode += letters[Math.floor(Math.random()*16)];
        }
        return colorCode;
    }

    const randomize = (e)=>{
        console.log(getRandomColor());
    let getBody = document.querySelector("body");
    getBody.style.backgroundColor = getRandomColor();
    let getButton = e.target;
    getButton.style.backgroundColor = getRandomColor();
    }

  return (
    <div>
      <button onClick={randomize}>Randomize Color</button>
    </div>
  )
}
