num=10
function random(num){
    return (Math.floor(Math.random()*(num+1)))
}



btn=document.querySelector("#btn")

btn.addEventListener("click",()=>{
    rndclr=`rgb(${random(100)},${random(200)},${random(255)})`
    console.log(rndclr)

    document.body.style.backgroundColor=rndclr

})



{/* <button id="btn">Click Me</button>  */}


document.getElementById('btn').addEventListener('click', () => {
  console.log('Button clicked!');
//   log=console.log("Button clicked!")
//   document.write("Button clicked!")
});


document.getElementById('btn').addEventListener('mouseover', () => {
  console.log('Mouse is over the button');
//   document.body.appendChild("Mouse is over the button")
});


document.getElementById('btn').addEventListener('mouseout', () => {
  console.log('Mouse left the button');
//   document.body.appendChild("Mouse left the button")

});

document.getElementById("btn").addEventListener("dblclick",(e)=>{
    console.log("button was cliked twice")
    // document.body.appendChild("button was cliked twice")

})

document.getElementById("btn").addEventListener("mouseenter",(e)=>{
    console.log("mouse entered")
    // document.body.appendChild("mouse entered")

})

document.getElementById("btn").addEventListener("mouseup",(e)=>{
    console.log("mouse up",e)
    // document.body.appendChild("mouse up")
})


document.getElementById("btn").addEventListener("mousedown",(e)=>{
    console.log("mouse down",e)
    // document.body.appendChild("mouse down")
})

