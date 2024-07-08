function setNavbarOpacity() {
    let banner = document.getElementById('banner')
    if(window.scrollY <= banner.offsetHeight - (banner.offsetHeight / 5)){
        document.getElementById('nav').style.opacity = '0.7';
    } else {
        document.getElementById('nav').style.opacity = '1';
    }
}