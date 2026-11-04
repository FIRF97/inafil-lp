/**
 * APLICAÇÃO PRINCIPAL — INAFIL LOJA DENTÁRIA
 * ===========================================
 * Gestão de estado, interações, carrossel, filtros,
 * modais acessíveis e integração WhatsApp.
 */

(function () {
    'use strict';

    // --- ESTADO GLOBAL DA APLICAÇÃO ---
    const state = {
        activeCategory: 'todos',
        searchQuery: '',
        sortBy: 'relevance',
        catalogLimit: 8,       // Quantidade inicial no catálogo
        catalogStep: 4,        // Quantidade ao clicar em "Carregar Mais"
        currentModalProduct: null,
        carouselCurrentIndex: 0
    };

    // --- ELEMENTOS DOM PRINCIPAIS ---
    const DOM = {
        header: document.getElementById('header'),
        menuToggle: document.getElementById('menu-toggle'),
        mobileNav: document.getElementById('mobile-nav'),
        categoriesGrid: document.getElementById('categories-grid'),
        carouselTrack: document.getElementById('carousel-track'),
        carouselPrevBtn: document.getElementById('carousel-prev-btn'),
        carouselNextBtn: document.getElementById('carousel-next-btn'),
        carouselDots: document.getElementById('carousel-dots'),
        productsGrid: document.getElementById('products-grid'),
        catalogSearchInput: document.getElementById('catalog-search-input'),
        searchClearBtn: document.getElementById('search-clear-btn'),
        categoryFilterTabs: document.getElementById('category-filter-tabs'),
        catalogSortSelect: document.getElementById('catalog-sort-select'),
        catalogCounter: document.getElementById('catalog-counter'),
        activeFilterTag: document.getElementById('active-filter-tag'),
        loadMoreContainer: document.getElementById('catalog-pagination'),
        loadMoreBtn: document.getElementById('btn-load-more'),
        // Modais
        productModalOverlay: document.getElementById('product-modal-overlay'),
        productModalCloseBtn: document.getElementById('modal-close-btn'),
        modalImage: document.getElementById('modal-img'),
        modalCategory: document.getElementById('modal-category'),
        modalTitle: document.getElementById('modal-title'),
        modalCode: document.getElementById('modal-code'),
        modalStockBadge: document.getElementById('modal-stock-badge'),
        modalPrice: document.getElementById('modal-price'),
        modalDesc: document.getElementById('modal-desc'),
        modalSpecsList: document.getElementById('modal-specs-list'),
        modalOrderBtn: document.getElementById('modal-order-btn'),
        modalInquiryBtn: document.getElementById('modal-inquiry-btn'),
        // Modal de Orçamento
        quoteModalOverlay: document.getElementById('quote-modal-overlay'),
        quoteModalCloseBtn: document.getElementById('quote-modal-close-btn'),
        quoteForm: document.getElementById('quote-form'),
        currentYearSpan: document.getElementById('current-year'),
        floatingWhatsappBtn: document.getElementById('floating-whatsapp-btn'),
        headerWhatsappBtn: document.getElementById('header-whatsapp-btn')
    };

    // --- ÍCONES SVG AUXILIARES ---
    const SVG_ICONS = {
        whatsapp: `<svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`,
        eye: `<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
        arrowRight: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
        check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
    };

    // --- INICIALIZAÇÃO ---
    function init() {
        setupCurrentYear();
        setupHeaderScroll();
        setupMobileMenu();
        setupCategories();
        setupFeaturedCarousel();
        setupCatalogToolbar();
        renderCatalog();
        setupModals();
        setupWhatsAppLinks();
        setupSmoothScrollLinks();
    }

    // --- ANO ATUAL DINÂMICO ---
    function setupCurrentYear() {
        if (DOM.currentYearSpan) {
            DOM.currentYearSpan.textContent = new Date().getFullYear();
        }
    }

    // --- CABEÇALHO COM SOMBRA DINÂMICA ---
    function setupHeaderScroll() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                DOM.header.classList.add('is-scrolled');
            } else {
                DOM.header.classList.remove('is-scrolled');
            }
        }, { passive: true });
    }

    // --- MENU MOBILE ---
    function setupMobileMenu() {
        if (!DOM.menuToggle || !DOM.mobileNav) return;

        const toggleMenu = () => {
            const isOpen = DOM.mobileNav.classList.contains('is-open');
            DOM.mobileNav.classList.toggle('is-open', !isOpen);
            DOM.menuToggle.classList.toggle('is-active', !isOpen);
            DOM.menuToggle.setAttribute('aria-expanded', !isOpen);
            document.body.style.overflow = !isOpen ? 'hidden' : '';
        };

        DOM.menuToggle.addEventListener('click', toggleMenu);

        // Fechar ao clicar num link
        DOM.mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                DOM.mobileNav.classList.remove('is-open');
                DOM.menuToggle.classList.remove('is-active');
                DOM.menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    // --- SECÇÃO DE CATEGORIAS ---
    function setupCategories() {
        if (!DOM.categoriesGrid || !window.ProductData) return;

        const categories = window.ProductData.categories;
        DOM.categoriesGrid.innerHTML = categories.map(cat => {
            const count = window.ProductData.products.filter(p => p.category === cat.id).length;
            return `
                <div class="category-card" data-category-id="${cat.id}" role="button" tabindex="0" aria-label="Ver produtos de ${cat.name}">
                    <div class="category-image-wrap">
                        <img src="${cat.image}" alt="${cat.name}" loading="lazy">
                    </div>
                    <div class="category-card-body">
                        <h3 class="category-name">${cat.name}</h3>
                        <p class="category-desc">${cat.shortDesc}</p>
                        <span class="category-link-btn">
                            Ver ${count} produtos ${SVG_ICONS.arrowRight}
                        </span>
                    </div>
                </div>
            `;
        }).join('');

        // Evento de clique para filtrar catálogo e rolar suavemente
        DOM.categoriesGrid.querySelectorAll('.category-card').forEach(card => {
            const selectCategory = () => {
                const catId = card.getAttribute('data-category-id');
                setActiveCategory(catId);
                const catalogEl = document.getElementById('produtos');
                if (catalogEl) {
                    catalogEl.scrollIntoView({ behavior: 'smooth' });
                }
            };

            card.addEventListener('click', selectCategory);
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectCategory();
                }
            });
        });
    }

    // --- CARROSSEL DE PRODUTOS EM DESTAQUE ---
    function setupFeaturedCarousel() {
        if (!DOM.carouselTrack || !window.ProductData) return;

        const featuredProducts = window.ProductData.getFeaturedProducts();
        if (featuredProducts.length === 0) return;

        // Renderizar slides
        DOM.carouselTrack.innerHTML = featuredProducts.map(product => {
            return `
                <div class="carousel-slide" data-product-id="${product.id}">
                    ${renderProductCardHtml(product)}
                </div>
            `;
        }).join('');

        // Gerar indicadores (dots)
        renderCarouselDots(featuredProducts.length);

        // Eventos dos botões Prev e Next
        if (DOM.carouselPrevBtn) {
            DOM.carouselPrevBtn.addEventListener('click', () => {
                scrollCarousel('prev');
            });
        }

        if (DOM.carouselNextBtn) {
            DOM.carouselNextBtn.addEventListener('click', () => {
                scrollCarousel('next');
            });
        }

        // Sincronizar indicador no scroll
        let scrollTimeout;
        DOM.carouselTrack.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(syncCarouselState, 60);
        }, { passive: true });

        // Suporte a gestos touch / arrasto
        setupCarouselTouch();

        // Atribuir eventos aos botões dos cartões no carrossel
        attachProductCardEvents(DOM.carouselTrack);

        // Estado inicial
        syncCarouselState();
    }

    function renderCarouselDots(count) {
        if (!DOM.carouselDots) return;
        let dotsHtml = '';
        for (let i = 0; i < count; i++) {
            dotsHtml += `<button class="carousel-dot ${i === 0 ? 'is-active' : ''}" data-slide-index="${i}" aria-label="Ir para o slide ${i + 1}"></button>`;
        }
        DOM.carouselDots.innerHTML = dotsHtml;

        DOM.carouselDots.querySelectorAll('.carousel-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-slide-index'), 10);
                scrollToSlide(index);
            });
        });
    }

    function scrollCarousel(direction) {
        if (!DOM.carouselTrack) return;
        const slide = DOM.carouselTrack.querySelector('.carousel-slide');
        if (!slide) return;

        const slideWidth = slide.getBoundingClientRect().width;
        const gap = 24; // gap em px
        const offset = direction === 'next' ? (slideWidth + gap) : -(slideWidth + gap);

        DOM.carouselTrack.scrollBy({ left: offset, behavior: 'smooth' });
    }

    function scrollToSlide(index) {
        if (!DOM.carouselTrack) return;
        const slides = DOM.carouselTrack.querySelectorAll('.carousel-slide');
        if (slides[index]) {
            slides[index].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
        }
    }

    function syncCarouselState() {
        if (!DOM.carouselTrack) return;
        const slides = Array.from(DOM.carouselTrack.querySelectorAll('.carousel-slide'));
        if (slides.length === 0) return;

        const trackRect = DOM.carouselTrack.getBoundingClientRect();
        let closestIndex = 0;
        let minDistance = Infinity;

        slides.forEach((slide, idx) => {
            const slideRect = slide.getBoundingClientRect();
            const distance = Math.abs(slideRect.left - trackRect.left);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = idx;
            }
        });

        state.carouselCurrentIndex = closestIndex;

        // Atualizar dots
        if (DOM.carouselDots) {
            const dots = DOM.carouselDots.querySelectorAll('.carousel-dot');
            dots.forEach((dot, idx) => {
                dot.classList.toggle('is-active', idx === closestIndex);
            });
        }

        // Atualizar botões desativados nos extremos
        const isStart = DOM.carouselTrack.scrollLeft <= 5;
        const isEnd = DOM.carouselTrack.scrollLeft + DOM.carouselTrack.clientWidth >= DOM.carouselTrack.scrollWidth - 5;

        if (DOM.carouselPrevBtn) DOM.carouselPrevBtn.disabled = isStart;
        if (DOM.carouselNextBtn) DOM.carouselNextBtn.disabled = isEnd;
    }

    function setupCarouselTouch() {
        let isDown = false;
        let startX;
        let scrollLeft;

        DOM.carouselTrack.addEventListener('mousedown', (e) => {
            isDown = true;
            DOM.carouselTrack.style.cursor = 'grabbing';
            startX = e.pageX - DOM.carouselTrack.offsetLeft;
            scrollLeft = DOM.carouselTrack.scrollLeft;
        });

        DOM.carouselTrack.addEventListener('mouseleave', () => {
            isDown = false;
            DOM.carouselTrack.style.cursor = '';
        });

        DOM.carouselTrack.addEventListener('mouseup', () => {
            isDown = false;
            DOM.carouselTrack.style.cursor = '';
        });

        DOM.carouselTrack.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - DOM.carouselTrack.offsetLeft;
            const walk = (x - startX) * 1.5;
            DOM.carouselTrack.scrollLeft = scrollLeft - walk;
        });
    }

    // --- SECÇÃO DO CATÁLOGO GERAL (TOOLBAR, PESQUISA, FILTROS) ---
    function setupCatalogToolbar() {
        // 1. Pesquisa por input com debounce
        if (DOM.catalogSearchInput) {
            let debounceTimer;
            DOM.catalogSearchInput.addEventListener('input', (e) => {
                state.searchQuery = e.target.value;
                if (DOM.searchClearBtn) {
                    DOM.searchClearBtn.classList.toggle('is-visible', state.searchQuery.length > 0);
                }
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(() => {
                    state.catalogLimit = 8; // reiniciar paginação ao pesquisar
                    renderCatalog();
                }, 250);
            });
        }

        // Botão limpar busca
        if (DOM.searchClearBtn) {
            DOM.searchClearBtn.addEventListener('click', () => {
                if (DOM.catalogSearchInput) DOM.catalogSearchInput.value = '';
                state.searchQuery = '';
                DOM.searchClearBtn.classList.remove('is-visible');
                state.catalogLimit = 8;
                renderCatalog();
            });
        }

        // 2. Filtros por Categoria (Tabs)
        if (DOM.categoryFilterTabs && window.ProductData) {
            const tabsHtml = `
                <button class="category-tab-btn is-active" data-cat-filter="todos">
                    Todos os Produtos
                </button>
                ${window.ProductData.categories.map(c => `
                    <button class="category-tab-btn" data-cat-filter="${c.id}">
                        ${c.name}
                    </button>
                `).join('')}
            `;
            DOM.categoryFilterTabs.innerHTML = tabsHtml;

            DOM.categoryFilterTabs.querySelectorAll('.category-tab-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const catId = btn.getAttribute('data-cat-filter');
                    setActiveCategory(catId);
                });
            });
        }

        // 3. Ordenação (Dropdown)
        if (DOM.catalogSortSelect) {
            DOM.catalogSortSelect.addEventListener('change', (e) => {
                state.sortBy = e.target.value;
                renderCatalog();
            });
        }

        // 4. Botão Carregar Mais
        if (DOM.loadMoreBtn) {
            DOM.loadMoreBtn.addEventListener('click', () => {
                state.catalogLimit += state.catalogStep;
                renderCatalog();
            });
        }
    }

    function setActiveCategory(catId) {
        state.activeCategory = catId;
        state.catalogLimit = 8; // reiniciar limite

        // Atualizar abas
        if (DOM.categoryFilterTabs) {
            DOM.categoryFilterTabs.querySelectorAll('.category-tab-btn').forEach(btn => {
                btn.classList.toggle('is-active', btn.getAttribute('data-cat-filter') === catId);
            });
        }

        renderCatalog();
    }

    // --- RENDERIZAR O CATÁLOGO DE PRODUTOS ---
    function renderCatalog() {
        if (!DOM.productsGrid || !window.ProductData) return;

        const filteredProducts = window.ProductData.filterProducts({
            query: state.searchQuery,
            category: state.activeCategory,
            sortBy: state.sortBy
        });

        const totalResults = filteredProducts.length;
        const visibleProducts = filteredProducts.slice(0, state.catalogLimit);

        // Atualizar barra de contagem e filtros ativos
        updateCatalogStatus(totalResults, visibleProducts.length);

        // Se vazio, apresentar Empty State amigável
        if (totalResults === 0) {
            DOM.productsGrid.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    </div>
                    <h3 class="empty-state-title">Nenhum produto odontológico encontrado</h3>
                    <p class="empty-state-desc">
                        Não encontrámos nenhum item correspondente aos critérios de pesquisa ou à categoria selecionada.
                    </p>
                    <div class="empty-state-actions">
                        <button class="btn btn-secondary" id="btn-reset-filters">
                            Limpar Filtros e Ver Todos
                        </button>
                        <button class="btn btn-whatsapp" id="btn-empty-inquiry">
                            ${SVG_ICONS.whatsapp} Perguntar Disponibilidade no WhatsApp
                        </button>
                    </div>
                </div>
            `;

            // Atribuir eventos no empty state
            const resetBtn = document.getElementById('btn-reset-filters');
            if (resetBtn) {
                resetBtn.addEventListener('click', resetAllFilters);
            }

            const emptyInquiryBtn = document.getElementById('btn-empty-inquiry');
            if (emptyInquiryBtn) {
                emptyInquiryBtn.addEventListener('click', () => {
                    window.WhatsAppConfig.open('general');
                });
            }

            if (DOM.loadMoreContainer) DOM.loadMoreContainer.style.display = 'none';
            return;
        }

        // Renderizar produtos
        DOM.productsGrid.innerHTML = visibleProducts.map(p => renderProductCardHtml(p)).join('');

        // Eventos dos cartões
        attachProductCardEvents(DOM.productsGrid);

        // Gestão do botão "Carregar Mais"
        if (DOM.loadMoreContainer) {
            if (visibleProducts.length < totalResults) {
                DOM.loadMoreContainer.style.display = 'block';
                DOM.loadMoreBtn.textContent = `Carregar Mais Produtos (${totalResults - visibleProducts.length} restantes)`;
            } else {
                DOM.loadMoreContainer.style.display = 'none';
            }
        }
    }

    function updateCatalogStatus(total, visibleCount) {
        if (!DOM.catalogCounter) return;

        let categoryName = "Todos os Produtos";
        if (state.activeCategory !== 'todos') {
            const cat = window.ProductData.categories.find(c => c.id === state.activeCategory);
            if (cat) categoryName = cat.name;
        }

        DOM.catalogCounter.innerHTML = `A mostrar <strong>${visibleCount}</strong> de <strong>${total}</strong> produtos em <em>${categoryName}</em>`;

        // Pílula de filtro ativo
        if (DOM.activeFilterTag) {
            if (state.activeCategory !== 'todos' || state.searchQuery) {
                let label = "";
                if (state.activeCategory !== 'todos') label += `Categoria: ${categoryName}`;
                if (state.searchQuery) label += `${label ? ' | ' : ''}Busca: "${state.searchQuery}"`;

                DOM.activeFilterTag.innerHTML = `
                    <span>${label}</span>
                    <button id="btn-clear-active-filter" aria-label="Limpar filtros">✕</button>
                `;
                DOM.activeFilterTag.style.display = 'inline-flex';

                const clearBtn = document.getElementById('btn-clear-active-filter');
                if (clearBtn) clearBtn.addEventListener('click', resetAllFilters);
            } else {
                DOM.activeFilterTag.style.display = 'none';
            }
        }
    }

    function resetAllFilters() {
        state.activeCategory = 'todos';
        state.searchQuery = '';
        state.catalogLimit = 8;
        if (DOM.catalogSearchInput) DOM.catalogSearchInput.value = '';
        if (DOM.searchClearBtn) DOM.searchClearBtn.classList.remove('is-visible');

        if (DOM.categoryFilterTabs) {
            DOM.categoryFilterTabs.querySelectorAll('.category-tab-btn').forEach(btn => {
                btn.classList.toggle('is-active', btn.getAttribute('data-cat-filter') === 'todos');
            });
        }

        renderCatalog();
    }

    // --- TEMPLATE HTML DO CARTÃO DE PRODUTO ---
    function renderProductCardHtml(product) {
        const stockBadge = product.isAvailable
            ? `<span class="badge badge-in-stock">Em Stock</span>`
            : `<span class="badge badge-order-only">Por Encomenda</span>`;

        return `
            <article class="product-card" data-product-id="${product.id}">
                <div class="product-media">
                    <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
                    <div class="product-badges">
                        <span class="product-code-badge">${product.id}</span>
                        ${stockBadge}
                    </div>
                </div>
                <div class="product-body">
                    <span class="product-category-text">${product.categoryName}</span>
                    <h4 class="product-title" title="${product.name}">${product.name}</h4>
                    <p class="product-desc">${product.shortDesc}</p>
                    <div class="product-footer">
                        <div class="product-quote-status">
                            <span class="product-quote-dot"></span>
                            <span class="product-quote-text">Preço sob consulta</span>
                        </div>
                        <div class="product-card-actions">
                            <button class="btn btn-secondary btn-sm btn-view-details" data-id="${product.id}">
                                ${SVG_ICONS.eye} Detalhes
                            </button>
                            <button class="btn btn-whatsapp btn-sm btn-order-whatsapp" data-id="${product.id}" title="Consultar preço e encomendar">
                                ${SVG_ICONS.whatsapp} Pedir
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }

    // --- ATRIBUIR EVENTOS AOS CARTÕES DE PRODUTOS ---
    function attachProductCardEvents(container) {
        // 1. Botão Ver Detalhes
        container.querySelectorAll('.btn-view-details').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = btn.getAttribute('data-id');
                openProductModal(productId);
            });
        });

        // 2. Botão Pedir pelo WhatsApp
        container.querySelectorAll('.btn-order-whatsapp').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = btn.getAttribute('data-id');
                const product = window.ProductData.getProductById(productId);
                if (product) {
                    window.WhatsAppConfig.open('productOrder', product);
                }
            });
        });

        // 3. Clique no próprio cartão abre modal
        container.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', (e) => {
                // se clicou em um botão, deixa o evento do botão lidar
                if (e.target.closest('button')) return;
                const productId = card.getAttribute('data-product-id');
                openProductModal(productId);
            });
        });
    }

    // --- MODAL DE DETALHES DO PRODUTO ---
    function setupModals() {
        // Fechar Modal de Produto
        if (DOM.productModalCloseBtn) {
            DOM.productModalCloseBtn.addEventListener('click', closeProductModal);
        }

        if (DOM.productModalOverlay) {
            DOM.productModalOverlay.addEventListener('click', (e) => {
                if (e.target === DOM.productModalOverlay) closeProductModal();
            });
        }

        // Ações do Modal de Produto
        if (DOM.modalOrderBtn) {
            DOM.modalOrderBtn.addEventListener('click', () => {
                if (state.currentModalProduct) {
                    window.WhatsAppConfig.open('productOrder', state.currentModalProduct);
                }
            });
        }

        if (DOM.modalInquiryBtn) {
            DOM.modalInquiryBtn.addEventListener('click', () => {
                if (state.currentModalProduct) {
                    window.WhatsAppConfig.open('productInquiry', state.currentModalProduct);
                }
            });
        }

        // Modal de Pedido de Orçamento Geral
        if (DOM.quoteModalCloseBtn) {
            DOM.quoteModalCloseBtn.addEventListener('click', closeQuoteModal);
        }

        if (DOM.quoteModalOverlay) {
            DOM.quoteModalOverlay.addEventListener('click', (e) => {
                if (e.target === DOM.quoteModalOverlay) closeQuoteModal();
            });
        }

        if (DOM.quoteForm) {
            DOM.quoteForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const clinicName = document.getElementById('quote-clinic-name')?.value || '';
                const city = document.getElementById('quote-city')?.value || '';
                const items = document.getElementById('quote-items')?.value || '';

                window.WhatsAppConfig.open('quoteRequest', { clinicName, city, items });
                closeQuoteModal();
            });
        }

        // Tecla Escape fecha qualquer modal aberto
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeProductModal();
                closeQuoteModal();
            }
        });

        // Botões para abrir Modal de Orçamento
        document.querySelectorAll('.btn-open-quote-modal').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                openQuoteModal();
            });
        });
    }

    function openProductModal(productId) {
        const product = window.ProductData.getProductById(productId);
        if (!product || !DOM.productModalOverlay) return;

        state.currentModalProduct = product;

        // Preencher dados no modal
        if (DOM.modalImage) {
            DOM.modalImage.src = product.image;
            DOM.modalImage.alt = product.name;
        }
        if (DOM.modalCategory) DOM.modalCategory.textContent = product.categoryName;
        if (DOM.modalTitle) DOM.modalTitle.textContent = product.name;
        if (DOM.modalCode) DOM.modalCode.textContent = `Ref / Cód: ${product.id}`;
        
        if (DOM.modalStockBadge) {
            DOM.modalStockBadge.className = `badge ${product.isAvailable ? 'badge-in-stock' : 'badge-order-only'}`;
            DOM.modalStockBadge.textContent = product.isAvailable ? 'Em Stock' : 'Por Encomenda';
        }

        if (DOM.modalPrice) {
            DOM.modalPrice.textContent = "Sob Consulta";
            DOM.modalPrice.classList.add('is-consult');
        }

        if (DOM.modalDesc) DOM.modalDesc.textContent = product.fullDesc || product.shortDesc;

        // Lista de especificações técnicas
        if (DOM.modalSpecsList) {
            if (product.specs && product.specs.length > 0) {
                DOM.modalSpecsList.innerHTML = product.specs.map(spec => `
                    <li class="modal-specs-item">
                        ${SVG_ICONS.check}
                        <span>${spec}</span>
                    </li>
                `).join('');
            } else {
                DOM.modalSpecsList.innerHTML = `<li class="modal-specs-item">Consultar ficha técnica com os nossos especialistas.</li>`;
            }
        }

        // Abrir overlay
        DOM.productModalOverlay.classList.add('is-open');
        DOM.productModalOverlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeProductModal() {
        if (!DOM.productModalOverlay) return;
        DOM.productModalOverlay.classList.remove('is-open');
        DOM.productModalOverlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        state.currentModalProduct = null;
    }

    function openQuoteModal() {
        if (!DOM.quoteModalOverlay) return;
        DOM.quoteModalOverlay.classList.add('is-open');
        DOM.quoteModalOverlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeQuoteModal() {
        if (!DOM.quoteModalOverlay) return;
        DOM.quoteModalOverlay.classList.remove('is-open');
        DOM.quoteModalOverlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // --- CONFIGURAÇÃO DOS LINKS GERAIS DE WHATSAPP ---
    function setupWhatsAppLinks() {
        // Botão Flutuante (FAB)
        if (DOM.floatingWhatsappBtn) {
            DOM.floatingWhatsappBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.WhatsAppConfig.open('general');
            });
        }

        // Botão do Cabeçalho
        if (DOM.headerWhatsappBtn) {
            DOM.headerWhatsappBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.WhatsAppConfig.open('general');
            });
        }

        // Todos os links com data-wa="general" ou data-wa="consultant"
        document.querySelectorAll('[data-wa="general"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                window.WhatsAppConfig.open('general');
            });
        });

        document.querySelectorAll('[data-wa="consultant"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                window.WhatsAppConfig.open('consultant');
            });
        });
    }

    // --- ROLAGEM SUAVE PARA LINKS INTERNOS ---
    function setupSmoothScrollLinks() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#' || targetId === '') return;

                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    e.preventDefault();
                    const headerHeight = DOM.header ? DOM.header.offsetHeight : 80;
                    const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Inicializar quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
