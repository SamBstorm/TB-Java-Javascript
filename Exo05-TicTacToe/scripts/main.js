let current_class = "cross";

let divs_html = document.querySelectorAll('td>div');
for (const div_html of divs_html) {
    div_html.addEventListener('click', function(event){
        if(check_class(this)){
            this.classList.add(current_class);
            if(current_class == "cross")
                current_class = "circle";
            else
                current_class = "cross";
        }
    });
}

const check_class = function (td) {
    return !(td.classList.contains("circle") || td.classList.contains("cross"));
}