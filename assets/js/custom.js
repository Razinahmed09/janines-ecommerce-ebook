 // Dot navigation animation
    const dots = document.querySelectorAll('.dot');
    let currentDot = 0;

    function animateDots() {
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentDot].classList.add('active');
      currentDot = (currentDot + 1) % dots.length;
    }

    setInterval(animateDots, 3000);

    // Book hover effects
    const bookItems = document.querySelectorAll('.book-item');
    bookItems.forEach(item => {
      item.addEventListener('mouseenter', function () {
        this.style.animation = 'pulse 0.9s ease-in-out';
      });

      item.addEventListener('mouseleave', function () {
        this.style.animation = 'pulse 0.9s ease-in-out';
      });
    });

    // Add to cart button animation
    const addBtn = document.querySelector('.add-btn');
    addBtn.addEventListener('click', function () {
      this.innerHTML = '✓ Added!';
      this.style.background = '#10b981';
      setTimeout(() => {
        this.innerHTML = 'Add to Cart';
        this.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
      }, 2000);
    });




// Add parallax scrolling effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.modern-portfolio-wrapper .floating-elements');
            if (parallax) {
                const speed = scrolled * 0.5;
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });

        // Add intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.modern-portfolio-wrapper .image-container, .modern-portfolio-wrapper .large-image').forEach(el => {
            observer.observe(el);
        });

        // Add dynamic color changes on scroll
        let colorIndex = 0;
        const colors = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
        ];

        setInterval(() => {
            const circles = document.querySelectorAll('.modern-portfolio-wrapper .floating-circle');
            circles.forEach((circle, index) => {
                circle.style.background = colors[(colorIndex + index) % colors.length];
            });
            colorIndex = (colorIndex + 1) % colors.length;
        }, 3000);




        //swiper js



        // showcase section js

  // Scroll-triggered animations
        document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.jaded-showcase .product-card').forEach(card => {
        observer.observe(card);
    });

    // Scroll progress indicator
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        const progressBar = document.querySelector('.jaded-showcase .scroll-progress');
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }
    }

    window.addEventListener('scroll', updateScrollProgress);

    // Floating particles
    function createParticle() {
        const particleContainer = document.querySelector('.jaded-showcase .floating-particles');
        if (!particleContainer) return;

        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particleContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 8000);
    }

    setInterval(createParticle, 500);

    // Add to cart functionality
    document.querySelectorAll('.jaded-showcase .add-to-cart').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.height, rect.width);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'jaded-ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Ripple animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes jaded-ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Smooth hover effects
    document.querySelectorAll('.jaded-showcase .product-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
});

        // showcase section js


        //collabrate section js 
         // Scope all JavaScript to the wrapper element
        document.addEventListener('DOMContentLoaded', function() {
            const wrapper = document.querySelector('.healers-collaborate-wrapper');
            if (!wrapper) return;

            // Add interactive hover effects for cards
            const cards = wrapper.querySelectorAll('.collaborate-card');
            
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.background = 'rgba(255, 255, 255, 0.15)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.background = 'rgba(255, 255, 255, 0.1)';
                });
            });

            // Add click animations to buttons
            const buttons = wrapper.querySelectorAll('.card-button, .cta-button');
            
            buttons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Create ripple effect
                    const ripple = document.createElement('span');
                    const rect = this.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height);
                    const x = e.clientX - rect.left - size / 2;
                    const y = e.clientY - rect.top - size / 2;
                    
                    ripple.style.cssText = `
                        position: absolute;
                        width: ${size}px;
                        height: ${size}px;
                        left: ${x}px;
                        top: ${y}px;
                        background: rgba(255, 255, 255, 0.5);
                        border-radius: 50%;
                        transform: scale(0);
                        animation: healers-ripple 0.6s linear;
                        pointer-events: none;
                    `;
                    
                    this.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                });
            });

            // Intersection Observer for scroll animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            }, observerOptions);

            // Observe all animated elements within the wrapper
            const animatedElements = wrapper.querySelectorAll('.section-title, .section-subtitle, .collaborate-card, .cta-section');
            animatedElements.forEach(el => observer.observe(el));
        });
        //collabrate section js 


        const messages = [
    "Welcome to Janine’s Faith & Wellness Hub",
    "Explore inspiring blogs & devotionals",
    "Shop curated faith-based products & eBooks"
  ];

  let index = 0;
  const messageElement = document.getElementById("rotating-message");

  function showMessage() {
    messageElement.classList.remove("show");
    setTimeout(() => {
      messageElement.textContent = messages[index];
      messageElement.classList.add("show");
      index = (index + 1) % messages.length;
    }, 500); // wait for fade-out before updating
  }

  // Initial message
  showMessage();

  // Change message every 3.5 seconds
  setInterval(showMessage, 3500);





  //for images script

const images = [
    "/assets/img/janies-Ebooks/banner-un.avif",
    "/assets/img/janies-Ebooks/banner1.jpg",
    "/assets/img/janies-Ebooks/banner2.jpg",
    "/assets/img/janies-Ebooks/banner3.jpg"
  ];

  let imgIndex = 0;
  const imgElement = document.getElementById("rotating-image");

  function showImage() {
    imgElement.classList.remove("show");
    setTimeout(() => {
      imgElement.src = images[imgIndex];
      imgElement.classList.add("show");
      imgIndex = (imgIndex + 1) % images.length;
    }, 1000); // time to fade out
  }

  // Initial display
  showImage();

  // Rotate every 4 seconds
  setInterval(showImage, 4000);


  //for images script



//   testimonials script 

     const testimonials = [
            {
                quote: "They gently led me through emotional pain with compassion and grace. Her words are rich with faith, wisdom, and real-life insight. I found comfort, hope, and strength in every chapter.These books are now part of my healing routine.",
                name: "Luna Gray",
                designation: "Wellness Coach & Bible Study Leader",
                src: "/assets/img/janies-Ebooks/testi-woman-2.jpg",
            },
            {
                quote: "Janine combines deep therapeutic knowledge with heartfelt biblical encouragement. I felt understood and supported without feeling overwhelmed. Her eBooks are like devotional therapy sessions. Truly a gift to anyone seeking faith-based healing.",
                name: "Lora Mitchel",
                designation: "Christian Counselor",
                src: "/assets/img/janies-Ebooks/un-testi.jpg",
            },
            {
                quote: "Janine speaks directly to the struggles we carry silently. Her books helped me reconnect with God and myself. They are filled with honesty, scripture, and gentle wisdom. I keep returning to them whenever I need peace.",
                name: "Martina Edelweist",
                designation: "Faith-Based Blogger & Young Mom",
                src: "/assets/img/janies-Ebooks/testi-woman.jpg",
            },
        ];

        let activeIndex = 0;
        const imageContainer = document.getElementById('image-container');
        const nameElement = document.getElementById('name');
        const designationElement = document.getElementById('designation');
        const quoteElement = document.getElementById('quote');
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');

        function updateTestimonial(direction) {
            const oldIndex = activeIndex;
            activeIndex = (activeIndex + direction + testimonials.length) % testimonials.length;

            testimonials.forEach((testimonial, index) => {
                let img = imageContainer.querySelector(`[data-index="${index}"]`);
                if (!img) {
                    img = document.createElement('img');
                    img.src = testimonial.src;
                    img.alt = testimonial.name;
                    img.classList.add('testimonial-image');
                    img.dataset.index = index;
                    imageContainer.appendChild(img);
                }

                const offset = index - activeIndex;
                const absOffset = Math.abs(offset);
                const zIndex = testimonials.length - absOffset;
                const opacity = index === activeIndex ? 1 : 0.7;
                const scale = 1 - (absOffset * 0.15);
                const translateY = offset === -1 ? '-20%' : offset === 1 ? '20%' : '0%';
                const rotateY = offset === -1 ? '15deg' : offset === 1 ? '-15deg' : '0deg';

                img.style.zIndex = zIndex;
                img.style.opacity = opacity;
                img.style.transform = `translateY(${translateY}) scale(${scale}) rotateY(${rotateY})`;
            });

            nameElement.textContent = testimonials[activeIndex].name;
            designationElement.textContent = testimonials[activeIndex].designation;
            quoteElement.innerHTML = testimonials[activeIndex].quote.split(' ').map(word => `<span class="word">${word}</span>`).join(' ');

            animateWords();
        }

        function animateWords() {
            const words = quoteElement.querySelectorAll('.word');
            words.forEach((word, index) => {
                word.style.opacity = '0';
                word.style.transform = 'translateY(10px)';
                word.style.filter = 'blur(10px)';
                setTimeout(() => {
                    word.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out, filter 0.2s ease-in-out';
                    word.style.opacity = '1';
                    word.style.transform = 'translateY(0)';
                    word.style.filter = 'blur(0)';
                }, index * 20);
            });
        }

        function handleNext() {
            updateTestimonial(1);
        }

        function handlePrev() {
            updateTestimonial(-1);
        }

        prevButton.addEventListener('click', handlePrev);
        nextButton.addEventListener('click', handleNext);

        // Initial setup
        updateTestimonial(0);

        // Autoplay functionality
        const autoplayInterval = setInterval(handleNext, 5000);

        // Stop autoplay on user interaction
        [prevButton, nextButton].forEach(button => {
            button.addEventListener('click', () => {
                clearInterval(autoplayInterval);
            });
        });

//   testimonials script 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "4",
    spaceBetween: 0,
    loop: true,
    speed: 4000, // Smooth speed
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    allowTouchMove: false, // Optional for perfect marquee
  });



$('.multiple-items').slick({
  infinite: true,
  autoplay: true,
  speed: 8000, // Smooth continuous scroll
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: false,
  pauseOnFocus: false,

  responsive: [
    {
      breakpoint: 1200, // For large tablets / small laptops
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992, // For tablets
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576, // For mobile
      settings: {
        slidesToShow: 1
      }
    }
  ]
});






// story and voice upload script



// story and voice upload script