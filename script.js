const TIMER = document.querySelector('.timer');
let circleOne = document.querySelector('.circle')
let circle = document.querySelector('.circle__time');
let input = document.querySelector('.input')
let wrapper = document.querySelector('.wrapper')
let inpSeconds = document.querySelector('.time__sec')
let inpMinutes = document.querySelector('.time__min')
let pause = document.querySelector('.pause');
let reset = document.querySelector('.reset')


TIMER.addEventListener('click', function(){
    if(input.value == ''){
        input.classList.toggle('unrest');
    }else{
        createTimer()
    }
})

function createTimer(){
    wrapper.classList.add('puls');
    circleOne.classList.add('puls');
    circle.classList.add('start');
    let startCircle = document.querySelector('.start')
    
    let i = input.value;
    let sec = i * 60;
    input.value = ''

    /*круговая диаграмма*/
    let progress = sec / 100 * 1;
    interval = setInterval(function(){
        progress++;
        startCircle.style.background = 'conic-gradient(var(--color-1)' + `${progress}%, transparent 0)`;
        timeUpdate()

        if(sec < 0){
            wrapper.classList.remove('puls');
            startCircle.style.background = 'none';
            clearInterval(interval)
            let ringTimer = new Audio()
            ringTimer.src = 'bell.mp3'
            ringTimer.play()
        }
    }, 1000);
    reset.addEventListener('click', function(){
        clearInterval(interval)
    })

    function timeUpdate(){
        const minuts = Math.floor(sec / 60);
        let seconds = sec % 60;
        inpMinutes.innerHTML = String(minuts).padStart(2, '0')
        inpSeconds.innerHTML = String(seconds).padStart(2, '0')
        sec--
    }
}

