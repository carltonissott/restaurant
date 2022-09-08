console.log("hello world");
import './style.css';
import coffeeimage from './coffeeimage.svg';
import homePage, { initialPage } from "./pageload.js"
import menu from "./menu.js"
import about from "./about.js"

initialPage 

const image = document.createElement('img')
image.src = coffeeimage
document.querySelector('.maincontent').prepend(image)