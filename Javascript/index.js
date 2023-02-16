function menuToggle(x) {
    x.classList.toggle("change");

    var menuList = document.getElementById("menu");    
    if (menuList.className == "menuOff")    
    {    
    
        menuList.className = "menuOn";    
    } else    
    {    
    
        menuList.className = "menuOff";  
}
}