const urls_html = document.querySelector('#urls');
const valid_urls_html = document.querySelector('#valid_urls');
const urls ="http://www.monsite.codePays\nhttp://www.google.be\nhttps://www.mon.google.be\nhttps://google.be\nhttp://www.yahoo.com\nhttp://www.amazon.nl\nhttp://www..nl\n123http://www.amazon.nl\nhttpssss://yahoo.com\nhttp://.yahoo.com";
console.log(urls);
urls_html.innerText = urls;

// let regex = new RegExp("^https?:\/\/(?:www\.)?(?:[a-z]+(?:\.[a-z]+)?)+\.[a-z]{2,3}$","gmi");
let regex = /^https?:\/\/(?:www\.)?(?:[a-z]+(?:\.[a-z]+)?)+\.[a-z]{2,3}$/gmi;

let valid_urls = urls.match(regex);
console.log(valid_urls);

valid_urls.forEach((url)=>valid_urls_html.innerText += `${url}\n`);
