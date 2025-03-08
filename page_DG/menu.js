let btnMenu = document.getElementById('btn-abrir');

let menu = document.getElementById('menu_mobile');

let logo = document.getElementById('logo_contato_mobile')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abri-menu')
    
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abri-menu')
   
})