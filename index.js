const wrapper = document.getElementById('wrapper');

particlesJS.load('hero', 'assets/particles.json') 

let timeout = false;
let scrollPosition = 0;
//detecting scrolls to move progress
window.onwheel = (e) => {
    //creates slignt timeout to make sure not too much scrolling
    if (timeout) {
        setTimeout(() => timeout = timeout ? false : true, 1000)
        return;
    }
    //regex to remove all characters except for numbers and the - sign
    const previousScroll = wrapper.style.transform.replace(/[^0-9\-]+/g,'')
    if (e.deltaY < 0) {
        timeout = timeout ? false : true;
        //user scrolled up
        //makes sure user doesnt scroll past top of page
        if (Number(previousScroll) == 0) {
            return;
        }
        wrapper.style.transform = `translateY(${Number(previousScroll) + window.innerHeight}px)`;
        //keeps timeout for length of css animation
        setTimeout(() => timeout = timeout ? false : true, 1000)
    } else if (e.deltaY > 0){
        timeout = timeout ? false : true;
        //user scrolled down
        wrapper.style.transform = `translateY(${Number(previousScroll) - window.innerHeight}px)`;
        //keeps timeout for length of css animation
        setTimeout(() => timeout = timeout ? false : true, 1000)
    }
}