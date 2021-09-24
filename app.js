const ham_menu = document.querySelector('.ham-menu');
const ham = document.querySelector('.ham');
const nav = document.querySelector('.navbar');
const navItem = document.querySelector('.navmenu');
const navitems = document.querySelectorAll('.nav-item');

let alert = false;

ham_menu.addEventListener('click', ()=> {
    if(!alert){
        ham.classList.add('open');
        nav.classList.add('open');
        navItem.classList.add('open');
        navitems.forEach(items => items.classList.add('open'));
        alert = true;
    }
    else{
        ham.classList.remove('open');
        nav.classList.remove('open');
        navItem.classList.remove('open');
        navitems.forEach(items => items.classList.remove('open'));
        alert = false;
    }
})

// fade

function func1(){
    const select = document.querySelector('.content')
    const selectposition = select.getBoundingClientRect().top;
    const selectAppear = window.innerHeight/1.4;
    
    if(selectposition < selectAppear){
        select.classList.add('fade')
    }
    }
    window.addEventListener('scroll', func1)
    
    
    function func2(){
        const select = document.querySelector('.img')
        const selectPosition = select.getBoundingClientRect().top;
        const selectAppeaar = window.innerHeight/1.2;
    
        if(selectPosition < selectAppeaar){
            select.classList.add('fade2')
        }
    }
    window.addEventListener('scroll', func2)