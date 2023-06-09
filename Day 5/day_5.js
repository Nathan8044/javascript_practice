

bag_id = document.getElementById("final_price").innerHTML;


function add_price(price) {
    var original_price = document.getElementById("final_price").innerHTML;
    final_price = parseInt(original_price) + parseInt(price);
    document.getElementById("final_price").innerHTML = final_price;

}

function reset_price() {
    document.getElementById("final_price").innerHTML = 0;
}