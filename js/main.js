function toggleMenu() {
    var links = document.getElementById('links');
    links.style.display = links.style.display === 'grid' ? "none" : "grid";
    var aboutServer = document.getElementById('about-server');
    aboutServer.style.top = aboutServer.style.top === '45%' ? null : '45%';
}

window.onresize = function(e){
    console.log('resized!');
    if ($(window).width() > 660) {
        document.getElementById('links').style.display = 'grid';
    } else {
        document.getElementById('links').style.display = 'none';
    }
};

$(document).ready(function() {
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 2000);
});
