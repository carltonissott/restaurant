function initialPageLoad() {
const container = document.querySelector('.text')

container.innerHTML='<h3>Your new favorite place to drink coffee...</h3>'
container.classList.add('pageloadtext')
container.classList.remove('pageloadmenu')
container.classList.remove('pageloadabout')
}

const initialPage = initialPageLoad()

const homePage = document.querySelector(".home")
    homePage.addEventListener('click',()=>{
        initialPageLoad()
    })

export {homePage,initialPage}
