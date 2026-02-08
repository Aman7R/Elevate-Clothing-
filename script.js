// Products Data
const products = [
    {
        id: 1,
        name: 'Heritage Cotton Tee',
        price: 89,
        category: 'Essentials',
        rating: 4.9,
        reviews: 428,
        desc: 'Luxuriously soft premium cotton with a timeless silhouette',
        svg: '<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8B7355;stop-opacity:1" /><stop offset="100%" style="stop-color:#6B5B4A;stop-opacity:1" /></linearGradient></defs><rect fill="url(#grad1)" width="400" height="500"/><path d="M200 100 L280 150 L280 400 L120 400 L120 150 Z" fill="#e8d5b5" stroke="#d4a574" stroke-width="2"/><ellipse cx="200" cy="120" rx="60" ry="30" fill="#e8d5b5" stroke="#d4a574" stroke-width="2"/></svg>'
    },
    {
        id: 2,
        name: 'Italian Linen Shirt',
        price: 145,
        category: 'Refined',
        rating: 5.0,
        reviews: 312,
        desc: 'Breathable Italian linen woven for sophistication',
        svg: '<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#A0826D;stop-opacity:1" /><stop offset="100%" style="stop-color:#8B6F47;stop-opacity:1" /></linearGradient></defs><rect fill="url(#grad2)" width="400" height="500"/><path d="M150 100 L200 80 L250 100 L280 150 L280 420 L230 450 L170 450 L120 420 L120 150 Z" fill="#d9cbb3" stroke="#c4b29a" stroke-width="2"/><rect x="180" y="150" width="40" height="250" fill="#cdbaa2"/></svg>'
    },
    {
        id: 3,
        name: 'Heritage Selvedge Denim',
        price: 198,
        category: 'Premium Denim',
        rating: 4.8,
        reviews: 567,
        desc: 'Japanese selvedge denim crafted for generations',
        svg: '<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#6B5B4A;stop-opacity:1" /><stop offset="100%" style="stop-color:#4A2C1A;stop-opacity:1" /></linearGradient></defs><rect fill="url(#grad3)" width="400" height="500"/><path d="M140 100 L260 100 L270 150 L280 450 L230 480 L170 480 L120 450 L130 150 Z" fill="#4a6fa5" stroke="#364f75" stroke-width="2"/><line x1="200" y1="100" x2="200" y2="480" stroke="#364f75" stroke-width="3"/></svg>'
    },
    {
        id: 4,
        name: 'Cashmere Blend Sweater',
        price: 225,
        category: 'Luxe Knits',
        rating: 5.0,
        reviews: 689,
        desc: 'Supremely soft cashmere blend for ultimate comfort',
        svg: '<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#9B8B7E;stop-opacity:1" /><stop offset="100%" style="stop-color:#7A6A5A;stop-opacity:1" /></linearGradient></defs><rect fill="url(#grad4)" width="400" height="500"/><path d="M120 120 L160 100 L240 100 L280 120 L290 180 L290 420 L240 450 L160 450 L110 420 L110 180 Z" fill="#c9a87c" stroke="#b5936a" stroke-width="2"/><path d="M120 120 L80 180 L80 350 L110 380" fill="none" stroke="#b5936a" stroke-width="2"/><path d="M280 120 L320 180 L320 350 L290 380" fill="none" stroke="#b5936a" stroke-width="2"/></svg>'
    },
    {
        id: 5,
        name: 'Tailored Wool Coat',
        price: 395,
        category: 'Outerwear',
        rating: 4.9,
        reviews: 423,
        desc: 'Impeccably tailored merino wool for refined elegance',
        svg: '<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#7A6A5A;stop-opacity:1" /><stop offset="100%" style="stop-color:#6B4423;stop-opacity:1" /></linearGradient></defs><rect fill="url(#grad5)" width="400" height="500"/><path d="M120 80 L170 60 L230 60 L280 80 L300 140 L300 470 L240 490 L160 490 L100 470 L100 140 Z" fill="#2d3e50" stroke="#1a252f" stroke-width="2"/><rect x="140" y="80" width="120" height="400" fill="#415a77"/><circle cx="160" cy="200" r="8" fill="#4a4a4a"/><circle cx="160" cy="280" r="8" fill="#4a4a4a"/></svg>'
    },
    {
        id: 6,
        name: 'Classic Chino Trousers',
        price: 128,
        category: 'Trousers',
        rating: 4.7,
        reviews: 298,
        desc: 'Versatile chinos with a refined contemporary fit',
        svg: '<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#B5A490;stop-opacity:1" /><stop offset="100%" style="stop-color:#9B8B7E;stop-opacity:1" /></linearGradient></defs><rect fill="url(#grad6)" width="400" height="500"/><path d="M140 80 L260 80 L270 130 L280 450 L230 480 L210 480 L210 250 L190 250 L190 480 L170 480 L120 450 L130 130 Z" fill="#c4b5a0" stroke="#a89a85" stroke-width="2"/></svg>'
    }
];

// State
let cart = [];
let selectedProduct = null;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderFeaturedProducts();
    renderAllProducts();
    setupNavigation();
    setupMobileMenu();
    setupScrollEffects();
    setupNewsletter();
    addParallaxEffect();
    addSmoothScrolling();
    renderCart();
});

// Navigation
function showPage(pageName) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(pageName + 'Page');
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        const navLinks = document.getElementById('navLinks');
        if (navLinks) {
            navLinks.classList.remove('active');
        }
        
        if (pageName === 'cart') {
            renderCart();
        }
    }
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
        });
    });
}

// Mobile Menu
function setupMobileMenu() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileBtn) {
        mobileBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileBtn.classList.toggle('active');
        });
    }
}

// Scroll Effects
function setupScrollEffects() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-image');
        parallaxElements.forEach(function(el) {
            el.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
        });
    });
}

// Parallax Effect
function addParallaxEffect() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = 'translateY(' + (scrolled * 0.3) + 'px)';
            heroContent.style.opacity = 1 - (scrolled / 800);
        }
    });
}

// Smooth Scrolling
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Render Products
function renderFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;
    
    const featured = products.slice(0, 3);
    container.innerHTML = featured.map(function(product, index) {
        return createProductCard(product, index);
    }).join('');
    
    observeProducts();
}

function renderAllProducts() {
    const container = document.getElementById('allProducts');
    if (!container) return;
    
    container.innerHTML = products.map(function(product, index) {
        return createProductCard(product, index);
    }).join('');
    
    observeProducts();
}

function createProductCard(product, index) {
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    return '<div class="product-card" onclick="viewProduct(' + product.id + ')" style="animation-delay: ' + (index * 0.1) + 's">' +
        '<div class="product-image">' +
            product.svg +
        '</div>' +
        '<div class="product-info">' +
            '<div class="product-category">' + product.category + '</div>' +
            '<h3 class="product-name">' + product.name + '</h3>' +
            '<p class="product-desc">' + product.desc + '</p>' +
            '<div class="product-rating">' +
                '<span>' + stars + '</span>' +
                '<span>(' + product.reviews + ')</span>' +
            '</div>' +
            '<div class="product-footer">' +
                '<div class="product-price">$' + product.price + '</div>' +
                '<button class="btn add-to-cart" onclick="event.stopPropagation(); addToCart(' + product.id + ')">' +
                    'ADD TO CART' +
                '</button>' +
            '</div>' +
        '</div>' +
    '</div>';
}

// Intersection Observer for animations
function observeProducts() {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.product-card, .feature-card, .testimonial-card').forEach(function(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
}

// View Product Detail
function viewProduct(productId) {
    selectedProduct = products.find(function(p) {
        return p.id === productId;
    });
    
    if (!selectedProduct) return;
    
    const container = document.getElementById('productContent');
    const stars = '★'.repeat(Math.floor(selectedProduct.rating)) + '☆'.repeat(5 - Math.floor(selectedProduct.rating));
    
    container.innerHTML = '<div class="product-detail-grid">' +
        '<div class="product-detail-image">' +
            selectedProduct.svg +
        '</div>' +
        '<div class="product-detail-info">' +
            '<div class="product-category">' + selectedProduct.category + '</div>' +
            '<h1>' + selectedProduct.name + '</h1>' +
            '<div class="product-rating">' +
                '<span>' + stars + '</span>' +
                '<span>' + selectedProduct.rating + ' (' + selectedProduct.reviews + ' reviews)</span>' +
            '</div>' +
            '<div class="product-detail-price">$' + selectedProduct.price + '</div>' +
            '<div class="product-description">' +
                '<p>' + selectedProduct.desc + '. Meticulously crafted from premium sustainable materials, this piece represents the pinnacle of modern craftsmanship and timeless design.</p>' +
            '</div>' +
            '<div class="product-features">' +
                '<h3>Distinguished Features:</h3>' +
                '<ul>' +
                    '<li>Premium organic and sustainable materials</li>' +
                    '<li>Expertly tailored for the perfect fit</li>' +
                    '<li>Ethically produced with fair trade practices</li>' +
                    '<li>Carbon-neutral shipping included</li>' +
                '</ul>' +
            '</div>' +
            '<div class="size-selector">' +
                '<label>Select Size</label>' +
                '<div class="size-options">' +
                    '<button class="size-btn" onclick="selectSize(this)"><span>XS</span></button>' +
                    '<button class="size-btn" onclick="selectSize(this)"><span>S</span></button>' +
                    '<button class="size-btn" onclick="selectSize(this)"><span>M</span></button>' +
                    '<button class="size-btn" onclick="selectSize(this)"><span>L</span></button>' +
                    '<button class="size-btn" onclick="selectSize(this)"><span>XL</span></button>' +
                    '<button class="size-btn" onclick="selectSize(this)"><span>XXL</span></button>' +
                '</div>' +
            '</div>' +
            '<div class="product-actions">' +
                '<button class="btn btn-primary" onclick="addToCart(' + selectedProduct.id + ')">ADD TO CART — $' + selectedProduct.price + '</button>' +
                '<button class="btn wishlist-btn" onclick="addToWishlist(' + selectedProduct.id + ')">❤ Add to Wishlist</button>' +
            '</div>' +
        '</div>' +
    '</div>';
    
    showPage('product');
}

// Size Selection
function selectSize(button) {
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(function(btn) {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(function(p) {
        return p.id === productId;
    });
    
    if (!product) return;
    
    cart.push(product);
    updateCartCount();
    showNotification('✓ ' + product.name + ' added to cart!', 'success');
    animateCartIcon();
}

function animateCartIcon() {
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.style.animation = 'none';
        setTimeout(function() {
            cartBtn.style.animation = 'cartBounce 0.5s ease';
        }, 10);
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.length;
        if (cart.length > 0) {
            cartCount.classList.add('active');
        } else {
            cartCount.classList.remove('active');
        }
    }
}

// Wishlist Function
function addToWishlist(productId) {
    const product = products.find(function(p) {
        return p.id === productId;
    });
    
    if (!product) return;
    showNotification('♥ ' + product.name + ' added to wishlist!', 'success');
}

// Notification System
function showNotification(message, type) {
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = 'position: fixed; top: 110px; right: 30px; background: linear-gradient(135deg, #6B4423, #4A2C1A); color: #F5F1E8; padding: 1.25rem 2.5rem; border-radius: 15px; box-shadow: 0 15px 50px rgba(107, 68, 35, 0.4); z-index: 10000; animation: slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1); font-family: Lora, serif; font-size: 1.05rem; border: 2px solid rgba(201, 169, 98, 0.3);';
    
    document.body.appendChild(notification);
    
    setTimeout(function() {
        notification.style.animation = 'slideOut 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        setTimeout(function() {
            notification.remove();
        }, 500);
    }, 3000);
}

// Add animations to CSS
const style = document.createElement('style');
style.textContent = '@keyframes slideIn { from { transform: translateX(500px); opacity: 0; } to { transform: translateX(0); opacity: 1; } } @keyframes slideOut { from { transform: translateX(0); opacity: 1; } to { transform: translateX(500px); opacity: 0; } } @keyframes ripple { to { transform: scale(4); opacity: 0; } } @keyframes cartBounce { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.3) rotate(10deg); } }';
document.head.appendChild(style);

// Newsletter Form
function setupNewsletter() {
    const form = document.querySelector('.newsletter-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = e.target.querySelector('input').value;
            showNotification('🎉 Thank you for subscribing: ' + email, 'success');
            e.target.reset();
        });
    }
}

// Add to cart button animation
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
        const btn = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
        btn.style.transform = 'scale(0.92)';
        setTimeout(function() {
            btn.style.transform = 'scale(1)';
        }, 150);
    }
});

// Cursor follower effect - LUXURY VERSION
const cursor = document.createElement('div');
const cursorDot = document.createElement('div');

cursor.className = 'custom-cursor';
cursorDot.className = 'custom-cursor-dot';

cursor.style.cssText = 'position: fixed; width: 40px; height: 40px; border: 2px solid rgba(201, 169, 98, 0.5); border-radius: 50%; pointer-events: none; z-index: 9999; transition: all 0.15s ease; transform: translate(-50%, -50%);';

cursorDot.style.cssText = 'position: fixed; width: 6px; height: 6px; background: linear-gradient(135deg, #C9A962, #D4AF37); border-radius: 50%; pointer-events: none; z-index: 10000; transition: transform 0.08s ease; transform: translate(-50%, -50%); box-shadow: 0 0 10px rgba(201, 169, 98, 0.5);';

document.body.appendChild(cursor);
document.body.appendChild(cursorDot);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Cursor hover effects
document.addEventListener('mouseover', function(e) {
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.closest('a') || e.target.classList.contains('product-card')) {
        cursor.style.width = '60px';
        cursor.style.height = '60px';
        cursor.style.borderColor = 'rgba(201, 169, 98, 0.8)';
        cursor.style.background = 'rgba(201, 169, 98, 0.1)';
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.closest('a') || e.target.classList.contains('product-card')) {
        cursor.style.width = '40px';
        cursor.style.height = '40px';
        cursor.style.borderColor = 'rgba(201, 169, 98, 0.5)';
        cursor.style.background = 'transparent';
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
    }
});

// Hide default cursor
document.body.style.cursor = 'none';
document.querySelectorAll('a, button, input, textarea').forEach(function(el) {
    el.style.cursor = 'none';
});

// Hide custom cursor on mobile
if (window.innerWidth < 768) {
    cursor.style.display = 'none';
    cursorDot.style.display = 'none';
    document.body.style.cursor = 'auto';
}

// Cart Page Functions
function renderCart() {
    const container = document.getElementById('cartItems');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = '<div class="cart-empty">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                '<circle cx="9" cy="21" r="1"></circle>' +
                '<circle cx="20" cy="21" r="1"></circle>' +
                '<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>' +
            '</svg>' +
            '<h2>Your Cart is Empty</h2>' +
            '<p>Looks like you haven\'t added anything to your cart yet</p>' +
            '<button class="btn btn-primary" onclick="showPage(\'shop\')" style="margin-top: 2rem;">EXPLORE COLLECTION</button>' +
        '</div>';
        return;
    }
    
    const cartItemsHtml = cart.map(function(item, index) {
        return '<div class="cart-item" style="animation: fadeInUp 0.5s ease-out ' + (index * 0.1) + 's both">' +
            '<div class="cart-item-image">' + item.svg + '</div>' +
            '<div class="cart-item-details">' +
                '<div class="category">' + item.category + '</div>' +
                '<h3>' + item.name + '</h3>' +
                '<p>' + item.desc + '</p>' +
                '<div class="price">$' + item.price + '</div>' +
            '</div>' +
            '<div class="cart-item-actions">' +
                '<button class="remove-btn" onclick="removeFromCart(' + index + ')" title="Remove">✕</button>' +
                '<div class="quantity-control">' +
                    '<button>−</button>' +
                    '<span>1</span>' +
                    '<button>+</button>' +
                '</div>' +
            '</div>' +
        '</div>';
    }).join('');
    
    const total = cart.reduce(function(sum, item) {
        return sum + item.price;
    }, 0);
    const shipping = total > 150 ? 0 : 15;
    const finalTotal = total + shipping;
    
    container.innerHTML = '<div class="cart-items-container">' +
        cartItemsHtml +
        '<div class="cart-summary">' +
            '<h3>Order Summary</h3>' +
            '<div class="summary-row">' +
                '<span>Subtotal</span>' +
                '<span>$' + total + '</span>' +
            '</div>' +
            '<div class="summary-row">' +
                '<span>Shipping</span>' +
                '<span>' + (shipping === 0 ? 'FREE' : '$' + shipping) + '</span>' +
            '</div>' +
            '<div class="summary-row total">' +
                '<span>Total</span>' +
                '<span>$' + finalTotal + '</span>' +
            '</div>' +
            '<button class="btn btn-primary" style="width: 100%; margin-top: 2rem;">PROCEED TO CHECKOUT</button>' +
            '<button class="btn btn-secondary" onclick="showPage(\'shop\')" style="width: 100%; margin-top: 1rem;">CONTINUE SHOPPING</button>' +
        '</div>' +
    '</div>';
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    renderCart();
    showNotification('Item removed from cart', 'success');
}

// Search Functions
function handleSearch(query) {
    const resultsContainer = document.getElementById('searchResults');
    if (!resultsContainer) return;
    
    if (!query.trim()) {
        resultsContainer.innerHTML = '';
        return;
    }
    
    const results = products.filter(function(product) {
        return product.name.toLowerCase().includes(query.toLowerCase()) ||
               product.category.toLowerCase().includes(query.toLowerCase()) ||
               product.desc.toLowerCase().includes(query.toLowerCase());
    });
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="no-results">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                '<circle cx="11" cy="11" r="8"></circle>' +
                '<path d="m21 21-4.35-4.35"></path>' +
            '</svg>' +
            '<h3>No products found</h3>' +
            '<p>Try searching with different keywords</p>' +
        '</div>';
        return;
    }
    
    resultsContainer.innerHTML = '<h2>Found ' + results.length + ' ' + (results.length === 1 ? 'product' : 'products') + '</h2>' +
        '<div class="products-grid">' +
            results.map(function(product) {
                return createProductCard(product, 0);
            }).join('') +
        '</div>';
    
    observeProducts();
}

function handleSearchTag(tag) {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = tag;
        handleSearch(tag);
    }
}

// Login Function
function handleLogin(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    showNotification('Welcome back! Logged in as ' + email, 'success');
    setTimeout(function() {
        showPage('home');
    }, 1500);
    return false;
}

console.log('✨ ÉLEVÉ Luxury E-commerce Website Loaded Successfully!');
console.log('🛍️ Total Products: ' + products.length);
console.log('🎨 Enhanced with premium animations and interactions');