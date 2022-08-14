var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];
const e1 = document.getElementById('entry')
const b1 = document.getElementById('btn1')
const select = document.getElementById('cars')

modalBtn.addEventListener('click',openModal);

function openModal(){
    modal.style.display = 'block';
}

closeBtn.addEventListener('click',closeModal);

function closeModal(){
    modal.style.display = 'none';
}

window.addEventListener('click',outsideClick);

function outsideClick(s){
    if(s.target== modal){
        modal.style.display = 'none';
    }
    };

// b1.addEventListener('click',()=>{
//     console.log('button:',state.input1)
// })
// const state = {
//     input1:'',
// }
// const box1 = document.getElementById('box1')
// box1.addEventListener('input',(event)=>{
    // state.input1 = event.target.value
// })

const generateCard = (item)=>{
    let output = `<div class="card">
    
    <h1>${item.category_type}</h1>
    <p>${item.transaction_amount}</p>
    </div>`
    return output
}

const getData =  async ()=>{
    const res = await fetch('http://localhost:5000')
    const data = await res.json()
    console.log(data)
    const{categories,expenses} = data
    var innerHTML=''
    expenses.forEach((item)=>{
        innerHTML = innerHTML + generateCard(item)
    })
    e1.innerHTML = innerHTML
    
    var innerHTML1 = ''
    categories.forEach((item)=>{
        innerHTML1 = innerHTML1 + `<option value="${item}">${item}</option>`
    })
    select.innerHTML = innerHTML1
    return data
}

const dataOut = getData()
