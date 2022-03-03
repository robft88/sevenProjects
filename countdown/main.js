const d = document,
    limitDate = 'Jan 01 2023 00:00:00',
    $days = d.querySelector('.days'),
    $hours = d.querySelector('.hours'),
    $minutes = d.querySelector('.minutes'),
    $seconds = d.querySelector('.seconds'),
    $img = d.querySelector('.gift-img img'),
    $msg = d.querySelector('.message');

window.addEventListener('DOMContentLoaded', () => {
    const countdownDate = new Date(limitDate).getTime();
    let countdownTempo = setInterval(() => {
        let now = new Date().getTime(),
            limitTime = countdownDate - now,
            days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
            hours = ("0" + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2),
            minutes = ("0" + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2),
            seconds = ("0" + Math.floor(limitTime % (1000 * 60) / (1000))).slice(-2);
        $days.textContent = days;
        $hours.textContent = hours;
        $minutes.textContent = minutes;
        $seconds.textContent = seconds;
        if (limitTime < 0) {
            clearInterval(countdownTempo);
            $days.textContent = '00';
            $hours.textContent = '00';
            $minutes.textContent = '00';
            $seconds.textContent = '00';
            $img.src = 'img/hny2023.jpg';
            $msg.textContent = 'Happy New Year 2023!!'
        }
    }, 100);
})