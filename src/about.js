function aboutLoad() {
    const container = document.querySelector('.text')
    
    container.innerHTML=
    `<h3>ABOUT US</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida urna vitae tellus fermentum, vitae tincidunt sem varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec luctus leo ut varius efficitur. Nam varius turpis ac condimentum imperdiet. Duis a orci sed ligula tempor finibus quis eget ligula. Morbi eget arcu faucibus, scelerisque leo nec, maximus nibh. Vestibulum ut dolor congue, facilisis neque vitae, feugiat est. Etiam vel ullamcorper odio. Aenean ut ipsum pharetra, facilisis mi tincidunt, maximus nisi. <br>
    
    Praesent condimentum varius lacus, vel feugiat ligula tristique ut. Mauris et lorem nunc. Mauris suscipit mauris est, vitae pulvinar nisl viverra egestas.
<br>

    Pellentesque eu dapibus nulla. Sed fermentum vitae justo id maximus. In at felis a enim sollicitudin interdum. Praesent et nulla ac leo vehicula fermentum. Nullam fringilla efficitur iaculis. Proin id augue scelerisque est aliquet fermentum eget non augue. Sed tempus dictum posuere. Cras tempor arcu ac lectus pharetra volutpat. Suspendisse maximus laoreet enim, eu bibendum urna cursus vel. Aenean eu feugiat urna, a rhoncus mi.</p>`
    container.classList.remove('pageloadtext')
    container.classList.remove('pageloadmenu')
    container.classList.add('pageloadabout')
    }
    

    
    const about = document.querySelector(".aboutus")
    about.addEventListener('click',()=>{
        aboutLoad()
    })

    export default about
    