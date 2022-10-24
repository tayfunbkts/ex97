const result = document.getElementById("result");
const ask = confirm('🍻 Bira İçelim mi? 🍻')

if(ask){
    
    result.innerHTML = `<div class="buttonHolder">
    <button class="button tick" id="sali"></button>
    <button class="button cross" id="cars"></button>
  </div>`
}else{
    result.innerHTML = `<h1>🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻</h1> <br>
    <h1>Bunu duyduğuma üzüldüm</h1>`
}

const buttonSal = document.getElementById('sali')
const buttonCar = document.getElementById('cars')

buttonSal.addEventListener('click', function(){
    result.innerHTML =  `<div>
    <h1> Tamamdır Salı günü görüşüyoruz
  </div>`
})

buttonCar.addEventListener('click', function(){
    result.innerHTML =  `<div>
    <h1> Tamamdır Çarşamba günü görüşüyoruz
  </div>`
})

