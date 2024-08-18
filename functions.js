document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const modal = document.getElementById('product-modal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const productItems = document.querySelectorAll('.product-item');

    // Menú móvil
    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        mobileMenu.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            mobileMenu.classList.remove('active');
        }
    });

    // Cerrar menú al hacer clic en los enlaces
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });

    // Funcionalidad del modal de producto
    productItems.forEach(item => {
        item.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            const productInfo = getProductInfo(productId);
            
            document.getElementById('modal-product-image').src = productInfo.image;
            document.getElementById('modal-product-name').textContent = productInfo.name;
            document.getElementById('modal-product-description').textContent = productInfo.description;
            
            modal.style.display = 'block';
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Función para obtener información del producto (simula una base de datos)
    function getProductInfo(productId) {
        const products = {
            '1': {
                name: 'Producto 1',
                image: './img/skincare1.jpg',
                description: 'Descripción detallada del Producto 1. Aquí puedes incluir información sobre sus características, beneficios, etc.'
            },
            '2': {
                name: 'Producto 2',
                image: './img/skincare2.jpg',
                description: 'Descripción detallada del Producto 2. Esta es una descripción de ejemplo que puedes personalizar para cada producto.'
            },
            // Agrega más productos según sea necesario
        };

        return products[productId] || { name: 'Producto no encontrado', image: '', description: 'No hay información disponible para este producto.' };
    }
});