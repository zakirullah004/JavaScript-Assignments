
const clock = document.querySelector('.clock');
const buttons = document.querySelector('.buttons')
const startstopBtn = document.querySelector('#startstopBtn');
const resetBtn = document.querySelector('#resetbtn');

let Timer;
let check = false;
let showtime;
let eclapsedTime = 0;

startstopBtn.addEventListener('click',function(e){
    if(!check){
        Timer = setInterval(updateTime,1000);
        startstopBtn.textContent = "Stop";
        resetBtn.classList.add('block');
        resetBtn.setAttribute('disabled',0)
        startstopBtn.classList.add('stop')
    }else{
        clearInterval(Timer);
        startstopBtn.textContent = "Start";
        startstopBtn.classList.remove('stop')
        resetBtn.classList.remove('block');
        resetBtn.removeAttribute('disabled',0)
    }
    check = !check;
});

function updateTime(){
    eclapsedTime++;
    const hour = Math.floor(eclapsedTime / 3600);
    const minutes = Math.floor((eclapsedTime % 3600) / 60);
    const seconds = Math.floor(eclapsedTime % 60);

    showtime = clock.querySelector('.time-display');

    showtime.textContent = `${String(hour).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`
};

resetBtn.addEventListener('click',function(){
    clearInterval(Timer);
    eclapsedTime = 0;
    startstopBtn.textContent = "Start";
    showtime.textContent = `00:00:00`;

})



