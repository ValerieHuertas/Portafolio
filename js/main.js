function interfaz() {
    const hojaEstilo = document.getElementById("hoja-estilo");

    if (hojaEstilo.getAttribute("href") === "css/style.css") {
        hojaEstilo.setAttribute("href", "css/stylelight.css");
    } else {
        hojaEstilo.setAttribute("href", "css/style.css");
    }

    const btnInterfaz = document.getElementById("btn-interfaz");
    
    if (btnInterfaz.getAttribute("src") === "img/sol.png") {
        btnInterfaz.setAttribute("src", "img/luna.png");
    } else {
        btnInterfaz.setAttribute("src", "img/sol.png");
    }
}
