const menuBtn = document.querySelector('.open-nav');
const closeBtn = document.querySelector('.close-btn');
const menu = document.querySelector('.open-menu-sect');
const header = document.querySelector('header');
const main = document.querySelector('main');


menuBtn.onclick=()=>{
    if(menu.style.display === 'none' || menu.style.display === ''){
        menu.style.display = "flex";
        header.style.display = "none";
        main.style.display = "none";
    }else{
        menu.style.display = "none";
        header.style.display = "flex";
        main.style.display = "flex";    
    }
}

closeBtn.onclick=()=>{
    if(menu.style.display === 'flex'){
        menu.style.display = "none";
        header.style.display = "flex";
        main.style.display = "flex";           
    }else{
        menu.style.display = "flex";
        header.style.display = "none";
        main.style.display = "none";
    }
}