/**
 * FAQ Module - Módulo de Preguntas Frecuentes
 * 
 * Módulo completamente encapsulado para renderizar un sistema de FAQ
 * con búsqueda, filtros, paginación y submenús dinámicos.
 * 
 * @module FaqModule
 */

(function() {
  'use strict';

  /**
   * Estado del módulo FAQ
   */
  const FaqModule = {
    data: [],
    filteredData: [],
    currentPage: 1,
    itemsPerPage: 10,
    currentCategory: 'Todas',
    searchTerm: '',
    categories: []
  };

  /**
   * Inicializa el módulo FAQ
   */
  FaqModule.init = function() {
    console.log('🔍 Inicializando FAQ Module...');
    
    // Verificar que los elementos necesarios existan
    if (!document.getElementById('faq')) {
      console.warn('⚠️ Elemento #faq no encontrado');
      return;
    }

    // Cargar datos y inicializar
    this.loadMock()
      .then(() => {
        this.extractCategories();
        this.renderFilters();
        this.filterData();
        this.renderFaqList();
        this.renderPagination();
        this.attachEvents();
        console.log('✅ FAQ Module inicializado correctamente');
      })
      .catch(error => {
        console.error('❌ Error al inicializar FAQ Module:', error);
      });
  };

  /**
   * Carga el mock de FAQ desde el archivo JSON
   */
  FaqModule.loadMock = function() {
    return fetch('mock/faq.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.data = json.faqs || [];
        this.filteredData = [...this.data];
        console.log(`✅ Cargadas ${this.data.length} FAQs`);
        return Promise.resolve();
      })
      .catch(error => {
        console.error('❌ Error al cargar FAQ mock:', error);
        // Datos de fallback
        this.data = [];
        this.filteredData = [];
        return Promise.reject(error);
      });
  };

  /**
   * Extrae las categorías únicas de los datos
   */
  FaqModule.extractCategories = function() {
    const categorySet = new Set();
    this.data.forEach(faq => {
      if (faq.tipo) {
        categorySet.add(faq.tipo);
      }
    });
    this.categories = Array.from(categorySet).sort();
  };


  /**
   * Renderiza el select de filtros por categoría
   */
  FaqModule.renderFilters = function() {
    const filterSelect = document.getElementById('faqFilterCategoria');
    if (!filterSelect) return;

    filterSelect.innerHTML = '<option value="Todas">Todas las categorías</option>';

    this.categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      filterSelect.appendChild(option);
    });
  };

  /**
   * Filtra los datos según búsqueda y categoría
   */
  FaqModule.filterData = function() {
    let filtered = [...this.data];

    // Filtrar por categoría
    if (this.currentCategory !== 'Todas') {
      filtered = filtered.filter(faq => faq.tipo === this.currentCategory);
    }

    // Filtrar por búsqueda
    if (this.searchTerm.trim() !== '') {
      const searchLower = this.searchTerm.toLowerCase();
      filtered = filtered.filter(faq => {
        const nombre = (faq.nombre || '').toLowerCase();
        const descripcion = (faq.descripcion || '').toLowerCase();
        const explicacion = (faq.detalle?.explicacion || '').toLowerCase();
        const jsonEjemplo = (faq.detalle?.json_ejemplo || '').toLowerCase();
        const xmlEjemplo = (faq.detalle?.xml_ejemplo || '').toLowerCase();
        const tipo = (faq.tipo || '').toLowerCase();

        return nombre.includes(searchLower) ||
               descripcion.includes(searchLower) ||
               explicacion.includes(searchLower) ||
               jsonEjemplo.includes(searchLower) ||
               xmlEjemplo.includes(searchLower) ||
               tipo.includes(searchLower);
      });
    }

    this.filteredData = filtered;
    this.currentPage = 1; // Resetear a primera página
  };

  /**
   * Obtiene los items de la página actual
   */
  FaqModule.paginateData = function() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredData.slice(start, end);
  };

  /**
   * Renderiza la lista de FAQs
   */
  FaqModule.renderFaqList = function() {
    const container = document.getElementById('faqContainer');
    if (!container) return;

    // Limpiar contenedor
    container.innerHTML = '';

    // Obtener datos paginados
    const paginatedData = this.paginateData();
    
    if (paginatedData.length === 0) {
      const noResults = document.createElement('div');
      noResults.className = 'faq-no-results';
      noResults.innerHTML = '<p>No se encontraron resultados. Intenta con otros términos de búsqueda.</p>';
      container.appendChild(noResults);
      return;
    }

    // Agrupar por categoría solo los datos de la página actual
    const grouped = this.groupByCategory(paginatedData);
    
    // Renderizar por categoría
    Object.keys(grouped).forEach(category => {
      const categorySection = this.createCategorySection(category, grouped[category]);
      container.appendChild(categorySection);
    });

    // Aplicar highlight.js a los bloques de código
    if (typeof hljs !== 'undefined') {
      container.querySelectorAll('pre code').forEach(block => {
        hljs.highlightBlock(block);
      });
    }

    // Animación de entrada
    container.querySelectorAll('.faq-card').forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 50);
    });
  };

  /**
   * Agrupa FAQs por categoría
   */
  FaqModule.groupByCategory = function(data) {
    const grouped = {};
    data.forEach(faq => {
      const category = faq.tipo || 'Sin categoría';
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(faq);
    });
    return grouped;
  };

  /**
   * Crea una sección de categoría
   */
  FaqModule.createCategorySection = function(category, faqs) {
    const section = document.createElement('div');
    section.className = 'faq-category-section';
    section.id = `faq-category-${this.slugify(category)}`;

    const title = document.createElement('h3');
    title.className = 'faq-category-title';
    title.textContent = category;
    section.appendChild(title);

    faqs.forEach(faq => {
      const card = this.createFaqCard(faq);
      section.appendChild(card);
    });

    return section;
  };

  /**
   * Crea una tarjeta de FAQ
   */
  FaqModule.createFaqCard = function(faq) {
    const card = document.createElement('div');
    card.className = 'faq-card';
    card.dataset.faqId = faq.id;

    // Header de la tarjeta
    const header = document.createElement('div');
    header.className = 'faq-card-header';
    
    const badge = document.createElement('span');
    badge.className = 'faq-badge';
    badge.textContent = faq.tipo || 'Sin categoría';
    badge.style.backgroundColor = this.getCategoryColor(faq.tipo);
    
    const title = document.createElement('h4');
    title.className = 'faq-card-title';
    title.textContent = faq.nombre || 'Sin título';
    
    const toggle = document.createElement('button');
    toggle.className = 'faq-toggle';
    toggle.innerHTML = '<i class="fas fa-chevron-down"></i>';
    toggle.setAttribute('aria-expanded', 'false');
    
    header.appendChild(badge);
    header.appendChild(title);
    header.appendChild(toggle);
    
    // Descripción
    const description = document.createElement('p');
    description.className = 'faq-description';
    description.textContent = faq.descripcion || '';
    
    // Contenido del accordion
    const content = document.createElement('div');
    content.className = 'faq-card-content';
    
    if (faq.detalle) {
      // Explicación
      if (faq.detalle.explicacion) {
        const explanation = document.createElement('p');
        explanation.className = 'faq-explanation';
        explanation.textContent = faq.detalle.explicacion;
        content.appendChild(explanation);
      }

      // Toggle JSON/XML
      if (faq.detalle.json_ejemplo && faq.detalle.xml_ejemplo) {
        const codeToggle = document.createElement('div');
        codeToggle.className = 'faq-code-toggle';
        
        const jsonBtn = document.createElement('button');
        jsonBtn.className = 'faq-code-btn active';
        jsonBtn.textContent = 'JSON';
        jsonBtn.dataset.format = 'json';
        
        const xmlBtn = document.createElement('button');
        xmlBtn.className = 'faq-code-btn';
        xmlBtn.textContent = 'XML';
        xmlBtn.dataset.format = 'xml';
        
        codeToggle.appendChild(jsonBtn);
        codeToggle.appendChild(xmlBtn);
        content.appendChild(codeToggle);

        // Contenedor de código
        const codeContainer = document.createElement('div');
        codeContainer.className = 'faq-code-container';
        
        const jsonCode = document.createElement('pre');
        jsonCode.className = 'faq-code-block active';
        jsonCode.dataset.format = 'json';
        const jsonCodeElement = document.createElement('code');
        jsonCodeElement.className = 'language-json';
        jsonCodeElement.textContent = faq.detalle.json_ejemplo;
        jsonCode.appendChild(jsonCodeElement);
        
        const xmlCode = document.createElement('pre');
        xmlCode.className = 'faq-code-block';
        xmlCode.dataset.format = 'xml';
        const xmlCodeElement = document.createElement('code');
        xmlCodeElement.className = 'language-xml';
        xmlCodeElement.textContent = faq.detalle.xml_ejemplo;
        xmlCode.appendChild(xmlCodeElement);
        
        codeContainer.appendChild(jsonCode);
        codeContainer.appendChild(xmlCode);
        content.appendChild(codeContainer);

        // Event listeners para toggle
        jsonBtn.addEventListener('click', () => {
          jsonBtn.classList.add('active');
          xmlBtn.classList.remove('active');
          jsonCode.classList.add('active');
          xmlCode.classList.remove('active');
        });

        xmlBtn.addEventListener('click', () => {
          xmlBtn.classList.add('active');
          jsonBtn.classList.remove('active');
          xmlCode.classList.add('active');
          jsonCode.classList.remove('active');
        });
      } else if (faq.detalle.json_ejemplo) {
        // Solo JSON
        const codeBlock = document.createElement('pre');
        const codeElement = document.createElement('code');
        codeElement.className = 'language-json';
        codeElement.textContent = faq.detalle.json_ejemplo;
        codeBlock.appendChild(codeElement);
        content.appendChild(codeBlock);
      } else if (faq.detalle.xml_ejemplo) {
        // Solo XML
        const codeBlock = document.createElement('pre');
        const codeElement = document.createElement('code');
        codeElement.className = 'language-xml';
        codeElement.textContent = faq.detalle.xml_ejemplo;
        codeBlock.appendChild(codeElement);
        content.appendChild(codeBlock);
      }
    }

    card.appendChild(header);
    card.appendChild(description);
    card.appendChild(content);

    // Event listener para accordion
    header.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isExpanded);
      content.classList.toggle('active');
      toggle.querySelector('i').style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
    });

    return card;
  };

  /**
   * Renderiza la paginación
   */
  FaqModule.renderPagination = function() {
    const paginationContainer = document.getElementById('faqPagination');
    if (!paginationContainer) return;

    const totalPages = Math.ceil(this.filteredData.length / this.itemsPerPage);
    
    if (totalPages <= 1) {
      paginationContainer.innerHTML = '';
      return;
    }

    paginationContainer.innerHTML = '';

    // Botón Anterior
    const prevBtn = document.createElement('button');
    prevBtn.className = 'faq-pagination-btn';
    prevBtn.textContent = '« Anterior';
    prevBtn.disabled = this.currentPage === 1;
    prevBtn.addEventListener('click', () => {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.updateDisplay();
      }
    });
    paginationContainer.appendChild(prevBtn);

    // Indicador de página
    const pageInfo = document.createElement('span');
    pageInfo.className = 'faq-pagination-info';
    pageInfo.textContent = `Página ${this.currentPage} de ${totalPages}`;
    paginationContainer.appendChild(pageInfo);

    // Botón Siguiente
    const nextBtn = document.createElement('button');
    nextBtn.className = 'faq-pagination-btn';
    nextBtn.textContent = 'Siguiente »';
    nextBtn.disabled = this.currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
      if (this.currentPage < totalPages) {
        this.currentPage++;
        this.updateDisplay();
      }
    });
    paginationContainer.appendChild(nextBtn);
  };

  /**
   * Actualiza la visualización (renderiza lista y paginación)
   */
  FaqModule.updateDisplay = function() {
    this.renderFaqList();
    this.renderPagination();
    
    // Scroll suave al inicio de la sección
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  /**
   * Filtra por categoría
   */
  FaqModule.filterByCategory = function(category) {
    this.currentCategory = category;
    const filterSelect = document.getElementById('faqFilterCategoria');
    if (filterSelect) {
      filterSelect.value = category;
    }
    this.filterData();
    this.updateDisplay();
    
    // Scroll suave a la sección FAQ
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      const offset = 100;
      const elementPosition = faqSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };


  /**
   * Convierte texto a slug
   */
  FaqModule.slugify = function(text) {
    return text.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  /**
   * Obtiene color por categoría
   */
  FaqModule.getCategoryColor = function(category) {
    const colors = {
      'Documentos': '#de007e',
      'Integración': '#2196F3',
      'Validaciones': '#FF9800',
      'API': '#4CAF50',
      'Errores': '#F44336',
      'Ejemplos': '#9C27B0'
    };
    return colors[category] || '#6c757d';
  };

  /**
   * Adjunta event listeners
   */
  FaqModule.attachEvents = function() {
    // Búsqueda
    const searchInput = document.getElementById('faqSearch');
    if (searchInput) {
      let searchTimeout;
      searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          this.searchTerm = e.target.value;
          this.filterData();
          this.updateDisplay();
        }, 300); // Debounce de 300ms
      });
    }

    // Filtro de categoría
    const filterSelect = document.getElementById('faqFilterCategoria');
    if (filterSelect) {
      filterSelect.addEventListener('change', (e) => {
        this.currentCategory = e.target.value;
        this.filterData();
        this.updateDisplay();
      });
    }
  };

  // Exponer módulo globalmente
  window.FaqModule = FaqModule;

})();

