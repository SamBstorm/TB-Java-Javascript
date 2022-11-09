const pdts_table_html = document.getElementById("products-table");
const cart_table_html = document.getElementById("cart-table");
const cart_total_html = document.getElementById("cart-total");

let pdt_names = [
    "Chaise",
    "Meuble TV",
    "Table"
];

let pdt_prices = [
    25,
    150,
    250
];

const add_pdt_tr = function(name, price){
    let pdt_tr_html = add_tr(name,price, pdts_table_html);
    let pdt_btn_td_html =document.createElement('td');
    pdt_tr_html.appendChild(pdt_btn_td_html);
    let add_pdt_btn_html = document.createElement('button');
    add_pdt_btn_html.innerText = "Ajouter"
    add_pdt_btn_html.addEventListener('click', function(event){
        console.log(event);
        add_cart_tr(name,price);
    })
    pdt_btn_td_html.appendChild(add_pdt_btn_html);
}


const add_cart_tr = function(name, price){
    add_tr(name,price, cart_table_html);
}

const add_tr = function(name, price, table){
    let tr_html = document.createElement('tr');
    table.appendChild(tr_html);
    let name_td_html =document.createElement('td');
    let price_td_html =document.createElement('td');
    tr_html.appendChild(name_td_html);
    tr_html.appendChild(price_td_html);
    name_td_html.innerText = name;
    price_td_html.innerText = price;
    return tr_html;
}

for (let i = 0; i < pdt_names.length; i++) {
    const name = pdt_names[i];
    const price = pdt_prices[i];
    add_pdt_tr(name, price);
}