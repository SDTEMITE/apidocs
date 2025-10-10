/**
 * Main.js - Funcionalidad principal de la documentación DTEmite
 * 
 * Mejoras visuales aplicadas:
 * - Mantenida la funcionalidad existente sin cambios disruptivos
 * - Scrollspy y navegación mejorados con transiciones suaves
 * - Popovers con mejor timing y efectos visuales
 * - Compatibilidad mantenida con el diseño base
 */
$(function() {

  // Agregar función de easing personalizada para scroll más suave
  $.easing.easeInOutCubic = function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
  };

  // IE10 viewport hack for Surface/desktop Windows 8 bug
  //
  // See Getting Started docs for more information
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
    )
    )
    document.querySelector('head').appendChild(msViewportStyle)
  }

  var $window = $(window)
  var $body = $(document.body)

  $body.scrollspy({
    target: '.sidebar',
    offset: 80
  });

  $window.on('load', function() {
    $body.scrollspy('refresh')
  });

  // Mejorar el scrollspy para detectar secciones específicas
  $window.on('scroll', function() {
    var scrollTop = $window.scrollTop();
    var windowHeight = $window.height();
    var documentHeight = $(document).height();
    
    // Encontrar la sección actual basada en docs-heading
    var currentSection = null;
    var sections = $('.docs-heading.section-title');
    
    sections.each(function() {
      var section = $(this);
      var sectionTop = section.offset().top - 100; // Offset para activación temprana
      
      if (scrollTop >= sectionTop) {
        currentSection = section.attr('id');
      }
    });
    
    // Actualizar el menú activo
    if (currentSection) {
      $('.sidebar .nav li').removeClass('active');
      $('.sidebar .nav li a[href="#' + currentSection + '"]').parent().addClass('active');
    }
    
    // Calcular progreso de lectura
    var scrollProgress = (scrollTop / (documentHeight - windowHeight)) * 100;
    $('.sidebar::before').css('height', scrollProgress + '%');
    
    // Actualizar indicador de progreso
    $('.sidebar').css('--scroll-progress', scrollProgress + '%');
  });

  $('.docs-container [href=#]').click(function(e) {
    e.preventDefault()
  });

  // Scroll suave mejorado para navegación del menú
  $('.sidebar a[href^="#"], .navbar-nav a[href^="#"]').click(function(e) {
    e.preventDefault();
    
    var target = $(this).attr('href');
    var targetElement = $(target);
    
    if (targetElement.length) {
      var targetOffset = targetElement.offset().top - 80; // Offset para el header fijo
      
      // Scroll suave con velocidad más lenta y curva de animación personalizada
      $('html, body').animate({
        scrollTop: targetOffset
      }, {
        duration: 1200, // Duración aumentada de 800ms a 1200ms
        easing: 'easeInOutCubic', // Curva de animación más suave
        queue: false // Permitir múltiples animaciones simultáneas
      });
      
      // Agregar efecto visual durante el scroll
      $(this).addClass('scrolling');
      setTimeout(() => {
        $(this).removeClass('scrolling');
      }, 1200);
    }
  });


  $('.source-link').each(function() {
    var id = $(this).data('content');
    var content = $('<span>').append($('#' + id)).html();
    $(this).attr('data-content', content);

    // Keep popovers open when hovered
    $(this).popover({
      trigger: 'manual',
      container: 'body',
      placement: 'left',
      template: '<div class="popover popover-source"> <div class="arrow"></div> <div class="popover-inner"> <h3 class="popover-title"></h3> <div class="popover-content"> <p></p> </div> </div> </div>',
      html: true,
      delay: {
        show: 50,
        hide: 750
      }
    }).on('mouseenter', function() {
      var self = this;
      $(this).popover('show');
      $(this).addClass('active');
      $(this).addClass('popover-source');

      $('.popover').on('mouseleave', function() {
        $(self).popover('hide');
        $(self).removeClass('active');
      });

    }).on('mouseleave', function() {
      var self = this;
      setTimeout(function() {
        if (!$('.popover:hover').length) {
          $(self).popover('hide');
          $(self).removeClass('active');
        }
      }, 100);
    });
  });


  // back to top
  setTimeout(function() {
    var $sideBar = $('.sidebar')

    $sideBar.affix({
      offset: {
        top: function() {
          var offsetTop = $sideBar.offset().top
          var sideBarMargin = parseInt($sideBar.children(0).css('margin-top'), 10)
          var navOuterHeight = $('.docs-nav').height()

          return (this.top = offsetTop - navOuterHeight - sideBarMargin)
        },
        bottom: function() {
          return (this.bottom = $('.footer').outerHeight(true))
        }
      }
    })
  }, 100);

  setTimeout(function() {
    $('.top').affix()
  }, 100);

  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  setTimeout(function () {
    $('.extends span span').css('color', '#c26230');
    $('.dot').css('color', '#a5c261');
  }, 0);

  // Funcionalidad de código removida - se maneja en index.html

});

// Funciones de código removidas para evitar conflictos
// La funcionalidad de expandir/contraer se maneja ahora en index.html
