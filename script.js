let randomNumber =Math.floor( Math.random() *100) +1
const input = document.querySelector ('#input')
const button = document.querySelector ('#btn')
const result = document.querySelector('#result')

btn.addEventListener('click', () => {
const userGuess = input.value

   if (!userGuess || userGuess <1 || userGuess >100 ) {
   result.innerText = 'ПИШИ ОТ 1 ДО 100😠!'
} else if(userGuess == randomNumber) {
   result.innerText = 'Поздравялем вы угадали число👍'

   setTimeout(() => {
   result.innerText = 'Играем еще😊'
input.value= ''
      randomNumber =Math.floor( Math.random() *100) +1
   }, 3000);

} else if (userGuess < randomNumber) {
   result.innerText = 'Больше'
}else {
   result.innerText = 'Меньше'
}
})