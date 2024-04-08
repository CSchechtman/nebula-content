let dynamicH1 = document.querySelector('.dynamicH1');
let clicked = true;

document.addEventListener("click", (e) => {
    if(e.target === dynamicH1 && clicked){
        const bodyElement = document.querySelector('body');
        if(bodyElement.style.backgroundColor !== "steelblue"){
            bodyElement.setAttribute('style', 'background-color: steelblue');
        }else{
            bodyElement.setAttribute('style', 'background-color: lightblue');
        }   
    }
})