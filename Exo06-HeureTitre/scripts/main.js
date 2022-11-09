// setInterval(function(){set_hour_title();}, 1000);

// const set_hour_title = function () {
//     let today = new Date();
//     let title_html = document.querySelector('title');
//     title_html.innerText = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
// }

setTimeout(function(){set_hour_title();},1000);

const set_hour_title = function () {
    let today = new Date();
    let title_html = document.querySelector('title');
    title_html.innerText = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    setTimeout(function(){set_hour_title();},1000);
}