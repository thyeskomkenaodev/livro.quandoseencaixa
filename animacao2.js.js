// Filtro de Vídeos
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const filter = this.dataset.filter;
        document.querySelectorAll('.video-card').forEach(card => {
            card.style.display = filter === 'all' || card.dataset.category === filter ? 'block' : 'none';
        });
    });
});

// [OUTROS SCRIPTS ESPECÍFICOS PARA VÍDEOS]