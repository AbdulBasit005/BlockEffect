(function ($) {
  "user strict";
  // Preloader Js
  $(window).on('load', function () {
    $('.overlayer').fadeOut(1000);
    var img = $('.bg_img');
    img.css('background-image', function () {
      var bg = ('url(' + $(this).data('img') + ')');
      return bg;
    });
    galleryMasonary();
  });
  // Gallery Masonary
  function galleryMasonary() {
    // filter functions
    var $grid = $(".class-wrapper");
    var filterFns = {};
    $grid.isotope({
      itemSelector: '.class-inner',
      masonry: {
        columnWidth: 0,
      }
    });
    // bind filter button click
    $('ul.filter').on('click', 'li', function () {
      var filterValue = $(this).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[filterValue] || filterValue;
      $grid.isotope({
        filter: filterValue
      });
    });
    // change is-checked class on buttons
    $('ul.filter').each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'li', function () {
        $buttonGroup.find('.active').removeClass('active');
        $(this).addClass('active');
      });
    });
  }
  $(document).ready(function () {
    $('.countdown').countdown({
        date: '11/09/2024 05:00:00',
        offset: +2,
        day: 'Day',
        days: 'Days'
    }, 
    function () {
        
    });
    $('.sponsor-slider').owlCarousel({
      loop: false,
      responsiveClass: true,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
      margin: 30,
      items:1,
      responsive: {
        400: {
          items: 2,
        },
        500: {
          items: 3,
        },
        992: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      }
    })
    $('.road__map-slider').owlCarousel({
      loop: false,
      responsiveClass: true,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
      margin: 0,
      items:1,
      responsive: {
        426: {
          items: 2,
        },
        992: {
          items: 5,
        },
        1200: {
          items: 5,
        },
      }
    })
    $('.post__related-slider').owlCarousel({
      loop: false,
      responsiveClass: true,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
      margin: 20,
      items:1,
      responsive: {
        768: {
          items: 2,
        }
      }
    })
    $('.rank-slider').owlCarousel({
      loop: false,
      responsiveClass: true,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
      margin: 20,
      items: 2,
      responsive: {
        576: {
          items: 3,
        },
        768: {
          items: 4,
          margin: 30,
        },
        992: {
          items: 5,
        },
        1200: {
          items: 6,
        },
      }
    })
    $('.select-bar').niceSelect();
    // PoPuP 
    $('.video-pop').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: true,
      fixedContentPos: true,
      disableOn: 300
    });
    $("body").each(function () {
      $(this).find(".img-pop").magnificPopup({
        type: "image",
        gallery: {
          enabled: true
        }
      });
    });
    // aos js active
    new WOW().init()
    //Faq
    $('.faq-wrapper .faq-title').on('click', function (e) {
      var element = $(this).parent('.faq-item');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('.faq-content').removeClass('open');
        element.find('.faq-content').slideUp(300, "swing");
      } else {
        element.addClass('open');
        element.children('.faq-content').slideDown(300, "swing");
        element.siblings('.faq-item').children('.faq-content').slideUp(300, "swing");
        element.siblings('.faq-item').removeClass('open');
        element.siblings('.faq-item').find('.faq-title').removeClass('open');
        element.siblings('.faq-item').find('.faq-content').slideUp(300, "swing");
      }
    });
    //Menu Dropdown Icon Adding
    $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
    // drop down menu width overflow problem fix
    $('ul').parent('li').hover(function () {
      var menu = $(this).find("ul");
      var menupos = $(menu).offset();
      if (menupos.left + menu.width() > $(window).width()) {
        var newpos = -$(menu).width();
        menu.css({
          left: newpos
        });
      }
    });
    $('.menu li a').on('click', function (e) {
      var element = $(this).parent('li');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp(300, "swing");
      } else {
        element.addClass('open');
        element.children('ul').slideDown(300, "swing");
        element.siblings('li').children('ul').slideUp(300, "swing");
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp(300, "swing");
      }
    })
    // Scroll To Top 
    var scrollTop = $(".toTopBtn");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
      } else {
        scrollTop.addClass("active");
      }
    });
    //Click event to scroll to top
    $('.toTopBtn').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
    //Header Bar
    $('.header-bar').on('click', function () {
      $(this).toggleClass('active');
      $('.overlay').toggleClass('active');
      $('.menu').toggleClass('active');
    })
    //Header Bar
    $('.overlay').on('click', function () {
      $(this).removeClass('active');
      $('.header-bar').removeClass('active');
      $('.menu').removeClass('active');
    })
    //Header
    var fixed_top = $("header");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 1) {
        fixed_top.addClass("active");
      } else {
        fixed_top.removeClass("active");
      }
    });
    $(".counter-item").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
            var el = document.querySelectorAll('.odometer')[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });
  });
})(jQuery);

    // Enhanced Currency Calculator Functionality
    
    // Exchange rates (simulated - in real app, these would come from an API)
    const exchangeRates = {
        // Crypto to USD rates (simulated)
        BTC: 45000,
        ETH: 3200,
        USDT: 1,
        BNB: 380,
        ADA: 0.45,
        DOT: 7.2,
        LINK: 15.5,
        XRP: 0.52,
        LTC: 120,
        BCH: 280,
        
        // Fiat currency rates (simulated)
        USD: 1,
        EUR: 0.85,
        GBP: 0.73,
        JPY: 110.5,
        CAD: 1.25,
        AUD: 1.35,
        CHF: 0.92,
        CNY: 6.45,
        INR: 74.5
    };
    
    // Initialize calculator when DOM is ready
    $(document).ready(function() {
        initializeCurrencyCalculator();
    });
    
    function initializeCurrencyCalculator() {
        const fromAmount = $('#fromAmount');
        const toAmount = $('#toAmount');
        const fromCurrency = $('#fromCurrency');
        const toCurrency = $('#toCurrency');
        const convertBtn = $('#convertBtn');
        const resetBtn = $('#resetBtn');
        const swapBtn = $('#swapBtn');
        const historyBtn = $('#historyBtn');
        const exchangeRate = $('#exchangeRate');
        const lastUpdated = $('#lastUpdated');
        const rateChange = $('#rateChange');
        
        // Currency symbol displays
        const fromSymbol = $('.from-symbol');
        const toSymbol = $('.to-symbol');
        const fromCurrencyName = $('#fromCurrencyName');
        const toCurrencyName = $('#toCurrencyName');
        const fromCurrencyRate = $('#fromCurrencyRate');
        const toCurrencyRate = $('#toCurrencyRate');
        
        // Set initial values
        fromAmount.val(1);
        updateCurrencySymbols();
        updateCurrencyInfo();
        updateExchangeRate();
        updatePopularConversions();
        updateRateChange();
        
        // Real-time conversion on input change
        fromAmount.on('input', function() {
            if ($(this).val() !== '') {
                convertCurrency();
            } else {
                toAmount.val('');
            }
        });
        
        // Convert on currency change
        fromCurrency.on('change', function() {
            updateCurrencySymbols();
            updateCurrencyInfo();
            convertCurrency();
            updateExchangeRate();
        });
        
        toCurrency.on('change', function() {
            updateCurrencySymbols();
            updateCurrencyInfo();
            convertCurrency();
            updateExchangeRate();
        });
        
        // Convert button click
        convertBtn.on('click', function() {
            if (fromAmount.val() === '' || fromAmount.val() <= 0) {
                showCalculatorError('Please enter a valid amount');
                return;
            }
            
            convertCurrency();
            showCalculatorSuccess('Conversion completed successfully!');
        });
        
        // Reset button click
        resetBtn.on('click', function() {
            fromAmount.val(1);
            toAmount.val('');
            fromCurrency.val('USD');
            toCurrency.val('USD');
            updateCurrencySymbols();
            updateCurrencyInfo();
            updateExchangeRate();
            showCalculatorSuccess('Calculator reset successfully!');
        });
        
        // History button click
        historyBtn.on('click', function() {
            showCalculatorInfo('Conversion history feature coming soon!');
        });
        
        // Swap currencies
        swapBtn.on('click', function() {
            const tempAmount = fromAmount.val();
            const tempCurrency = fromCurrency.val();
            
            fromAmount.val(toAmount.val());
            toAmount.val(tempAmount);
            fromCurrency.val(toCurrency.val());
            toCurrency.val(tempCurrency);
            
            updateCurrencySymbols();
            updateCurrencyInfo();
            convertCurrency();
            updateExchangeRate();
            
            // Add rotation animation
            $(this).addClass('rotating');
            setTimeout(() => {
                $(this).removeClass('rotating');
            }, 300);
        });
        
        // Quick conversion clicks
        $('.quick-conversion').on('click', function() {
            const from = $(this).data('from');
            const to = $(this).data('to');
            
            fromCurrency.val(from);
            toCurrency.val(to);
            fromAmount.val(1);
            
            updateCurrencySymbols();
            updateCurrencyInfo();
            convertCurrency();
            updateExchangeRate();
            
            // Highlight the clicked conversion
            $('.quick-conversion').removeClass('active');
            $(this).addClass('active');
        });
        
        // Update currency symbols
        function updateCurrencySymbols() {
            const fromSymbolValue = fromCurrency.find('option:selected').data('symbol');
            const toSymbolValue = toCurrency.find('option:selected').data('symbol');
            
            fromSymbol.text(fromSymbolValue);
            toSymbol.text(toSymbolValue);
        }
        
        // Update currency info
        function updateCurrencyInfo() {
            const fromName = fromCurrency.find('option:selected').data('name');
            const toName = toCurrency.find('option:selected').data('name');
            const fromSymbol = fromCurrency.find('option:selected').data('symbol');
            const toSymbol = toCurrency.find('option:selected').data('symbol');
            
            fromCurrencyName.text(fromName);
            toCurrencyName.text(toName);
            
            // Update rate displays
            const fromRate = exchangeRates[fromCurrency.val()] || 1;
            const toRate = exchangeRates[toCurrency.val()] || 1;
            
            fromCurrencyRate.text(`1 ${fromCurrency.val()} = ${formatCurrencyWithSymbol(fromRate, 'USD')}`);
            toCurrencyRate.text(`1 ${toCurrency.val()} = ${formatCurrencyWithSymbol(toRate, 'USD')}`);
        }
        
        // Update rate change
        function updateRateChange() {
            const change = (Math.random() - 0.5) * 10; // Random change between -5% and +5%
            const isPositive = change >= 0;
            
            rateChange.text(`${isPositive ? '+' : ''}${change.toFixed(1)}%`);
            rateChange.removeClass('positive negative').addClass(isPositive ? 'positive' : 'negative');
        }
        
        // Convert currency function
        function convertCurrency() {
            const amount = parseFloat(fromAmount.val());
            const from = fromCurrency.val();
            const to = toCurrency.val();
            
            if (isNaN(amount) || amount <= 0) {
                toAmount.val('');
                return;
            }
            
            // Get exchange rates
            const fromRate = exchangeRates[from] || 1;
            const toRate = exchangeRates[to] || 1;
            
            // Convert to USD first, then to target currency
            const usdAmount = amount * fromRate;
            const convertedAmount = usdAmount / toRate;
            
            // Format the result with currency symbol
            const formattedAmount = formatCurrencyWithSymbol(convertedAmount, to);
            toAmount.val(formattedAmount);
            
            // Update exchange rate display
            updateExchangeRate();
        }
        
        // Update exchange rate display
        function updateExchangeRate() {
            const from = fromCurrency.val();
            const to = toCurrency.val();
            const fromRate = exchangeRates[from] || 1;
            const toRate = exchangeRates[to] || 1;
            const rate = fromRate / toRate;
            
            const formattedRate = formatCurrencyWithSymbol(rate, to);
            exchangeRate.text(`1 ${from} = ${formattedRate}`);
            
            // Update last updated time
            const now = new Date();
            lastUpdated.text(`Last updated: ${now.toLocaleTimeString()}`);
        }
        
        // Update popular conversions
        function updatePopularConversions() {
            // BTC to USD
            const btcUsd = formatCurrencyWithSymbol(exchangeRates.BTC, 'USD');
            $('#btc-usd').text(btcUsd);
            
            // ETH to USD
            const ethUsd = formatCurrencyWithSymbol(exchangeRates.ETH, 'USD');
            $('#eth-usd').text(ethUsd);
            
            // USD to EUR
            const usdEur = formatCurrencyWithSymbol(1 / exchangeRates.EUR, 'EUR');
            $('#usd-eur').text(usdEur);
            
            // USD to GBP
            const usdGbp = formatCurrencyWithSymbol(1 / exchangeRates.GBP, 'GBP');
            $('#usd-gbp').text(usdGbp);
        }
        
        // Format currency with symbol (for display in input)
        function formatCurrencyWithSymbol(amount, currency) {
            const symbols = {
                USD: '$',
                EUR: '€',
                GBP: '£',
                JPY: '¥',
                CAD: 'C$',
                AUD: 'A$',
                CHF: 'CHF',
                CNY: '¥',
                INR: '₹',
                BTC: '₿',
                ETH: 'Ξ',
                USDT: '₮',
                BNB: 'BNB',
                ADA: '₳',
                DOT: '●',
                LINK: '🔗',
                XRP: '✖',
                LTC: 'Ł',
                BCH: '₿'
            };
            
            const symbol = symbols[currency] || currency;
            
            // Determine decimal places based on currency
            let decimals = 2;
            if (currency === 'JPY' || currency === 'INR') decimals = 0;
            if (['BTC', 'ETH', 'BNB', 'ADA', 'DOT', 'LINK', 'XRP', 'LTC', 'BCH'].includes(currency)) decimals = 6;
            
            const formatted = parseFloat(amount).toFixed(decimals);
            
            // Add thousand separators
            const parts = formatted.split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            
            return symbol + parts.join('.');
        }
        
        // Format currency without symbol (for calculations)
        function formatCurrency(amount, currency) {
            const symbols = {
                USD: '$',
                EUR: '€',
                GBP: '£',
                JPY: '¥',
                CAD: 'C$',
                AUD: 'A$',
                CHF: 'CHF',
                CNY: '¥',
                INR: '₹',
                BTC: '₿',
                ETH: 'Ξ',
                USDT: '₮',
                BNB: 'BNB',
                ADA: '₳',
                DOT: '●',
                LINK: '🔗',
                XRP: '✖',
                LTC: 'Ł',
                BCH: '₿'
            };
            
            const symbol = symbols[currency] || currency;
            
            // Determine decimal places based on currency
            let decimals = 2;
            if (currency === 'JPY' || currency === 'INR') decimals = 0;
            if (['BTC', 'ETH', 'BNB', 'ADA', 'DOT', 'LINK', 'XRP', 'LTC', 'BCH'].includes(currency)) decimals = 6;
            
            const formatted = parseFloat(amount).toFixed(decimals);
            
            // Add thousand separators
            const parts = formatted.split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            
            return symbol + parts.join('.');
        }
        
        // Show calculator error
        function showCalculatorError(message) {
            const errorDiv = $('<div class="calculator-error">' + message + '</div>');
            $('.calculator-card').append(errorDiv);
            
            errorDiv.css({
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: '#dc3545',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                fontSize: '14px',
                zIndex: 1000,
                animation: 'slideInRight 0.3s ease'
            });
            
            setTimeout(() => {
                errorDiv.fadeOut(300, function() {
                    $(this).remove();
                });
            }, 3000);
        }
        
        // Show calculator success
        function showCalculatorSuccess(message) {
            const successDiv = $('<div class="calculator-success">' + message + '</div>');
            $('.calculator-card').append(successDiv);
            
            successDiv.css({
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: '#28a745',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                fontSize: '14px',
                zIndex: 1000,
                animation: 'slideInRight 0.3s ease'
            });
            
            setTimeout(() => {
                successDiv.fadeOut(300, function() {
                    $(this).remove();
                });
            }, 3000);
        }
        
        // Show calculator info
        function showCalculatorInfo(message) {
            const infoDiv = $('<div class="calculator-info">' + message + '</div>');
            $('.calculator-card').append(infoDiv);
            
            infoDiv.css({
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: '#17a2b8',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                fontSize: '14px',
                zIndex: 1000,
                animation: 'slideInRight 0.3s ease'
            });
            
            setTimeout(() => {
                infoDiv.fadeOut(300, function() {
                    $(this).remove();
                });
            }, 3000);
        }
        
        // Simulate real-time rate updates
        setInterval(function() {
            // Simulate small rate fluctuations
            Object.keys(exchangeRates).forEach(currency => {
                if (currency !== 'USD' && currency !== 'USDT') {
                    const fluctuation = (Math.random() - 0.5) * 0.02; // ±1% fluctuation
                    exchangeRates[currency] *= (1 + fluctuation);
                }
            });
            
            updatePopularConversions();
            updateRateChange();
            if (fromAmount.val() !== '') {
                convertCurrency();
            }
        }, 30000); // Update every 30 seconds
        
        // Add CSS for animations
        const calculatorCSS = `
            <style>
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                
                .swap-btn.rotating {
                    animation: rotate 0.3s ease;
                }
                
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(180deg); }
                }
                
                .quick-conversion.active {
                    background: rgba(0, 123, 255, 0.2);
                    border-color: #007bff;
                }
                
                .calculator-error,
                .calculator-success,
                .calculator-info {
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    font-weight: 500;
                }
                
                .currency-input:focus {
                    background: rgba(255, 255, 255, 0.15);
                }
                
                .currency-select:focus {
                    background: rgba(0, 123, 255, 0.4);
                }
                
                .currency-symbol-display {
                    animation: symbolGlow 2s ease-in-out infinite;
                }
                
                @keyframes symbolGlow {
                    0%, 100% { opacity: 0.8; }
                    50% { opacity: 1; text-shadow: 0 0 10px currentColor; }
                }
            </style>
        `;
        $('head').append(calculatorCSS);
    }
    
    // Initialize calculator on page load
    $(window).on('load', function() {
        if ($('.currency-calculator').length) {
            initializeCurrencyCalculator();
        }
    });
