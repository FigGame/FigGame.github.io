// script.js
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动功能
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // CTA按钮滚动到游戏作品部分
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const gamesSection = document.querySelector('#games');
            if (gamesSection) {
                window.scrollTo({
                    top: gamesSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    }

    // 移动端菜单切换
    const mobileMenuButton = document.createElement('div');
    mobileMenuButton.innerHTML = '☰';
    mobileMenuButton.style.cssText = `
        display: none;
        font-size: 1.5rem;
        color: white;
        cursor: pointer;
    `;
    
    const navContainer = document.querySelector('.nav-container');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navContainer && navMenu) {
        navContainer.insertBefore(mobileMenuButton, navMenu);
        
        mobileMenuButton.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // 在小屏幕下显示菜单按钮
        function checkScreenSize() {
            if (window.innerWidth <= 768) {
                mobileMenuButton.style.display = 'block';
            } else {
                mobileMenuButton.style.display = 'none';
                navMenu.classList.remove('active');
            }
        }
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
    }
});
