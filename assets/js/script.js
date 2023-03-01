const progress = document.querySelector('#progress')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    if(currentActive < circles.length){
        currentActive++
    }
    update()
})

prev.addEventListener('click', () => {
    if(currentActive > 1){
        currentActive--
    }
    update()
})

function update (){
    circles.forEach((element, index) => {
        if(index < currentActive){
            element.classList.add('active')
        }else{
            element.classList.remove('active')
        }
    })

    const active = document.querySelectorAll('.active')
    progress.style.width = (active.length-1) / (circles.length-1) * 100 + '%'


    if(currentActive === 1 ){
        prev.disabled = true
    }else if(currentActive === circles.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
}