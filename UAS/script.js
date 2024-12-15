const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 80)
});

function buttonLeft() {
    const carousel = document.getElementById("carousel");
    carousel.scrollBy({ left: -220, behavior: "smooth" });
  }

  function buttonRight() {
    const carousel = document.getElementById("carousel");
    carousel.scrollBy({ left: 220, behavior: "smooth" });
  }
  function buttonLeft2() {
    const carousel = document.getElementById("carousel2");
    carousel.scrollBy({ left: -220, behavior: "smooth" });
  }

  function buttonRight2() {
    const carousel = document.getElementById("carousel2");
    carousel.scrollBy({ left: 220, behavior: "smooth" });
  };
  
  // Pop Up Order
function placeOrder() {
  const ramenQty =
    parseInt(document.getElementById("ramen-quantity").value) || 0;
  const yakitoriQty =
    parseInt(document.getElementById("yakitori-quantity").value) || 0;
  const tempuraQty =
    parseInt(document.getElementById("tempura-quantity").value) || 0;
  const takoQty =
    parseInt(document.getElementById("takoyaki-quantity").value) || 0;
  const sushiQty =
    parseInt(document.getElementById("sushi-sashimi-quantity").value) || 0;
  const onigiriQty =
    parseInt(document.getElementById("onigiri-quantity").value) || 0;
  const curryQty =
    parseInt(document.getElementById("curry-quantity").value) || 0;
  const sobaQty = parseInt(document.getElementById("soba-quantity").value) || 0;
  const udonQty = parseInt(document.getElementById("udon-quantity").value) || 0;
  const misoQty = parseInt(document.getElementById("miso-quantity").value) || 0;
  const gyozaQty =
    parseInt(document.getElementById("gyoza-quantity").value) || 0;
  const nattoQty =
    parseInt(document.getElementById("natto-quantity").value) || 0;
  const teaQty = parseInt(document.getElementById("tea-quantity").value) || 0;
  const milkQty =
    parseInt(document.getElementById("MilkShake-quantity").value) || 0;
  const FruitTeaQty =
    parseInt(document.getElementById("FruitTea-quantity").value) || 0;
  const sodaQty = parseInt(document.getElementById("soda-quantity").value) || 0;
  const smoothieQty =
    parseInt(document.getElementById("smoothie-quantity").value) || 0;
  const machiatoQty =
    parseInt(document.getElementById("machiato-quantity").value) || 0;
  const mojitoQty =
    parseInt(document.getElementById("mojito-quantity").value) || 0;
  const matchaQty =
    parseInt(document.getElementById("matcha-quantity").value) || 0;

  if (
    ramenQty === 0 &&
    yakitoriQty === 0 &&
    tempuraQty === 0 &&
    takoQty === 0 &&
    sushiQty === 0 &&
    onigiriQty === 0 &&
    curryQty === 0 &&
    sobaQty === 0 &&
    udonQty === 0 &&
    misoQty === 0 &&
    gyozaQty === 0 &&
    nattoQty === 0 &&
    teaQty === 0 &&
    milkQty === 0 &&
    FruitTeaQty === 0 &&
    sodaQty === 0 &&
    smoothieQty === 0 &&
    machiatoQty === 0 &&
    mojitoQty === 0 &&
    matchaQty === 0
  ) {
    alert("Please order at least one item!");
    return;
  }

  let orderDetails = "You have ordered:\n";
  if (ramenQty > 0) orderDetails += `Ramen: ${ramenQty}\n`;
  if (yakitoriQty > 0) orderDetails += `Yakitori: ${yakitoriQty}\n`;
  if (tempuraQty > 0) orderDetails += `Tempura: ${tempuraQty}\n`;
  if (takoQty > 0) orderDetails += `Takoyaki: ${takoQty}\n`;
  if (sushiQty > 0) orderDetails += `Sushi & Sashimi: ${sushiQty}\n`;
  if (onigiriQty > 0) orderDetails += `Onigiri: ${onigiriQty}\n`;
  if (curryQty > 0) orderDetails += `Curry Rice: ${curryQty}\n`;
  if (sobaQty > 0) orderDetails += `Soba: ${sobaQty}\n`;
  if (misoQty > 0) orderDetails += `Miso Soup: ${misoQty}\n`;
  if (udonQty > 0) orderDetails += `Udon: ${udonQty}\n`;
  if (nattoQty > 0) orderDetails += `Natto: ${nattoQty}\n`;
  if (gyozaQty > 0) orderDetails += `Gyoza: ${gyozaQty}\n`;
  if (teaQty > 0) orderDetails += `Iced Tea: ${teaQty}\n`;
  if (milkQty > 0) orderDetails += `Milk Shake: ${milkQty}\n`;
  if (FruitTeaQty > 0) orderDetails += `Fruit Tea: ${FruitTeaQty}\n`;
  if (sodaQty > 0) orderDetails += `Soda: ${sodaQty}\n`;
  if (smoothieQty > 0) orderDetails += `Smoothie: ${smoothieQty}\n`;
  if (machiatoQty > 0) orderDetails += `Macchiato: ${machiatoQty}\n`;
  if (mojitoQty > 0) orderDetails += `Mojito: ${mojitoQty}\n`;
  if (matchaQty > 0) orderDetails += `Matcha Latte: ${matchaQty}\n`;

  alert(orderDetails);

  // Reset all values to 0
  document.getElementById("ramen-quantity").value = 0;
  document.getElementById("yakitori-quantity").value = 0;
  document.getElementById("tempura-quantity").value = 0;
  document.getElementById("takoyaki-quantity").value = 0;
  document.getElementById("sushi-sashimi-quantity").value = 0;
  document.getElementById("onigiri-quantity").value = 0;
  document.getElementById("curry-quantity").value = 0;
  document.getElementById("soba-quantity").value = 0;
  document.getElementById("udon-quantity").value = 0;
  document.getElementById("miso-quantity").value = 0;
  document.getElementById("gyoza-quantity").value = 0;
  document.getElementById("natto-quantity").value = 0;
  document.getElementById("tea-quantity").value = 0;
  document.getElementById("MilkShake-quantity").value = 0;
  document.getElementById("FruitTea-quantity").value = 0;
  document.getElementById("soda-quantity").value = 0;
  document.getElementById("smoothie-quantity").value = 0;
  document.getElementById("machiato-quantity").value = 0;
  document.getElementById("mojito-quantity").value = 0;
  document.getElementById("matcha-quantity").value = 0;
}

function showPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

const menuIcon = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

menuIcon.addEventListener("click", () => {
  navlist.classList.toggle("active");
});

  document.addEventListener('DOMContentLoaded', function () {
    const galleryWrapper = document.getElementById('galleryWrapper');
    const prevArrow = document.getElementById('prevArrow');
    const nextArrow = document.getElementById('nextArrow');

    let autoScrollInterval;

    // Smooth scroll functionality
    function smoothScrollTo(offset) {
        galleryWrapper.scrollTo({
            left: offset,
            behavior: 'smooth'
        });
    }

    // Next button functionality
    nextArrow.addEventListener('click', () => {
        const itemWidth = galleryWrapper.querySelector('.gallery-item').offsetWidth + 24; // Width + gap
        smoothScrollTo(galleryWrapper.scrollLeft + itemWidth);
    });

    // Previous button functionality
    prevArrow.addEventListener('click', () => {
        const itemWidth = galleryWrapper.querySelector('.gallery-item').offsetWidth + 24; // Width + gap
        smoothScrollTo(galleryWrapper.scrollLeft - itemWidth);
    });

    // Auto-scroll functionality with pause
    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            nextArrow.click();
        }, 3000);
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Pause auto-scroll on hover
    galleryWrapper.addEventListener('mouseenter', stopAutoScroll);
    galleryWrapper.addEventListener('mouseleave', startAutoScroll);

    // Touch and wheel scroll support
    let isDown = false;
    let startX;
    let scrollLeft;

    galleryWrapper.addEventListener('mousedown', (e) => {
        isDown = true;
        galleryWrapper.classList.add('active');
        startX = e.pageX - galleryWrapper.offsetLeft;
        scrollLeft = galleryWrapper.scrollLeft;
    });

    galleryWrapper.addEventListener('mouseleave', () => {
        isDown = false;
        galleryWrapper.classList.remove('active');
    });

    galleryWrapper.addEventListener('mouseup', () => {
        isDown = false;
        galleryWrapper.classList.remove('active');
    });

    galleryWrapper.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - galleryWrapper.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        galleryWrapper.scrollLeft = scrollLeft - walk;
    });

    // Wheel scroll support
    galleryWrapper.addEventListener('wheel', (e) => {
        e.preventDefault();
        galleryWrapper.scrollLeft += e.deltaY;
    }, { passive: false });

    // Initial auto-scroll
    startAutoScroll();
});

const sr = ScrollReveal({
  origin: 'top',
  distance: '85px',
  duration: 2500,
  reset: true
})

sr.reveal ('.home-text', {delay:300});
sr.reveal ('.home-img', {delay:300});
sr.reveal ('.container', {delay:400});


sr.reveal ('.about-text', {delay:300});

sr.reveal ('.middle-text', {});
sr.reveal ('.row-btn, shop-content', {delay:300});
sr.reveal ('.order-button', {delay:300});
sr.reveal ('.box', {delay:300});