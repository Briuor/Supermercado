function btn1() {
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var element = document.getElementById("products");

    element.classList.add("display-1");
    btn2.classList.remove("active");
    btn1.classList.add("active");
    element.classList.remove("display-0");
    users.classList.add("display-0");
    users.classList.remove("display-1");
}

function btn2() {
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var element = document.getElementById("products");
    var users = document.getElementById("users");

    btn2.classList.add("active");
    btn1.classList.remove("active");
    element.classList.add("display-0");
    element.classList.remove("display-1");
    users.classList.add("display-1");
    users.classList.remove("display-0");
}
