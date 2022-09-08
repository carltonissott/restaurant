function menuPageLoad() {
    const container = document.querySelector('.text')
    
    container.innerHTML=
    `<div class="menuitems">
        <ul>
            <li>ESPRESSO</li>
            <li>SHORT BLACK</li>
            <li>LONG BLACK</li>
            <li>MACCHIATO</li>
            <li>FLAT WHITE</li>
            <li>CAPPUCCINO</li>
            <li>LATTE</li>
        </ul>
    </div>
    <div class="prices">
        <ul>
            <li>$2.00</li>
            <li>$2.50</li>
            <li>$2.50</li>
            <li>$3.00</li>
            <li>$3.00</li>
            <li>$3.00</li>
            <li>$3.00</li>

        </ul>
    </div>`
    container.classList.remove('pageloadtext')
    container.classList.remove('pageloadabout')
    container.classList.add('pageloadmenu')
    }
    
    // const menuPage = menuPageLoad()
    
    const menu = document.querySelector(".menu")
    menu.addEventListener('click',()=>{
        menuPageLoad()
    })

    export default menu
    