const div_square = document.querySelector('.square');
const main = document.querySelector('main');

main.addEventListener('mousemove',function(event){
    div_square.style.top = `${event.clientY}px`;
    div_square.style.left = `${event.clientX}px`;
});


