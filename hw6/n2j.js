document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const sideMenu = document.querySelector('.side-menu');
    const box = document.querySelector('.box');
    const main = document.querySelector('main');
    const header = document.querySelector('header');
    let menuOpen = false;

    burgerMenu.style.display = 'flex';
    burgerMenu.style.flexDirection = 'column';
    burgerMenu.style.justifyContent = 'space-around';
    burgerMenu.style.width = '30px';
    burgerMenu.style.height = '30px';
    burgerMenu.style.background = 'transparent';
    burgerMenu.style.border = 'none';
    burgerMenu.style.cursor = 'pointer';
    burgerMenu.style.zIndex = '2';
    burgerMenu.style.position = 'absolute';
    burgerMenu.style.top = '20px';
    burgerMenu.style.right = '20px';

    const spans = burgerMenu.querySelectorAll('span');
    spans.forEach(span => {
        span.style.display = 'block';
        span.style.width = '100%';
        span.style.height = '4px';
        span.style.backgroundColor = '#fff';
    });

    sideMenu.style.position = 'fixed';
    sideMenu.style.top = '0';
    sideMenu.style.right = '-33.33%';
    sideMenu.style.width = '33.33%';
    sideMenu.style.height = '100%';
    sideMenu.style.backgroundColor = '#444';
    sideMenu.style.color = 'white';
    sideMenu.style.transition = 'right 0.3s ease';
    sideMenu.style.boxShadow = '-2px 0 5px rgba(0, 0, 0, 0.5)';
    sideMenu.style.padding = '20px';
    sideMenu.style.zIndex = '1';
    sideMenu.style.display = 'flex';
    sideMenu.style.justifyContent = 'center';
    sideMenu.style.alignItems = 'center';
    sideMenu.style.flexDirection = 'column';

    const ul = sideMenu.querySelector('ul');
    ul.style.listStyle = 'none';
    ul.style.padding = '0';
    ul.style.margin = '0';
    ul.style.display = 'flex';
    ul.style.flexDirection = 'column';
    ul.style.justifyContent = 'center';
    ul.style.alignItems = 'center';

    const lis = ul.querySelectorAll('li');
    lis.forEach(li => {
        li.style.margin = '20px 0';
    });

    const links = ul.querySelectorAll('a');
    links.forEach(link => {
        link.style.color = 'white';
        link.style.textDecoration = 'none';
        link.style.fontSize = '18px';
    });

    box.style.width = '100px';
    box.style.height = '100px';
    box.style.backgroundColor = '#3498db';
    box.style.display = 'flex';
    box.style.justifyContent = 'center';
    box.style.alignItems = 'center';
    box.style.color = 'white';
    box.style.fontSize = '16px';
    box.style.textAlign = 'center';
    box.style.transition = 'width 0.3s ease, height 0.3s ease';


    main.style.display = 'flex';
    main.style.justifyContent = 'center';
    main.style.alignItems = 'center';
    main.style.height = 'calc(100vh - 50px)';
    main.style.backgroundColor = '#f0f0f0';

    header.style.display = 'flex';
    header.style.justifyContent = 'flex-end';
    header.style.alignItems = 'center';
    header.style.padding = '10px';
    header.style.backgroundColor = '#333';

    burgerMenu.addEventListener('click', (event) => {
        event.stopPropagation();
        menuOpen = !menuOpen;
        spans.forEach(span => {
            span.style.backgroundColor = menuOpen ? '#3498db' : '#fff';
        });
        sideMenu.style.right = menuOpen ? '0' : '-33.33%';
    });

    document.addEventListener('click', (event) => {
        if (menuOpen && !sideMenu.contains(event.target)) {
            menuOpen = false;
            spans.forEach(span => {
                span.style.backgroundColor = '#fff';
            });
            sideMenu.style.right = '-33.33%';
        }
    });

    box.addEventListener('mouseover', () => {
        box.style.width = '150px';
        box.style.height = '150px';
    });

    box.addEventListener('mouseout', () => {
        box.style.width = '100px';
        box.style.height = '100px';
    });
});
