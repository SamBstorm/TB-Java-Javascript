const pdt_table_html = document.getElementById("products-table");
const cart_table_html = document.getElementById("cart-table");
const cart_total_html = document.getElementById("cart-total");

let total = 0;
cart_total_html.value = total;

const add_tr = function(name, price, table){
    let tr_html = document.createElement('tr');
    table.appendChild(tr_html);
    let td_name = document.createElement('td');
    let td_price = document.createElement('td');
    tr_html.appendChild(td_name);
    tr_html.appendChild(td_price);
    td_name.innerText = name;
    td_price.innerText = price;
    td_name.classList.add("pdt_name");
    return tr_html;
}

const add_pdt_tr = function(name, price){
    let pdt_tr_html = add_tr(name,price, pdt_table_html);
    let buttons_td_html = document.createElement('td');
    pdt_tr_html.appendChild(buttons_td_html);
    let btn_add_html = document.createElement('button');
    let btn_del_html = document.createElement('button');
    buttons_td_html.appendChild(btn_add_html);
    buttons_td_html.appendChild(btn_del_html);
    btn_add_html.innerText = "Ajouter au panier";
    btn_del_html.innerText = "Retirer du panier";
    btn_add_html.addEventListener('click', function(event){
        let pdt_found = found_pdt(name);
        if (pdt_found) {
            let tr = pdt_found.parentElement;
            let td_qty = tr.children[2];
            let qty = parseInt(td_qty.innerText);
            td_qty.innerText = qty+1;
        }
        else{
            add_cart_tr(name,price);
        }
        total+=price;
        cart_total_html.value = total;
    });
    btn_del_html.addEventListener('click',function(event){
        let pdt_found = found_pdt(name);
        if(pdt_found){
            let tr = pdt_found.parentElement;
            let td_qty = tr.children[2];
            let qty = parseInt(td_qty.innerText);
            if(qty == 1)
                tr.remove();
            else
                td_qty.innerText = qty - 1;
            total-=price;
            cart_total_html.value = total;
        }        
    });
}

const add_cart_tr = function(name, price){
    let cart_tr_html = add_tr(name,price,cart_table_html);
    let qty_td_html = document.createElement('td');
    cart_tr_html.appendChild(qty_td_html);
    qty_td_html.innerText = 1;
}

const found_pdt = function (name) {
    let cart_tds_html = document.querySelectorAll("#cart-table td.pdt_name");
    for (const cart_td_html of cart_tds_html) {
        if(cart_td_html.innerText == name){
            return cart_td_html;
        }
    }
    return undefined;
}

let product_names =[
    "Chaise",
    "Table",
    "Meuble TV"
]
let product_prices =[
    25,
    150,
    250
]

for (let i = 0; i < product_names.length; i++) {
    const name = product_names[i];
    const price = product_prices[i];
    add_pdt_tr(name, price);
}