// const body = document.querySelector('body');
// const newDiv = document.createElement('div')
// body.append(newDiv)
// newDiv.innerText = "ID Card"
// newDiv.style.backgroundColor = 'yellow'
// newDiv.className = "box"


let idForm = document.getElementById("idForm");

idForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let fullName = document.getElementById('Name');
    let idNumber = document.getElementById('idNumber');
    let address = document.getElementById('address');
    let funFact = document.getElementById('funFact');
    let info = [fullName.value, idNumber.value, address.value, funFact.value];

    console.log(info);
    const body = document.querySelector('body');
    const newDiv = document.createElement('div')
    body.append(newDiv)
    newDiv.className = "box";
    const newIDPic = document.createElement('div');
    newDiv.append(newIDPic);
    newIDPic.className = "idPic"

    
    for(let i = 0; i<info.length; i++){
        const newCardLine = document.createElement('div');
        newDiv.append(newCardLine);
        newCardLine.className = "cardLine";
        newCardLine.innerText = info[i];
    }
})