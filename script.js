document.addEventListener('DOMContentLoaded', function() {
    initPlayerCards();
    initContactForm();
    initAnimations();
});

function initPlayerCards() {
    const playerCards = document.querySelectorAll('.player-card');
    const modal = document.getElementById('playerModal');

    if (!modal) return;

    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.modal-close');

    playerCards.forEach(card => {
        card.addEventListener('click', function() {
            const img = this.querySelector('.player-avatar img');
            if (img) {
                modalImage.src = img.src;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function initContactForm() {
    const form = document.getElementById('guildForm');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            playerName: document.getElementById('playerName').value,
            uid: document.getElementById('uid').value,
            rank: document.getElementById('rank').value,
            role: document.getElementById('role').value,
            experience: document.getElementById('experience').value,
            message: document.getElementById('message').value
        };

        console.log('Guild Application Submitted:', formData);

        form.style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
    });
}

window.resetForm = function() {
    const form = document.getElementById('guildForm');
    const successMessage = document.getElementById('successMessage');

    if (form && successMessage) {
        form.reset();
        form.style.display = 'flex';
        successMessage.style.display = 'none';
    }
}

function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.stat-card, .feature-card, .player-card, .rule-card, .achievement-card');

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

const cards = document.querySelectorAll('.stat-card, .feature-card, .player-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 4px 30px rgba(255, 107, 0, 0.4)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(255, 107, 0, 0.3)';
        }
    }
});
