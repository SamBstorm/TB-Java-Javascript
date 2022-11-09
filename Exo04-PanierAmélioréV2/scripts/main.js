const pdt_table_html = document.getElementById("products-table");
const cart_table_html = document.getElementById("cart-table");
const cart_total_html = document.getElementById("cart-total");

let products = [
    {
        name: "Chaise",
        price : 25
    },
    {
        name: "Table",
        price : 150
    },
    {
        name: "Meuble TV",
        price : 250
    }
];

let cart = [];

const add_tr = function(product,table){
    let tr_html = document.createElement('tr');
    table.appendChild(tr_html);
    let td_name_html = document.createElement('td');
    let td_price_html = document.createElement('td');
    tr_html.appendChild(td_name_html);
    tr_html.appendChild(td_price_html);
    td_name_html.innerText = product.name;
    td_price_html.innerText = product.price;
    return tr_html;
}

const add_pdt_tr = function(product){
    let pdt_tr_html = add_tr(product, pdt_table_html);
    let td_buttons_html = document.createElement('td');
    pdt_tr_html.appendChild(td_buttons_html);
    let btn_add_html = document.createElement('button');
    btn_add_html.innerText = "Ajouter au panier";
    btn_add_html.addEventListener('click', function(event){
        add_in_cart(product);
        refresh_cart();
    });
    td_buttons_html.appendChild(btn_add_html);
    let btn_del_html = document.createElement('button');
    btn_del_html.innerText = "Retirer du panier";
    btn_del_html.addEventListener('click', function(event){
        remove_in_cart(product);
        refresh_cart();
    });
    td_buttons_html.appendChild(btn_del_html);
}

const add_cart_tr = function(pdt_qty){
    let cart_tr_html = add_tr(pdt_qty.product, cart_table_html);
    let td_qty_html = document.createElement('td');
    cart_tr_html.appendChild(td_qty_html);
    td_qty_html.innerText = pdt_qty.qty;
}

const add_in_cart = function(product){
    let pdt_found = false;
    for (const pdt_qty of cart) {
        if(pdt_qty.product.name == product.name){
            pdt_found = true;
            pdt_qty.qty ++;
        }
    }
    if(!pdt_found) cart.push({product : product, qty : 1});
}

const remove_in_cart = function(product){
    let pdt_found = false;
    for (const pdt_qty of cart) {
        if(pdt_qty.product.name == product.name){
            pdt_found = true;
            if(pdt_qty.qty == 1)
                cart = cart.filter(p => p != pdt_qty);
            else
                pdt_qty.qty --;
        }
    }
}

const refresh_cart = function(){
    let total = 0;
    cart_table_html.innerHTML = "";
    for (const pdt_qty of cart) {
        add_cart_tr(pdt_qty);
        total += pdt_qty.product.price * pdt_qty.qty;
    }
    cart_total_html.value = total;
}

for (const product of products) {
    add_pdt_tr(product);
}