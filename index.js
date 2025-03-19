let buttonControl=document.getElementById('btn')
let spanControl=document.querySelector('.color')

let colors=["white","red","yellow","green","brown","purple"]
let len=colors.length-1

buttonControl.addEventListener('click',()=>{
    let index=generateRandomNumber()
    // alert(index)
    document.body.style.backgroundColor=colors[index]
    spanControl.innerHTML=colors[index]
})

function generateRandomNumber(){
    return Math.round(Math.random()*len)
}