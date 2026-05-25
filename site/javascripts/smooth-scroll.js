// Smooth scroll personalizado para links do índice
document.addEventListener('DOMContentLoaded', function() {
    // Função para scroll suave personalizado
    function smoothScrollTo(target, duration = 1200) {
        const targetElement = document.querySelector(target);
        if (!targetElement) return;
        
        const startPosition = window.pageYOffset;
        const targetPosition = targetElement.offsetTop - 120; // Offset para o header
        const distance = targetPosition - startPosition;
        let startTime = null;
        
        // Função de easing para movimento mais suave
        function ease(t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t + b;
            t--;
            return -c/2 * (t*(t-2) - 1) + b;
        }
        
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        
        requestAnimationFrame(animation);
    }
    
    // Interceptar cliques nos links do TOC (índice à direita)
    const tocLinks = document.querySelectorAll('.md-nav--secondary a[href^="#"]');
    
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            
            // Aplicar scroll suave personalizado
            smoothScrollTo(target, 1500); // 1.5 segundos de duração
            
            // Atualizar URL sem causar jump
            if (history.pushState) {
                history.pushState(null, null, target);
            } else {
                location.hash = target;
            }
            
            // Adicionar classe ativa ao link clicado
            tocLinks.forEach(l => l.classList.remove('active-scroll'));
            this.classList.add('active-scroll');
        });
    });
    
    // Observador para atualizar link ativo conforme scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                if (id) {
                    // Remover classe ativa de todos os links
                    tocLinks.forEach(link => {
                        link.classList.remove('md-nav__link--active');
                    });
                    
                    // Adicionar classe ativa ao link correspondente
                    const activeLink = document.querySelector(`.md-nav--secondary a[href="#${id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('md-nav__link--active');
                    }
                }
            }
        });
    }, {
        rootMargin: '-120px 0px -50% 0px',
        threshold: 0.1
    });
    
    // Observar todos os cabeçalhos
    const headings = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');
    headings.forEach(heading => observer.observe(heading));
});
