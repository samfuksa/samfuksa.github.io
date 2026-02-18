// Dynamické efekty a interaktivita
document.addEventListener('DOMContentLoaded', function() {
    
    // Přidání zvukových efektů při hover nad tlačítkem
    const contactBtn = document.querySelector('.contact-btn');
    
    contactBtn.addEventListener('mouseenter', function() {
        this.style.animation = 'none';
        this.offsetHeight; // Trigger reflow
        this.style.animation = 'btnHover 0.5s ease';
    });

    // Dynamické vytváření dalších částic
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('dynamic-particle');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 107, 107, 0.8);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: dynamicFloat 4s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        
        document.querySelector('.particles').appendChild(particle);
        
        // Odstranění částice po animaci
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 4000);
    }

    // Přidání CSS pro dynamické částice
    const style = document.createElement('style');
    style.textContent = `
        @keyframes dynamicFloat {
            0% {
                transform: translateY(0px) scale(0);
                opacity: 0;
            }
            20% {
                opacity: 1;
                transform: scale(1);
            }
            80% {
                opacity: 1;
            }
            100% {
                transform: translateY(-50px) scale(0);
                opacity: 0;
            }
        }
        
        @keyframes btnHover {
            0% { transform: translateY(-5px) scale(1.05) rotate(0deg); }
            50% { transform: translateY(-5px) scale(1.05) rotate(2deg); }
            100% { transform: translateY(-5px) scale(1.05) rotate(0deg); }
        }
    `;
    document.head.appendChild(style);

    // Vytváření částic každé 3 sekundy
    setInterval(createParticle, 3000);

    // Náhodné změny směru aut
    function addRandomCarEffects() {
        const cars = document.querySelectorAll('.car');
        
        cars.forEach((car, index) => {
            car.addEventListener('animationiteration', function() {
                // Náhodná změna velikosti při průjezdu
                const scale = 0.8 + Math.random() * 0.4;
                this.style.transform += ` scale(${scale})`;
                
                // Náhodné emoji auto
                const carEmojis = ['🚗', '🏎️', '🚙', '🏁', '🚕', '🚐'];
                this.textContent = carEmojis[Math.floor(Math.random() * carEmojis.length)];
            });
        });
    }

    addRandomCarEffects();

    // Interaktivní efekt při kliknutí
    document.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255,107,107,0.6) 0%, transparent 70%);
            pointer-events: none;
            z-index: 9999;
            left: ${e.clientX - 10}px;
            top: ${e.clientY - 10}px;
            animation: rippleEffect 1s ease-out forwards;
        `;

        const rippleStyle = document.createElement('style');
        rippleStyle.textContent = `
            @keyframes rippleEffect {
                to {
                    transform: scale(20);
                    opacity: 0;
                }
            }
        `;
        
        if (!document.querySelector('#ripple-style')) {
            rippleStyle.id = 'ripple-style';
            document.head.appendChild(rippleStyle);
        }

        document.body.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 1000);
    });

    // Responzivní úpravy
    function handleResize() {
        const width = window.innerWidth;
        const cars = document.querySelectorAll('.car');
        
        if (width < 768) {
            cars.forEach(car => {
                car.style.fontSize = '2rem';
            });
        } else {
            cars.forEach(car => {
                car.style.fontSize = '3rem';
            });
        }
    }

    window.addEventListener('resize', handleResize);
    
    // Console ASCII art BMW
    console.log(`
    🏁 BMW E36 Dynamic Presentation 🏁
    
         ████████████████
        ██              ██
       ██  ●●        ●●  ██
      ██                  ██
      ██████████████████████
           ██        ██
           ██        ██
    
    Kontakt: domeny+cartec@samfuksa.eu
    `);
});

// Easter egg - Konami Code
let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let konamiIndex = 0;

document.addEventListener('keydown', function(e) {
    if (e.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Aktivace turbo módu
            document.body.style.filter = 'hue-rotate(180deg)';
            document.querySelector('.title').textContent = 'TURBO BMW E36 MODE!';
            
            const allCars = document.querySelectorAll('.car');
            allCars.forEach(car => {
                car.style.animationDuration = '2s';
                car.textContent = '🏎️💨';
            });
            
            setTimeout(() => {
                location.reload();
            }, 10000);
            
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});