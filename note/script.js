document.addEventListener('DOMContentLoaded', function () {
    const outline = document.querySelector('.blog-outline');
    const content = document.querySelector('.blog-content');
    const blogPosts = document.querySelectorAll('.blog-post');

    // 创建层级结构的大纲
    const dropdown = document.querySelector('.outline-dropdown');

    // 处理每个博客文章
    blogPosts.forEach(blogPost => {
        // 处理 h2 标题（作为一级菜单）
        const title = blogPost.querySelector('h2');
        if (title) {
            // 为没有id的标题元素生成id
            if (!title.id) {
                title.id = Math.random().toString(36).slice(-8);
            }

            const h2Li = document.createElement('li');
            h2Li.className = 'outline-item';
            const h2Link = document.createElement('a');
            h2Link.href = '#' + title.id;
            h2Link.textContent = title.textContent;
            h2Link.style.display = 'block';
            h2Link.style.marginBottom = '5px';
            h2Link.style.fontWeight = 'bold';

            // 阻止默认行为并使用平滑滚动
            h2Link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // 只滚动右侧内容区域
                    content.scrollTo({
                        top: targetElement.offsetTop - content.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });

            // 处理 h3 标题（作为二级菜单）
            const headers = blogPost.querySelectorAll('h3');
            const h3Ul = document.createElement('ul');
            h3Ul.className = 'outline-submenu';
            headers.forEach(header => {
                // 为没有id的标题元素生成id
                if (!header.id) {
                    header.id = Math.random().toString(36).slice(-8);
                }

                const h3Li = document.createElement('li');
                h3Li.className = 'outline-subitem';
                const h3Link = document.createElement('a');
                h3Link.href = '#' + header.id;
                h3Link.textContent = header.textContent;
                h3Link.style.display = 'block';
                h3Link.style.marginLeft = '20px';
                h3Link.style.marginBottom = '5px';

                // 阻止默认行为并使用平滑滚动
                h3Link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        // 只滚动右侧内容区域
                        content.scrollTo({
                            top: targetElement.offsetTop - content.offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
                h3Li.appendChild(h3Link);
                h3Ul.appendChild(h3Li);
            });

            // 添加到主内容区
            h2Li.appendChild(h2Link);
            h2Li.appendChild(h3Ul);
            dropdown.appendChild(h2Li);
        }
    });

    // 将生成的大纲添加到页面
    outline.appendChild(dropdown);
});
