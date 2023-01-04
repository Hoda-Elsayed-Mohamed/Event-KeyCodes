const key = document.querySelector('.key')
const eventKeyCode = document.querySelector('.keyCode')
const eventCode = document.querySelector('.code')
const showMe = document.querySelector('.showMe')
const results = document.querySelector('.show-keyCode')

window.addEventListener('keydown', getKeyCode)
function getKeyCode(e){
    showMe.style.display ='none'
    results.classList.remove('hidden')
    key.textContent = e.key === ' '? 'Space' : e.key
    eventKeyCode.textContent = e.keyCode
    eventCode.textContent = e.code
}