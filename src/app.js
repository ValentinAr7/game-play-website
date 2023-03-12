import { page, render } from './lib.js'
import { logout } from './api/users.js'
import { getUserData } from './util.js'
const main = document.getElementById('main')

page(decorateContext);
page('/', () => console.log('Home'));

function decorateContext(ctx, next){
    ctx.render = renderMain;
    ctx.updateNav = updateNav
    next()
}

function renderMain(templateResult){
    render(templateResult, main)
}

function updateNav(){
    const userData = getUserData()

    if(userData){
        document.getElementById('user').style.display = 'block';
        document.getElementById('guest').style.display = 'none'
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'block'
    }
}

function onLogout(){
    logout()
    updateNav()
    page.redirect('/')
}