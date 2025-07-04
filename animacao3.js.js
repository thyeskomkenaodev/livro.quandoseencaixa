// Menu Mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Tema Claro/Escuro
const themeSwitcher = document.getElementById('themeSwitcher');
const themeIcon = themeSwitcher.querySelector('i');

themeSwitcher.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    themeIcon.classList.toggle('fa-moon');
    themeIcon.classList.toggle('fa-sun');
});

// Filtro de Galeria
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        galleryItems.forEach(item => {
            item.style.display = filter === 'all' || item.dataset.category === filter ? 'block' : 'none';
        });
    });
});

// [OUTRAS FUNÇÕES DO SITE]