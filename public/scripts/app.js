/** @format */

"use strict";
// import products from "./arrayProduct.js";
import allProducts from "./arrayProduct.js";
import arrayPosts from "./arrayBlog.js";
import iranProvincesAndCities from "./citiesArray.js";

class waffy {
  constructor() {
    this.themeToggle = document.getElementById("theme-toggle"); //icon dark & sun element
    this.logoMobile = document.getElementById("logo-mobile"); // logo mobile element
    this.searchIcon = document.getElementById("search-icon"); // search icon
    this.searchBox = document.getElementById("search-box"); // search box elements
    this.searchResultBox = document.getElementById("search-result-box"); // search result box elements

    this.linkPagesMenuMobile = document.getElementById("pages-menu-mobile"); //link pages menu mobile
    this.subPagesMenuMobile = document.getElementById("sub-pages-menu"); //sub pages menu mobile
    this.linkCategoryMenuMobile = document.getElementById("category-menu-mobile"); //link category menu mobile
    this.subCategoryMenuMobile = document.getElementById("sub-category-menu"); //sub category menu mobile
    this.linkSpecialMenuMobile = document.getElementById("special-menu-mobile"); //link special section menu mobile
    this.subSpecialMenuMobile = document.getElementById("sub-special-menu"); //sub special section menu mobile

    this.mobileMenu = document.getElementById("mobile-menu"); //menu mobile
    this.openMenuMobileIcon = document.getElementById("bar-menu-icon"); //open icon menu mobile
    this.closeMenuMobileIcon = document.getElementById("close-menu-mobile"); //close icon menu mobile
    this.overlay = document.getElementById("overlay"); //overlay menu mobile

    this.imageSliderHeader = document.getElementById("image-slider-header"); //image slider header
    this.titleSliderText = document.getElementById("title-slider"); //title slider header
    this.offerSliderText = document.getElementById("offer-slider"); //offer text slider header
    this.couponSliderNumber = document.getElementById("coupon-number"); //coupon text slider header
    this.arrayImgSliderHeader = [
      "images/slider-1.png",
      "images/slider-2.png",
      "images/slider-3.png",
    ]; ////array images slider header
    this.currentIndex = 0; //index image array slider header

    this.openShoppingCartIcon = document.getElementById("shopping-cart-icon"); //icon icon cart product menu
    this.shoppingCartMenu = document.getElementById("product-cart-menu"); //cart product menu
    this.closeShoppingCartIcon = document.getElementById("close-menu-cart"); //close icon cart product menu

    this.specialProBtn = document.getElementById("special-pro-btn"); //btn slider regular product in main page
    this.offProBtn = document.getElementById("off-pro-btn"); //btn slider off product in main page
    this.sliderSpecialPro = document.getElementById("slider-special-pro"); //slider regular product in main page
    this.sliderOffPro = document.getElementById("slider-off-pro"); //slider off product in main page

    this.menuDesktop = document.getElementById("menu-desktop"); //menu desktop for sticky in scroll down
    this.scrollTopBtn = document.getElementById("scroll-top-btn"); //scroll top btn when scroll down

    this.descriptionTabContent = document.querySelector(".description-tab-content"); //description Tab content product page
    this.descriptionTabBtn = document.querySelector(".description-tab-btn"); //description Tab Btn product page
    this.reviewTabContent = document.querySelector(".review-tab-content"); //review Tab content product page
    this.reviewTabBtn = document.querySelector(".review-tab-btn"); //review Tab Btn product page
    this.tabsBtnContainer = document.getElementById("tabs-btn-container"); //tabs btn container product page

    this.questionFaq = document.querySelectorAll(".question-faq"); //all question in FAQ

    this.iconSidebarBlog = document.getElementById("icon-sidebar-blog"); //open icon sidebar in blog page mobile
    this.sidebarBlogMobile = document.getElementById("sidebar-blog-mobile"); //sidebar in blog page mobile
    this.iconCloseSidebarBlog = document.getElementById("icon-close-sidebar-blog"); //close icon sidebar in blog page mobile

    this.sidebarShopMobile = document.getElementById("sidebar-shop-mobile"); //sidebar in shop page mobile
    this.openIconSidebarShop = document.getElementById("icon-sidebar-shop"); //open icon sidebar in shop page mobile
    this.closeIconSidebarShop = document.getElementById("icon-close-sidebar-shop"); //close icon sidebar in shop page mobile

    this.specialOfferMenuBtn = document.getElementById("special-offer-menu-btn"); //close icon sidebar in shop page mobile

    // --------------------------------
    // --------------------------------
    // --------------------------------
    this.sliderSpecialProductWrapper = document.querySelector(".slider-special-product"); //slider Special Product in main page
    this.sliderOffProductWrapper = document.querySelector(".slider-off-product"); //slider OFF Product in main page

    this.PistachioCategory = document.getElementById("Pistachio-category"); //Pistachio category btn
    this.seedCategory = document.getElementById("seed-category"); //seed category btn
    this.dryFruitCategory = document.getElementById("dry-fruit-category"); //dry-fruit category btn
    this.almondsCategory = document.getElementById("almonds-category"); //almonds category btn
    this.nutsCategory = document.getElementById("nuts-category"); //nuts category btn
    this.candyCategory = document.getElementById("candy-category"); //candy category btn section 2
    this.whiteChocolateCategory = document.getElementById("white-chocolate-category"); //white chocolate category btn section 2
    this.nutellaCategory = document.getElementById("nutella-category"); //nutella category btn section 2
    this.darkChocolateCategory = document.getElementById("dark-chocolate-category"); //dark chocolate category btn section 2
    this.chocolatePowderCategory = document.getElementById("chocolate-powder-category"); //chocolate powder category btn section 2
    this.honeyCategory = document.getElementById("honey-category"); //honey category btn section 2

    this.productShopContainer = document.getElementById("product-shop-container"); //product shop container

    this.categoryContainer = document.getElementById("category-Container"); //category shop container

    this.categorySubMenuDesktopContainer = document.getElementById("category-sub-menu-desktop"); //category sub menu desktop container

    this.sidebarCategoryShopContainer = document.getElementById("sidebar-category-shop"); //sidebar Category in Shop page
    this.sidebarCategoryShopContainerMobile = document.getElementById(
      "sidebar-category-shop-mobile"
    ); //sidebar mobile Category in Shop page
    this.NoOffProductBtn = document.getElementById("No-off-product-btn"); //No off product btn in shop page

    this.less400PriceBtn = document.getElementById("less-400-Price-Btn"); //btn filter between price in shop page
    this.between400600PriceBtn = document.getElementById("between-400-600-Price-Btn"); //btn filter between price in shop page
    this.between600800PriceBtn = document.getElementById("between-600-800-Price-Btn"); //btn filter between price in shop page
    this.more800PriceBtn = document.getElementById("more-800-Price-Btn"); //btn filter between price in shop page
    this.less400PriceBtnMobile = document.getElementById("less-400-Price-Btn-mobile"); //btn filter between price in shop page
    this.between400600PriceBtnMobile = document.getElementById("between-400-600-Price-Btn-mobile"); //btn filter between price in shop page
    this.between600800PriceBtnMobile = document.getElementById("between-600-800-Price-Btn-mobile"); //btn filter between price in shop page
    this.more800PriceBtnMobile = document.getElementById("more-800-Price-Btn-mobile"); //btn filter between price in shop page

    this.listTypeProductBtn = document.getElementById("list-type-product-btn"); //btn filter between price in shop page
    this.gridTypeProductBtn = document.getElementById("grid-type-product-btn"); //btn filter between price in shop page

    this.listNumberInput = document.getElementById("Paginate"); //select option show number product in shop page
    this.featureInput = document.getElementById("feature"); //select option show feature product in shop page

    this.sidebarCategoryProductBlogContainer = document.getElementById(
      "sidebar-category-product-blog-container"
    ); //sidebar category product container in blog page
    this.sidebarCategoryProductBlogContainerMobile = document.getElementById(
      "sidebar-category-product-blog-container-mobile"
    ); //sidebar category product container in blog page

    this.recentPostsContainer = document.getElementById("recent-posts-container"); //recent posts container in sidebar blog page
    this.postsContainer = document.getElementById("posts-container"); //posts container in sidebar blog page
    this.recentPostsMobileContainer = document.getElementById("recent-posts-mobile-container"); //recent posts container in sidebar MOBILE blog page

    // -------------------------
    this.contentPostContainer = document.getElementById("content-post-container"); //content Post Container in blog-page
    this.nextPrevPostBtnsContainer = document.getElementById("next-Prev-Post-Btns-container"); //next Prev Post Btns Container in blog-page
    this.shareBtnsPostContainer = document.getElementById("share-btns-post-container"); //share Btns Post Container in blog-page
    this.commentsPostContainer = document.getElementById("comments-post-container"); //comments post container in blog-page

    this.nextPostBtn = document.getElementById("next-post-btn"); //next Post Btn in blog-page
    this.prevPostBtn = document.getElementById("prev-post-btn"); //prev Post Btn in blog-page
    this.prevLastPostBtn = document.getElementById("prev-last-post-btn"); //prev Last Post Btn in blog-page
    this.nextFirstPostBtn = document.getElementById("next-first-post-btn"); //prev Last Post Btn in blog-page

    this.submitCommentBtn = document.getElementById("submit-comment-btn"); //submit Comment Btn blog-page
    this.commentsPostContainer = document.getElementById("comments-post-container"); //comments Post Container blog-page
    this.nameCommentPostInput = document.getElementById("name-comment-post-input"); //name Comment Post Input blog-page
    this.emailCommentPostInput = document.getElementById("email-comment-post-input"); //email Comment Post Input blog-page
    this.textCommentPostInput = document.getElementById("text-comment-post-input"); //text Comment Post Input blog-page

    this.numberReviewFormComment = document.getElementById("number-review-form-comment"); //number Review Form Comment blog-page

    this.blogSliderContainerMainPage = document.getElementById("blog-slider-container-main-page"); //number Review Form Comment blog-page
    // ---------------------------------------------------------------------------
    // ---------------------------------------------------------------------------
    // ---------------------------------------------------------------------------
    this.productContainer = document.getElementById("product-container"); //product Container in product page
    this.contentProductContainer = document.getElementById("content-product-container"); //content Product Container in product page

    this.commentProductContainer = document.getElementById("comment-product-container"); //comment Product Container

    this.similarProductContainer = document.getElementById("similar-product-container"); //similar Product Container
    // ---------------------------------------------------------------------------
    // ----------------------------- add to cart ---------------------------------
    // ---------------------------------------------------------------------------
    this.cartProductContainer = document.querySelector(".cart-product-container");
    this.emptyCartText = document.querySelector(".empty-cart-text");

    this.cartTotalPriceNumber = document.getElementById("cart-total-price");
    // ---------------------------------------------------------------------------
    // ----------------------------- checkout ---------------------------------
    // ---------------------------------------------------------------------------
    this.productCheckoutContainer = document.getElementById("product-checkout-container");

    // انتخاب المنت قیمت نهایی
    this.totalPriceCheckout = document.getElementById('total-price-checkout')

  }


  // call all functions
  init() {
    this.setupThemeDarkToggle();
    this.showSearchBox();
    this.showHideMenuMobile();
    this.activeSubCategory(this.linkPagesMenuMobile, this.subPagesMenuMobile);
    this.activeSubCategory(this.linkCategoryMenuMobile, this.subCategoryMenuMobile);
    this.changeSliderHeader();
    this.showCartProductMenu();
    this.changeSliderMainAndOffMainPage();
    this.showMenuStickyAndScrollTopBtn();
    this.swiperSliderProductMainPage();
    this.swiperSliderBlogMainPage();
    this.showCategorySubMenuDesktop();
    this.showCategorySubMenuMobile();
    this.showProductCartLocal();
    this.showSearchResult()
  }
  // call global functions
  global() {
    this.setupThemeDarkToggle();
    this.showSearchBox();
    this.showHideMenuMobile();
    this.activeSubCategory(this.linkPagesMenuMobile, this.subPagesMenuMobile);
    this.activeSubCategory(this.linkCategoryMenuMobile, this.subCategoryMenuMobile);
    this.showCartProductMenu();
    this.showMenuStickyAndScrollTopBtn();
    this.showCategorySubMenuDesktop();
    this.showCategorySubMenuMobile();
    this.showProductCartLocal();
    this.showSearchResult()
  }
  // set theme dark
  setupThemeDarkToggle() {
    this.themeToggle.addEventListener("click", () => {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        this.logoMobile.src = "images/logo-white.png";
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        this.logoMobile.src = "images/logo.png";
        localStorage.setItem("theme", "dark");
      }
    });

    window.addEventListener("load", () => {
      const colorTheme = localStorage.getItem("theme");

      if (colorTheme === "dark") {
        document.documentElement.classList.add("dark");
        this.logoMobile.src = "images/logo.png";
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        this.logoMobile.src = "images/logo-white.png";
        localStorage.setItem("theme", "light");
      }
    });
  }
  //show search box
  showSearchBox() {
    this.searchIcon.addEventListener("click", () => {
      this.searchBox.classList.toggle("active-search");

      if(!this.searchBox.classList.contains('active-search')) {
        this.searchResultBox.style.display = 'none'; //اگر کاربر روی آیکون کلید کرد نتایج جستجو هم باهاش برن
        this.searchBox.value = ''
      }
    });
  }
  // show & hide menu mobile
  showHideMenuMobile() {
    this.openMenuMobileIcon.addEventListener("click", () => {
      this.mobileMenu.classList.add("show-menu-mobile");
      this.overlay.classList.add("active-block");
    });

    this.closeMenuMobileIcon.addEventListener("click", () => {
      this.closeMenuMobile();
    });

    this.overlay.addEventListener("click", () => {
      this.closeMenuMobile();
    });
  }
  //close menu mobile function ===> use in above function
  closeMenuMobile() {
    this.mobileMenu.classList.remove("show-menu-mobile");
    this.overlay.classList.remove("active-block");
  }
  // show sub pages mobile
  activeSubCategory(link, sub) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      sub.classList.toggle("active-flex");
    });
  }
  //slider header
  changeSliderHeader() {
    setInterval(() => {
      this.imageSliderHeader.src = `${this.arrayImgSliderHeader[this.currentIndex]}`;
      if (this.currentIndex === 0) {
        this.titleSliderText.textContent = "بادام شور";
        this.offerSliderText.textContent = "10 درصد تخفیف";
        this.couponSliderNumber.innerHTML = "FB369";
      }
      if (this.currentIndex === 1) {
        this.titleSliderText.textContent = "ماکادمیا";
        this.offerSliderText.textContent = "15 درصد تخفیف";
        this.couponSliderNumber.textContent = "AB1766";
      }
      if (this.currentIndex === 2) {
        this.titleSliderText.textContent = "آجیل ممتاز";
        this.offerSliderText.textContent = "12 درصد تخفیف";
        this.couponSliderNumber.textContent = "SP9966";
      }
      this.currentIndex++;

      if (this.currentIndex > this.arrayImgSliderHeader.length - 1) this.currentIndex = 0;
    }, 5000);
  }
  //show cart product menu
  showCartProductMenu() {
    this.openShoppingCartIcon.addEventListener("click", () => {
      this.shoppingCartMenu.classList.add("show-menu-mobile");
      this.overlay.classList.add("active-block");
    });

    this.closeShoppingCartIcon.addEventListener("click", () => {
      this.shoppingCartMenu.classList.remove("show-menu-mobile");
      this.overlay.classList.remove("active-block");
    });

    this.overlay.addEventListener("click", () => {
      this.shoppingCartMenu.classList.remove("show-menu-mobile");
      this.overlay.classList.remove("active-block");
    });
  }
  //change slider main and off in main page
  changeSliderMainAndOffMainPage() {
    this.offProBtn.addEventListener("click", () => {
      this.sliderSpecialPro.style.display = "none";
      this.sliderOffPro.style.display = "block";

      this.specialProBtn.classList.remove("active-btn");
      this.offProBtn.classList.add("active-btn");
    });

    this.specialProBtn.addEventListener("click", () => {
      this.sliderSpecialPro.style.display = "block";
      this.sliderOffPro.style.display = "none";

      this.specialProBtn.classList.add("active-btn");
      this.offProBtn.classList.remove("active-btn");
    });
  }
  //show menu sticky and scroll top btn when scroll down
  showMenuStickyAndScrollTopBtn() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        this.menuDesktop.style.width = "100%";
        this.menuDesktop.style.position = "fixed";
        this.menuDesktop.style.top = "0";
        this.menuDesktop.style.padding = "0 3rem";

        this.scrollTopBtn.style.right = "1.5rem";
      } else {
        this.menuDesktop.style.width = "80%";
        this.menuDesktop.style.position = "absolute";
        this.menuDesktop.style.top = "8rem";

        this.scrollTopBtn.style.right = "-100%";
      }
    });
  }
  //swiper slider product main page
  swiperSliderProductMainPage() {
    document.addEventListener("DOMContentLoaded", function () {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        freeMode: true,
        autoplay: {
          delay: 3000, // Autoplay delay in milliseconds (5 seconds in this example)
          disableOnInteraction: false, // Set to false to continue autoplay even when the user interacts with the swiper
        },
        pagination: {
          el: ".mySwiper .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          // When window width is <= 768px
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        },
      });
    });
  }
  //swiper slider blog main page
  swiperSliderBlogMainPage() {
    document.addEventListener("DOMContentLoaded", function () {
      var mineSwiper = new Swiper(".mineSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".mineSwiper .swiper-pagination",
          clickable: true,
        },
      });
    });
  }
  //slider product image
  sliderPro() {
    document.addEventListener("DOMContentLoaded", function () {
      var proSlider = new Swiper(".pro-slider", {
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
        },
        freeMode: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      });
    });
  }
  // active tab content in product page
  showActiveTabContentProduct() {
    this.tabsBtnContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("review-tab-btn")) {
        this.descriptionTabBtn.classList.remove("active-tab");
        this.reviewTabBtn.classList.add("active-tab");

        this.descriptionTabContent.style.display = "none";
        this.reviewTabContent.style.display = "block";
      } else {
        this.descriptionTabBtn.classList.add("active-tab");
        this.reviewTabBtn.classList.remove("active-tab");

        this.descriptionTabContent.style.display = "block";
        this.reviewTabContent.style.display = "none";
      }
    });
  }
  // show tab active FAQ
  showFaqQuestion() {
    this.questionFaq.forEach((question) => {
      question.addEventListener("click", () => {
        const faq = question.closest(".faq");
        const answer = faq.querySelector(".answer-faq");
        const icon = faq.querySelector(".icon-active");

        // remove all active class
        this.questionFaq.forEach((q) => {
          const faq = q.closest(".faq");
          const answer = faq.querySelector(".answer-faq");
          const icon = faq.querySelector(".icon-active");
          answer.classList.remove("active-block");
          icon.classList.remove("active-animation-rotate");
          icon.classList.remove("hide-line");
        });

        // Toggle answer visibility
        answer.classList.toggle("active-block");

        // Toggle icon animation
        icon.classList.toggle("active-animation-rotate");
        icon.classList.toggle("hide-line");
      });
    });
  }
  // show sidebar blog page in mobile
  showAndCloseSidebarBlogMobile() {
    this.iconSidebarBlog.addEventListener("click", () => {
      this.sidebarBlogMobile.style.right = 0;
      this.overlay.classList.add("active-block");
    });
    this.iconCloseSidebarBlog.addEventListener("click", () => {
      this.sidebarBlogMobile.style.right = "-100%";
      this.overlay.classList.remove("active-block");
    });
    this.overlay.addEventListener("click", () => {
      this.sidebarBlogMobile.style.right = "-100%";
    });
  }
  // show sidebar shop page in mobile
  showAndCloseSidebarShopMobile() {
    this.openIconSidebarShop.addEventListener("click", () => {
      this.sidebarShopMobile.style.right = 0;
      this.overlay.classList.add("active-block");
    });
    this.closeIconSidebarShop.addEventListener("click", () => {
      this.sidebarShopMobile.style.right = "-100%";
      this.overlay.classList.remove("active-block");
    });
    this.overlay.addEventListener("click", () => {
      this.sidebarShopMobile.style.right = "-100%";
      this.overlay.classList.remove("active-block");
    });
  }

  // -------------------------------------
  // --------------- SLIDER ----------------------
  // -------------------------------------
  // generate slider post
  generateProductSliderHtml(id, title, price, discountedPrice, src) {
    return `
      <div data-id="${id}" data-weight="500"
        class="swiper-slide parent-product hover-border-right relative w-1/2 md:w-1/5 px-2 pb-6 rounded-lg bg-white shadow-lg cursor-pointer group" id="${id}">
        <!-- img -->
        <div class="mb-2 text-center">
          <img src="${src}" alt="" />
        </div>
        <!-- product price -->
        <div class="flex flex-col items-center gap-y-2">
          <!-- product title -->
          <h3 class="font-lalezar font-light text-lg md:text-xl text-amber-700">
            ${title}
          </h3>
          <!-- product price -->
          <div class="flex gap-x-2">
            <!-- main price -->
            <p class="font-sans-medium ${discountedPrice ? "off-price" : ""}">
              ${price} <span class="text text-[10px] ${
      discountedPrice ? "off-price" : ""
    }">تومان</span>
            </p>
            <!-- off price -->
            ${
              discountedPrice
                ? `<p class="font-sans-medium">${discountedPrice} <span class="text text-xs">تومان</span></p> `
                : ""
            }
          </div>
        </div>
        <!-- sale product badge -->
        ${
          discountedPrice
            ? `<div class="absolute flex justify-center items-center top-2 left-3 w-8 h-8 text-xs text-white rounded-full bg-amber-800">
              ویژه
            </div>`
            : ""
        }
  
        <!-- hover border left -->
        <div class="hover-border-left"></div>
        <div class="hover-border-bottom"></div>
        <!-- icon hover -->
        <div class="hidden group-hover:block absolute top-[30%] left-0 right-0 mx-auto">
          <div class="flex items-center justify-center gap-x-2">
            <svg
              class="goToProductPageBtn w-10 h-10 p-2 rounded-full bg-white hover:bg-amber-700 text-amber-700 hover:text-white cursor-pointer transition-colors">
              <use class="w-5 h-5" href="#arrow-right-in"></use>
            </svg>
            <svg
              class="addProductToCartBtn w-10 h-10 p-2 rounded-full bg-white hover:bg-amber-700 text-amber-700 hover:text-white cursor-pointer transition-colors">
              <use class="w-5 h-5" href="#shopping-cart"></use>
            </svg>
          </div>
        </div>
      </div>
    `;
  }
  // generate slider product in main page
  generateSliderProductMainPage() {
    allProducts.slice(0, 8).forEach((product) => {
      const htmlProductSlider = this.generateProductSliderHtml(
        product.id,
        product.title,
        product.price,
        product.discountedPrice,
        product.src
      );
      this.sliderSpecialProductWrapper.insertAdjacentHTML("beforeend", htmlProductSlider);
    });

    this.addEventListenersToSliderButtons();
  }
  // generate OFF slider product in main page
  generateOffSliderProduct() {
    let productsOff = allProducts.filter((product) => product.discountedPrice);
    productsOff.forEach((product) => {
      const htmlProductOffSlider = this.generateProductSliderHtml(
        product.id,
        product.title,
        product.price,
        product.discountedPrice,
        product.src
      );
      this.sliderOffProductWrapper.insertAdjacentHTML("beforeend", htmlProductOffSlider);
    });

    this.addEventListenersToSliderButtons();
  }

  // تابع کمکی برای رخداد کلیک بر روی آیکون خرید هنگام هاور محصول در اسلایدر
  addEventListenersToSliderButtons() {
    const buttons = document.querySelectorAll(".goToProductPageBtn:not(.event-bound)");
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.goToProductPage(e);
      });
      btn.classList.add("event-bound");
    });

    const buttonsAdd = document.querySelectorAll(".addProductToCartBtn:not(.event-bound)");
    buttonsAdd.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.addOneProductToCart(e);
      });
      btn.classList.add("event-bound");
    });
  }
  // تابع کمکی برای رخداد کلیک و ورود به ص محصول مورد نظر بر روی آیکون ورود هنگام هاور محصول در اسلایدر
  goToProductPage(e) {
    // parent clicked
    const productSlide = e.target.closest(".parent-product");
    // get id product click
    const getIdProduct = productSlide.id;
    // get details product in main array product
    const currentProduct = allProducts.find((product) => product.id == getIdProduct);

    window.location.href = `product.html?product=${currentProduct.title}`;
  }
  //  با کلیک روی آیکون خرید محصولات اسلایدر این تابع اجرا میشه و محصول رو به سبد خرید اضافه میکنه
  addOneProductToCart(e) {
    const parent = e.target.closest(".parent-product");
    const parentId = parent.dataset.id;
    const parentWeight = parent.dataset.weight;

    let arrayCartProduct = JSON.parse(localStorage.getItem("cart")) || [];
    const findProduct = arrayCartProduct.find(
      (product) => product.id == parentId && product.weight == parentWeight
    );

    if (findProduct) {
      findProduct.quantity++;
      localStorage.setItem("cart", JSON.stringify(arrayCartProduct));
      let quantityValueInputCart = document.getElementById(
        `quantity-input-cart-${parentId}-${parentWeight}`
      );
      if (quantityValueInputCart) quantityValueInputCart.value++;
      this.updateTotalPriceCart();
    } else {
      const proInMainArray = allProducts.find((product) => product.id == parentId);
      const newObject = {
        id: proInMainArray.id,
        title: proInMainArray.title,
        weight: 500,
        price: proInMainArray.price,
        offPrice: proInMainArray.discountedPrice,
        src: proInMainArray.src,
        quantity: 1,
      };

      arrayCartProduct.push(newObject);
      localStorage.setItem("cart", JSON.stringify(arrayCartProduct));
      this.renderCartProducts(arrayCartProduct);
      this.updateTotalPriceCart();
    }
  }
  // رندر کردن محصولاتی که با کلیک روی آیکون به سبد خرید اضافه میشن
  renderCartProducts(arrayCartProduct) {
    this.cartProductContainer.innerHTML = "";
    arrayCartProduct.forEach((newObject) => {
      const htmlCartProduct = `
        <div data-id="${newObject.id}" data-weight="${
        newObject.weight
      }" class="cart-product flex flex-col gap-y-6 justify-between items-center mb-6 border-b border-gray-400 pb-3">
          <div class="flex items-center gap-x-6">
            <div class="w-14 h-14">
              <img src="${newObject.src}" alt="" />
            </div>
            <div class="space-y-2 text-slate-900 dark:text-yellow-400 block line-clamp-1">
              <h3 class="font-lalezar text-xl font-light">${newObject.title}</h3>
              <div class="flex items-center gap-x-6">
                <p>${
                  newObject.weight == 1000 ? "1 کیلو" : newObject.weight
                } <span class="text-xs">${newObject.weight == 1000 ? "" : "گرم"}</span></p>
                <p>${
                  newObject.offPrice ? (newObject.offPrice).toLocaleString() : (newObject.price).toLocaleString()
                } <span class="text-xs">تومان</span></p>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between w-full">
            <form class="">
              <div class="relative flex items-center max-w-[8rem]">
                <button type="button" id="decrement-button-${newObject.id}-${
        newObject.weight
      }" class="flex items-center justify-center bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg w-14 h-6 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                  <svg class="w-2 h-2"><use href="#minus"></use></svg>
                </button>
                <input type="text" id="quantity-input-cart-${newObject.id}-${
        newObject.weight
      }" class="flex items-center bg-gray-50 h-6 outline-none border border-b-slate-300 border-t-slate-300 text-center text-gray-900 text-xs w-12 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-yellow-200" value="${
        newObject.quantity
      }" required />
                <button type="button" id="increment-button-${newObject.id}-${
        newObject.weight
      }" class="flex items-center justify-center bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg w-14 h-6 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                  <svg class="w-2 h-2"><use href="#plus"></use></svg>
                </button>
              </div>
            </form>
            <svg class="w-4 h-4 cursor-pointer ml-4" id="trash-btn-${newObject.id}-${
        newObject.weight
      }"><use href="#trash"></use></svg>
          </div>
        </div>
      `;
      this.cartProductContainer.insertAdjacentHTML("beforeend", htmlCartProduct);

      let quantityValueInputCart = document.getElementById(
        `quantity-input-cart-${newObject.id}-${newObject.weight}`
      );
      const minusBtnCart = document.getElementById(
        `decrement-button-${newObject.id}-${newObject.weight}`
      );
      const plusBtnCart = document.getElementById(
        `increment-button-${newObject.id}-${newObject.weight}`
      );
      const trashBtnCart = document.getElementById(`trash-btn-${newObject.id}-${newObject.weight}`);

      if (plusBtnCart) {
        plusBtnCart.addEventListener("click", (e) => {
          this.plusProduct(e, quantityValueInputCart, arrayCartProduct);
          this.updateTotalPriceCart();
        });
      }

      if (minusBtnCart) {
        minusBtnCart.addEventListener("click", (e) => {
          this.minusProduct(e, quantityValueInputCart, arrayCartProduct);
          this.updateTotalPriceCart();
        });
      }

      if (trashBtnCart) {
        trashBtnCart.addEventListener("click", (e) => {
          this.removeProductCart(e, arrayCartProduct);
          this.updateTotalPriceCart();
        });
      }
    });
  }

  // ----------------------------------------------------
  // ------------------------SHOP PAGE----------------------------
  // ----------------------------------------------------
  // generate product shop html
  generateProductShopHtml(id, title, price, discountedPrice, src) {
    return `
      <div data-id="${id}" data-weight="500"
      class="parent-product hover-border-right relative w-[45%] md:w-[30%] px-2 pb-6 rounded-lg bg-white shadow-lg cursor-pointer group" id="${id}">
      <!-- img -->
      <div class="mb-2">
        <img src="${src}" alt="" />
      </div>
      <!-- product price -->
      <div class="flex flex-col items-center gap-y-2">
        <!-- product title -->
        <h3 class="font-lalezar font-light text-lg md:text-xl text-amber-700">
          ${title}
        </h3>
        <!-- product price -->
        <div class="flex gap-x-2">
          <!-- main price -->
          <p class="font-sans-medium ${discountedPrice ? "off-price" : ""}">
            ${price} <span class="text text-[10px] ${
      discountedPrice ? "off-price" : ""
    }">تومان</span>
          </p>
          <!-- off price -->
          ${
            discountedPrice
              ? `<p class="font-sans-medium">${discountedPrice} <span class="text text-xs">تومان</span></p> `
              : ""
          }
        </div>
      </div>
      <!-- sale product badge -->
      ${
        discountedPrice
          ? `<div class="absolute flex justify-center items-center top-2 left-3 w-8 h-8 text-xs text-white rounded-full bg-amber-800">
            ویژه
          </div>`
          : ""
      }
  
      <!-- hover border left -->
      <div class="hover-border-left"></div>
      <div class="hover-border-bottom"></div>
      <!-- icon hover -->
      <div class="hidden group-hover:block absolute top-[30%] left-0 right-0 mx-auto">
        <div class="flex items-center justify-center gap-x-2">
          <svg
            class="goToProductPageBtn w-10 h-10 p-2 rounded-full bg-white hover:bg-amber-700 text-amber-700 hover:text-white cursor-pointer transition-colors">
            <use class="w-5 h-5" href="#arrow-right-in"></use>
          </svg>
          <svg
            class="addProductToCartBtn w-10 h-10 p-2 rounded-full bg-white hover:bg-amber-700 text-amber-700 hover:text-white cursor-pointer transition-colors">
            <use class="w-5 h-5" href="#shopping-cart"></use>
          </svg>
        </div>
      </div>
    </div>
      `;
  }

  // set category by clicking image
  setCategory(category) {
    // set url on category = name category
    let url = "shop.html?category=" + encodeURIComponent(category);
    let newWindow = window.open(url, "_blank");
    // change title page to category name
    newWindow.addEventListener("DOMContentLoaded", () => {
      newWindow.document.title = `waffy - Shop - ${category}`;
    });
  }
  // click category
  runCategory() {
    // 1
    this.PistachioCategory.addEventListener("click", (e) => {
      e.preventDefault();
      this.setCategory("Pistachio");
    });
    // 2
    this.seedCategory.addEventListener("click", (e) => {
      e.preventDefault();
      this.setCategory("Seed");
    });
    // 3
    this.dryFruitCategory.addEventListener("click", (e) => {
      e.preventDefault();
      this.setCategory("Dry-Fruit");
    });
    // 4
    this.almondsCategory.addEventListener("click", (e) => {
      e.preventDefault();
      this.setCategory("Almonds");
    });
    // 5
    this.nutsCategory.addEventListener("click", (e) => {
      e.preventDefault();
      this.setCategory("Nuts");
    });
    //6 section 2
    this.candyCategory.addEventListener("click", (e) => {
      e.preventDefault();
      this.setCategory("Candy");
    });
    //7 section 2
    this.whiteChocolateCategory.addEventListener("click", (e) => {
      e.preventDefault();
      this.setCategory("White-Chocolate");
    });
    //8 section 2
    this.nutellaCategory.addEventListener("click", (e) => {
      e.preventDefault();
      this.setCategory("Nutella");
    });
    //9 section 2
    this.darkChocolateCategory.addEventListener("click", (e) => {
      e.preventDefault();
      this.setCategory("Dark-Chocolate");
    });
    //10 section 2
    this.chocolatePowderCategory.addEventListener("click", (e) => {
      e.preventDefault();
      this.setCategory("Chocolate-Powder");
    });
    //11 section 2
    this.honeyCategory.addEventListener("click", (e) => {
      e.preventDefault();
      this.setCategory("Honey");
    });
  }
  // show default product in shop page
  defaultProductShopPage() {
    // this.productShopContainer.innerHTML = ''
    allProducts.forEach((product) => {
      const htmlProductShop = this.generateProductShopHtml(
        product.id,
        product.title,
        product.price,
        product.discountedPrice,
        product.src
      );

      this.addEventListenersToSliderButtons()

      const url = new URL(window.location.href);
      const categoryNameProduct = url.searchParams.get("category");

      // if category param in url empty show default shop product
      if (categoryNameProduct === null)
        this.productShopContainer.insertAdjacentHTML("beforeend", htmlProductShop);
    });
  }
  //show product in shop base category => use these function in 'defaultProductShopPage'
  showProductCategoryInShop() {
    // get category name on url
    const url = new URL(window.location.href);
    const categoryNameProduct = url.searchParams.get("category");
    // filter product with category url
    const productCategory = allProducts.filter(
      (product) => product.category == categoryNameProduct
    );
    // generate product base category url
    productCategory.forEach((product) => {
      const htmlProductShop = this.generateProductShopHtml(
        product.id,
        product.title,
        product.price,
        product.discountedPrice,
        product.src
      );

      if (categoryNameProduct === product.category)
        this.productShopContainer.insertAdjacentHTML("beforeend", htmlProductShop);
        this.addEventListenersToSliderButtons()
    });
  }
  // special offer in nav menu => use these function in 'defaultProductShopPage'
  specialOfferMenu() {
    const filterOffProduct = allProducts.filter((product) => product.discountedPrice);

    const url = new URL(window.location.href);
    const categoryNameProduct = url.searchParams.get("category");

    filterOffProduct.forEach((product) => {
      const htmlProductShop = this.generateProductShopHtml(
        product.id,
        product.title,
        product.price,
        product.discountedPrice,
        product.src
      );
      if (categoryNameProduct === "off")
        this.productShopContainer.insertAdjacentHTML("beforeend", htmlProductShop);
        this.addEventListenersToSliderButtons()
    });
  }
  // find and unique product base on category
  uniqueProductCategory() {
    const category = [...new Set(allProducts.map((product) => product.categoryFA))];

    const uniqueCategory = category.map((cat) => {
      return allProducts.find((product) => product.categoryFA === cat);
    });
    return uniqueCategory;
  }
  // category page shop
  showCategoryInPage() {
    // these code run in uniqueProductCategory function
    // find and unique product base on category
    const uniqueCategory = this.uniqueProductCategory();

    uniqueCategory.forEach((product) => {
      const htmlCategory = `
      <div class="flex justify-center items-center flex-col gap-y-4 w-full md:w-[22%] border p-4 rounded-lg id="${product.id}">
      <img class="w-full h-72 object-cover rounded-lg" src="${product.srcCat}" alt="">
      <h3 class="font-lalezar text-2xl text-amber-700">${product.categoryFA}</h3>
      <a href="shop.html?category=${product.category}" target="_blank" class="btn hover:bg-yellow-400 hover:border-yellow-400 dark:text-white dark:hover:text-black transition-colors">مشاهده بیشتر</a>
    </div>
      `;
      this.categoryContainer.insertAdjacentHTML("beforeend", htmlCategory);
    });
  }
  //show category sub menu desktop
  showCategorySubMenuDesktop() {
    // these code run in uniqueProductCategory function
    // find and unique product base on category
    const uniqueCategory = this.uniqueProductCategory();

    const randomCategory = uniqueCategory.sort(() => 0.5 - Math.random()).slice(0, 5);

    randomCategory.forEach((product) => {
      const subMenuHtml = `
      <a
      class="hidden group-hover:flex items-center gap-x-3 hover:text-amber-400 transition-colors"
      href="shop.html?category=${product.category}" target="_blank">
      <div class="w-8 h-8">
        <img class="w-full h-full" src="${product.favIcon}" alt="" />
      </div>
      <span>${product.categoryFA}</span>
    </a>
      `;

      this.categorySubMenuDesktopContainer.insertAdjacentHTML("beforeend", subMenuHtml);
    });
  }
  //show category sub menu mobile
  showCategorySubMenuMobile() {
    // these code run in uniqueProductCategory function
    // find and unique product base on category
    const uniqueCategory = this.uniqueProductCategory();

    const randomCategory = uniqueCategory.sort(() => 0.5 - Math.random()).slice(0, 5);

    randomCategory.forEach((product) => {
      const subMenuHtml = `
      <a class="flex items-center gap-x-3 hover:text-amber-400 transition-colors" href="shop.html?category=${product.category}">
      <div class="w-8 h-8">
        <img class="w-full h-full" src="${product.favIcon}" alt="" />
      </div>
      <span>${product.categoryFA}</span>
    </a>
      `;

      this.subCategoryMenuMobile.insertAdjacentHTML("beforeend", subMenuHtml);
    });
  }
  // ----------------------
  // ----------------------
  // ----------------------
  // show category Sidebar in Shop page
  showCategorySidebarShop() {
    const uniqueCategory = this.uniqueProductCategory();

    uniqueCategory.sort(() => 0.5 - Math.random());

    const randomCategory = uniqueCategory.slice(0, 5);
    randomCategory.forEach((product) => {
      const htmlCategory = `
      <li>
      <a
        class="dark:text-yellow-400 dark:hover:text-amber-700 hover:text-amber-700 transition-colors"
        href="shop.html?category=${product.category}"
        >${product.categoryFA}</a
      >
    </li>
      `;
      // add random category to sidebar desktop container
      this.sidebarCategoryShopContainer.insertAdjacentHTML("beforeend", htmlCategory);
      // add random category to sidebar mobile container
      this.sidebarCategoryShopContainerMobile.insertAdjacentHTML("beforeend", htmlCategory);
    });
  }
  // generate no off product in shop page => use these function in showNooOffProductInShopPage function
  showNoOffProductShop() {
    const productNoOff = allProducts.filter((product) => !product.discountedPrice);

    const url = new URL(window.location.href);
    const nameCategory = url.searchParams.get("category");

    productNoOff.forEach((product) => {
      const htmlProductNoOff = this.generateProductShopHtml(
        product.id,
        product.title,
        product.price,
        product.discountedPrice,
        product.src
      );
      if (nameCategory === "no-off") {
        this.productShopContainer.insertAdjacentHTML("beforeend", htmlProductNoOff);
      }
    });
  }

  // ----------------------------------------
  // filter and show product base on price
  // ----------------------------------------
  filterProductBasePrice(minPrice, maxPrice) {
    return allProducts.filter((product) => product.price > minPrice && product.price <= maxPrice);
  }

  // less 400
  filterProductPriceAndSaveInLocalLess400() {
    // desktop
    this.less400PriceBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const less400ProductArray = this.filterProductBasePrice(0, 400000);

      window.location.href = "shop.html?category=less400";
      localStorage.setItem("filterProductLess400", JSON.stringify(less400ProductArray));
    });
    // mobile
    this.less400PriceBtnMobile.addEventListener("click", (e) => {
      e.preventDefault();
      const less400ProductArray = this.filterProductBasePrice(0, 400000);

      window.location.href = "shop.html?category=less400";
      localStorage.setItem("filterProductLess400", JSON.stringify(less400ProductArray));
    });
  }
  // 400 - 600
  filterProductPriceAndSaveInLocal400600() {
    this.between400600PriceBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const between400600ProductArray = this.filterProductBasePrice(400000, 600000);

      window.location.href = "shop.html?category=400-600";
      localStorage.setItem("filterProduct400600", JSON.stringify(between400600ProductArray));
    });
    this.between400600PriceBtnMobile.addEventListener("click", (e) => {
      e.preventDefault();
      const between400600ProductArray = this.filterProductBasePrice(400000, 600000);

      window.location.href = "shop.html?category=400-600";
      localStorage.setItem("filterProduct400600", JSON.stringify(between400600ProductArray));
    });
  }
  // 600 - 800
  filterProductPriceAndSaveInLocal600800() {
    this.between600800PriceBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const between600800ProductArray = this.filterProductBasePrice(600000, 800000);

      window.location.href = "shop.html?category=600-800";
      localStorage.setItem("filterProduct600800", JSON.stringify(between600800ProductArray));
    });
    this.between600800PriceBtnMobile.addEventListener("click", (e) => {
      e.preventDefault();
      const between600800ProductArray = this.filterProductBasePrice(600000, 800000);

      window.location.href = "shop.html?category=600-800";
      localStorage.setItem("filterProduct600800", JSON.stringify(between600800ProductArray));
    });
  }
  // more 800
  filterProductPriceAndSaveInLocalMore800() {
    this.more800PriceBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const more800ProductArray = this.filterProductBasePrice(800000, 5000000);

      window.location.href = "shop.html?category=more800";
      localStorage.setItem("filterProductMore800", JSON.stringify(more800ProductArray));
    });
    this.more800PriceBtnMobile.addEventListener("click", (e) => {
      e.preventDefault();
      const more800ProductArray = this.filterProductBasePrice(800000, 5000000);

      window.location.href = "shop.html?category=more800";
      localStorage.setItem("filterProductMore800", JSON.stringify(more800ProductArray));
    });
  }

  showFilterProductPrice() {
    // run function for save array in local
    this.filterProductPriceAndSaveInLocalLess400();
    this.filterProductPriceAndSaveInLocal400600();
    this.filterProductPriceAndSaveInLocal600800();
    this.filterProductPriceAndSaveInLocalMore800();

    const urlParam = new URLSearchParams(window.location.search);
    const categoryName = urlParam.get("category");

    if (categoryName === "less400") {
      const filterProduct = JSON.parse(localStorage.getItem("filterProductLess400"));
      filterProduct.forEach((product) => {
        const htmlProductShop = this.generateProductShopHtml(
          product.id,
          product.title,
          product.price,
          product.discountedPrice,
          product.src
        );
        this.productShopContainer.insertAdjacentHTML("beforeend", htmlProductShop);
        this.addEventListenersToSliderButtons()
      });
    }
    if (categoryName === "400-600") {
      const filterProduct = JSON.parse(localStorage.getItem("filterProduct400600"));
      filterProduct.forEach((product) => {
        const htmlProductShop = this.generateProductShopHtml(
          product.id,
          product.title,
          product.price,
          product.discountedPrice,
          product.src
        );
        this.productShopContainer.insertAdjacentHTML("beforeend", htmlProductShop);
        this.addEventListenersToSliderButtons()
      });
    }
    if (categoryName === "600-800") {
      const filterProduct = JSON.parse(localStorage.getItem("filterProduct600800"));
      filterProduct.forEach((product) => {
        const htmlProductShop = this.generateProductShopHtml(
          product.id,
          product.title,
          product.price,
          product.discountedPrice,
          product.src
        );
        this.productShopContainer.insertAdjacentHTML("beforeend", htmlProductShop);
        this.addEventListenersToSliderButtons()
      });
    }
    if (categoryName === "more800") {
      const filterProduct = JSON.parse(localStorage.getItem("filterProductMore800"));
      filterProduct.forEach((product) => {
        const htmlProductShop = this.generateProductShopHtml(
          product.id,
          product.title,
          product.price,
          product.discountedPrice,
          product.src
        );
        this.productShopContainer.insertAdjacentHTML("beforeend", htmlProductShop);
        this.addEventListenersToSliderButtons()
      });
    }
  }
  // ----------------------------------------
  // change type view product in shop page with click icon btn
  // ----------------------------------------
  generateListProductShop(id, title, price, discountedPrice, src) {
    return `
    <div data-id="${id}" data-weight="500"
    class="parent-product hover-border-right relative flex justify-around items-center w-full px-2 py-6 rounded-lg bg-white shadow-lg cursor-pointer group"
    id="${id}">
    <!-- product price -->
    <div class="flex flex-col items-center gap-y-2">
      <!-- product title -->
      <h3 class="font-lalezar font-light text-lg md:text-xl text-amber-700">
        ${title}
      </h3>
      <!-- product price -->
      <div class="flex gap-x-2">
        <!-- main price -->
        <p class="font-sans-medium ${discountedPrice ? "off-price" : ""}">
          ${price} <span class="text text-[10px] ${discountedPrice ? "off-price" : ""}">تومان</span>
        </p>
        <!-- off price -->
        ${
          discountedPrice
            ? `<p class="font-sans-medium">${discountedPrice} <span class="text text-xs">تومان</span></p>`
            : ""
        }
      </div>
    </div>
    <!-- img -->
    <div class="w-32 h-32">
      <img src="${src}" alt="" />
    </div>
    <!-- sale product badge -->
    ${
      discountedPrice
        ? `<div class="absolute flex justify-center items-center top-2 left-3 w-8 h-8 text-xs text-white rounded-full bg-amber-800">ویژه</div>`
        : ""
    }

    <!-- hover border left -->
    <div class="hover-border-left"></div>
    <div class="hover-border-bottom"></div>
    <!-- icon hover -->
    <div class="hidden group-hover:block absolute top-[30%] left-0 right-0 mx-auto">
      <div class="flex items-center justify-center gap-x-2">
        <svg
          class="goToProductPageBtn w-10 h-10 p-2 rounded-full bg-white hover:bg-amber-700 text-amber-700 hover:text-white cursor-pointer transition-colors">
          <use class="w-5 h-5" href="#arrow-right-in"></use>
        </svg>
        <svg
          class="addProductToCartBtn w-10 h-10 p-2 rounded-full bg-white hover:bg-amber-700 text-amber-700 hover:text-white cursor-pointer transition-colors">
          <use class="w-5 h-5" href="#shopping-cart"></use>
        </svg>
      </div>
    </div>
  </div>
    `;
  }

  changeTypeProduct() {
    // list product
    this.listTypeProductBtn.addEventListener("click", () => {
      this.productShopContainer.innerHTML = "";

      const url = new URL(window.location.href);
      const categoryName = url.searchParams.get("category");

      // default list product
      allProducts.forEach((product) => {
        const listProductHtml = this.generateListProductShop(
          product.id,
          product.title,
          product.price,
          product.discountedPrice,
          product.src
        );

        this.addEventListenersToSliderButtons()

        if (categoryName === null)
          this.productShopContainer.insertAdjacentHTML("beforeend", listProductHtml);
      });

      // -----filter product base on category------
      const filterProductCategory = allProducts.filter(
        (product) => product.category === categoryName
      );
      filterProductCategory.forEach((product) => {
        const listProductHtml = this.generateListProductShop(
          product.id,
          product.title,
          product.price,
          product.discountedPrice,
          product.src
        );
        if (categoryName === product.category)
          this.productShopContainer.insertAdjacentHTML("beforeend", listProductHtml);
      });

      // -----filter product base on off------
      const offProduct = allProducts.filter((product) => product.discountedPrice);
      offProduct.forEach((product) => {
        const listProductHtml = this.generateListProductShop(
          product.id,
          product.title,
          product.price,
          product.discountedPrice,
          product.src
        );
        if (categoryName === "off")
          this.productShopContainer.insertAdjacentHTML("beforeend", listProductHtml);
      });

      // -----filter product base on no-off------
      const noOffProduct = allProducts.filter((product) => !product.discountedPrice);
      noOffProduct.forEach((product) => {
        const listProductHtml = this.generateListProductShop(
          product.id,
          product.title,
          product.price,
          product.discountedPrice,
          product.src
        );
        if (categoryName === "no-off")
          this.productShopContainer.insertAdjacentHTML("beforeend", listProductHtml);
      });

      // -----filter list product base price------
      if (categoryName === "less400") {
        const filterProduct = JSON.parse(localStorage.getItem("filterProductLess400"));
        filterProduct.forEach((product) => {
          const htmlProductShop = this.generateListProductShop(
            product.id,
            product.title,
            product.price,
            product.discountedPrice,
            product.src
          );
          this.productShopContainer.insertAdjacentHTML("beforeend", htmlProductShop);
        });
      }
      if (categoryName === "400-600") {
        const filterProduct = JSON.parse(localStorage.getItem("filterProduct400600"));
        filterProduct.forEach((product) => {
          const htmlProductShop = this.generateListProductShop(
            product.id,
            product.title,
            product.price,
            product.discountedPrice,
            product.src
          );
          this.productShopContainer.insertAdjacentHTML("beforeend", htmlProductShop);
        });
      }
      if (categoryName === "600-800") {
        const filterProduct = JSON.parse(localStorage.getItem("filterProduct600800"));
        filterProduct.forEach((product) => {
          const htmlProductShop = this.generateListProductShop(
            product.id,
            product.title,
            product.price,
            product.discountedPrice,
            product.src
          );
          this.productShopContainer.insertAdjacentHTML("beforeend", htmlProductShop);
        });
      }
      if (categoryName === "more800") {
        const filterProduct = JSON.parse(localStorage.getItem("filterProductMore800"));
        filterProduct.forEach((product) => {
          const htmlProductShop = this.generateListProductShop(
            product.id,
            product.title,
            product.price,
            product.discountedPrice,
            product.src
          );
          this.productShopContainer.insertAdjacentHTML("beforeend", htmlProductShop);
        });
      }

      this.showProductListLowToHigh();
      this.showProductListShopSelectOptionValue();
    });

    // grid product
    this.gridTypeProductBtn.addEventListener("click", () => {
      this.productShopContainer.innerHTML = "";
      this.defaultProductShopPage();
      this.showProductCategoryInShop();
      this.specialOfferMenu();
      this.showNoOffProductShop();

      const url = new URL(window.location.href);
      const categoryName = url.searchParams.get("category");
      if (categoryName === "less400") {
        const filterProduct = JSON.parse(localStorage.getItem("filterProductLess400"));
        filterProduct.forEach((product) => {
          const htmlProductShop = this.generateProductShopHtml(
            product.id,
            product.title,
            product.price,
            product.discountedPrice,
            product.src
          );
          this.productShopContainer.insertAdjacentHTML("beforeend", htmlProductShop);
        });
      }
      if (categoryName === "400-600") {
        const filterProduct = JSON.parse(localStorage.getItem("filterProduct400600"));
        filterProduct.forEach((product) => {
          const htmlProductShop = this.generateProductShopHtml(
            product.id,
            product.title,
            product.price,
            product.discountedPrice,
            product.src
          );
          this.productShopContainer.insertAdjacentHTML("beforeend", htmlProductShop);
        });
      }
      if (categoryName === "600-800") {
        const filterProduct = JSON.parse(localStorage.getItem("filterProduct600800"));
        filterProduct.forEach((product) => {
          const htmlProductShop = this.generateProductShopHtml(
            product.id,
            product.title,
            product.price,
            product.discountedPrice,
            product.src
          );
          this.productShopContainer.insertAdjacentHTML("beforeend", htmlProductShop);
        });
      }
      if (categoryName === "more800") {
        const filterProduct = JSON.parse(localStorage.getItem("filterProductMore800"));
        filterProduct.forEach((product) => {
          const htmlProductShop = this.generateProductShopHtml(
            product.id,
            product.title,
            product.price,
            product.discountedPrice,
            product.src
          );
          this.productShopContainer.insertAdjacentHTML("beforeend", htmlProductShop);
        });
      }

      this.showProductLowToHigh();
      this.showProductShopSelectOptionValue();
    });
  }
  // ----------------------------------------
  // show number product select option in shop page
  // ----------------------------------------
  showProductShopSelectOptionValue() {
    this.listNumberInput.addEventListener("change", () => {
      const numberProductValue = parseInt(this.listNumberInput.value);
      let currentPage = 1;

      const updateProductList = () => {
        let start = (currentPage - 1) * numberProductValue;
        let end = start + numberProductValue;
        const filterProduct = allProducts.slice(start, end);

        this.productShopContainer.innerHTML = "";

        filterProduct.forEach((product) => {
          const htmlProductShop = this.generateProductShopHtml(
            product.id,
            product.title,
            product.price,
            product.discountedPrice,
            product.src
          );
          this.productShopContainer.insertAdjacentHTML("beforeend", htmlProductShop);
          this.addEventListenersToSliderButtons()
        });
      };

      // -----------
      const updatePaginationBtn = () => {
        this.paginationShopContainer = document.getElementById("pagination-Shop-Container");
        this.paginationShopContainer.innerHTML = "";
        let numberPage = Math.ceil(allProducts.length / numberProductValue);

        for (let i = 1; i <= numberPage; i++) {
          let btnPageHtml = `
        <button
          class="flex items-center justify-center w-9 h-9 border border-amber-700 rounded-full hover:bg-yellow-400 hover:border-yellow-400 transition-colors dark:text-white dark:hover:text-black" data-page="${i}">
          <p>${i}</p>
        </button>
          `;
          if (numberPage > 1)
            this.paginationShopContainer.insertAdjacentHTML("beforeend", btnPageHtml);
        }

        const paginationBtns = this.paginationShopContainer.querySelectorAll("button");
        //add active-btn class to btn 1 when pagination
        if (paginationBtns.length > 0) {
          paginationBtns[0].classList.add("active-btn"); // افزودن کلاس active-btn به دکمه صفحه 1
        }

        paginationBtns.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            // remove active-btn class from other btn when click
            paginationBtns.forEach((btn) => btn.classList.remove("active-btn"));
            // sure click on btn not tag <p>
            const target = e.target.closest("button");
            if (target) {
              currentPage = parseInt(target.getAttribute("data-page"));
              target.classList.add("active-btn");
              updateProductList();
            }
          });
        });
      };
      updateProductList();
      updatePaginationBtn();
      this.goToDirectProduct();
    });
  }

  // use in changeTypeProduct when user click on list icon to show list product
  showProductListShopSelectOptionValue() {
    this.listNumberInput.addEventListener("change", () => {
      const numberProductValue = parseInt(this.listNumberInput.value);
      let currentPage = 1;

      const updateProductList = () => {
        let start = (currentPage - 1) * numberProductValue;
        let end = start + numberProductValue;
        const filterProduct = allProducts.slice(start, end);

        this.productShopContainer.innerHTML = "";

        filterProduct.forEach((product) => {
          const listProductHtml = this.generateListProductShop(
            product.id,
            product.title,
            product.price,
            product.discountedPrice,
            product.src
          );
          this.productShopContainer.insertAdjacentHTML("beforeend", listProductHtml);
        });
        this.goToDirectProduct();
      };

      // -----------
      const updatePaginationBtn = () => {
        this.paginationShopContainer = document.getElementById("pagination-Shop-Container");
        this.paginationShopContainer.innerHTML = "";
        let numberPage = Math.ceil(products.length / numberProductValue);

        for (let i = 1; i <= numberPage; i++) {
          let btnPageHtml = `
        <button
          class="flex items-center justify-center w-9 h-9 border border-amber-700 rounded-full hover:bg-yellow-400 hover:border-yellow-400 transition-colors dark:text-white dark:hover:text-black" data-page="${i}">
          <p>${i}</p>
        </button>
          `;
          if (numberPage > 1)
            this.paginationShopContainer.insertAdjacentHTML("beforeend", btnPageHtml);
        }

        const paginationBtns = this.paginationShopContainer.querySelectorAll("button");
        //add active-btn class to btn 1 when pagination
        if (paginationBtns.length > 0) {
          paginationBtns[0].classList.add("active-btn"); // افزودن کلاس active-btn به دکمه صفحه 1
        }

        paginationBtns.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            // remove active-btn class from other btn when click
            paginationBtns.forEach((btn) => btn.classList.remove("active-btn"));
            // sure click on btn not tag <p>
            const target = e.target.closest("button");
            if (target) {
              currentPage = parseInt(target.getAttribute("data-page"));
              target.classList.add("active-btn");
              updateProductList();
            }
          });
        });
      };
      updateProductList();
      updatePaginationBtn();
      this.goToDirectProduct();
    });
  }
  // ----------------------------------------
  // show product base low to high select option in shop page
  // ----------------------------------------
  showProductLowToHigh() {
    this.featureInput.addEventListener("change", () => {
      let inputValue = this.featureInput.value;

      this.productShopContainer.innerHTML = "";

      // این کپی آرایه رو میسازیم که هنگام برگشت به آرایه اصلی در حالت نرمال مشکلی نداشته باشیم
      this.copyProductArray = [...allProducts];

      if (inputValue === "lowToHigh") {
        this.copyProductArray.sort((a, b) => a.price - b.price);

        this.copyProductArray.forEach((product) => {
          const htmlProductShop = this.generateProductShopHtml(
            product.id,
            product.title,
            product.price,
            product.discountedPrice,
            product.src
          );
          this.productShopContainer.insertAdjacentHTML("beforeend", htmlProductShop);
          this.addEventListenersToSliderButtons()
        });
      }
      if (inputValue === "highToLow") {
        this.copyProductArray.sort((a, b) => b.price - a.price);

        this.copyProductArray.forEach((product) => {
          const htmlProductShop = this.generateProductShopHtml(
            product.id,
            product.title,
            product.price,
            product.discountedPrice,
            product.src
          );
          this.productShopContainer.insertAdjacentHTML("beforeend", htmlProductShop);
          this.addEventListenersToSliderButtons()
        });
      }
      if (inputValue === "normal") {
        allProducts.forEach((product) => {
          const htmlProductShop = this.generateProductShopHtml(
            product.id,
            product.title,
            product.price,
            product.discountedPrice,
            product.src
          );
          this.productShopContainer.insertAdjacentHTML("beforeend", htmlProductShop);
          this.addEventListenersToSliderButtons()
        });
      }
      this.goToDirectProduct();
    });
  }

  // use in changeTypeProduct when user click on list icon to show list product
  showProductListLowToHigh() {
    this.featureInput.addEventListener("change", () => {
      let inputValue = this.featureInput.value;

      this.productShopContainer.innerHTML = "";

      // این کپی آرایه رو میسازیم که هنگام برگشت به آرایه اصلی در حالت نرمال مشکلی نداشته باشیم
      this.copyProductArray = [...allProducts];

      if (inputValue === "lowToHigh") {
        this.copyProductArray.sort((a, b) => a.price - b.price);

        this.copyProductArray.forEach((product) => {
          const listProductHtml = this.generateListProductShop(
            product.id,
            product.title,
            product.price,
            product.discountedPrice,
            product.src
          );
          this.productShopContainer.insertAdjacentHTML("beforeend", listProductHtml);
        });
      }
      if (inputValue === "highToLow") {
        this.copyProductArray.sort((a, b) => b.price - a.price);

        this.copyProductArray.forEach((product) => {
          const listProductHtml = this.generateListProductShop(
            product.id,
            product.title,
            product.price,
            product.discountedPrice,
            product.src
          );
          this.productShopContainer.insertAdjacentHTML("beforeend", listProductHtml);
        });
      }
      if (inputValue === "normal") {
        allProducts.forEach((product) => {
          const listProductHtml = this.generateListProductShop(
            product.id,
            product.title,
            product.price,
            product.discountedPrice,
            product.src
          );
          this.productShopContainer.insertAdjacentHTML("beforeend", listProductHtml);
        });
      }
      this.goToDirectProduct();
    });
  }

  // go to direct product when click
  goToDirectProduct() {
    // when click on icon go to direct product
    const buttons = this.productShopContainer.querySelectorAll(".go-to-direct-product-btn");

    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        // parent clicked
        const parentProduct = e.target.closest(".parent-product");
        // get id product click
        const getIdProduct = parentProduct.id;
        // get details product in main array product
        const currentProduct = allProducts.find((product) => product.id == getIdProduct);

        window.location.href = `product.html?product=${currentProduct.title}`;
      });
    });
  }

  // --------------------------------------
  // ------------------blog page-------------
  // ----------------------------------------
  // render category product html in blog page sidebar
  renderCategoryProductBlog(category, categoryFA) {
    return `
    <li>
    <a
      class="dark:text-yellow-400 dark:hover:text-amber-700 hover:text-amber-700 transition-colors"
      href="shop.html?category=${category}"
      >${categoryFA}</a
    >
  </li>
    `;
  }
  // category page product sidebar in blog page
  showCategoryInSidebarPageBlog() {
    // these code run in uniqueProductCategory function
    // find and unique product base on category
    const uniqueCategory = this.uniqueProductCategory();

    //  شلخته کردن آرایه و برش 5 تایی
    const sliceUniqueArray = uniqueCategory.sort(() => 0.5 - Math.random()).slice(0, 5);

    sliceUniqueArray.forEach((product) => {
      const htmlCategory = this.renderCategoryProductBlog(product.category, product.categoryFA);
      this.sidebarCategoryProductBlogContainer.insertAdjacentHTML("beforeend", htmlCategory);
    });
  }
  // category page product sidebar in blog page
  showCategoryInSidebarMobilePageBlog() {
    // these code run in uniqueProductCategory function
    // find and unique product base on category
    const uniqueCategory = this.uniqueProductCategory();

    //  شلخته کردن آرایه و برش 5 تایی
    const sliceUniqueArray = uniqueCategory.sort(() => 0.5 - Math.random()).slice(0, 5);

    sliceUniqueArray.forEach((product) => {
      const htmlCategory = this.renderCategoryProductBlog(product.category, product.categoryFA);
      this.sidebarCategoryProductBlogContainerMobile.insertAdjacentHTML("beforeend", htmlCategory);
    });
  }
  // -------------------------
  // render recent post html in blog page
  renderRecentPostHtml(id, title, description, src) {
    return `
        <a href="blog-page.html?post=${title}"
        class="${id} flex items-center justify-between cursor-pointer pr-1 border-r-2 border-r-transparent hover:border-r-amber-700 transition-all group">
        <!-- title & des -->
        <div class="flex flex-col w-[70%]">
          <h4
            class="font-lalezar text-xl line-clamp-1 group-hover:text-amber-700 transition-colors dark:text-yellow-400">
            ${title}
          </h4>
          <p class="line-clamp-2 text-sm dark:text-white">
            ${description}
          </p>
        </div>
        <!-- img -->
        <div class="w-[25%]">
          <img class="w-full h-full" src="${src}" alt="${title}" />
        </div>
      </a>
        `;
  }
  // show recent post in sidebar blog page
  showRecentPosts() {
    // Slutty array blog post and slice 3 of posts
    const recentPostsRandomArray = arrayPosts.sort(() => 0.5 - Math.random()).slice(0, 3);

    recentPostsRandomArray.forEach((post) => {
      const htmlRecentPost = this.renderRecentPostHtml(
        post.id,
        post.title,
        post.description,
        post.src
      );
      this.recentPostsContainer.insertAdjacentHTML("beforeend", htmlRecentPost);
    });
  }
  // show recent post in sidebar MOBILE blog page
  showRecentPostsMobile() {
    // Slutty array blog post and slice 3 of posts
    const recentPostsRandomArray = arrayPosts.sort(() => 0.5 - Math.random()).slice(0, 3);

    recentPostsRandomArray.forEach((post) => {
      const htmlRecentPost = this.renderRecentPostHtml(
        post.id,
        post.title,
        post.description,
        post.src
      );
      this.recentPostsMobileContainer.insertAdjacentHTML("beforeend", htmlRecentPost);
    });
  }
  // ----------------------------
  // show posts in blog page
  showPosts() {
    arrayPosts.forEach((post) => {
      const htmlPost = `
      <div class="post flex flex-col gap-4 w-full md:w-[45%]">
      <img class="w-[80%] object-cover" src="${post.src}" alt="" />
      <h3 class="font-lalezar text-2xl pr-2 line-clamp-1 dark:text-amber-700">${post.title}</h3>
      <p class="line-clamp-2 pr-2 dark:text-gray-200">
        ${post.description}
      </p>
      <a
        class="btn-blog btn w-[50%] text-center block mt-2 pr-2 hover:text-white dark:text-white hover:bg-amber-700 hover:border-amber-700 transition-colors"
        href="blog-page.html?post=${post.title}"
        >مطالعه بیشتر</a
      >
    </div>
      `;
      this.postsContainer.insertAdjacentHTML("beforeend", htmlPost);
    });
  }
  // ----------------------------
  // show post in page
  showDirectPost() {
    document.addEventListener("DOMContentLoaded", () => {
      const url = new URL(window.location.href);
      const getHref = url.searchParams.get("post");

      const correctPost = arrayPosts.find((post) => post.title === getHref);

      const todayDate = this.getPersianDate();

      let numberReview = this.generateNumberReview();

      if (correctPost === undefined) {
        const htmlNull = `
          <p class="font-lalezar text-2xl my-6 dark:text-amber-700">پستی یافت نشد...</p>
        `;
        this.contentPostContainer.insertAdjacentHTML("beforeend", htmlNull);

        this.nextPrevPostBtnsContainer.style.display = "none";
        this.shareBtnsPostContainer.style.display = "none";
        this.commentsPostContainer.style.display = "none";
      } else {
        const postHtml = `
        <!-- img blog -->
        <div class="w-full h-96">
          <img class="w-full h-full object-cover" src="${correctPost.src}" alt="" />
        </div>
        <!-- content container -->
        <div class="">
          <h2 class="font-lalezar text-2xl my-6 dark:text-amber-700">${correctPost.title}</h2>
          <!-- details blog post -->
          <div class="flex items-center gap-x-2 md:gap-x-4 my-4">
            <!-- comment number -->
            <div class="flex gap-x-2">
              <p class="dark:text-yellow-400">${numberReview}</p>
              <svg class="w-5 h-5 text-amber-700"><use href="#comment"></use></svg>
            </div>
            <!-- date time -->
            <div class="flex gap-x-2">
              <p class="dark:text-yellow-400">${todayDate}</p>
              <svg class="w-5 h-5 text-amber-700"><use href="#date"></use></svg>
            </div>
            <!-- author -->
            <div class="flex gap-x-2">
              <p class="dark:text-yellow-400">فرشاد</p>
              <svg class="w-5 h-5 text-amber-700"><use href="#author"></use></svg>
            </div>
          </div>
          <!-- description post -->
          <div class="">
            <p class="leading-8 dark:text-gray-300">
              ${correctPost.content}
          </div>
        </div>
        `;

        this.contentPostContainer.insertAdjacentHTML("beforeend", postHtml);
      }
    });
  }
  // ----------------------
  // next prev post
  // ----------------------
  nextPrevPost() {
    const url = new URL(window.location.href);
    const getPostTitle = url.searchParams.get("post");

    let indexCurrentPost = arrayPosts.findIndex((post) => post.title === getPostTitle);

    // click on next post btn
    this.nextPostBtn.addEventListener("click", () => {
      if (indexCurrentPost < arrayPosts.length - 1) {
        indexCurrentPost++;
        const nextPost = arrayPosts[indexCurrentPost];
        window.location.href = `blog-page.html?post=${nextPost.title}`;
      }
    });

    // click on prev post btn
    this.prevPostBtn.addEventListener("click", () => {
      if (indexCurrentPost > 0) {
        indexCurrentPost--;
        const prevPost = arrayPosts[indexCurrentPost];
        window.location.href = `blog-page.html?post=${prevPost.title}`;
      }
    });

    // -----------------------------------
    // -----------------------------------
    // -----------------------------------

    // in last post show only prev post btn
    if (indexCurrentPost === arrayPosts.length - 1) {
      this.nextPrevPostBtnsContainer.style.display = "none";
      this.prevLastPostBtn.style.display = "flex";

      this.prevLastPostBtn.addEventListener("click", () => {
        indexCurrentPost--;
        const prevPost = arrayPosts[indexCurrentPost];
        window.location.href = `blog-page.html?post=${prevPost.title}`;
      });
    }

    // in first post show only next post btn
    if (indexCurrentPost === 0) {
      this.nextPrevPostBtnsContainer.style.display = "none";
      this.nextFirstPostBtn.style.display = "flex";

      this.nextFirstPostBtn.addEventListener("click", () => {
        indexCurrentPost++;
        const nextPost = arrayPosts[indexCurrentPost];
        window.location.href = `blog-page.html?post=${nextPost.title}`;
      });
    }
  }
  // ----------------------
  // shamsi date
  // ----------------------
  getPersianDate() {
    const today = new Date();
    const persianDate = new Intl.DateTimeFormat("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      calendar: "persian",
      numberingSystem: "arab",
    }).format(today);

    return persianDate;
  }
  // generate html comment
  generateHtmlComment(date, name, text) {
    return `
    <div class="w-full px-9 py-3 bg-white">
    <!-- details -->
    <div class="flex items-center gap-x-1 md:gap-x-4 my-4 border-b pb-4">
      <!-- date time -->
      <div class="flex items-center gap-x-0 md:gap-x-2">
        <p class="text-sm">${date}</p>
        <svg class="w-5 h-5 text-amber-700"><use href="#date"></use></svg>
      </div>
      <!-- author -->
      <div class="flex items-center gap-x-0 md:gap-x-2">
        <p>${name}</p>
        <svg class="w-5 h-5 text-amber-700"><use href="#author"></use></svg>
      </div>
    </div>
    <!-- text comment -->
    <p class="pb-3">
      ${text}
    </p>
  </div>
    `;
  }
  // submit comment for posts
  submitComments() {
    this.submitCommentBtn.addEventListener("click", () => {
      let arrayComments = JSON.parse(localStorage.getItem("comments")) || [];

      const todayDate = this.getPersianDate();
      const nameUser = this.nameCommentPostInput.value;
      const emailUser = this.emailCommentPostInput.value;
      const textUser = this.textCommentPostInput.value;

      const url = new URL(window.location.href);
      const getTitleUrl = url.searchParams.get("post");

      arrayComments.push({
        name: nameUser,
        email: emailUser,
        text: textUser,
        date: todayDate,
        titleUrl: getTitleUrl,
      });

      localStorage.setItem("comments", JSON.stringify(arrayComments));

      this.commentsPostContainer.innerHTML = "";

      arrayComments.forEach((comment) => {
        const htmlComments = this.generateHtmlComment(comment.date, comment.name, comment.text);
        if (comment.titleUrl === getTitleUrl)
          this.commentsPostContainer.insertAdjacentHTML("beforeend", htmlComments);
      });

      this.nameCommentPostInput.value = "";
      this.emailCommentPostInput.value = "";
      this.textCommentPostInput.value = "";
    });
  }
  // show recent comment save in local
  showPrevCommentLocal() {
    window.addEventListener("DOMContentLoaded", () => {
      const getArrayComments = JSON.parse(localStorage.getItem("comments")) || [];
      const url = new URL(window.location.href);
      const getTitleUrl = url.searchParams.get("post");

      // filter only comment that we comment on that. not every one
      const getCurrentComment = getArrayComments.filter(
        (commrent) => commrent.titleUrl === getTitleUrl
      );

      if (getArrayComments) {
        getCurrentComment.forEach((comment) => {
          const htmlComments = this.generateHtmlComment(comment.date, comment.name, comment.text);
          this.commentsPostContainer.insertAdjacentHTML("beforeend", htmlComments);
        });
      }
    });
  }
  // show number review
  generateNumberReview() {
    const getArrayComments = JSON.parse(localStorage.getItem("comments")) || [];
    const url = new URL(window.location.href);
    const getTitleUrl = url.searchParams.get("post");

    // filter only comment that we comment on that. not every one
    const getCurrentComment = getArrayComments.filter(
      (commrent) => commrent.titleUrl === getTitleUrl
    );
    return `${getCurrentComment.length} نظر`;
  }
  numberReviewInFormComment() {
    let numberReview = this.generateNumberReview();
    this.numberReviewFormComment.textContent = numberReview;
  }
  // ----------------------
  // slider blog in main page
  // ----------------------
  blogSliderMainPage() {
    const sliceArrayPosts = arrayPosts.slice(3, 6);

    let date = this.getPersianDate();

    sliceArrayPosts.forEach((post) => {
      const htmlSliderBlog = `
      <div
      class="swiper-slide flex flex-col md:flex-row items-center justify-center gap-6 mt-9 mb-24 p-6 min-h-96 rounded-lg bg-white">
      <!-- blog details -->
      <div class="w-full md:w-[50%] order-1 md:-order-1">
        <h4 class="font-lalezar text-2xl line-clamp-2">${post.title}</h4>
        <!-- details -->
        <div class="flex items-center gap-x-1 md:gap-x-4 my-4">
          <!-- comment number -->
          <div class="flex gap-x-0 md:gap-x-2">
            <p>1 نظر</p>
            <svg class="w-5 h-5 text-amber-700"><use href="#comment"></use></svg>
          </div>
          <!-- date time -->
          <div class="flex gap-x-0 md:gap-x-2">
            <p>${date}</p>
            <svg class="w-5 h-5 text-amber-700"><use href="#date"></use></svg>
          </div>
          <!-- author -->
          <div class="flex gap-x-0 md:gap-x-2">
            <p>فرشاد</p>
            <svg class="w-5 h-5 text-amber-700"><use href="#author"></use></svg>
          </div>
        </div>
        <!-- description -->
        <p class="line-clamp-3">
          ${post.description}
        </p>
        <a
          class="btn inline-block mt-6 hover:bg-yellow-400 hover:border-yellow-400 hover:text-gray-900 transition-colors"
          href="blog-page.html?post=${post.title}"
          >اطلاعات بیشتر</a
        >
      </div>
      <!-- image -->
      <div class="w-full md:w-[50%] h-[270px]">
        <img class="w-full h-full object-cover" src="${post.src}" alt="" />
      </div>
    </div>
      `;
      this.blogSliderContainerMainPage.insertAdjacentHTML("beforeend", htmlSliderBlog);
    });
  }
  // ----------------------------------------------------
  // ------------------product page----------------------------------
  // ----------------------------------------------------
  // get url based product title and find that product to show in product page
  getProductBasedUrl() {
    const url = new URL(window.location.href);
    const getTitleUrl = url.searchParams.get("product");

    const currentProduct = allProducts.find((product) => product.title === getTitleUrl);
    return currentProduct;
  }
  // show product in product page based on url
  showProductBasedUrl() {
    const currentProduct = this.getProductBasedUrl();

    if (!currentProduct) {
      this.showNoProductText();
      this.hideOtherSections();
    } else {
      const htmlProduct = `
        <div
          class="flex flex-wrap items-center justify-around w-[85%] mx-auto gap-8 my-14 bg-white px-4 py-6" id="${
            currentProduct.id
          }">
          <div class="w-full md:w-[56%] details-product">
            <h2 class="font-lalezar text-5xl leading-snug text-amber-700">${
              currentProduct.title
            }</h2>
            <p class="my-9">${currentProduct.description}</p>
            <div class="flex items-center gap-9 font-lalezar text-lg text-amber-700">
              <p>قیمت:</p>
              <p id="main-price" class="${currentProduct.discountedPrice ? "off-price" : ""} ${
        currentProduct.discountedPrice ? "text-sm" : ""
      }">${currentProduct.price.toLocaleString()}</p>
              <p id="off-price">${
                currentProduct.discountedPrice
                  ? currentProduct.discountedPrice.toLocaleString()
                  : ""
              }</p>
            </div>
            <div class="">
              <form class="flex items-center gap-12 font-lalezar text-lg text-amber-700 my-4">
                <label class="inline-block" for="weight">وزن</label>
                <select id="weight-product-value-option" class="bg-transparent border border-amber-700 py-1 md:p-1 rounded-xl ml-2 outline-none" name="weight">
                  <option value="500">500 گرم</option>
                  <option value="1000">1 کیلو</option>
                  <option value="250">250 گرم</option>
                </select>
              </form>
            </div>
            <div class="flex items-center gap-12 font-lalezar text-lg text-amber-700 my-6">
              <label class="hidden md:inline-block" for="weight">تعداد</label>
              <form class="">
                <div class="relative flex items-center max-w-[8rem]">
                  <button type="button" id="minus-btn-product" class="flex items-center justify-center bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-amber-700 rounded-s-lg w-14 h-6 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                    <svg class="w-2 h-2"><use href="#minus"></use></svg>
                  </button>
                  <input type="text" id="quantity-input" class="flex items-center bg-gray-50 h-6 outline-none border border-t-amber-700 border-b-amber-700 text-center text-gray-900 text-xs w-12 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-yellow-200" value="1" required />
                  <button type="button" id="plus-btn-product" class="flex items-center justify-center bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-amber-700 rounded-e-lg w-14 h-6 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                    <svg class="w-2 h-2"><use href="#plus"></use></svg>
                  </button>
                </div>
              </form>
            </div>
            <div class="flex flex-wrap gap-4 my-9">
              <a id="add-to-cart-btn" class="btn py-[0.4rem] px-[.6rem] text-sm sm:py-[0.6rem] sm:px-[1.5rem] sm:text-base hover:bg-amber-700 hover:border-amber-700 hover:text-white transition-colors" href="">افزودن به سبد خرید</a>
            </div>
            <div class="flex items-center gap-4">
              <p class="text-sm">اشتراک گذاری</p>
              <div class="flex gap-4">
                <img class="w-4 h-4 cursor-pointer" src="images/icons/telegram-icon.png" alt="" />
                <img class="w-4 h-4 cursor-pointer" src="images/icons/instagram-icon.png" alt="" />
                <img class="w-4 h-4 cursor-pointer" src="images/icons/facebook-icon.png" alt="" />
              </div>
            </div>
          </div>
          <div class="-order-1 md:order-1 w-full md:w-[40%] details-product">
            <div class="">
              <img class="block w-full h-full" src="${currentProduct.src}" alt="${
        currentProduct.title
      }" />
            </div>
          </div>
        </div>
      `;
      this.productContainer.insertAdjacentHTML("beforeend", htmlProduct);

      // تغییر قیمت بر اساس وزن انتخابی
      const weightProductValueOption = document.getElementById("weight-product-value-option");
      const mainPriceElem = document.getElementById("main-price");
      const offPriceElem = document.getElementById("off-price");

      weightProductValueOption.addEventListener("change", () => {
        const numberValueOption = +weightProductValueOption.value;
        if (numberValueOption === 1000) {
          if (mainPriceElem.classList.contains("off-price")) {
            offPriceElem.innerHTML = (currentProduct.discountedPrice * 2).toLocaleString();
          } else {
            mainPriceElem.innerHTML = (currentProduct.price * 2).toLocaleString();
          }
        } else if (numberValueOption === 500) {
          if (mainPriceElem.classList.contains("off-price")) {
            offPriceElem.innerHTML = currentProduct.discountedPrice.toLocaleString();
          } else {
            mainPriceElem.innerHTML = currentProduct.price.toLocaleString();
          }
        } else if (numberValueOption === 250) {
          if (mainPriceElem.classList.contains("off-price")) {
            offPriceElem.innerHTML = (currentProduct.discountedPrice / 2).toLocaleString();
          } else {
            mainPriceElem.innerHTML = (currentProduct.price / 2).toLocaleString();
          }
        }
      });

      // مدیریت افزایش و کاهش تعداد محصول
      const quantityInput = document.getElementById("quantity-input");
      const plusBtn = document.getElementById("plus-btn-product");
      const minusBtn = document.getElementById("minus-btn-product");
      let valueInput = +quantityInput.value;

      plusBtn.addEventListener("click", () => {
        quantityInput.value++;
      });

      minusBtn.addEventListener("click", () => {
        if (quantityInput.value > 1) {
          quantityInput.value--;
        }
      });

      // افزودن محصول به سبد خرید
      const addToCartBtn = document.getElementById("add-to-cart-btn");

      addToCartBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const valueInputWeight = +weightProductValueOption.value;
        const mainPrice = mainPriceElem.innerHTML;
        const offPrice = offPriceElem.innerHTML;
        // مخفی کردن متن سبد خرید خالی است
        this.emptyCartText.style.display = "none";

        let arrayCartProduct = JSON.parse(localStorage.getItem("cart")) || [];
        const findProduct = arrayCartProduct.find(
          (product) => product.id === currentProduct.id && product.weight === valueInputWeight
        );
        // اگر محصول موجود بود با افزودن دکمه به تعداد مقدار اینپوت به تعداد محصول در کارت افزوده میشه
        if (findProduct) {
          findProduct.quantity += +quantityInput.value;
          localStorage.setItem("cart", JSON.stringify(arrayCartProduct));
          const quantityInputCart = document.getElementById(
            `quantity-input-cart-${findProduct.id}-${findProduct.weight}`
          );
          if (quantityInputCart) {
            quantityInputCart.value = findProduct.quantity;
          }
        } else {
          const newObject = {
            id: currentProduct.id,
            title: currentProduct.title,
            weight: valueInputWeight,
            price: mainPrice,
            offPrice: offPrice,
            src: currentProduct.src,
            quantity: +quantityInput.value,
          };

          arrayCartProduct.push(newObject);
          localStorage.setItem("cart", JSON.stringify(arrayCartProduct));
          // خالی کردن کانتینر محصولات سبد خرید قبل از اضافه کردن
          this.cartProductContainer.innerHTML = "";
          arrayCartProduct.forEach((newObject) => {
            const htmlCartProduct = `
            <div data-id="${newObject.id}" data-weight="${
              newObject.weight
            }" class="cart-product flex flex-col gap-y-6 justify-between items-center mb-6 border-b border-gray-400 pb-3">
              <div class="flex items-center gap-x-6">
                <div class="w-14 h-14">
                  <img src="${newObject.src}" alt="" />
                </div>
                <div class="space-y-2 text-slate-900 dark:text-yellow-400 block line-clamp-1">
                  <h3 class="font-lalezar text-xl font-light">${newObject.title}</h3>
                  <div class="flex items-center gap-x-6">
                    <p>${
                      newObject.weight == 1000 ? "1 کیلو" : newObject.weight
                    } <span class="text-xs">${newObject.weight == 1000 ? "" : "گرم"}</span></p>
                    <p>${
                      newObject.offPrice ? newObject.offPrice : newObject.price
                    } <span class="text-xs">تومان</span></p>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-between w-full">
                <form class="">
                  <div class="relative flex items-center max-w-[8rem]">
                    <button type="button" id="decrement-button-${newObject.id}-${
              newObject.weight
            }" class="flex items-center justify-center bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg w-14 h-6 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                      <svg class="w-2 h-2"><use href="#minus"></use></svg>
                    </button>
                    <input type="text" id="quantity-input-cart-${newObject.id}-${
              newObject.weight
            }" class="flex items-center bg-gray-50 h-6 outline-none border border-b-slate-300 border-t-slate-300 text-center text-gray-900 text-xs w-12 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-yellow-200" value="${
              newObject.quantity
            }" required />
                    <button type="button" id="increment-button-${newObject.id}-${
              newObject.weight
            }" class="flex items-center justify-center bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg w-14 h-6 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                      <svg class="w-2 h-2"><use href="#plus"></use></svg>
                    </button>
                  </div>
                </form>
                <svg class="w-4 h-4 cursor-pointer ml-4" id="trash-btn-${newObject.id}-${
              newObject.weight
            }"><use href="#trash"></use></svg>
              </div>
            </div>
          `;
            this.cartProductContainer.insertAdjacentHTML("beforeend", htmlCartProduct);

            let quantityValueInputCart = document.getElementById(
              `quantity-input-cart-${newObject.id}-${newObject.weight}`
            );
            const minusBtnCart = document.getElementById(
              `decrement-button-${newObject.id}-${newObject.weight}`
            );
            const plusBtnCart = document.getElementById(
              `increment-button-${newObject.id}-${newObject.weight}`
            );
            const trashBtnCart = document.getElementById(
              `trash-btn-${newObject.id}-${newObject.weight}`
            );
            // مدیریت تعداد محصول با دکمه + و - در سبد خرید
            plusBtnCart.addEventListener("click", (e) => {
              this.plusProduct(e, quantityValueInputCart, arrayCartProduct);
              this.updateTotalPriceCart();
            });
            minusBtnCart.addEventListener("click", (e) => {
              this.minusProduct(e, quantityValueInputCart, arrayCartProduct);
              this.updateTotalPriceCart();
              this.updateMinusNumberProduct()
            });

            trashBtnCart.addEventListener("click", (e) => {
              this.removeProductCart(e, arrayCartProduct);
              this.updateTotalPriceCart();
            });

            // آپدیت قیمت کل وقتی برای اولین بار محصولی اضافه میشه
            this.updateTotalPriceCart();
          });
        }
        this.updateTotalPriceCart();
      });
    }
  }

  // show cart product from local
  showProductCartLocal() {
    window.addEventListener("load", () => {
      const arrayCartProduct = JSON.parse(localStorage.getItem("cart")) || [];
      if (arrayCartProduct) {
        this.cartProductContainer.innerHTML = "";
        arrayCartProduct.forEach((product) => {
          const htmlCartProduct = `
                    <div data-id="${product.id}" data-weight="${
            product.weight
          }" class="cart-product flex flex-col gap-y-2 border-b dark:border-b-slate-700 pb-8 mb-4 space-y-2">
                        <!-- product details cart -->
                        <div class="flex items-center gap-x-6">
                            <!-- img cart -->
                            <div class="w-14 h-14">
                                <img src="${product.src}" alt="" />
                            </div>
                            <!-- title & detail product cart -->
                            <div class="space-y-2 text-slate-900 dark:text-yellow-400 block line-clamp-1">
                                <h3 class="font-lalezar text-xl font-light">${product.title}</h3>
                                <div class="flex items-center gap-x-6">
                                    <p>${
                                      product.weight == 1000 ? "1 کیلو" : product.weight
                                    } <span class="text-xs">${
            product.weight == 1000 ? "" : "گرم"
          }</span></p>
                                    <p>${
                                      product.offPrice ? product.offPrice : product.price
                                    } <span class="text-xs">تومان</span></p>
                                </div>
                            </div>
                        </div>
                        <!-- input & delete btn -->
                        <div class="flex items-center justify-between">
                            <form class="">
                                <div class="relative flex items-center max-w-[8rem]">
                                    <button type="button" id="decrement-button-${product.id}-${
            product.weight
          }" data-input-counter-decrement="quantity-input-cart-${product.id}-${
            product.weight
          }" class="flex items-center justify-center bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg w-14 h-6 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                        <svg class="w-2 h-2"><use href="#minus"></use></svg>
                                    </button>
                                    <input type="text" id="quantity-input-cart-${product.id}-${
            product.weight
          }" data-input-counter aria-describedby="helper-text-explanation" class="flex items-center bg-gray-50 h-6 outline-none border border-b-slate-300 border-t-slate-300 text-center text-gray-900 text-xs w-12 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-yellow-200" value="${
            product.quantity
          }" required />
                                    <button type="button" id="increment-button-${product.id}-${
            product.weight
          }" data-input-counter-increment="quantity-input-cart-${product.id}-${
            product.weight
          }" class="flex items-center justify-center bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg w-14 h-6 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                        <svg class="w-2 h-2"><use href="#plus"></use></svg>
                                    </button>
                                </div>
                            </form>
                            <!-- trash btn -->
                            <svg id="trash-btn-${product.id}-${
            product.weight
          }" class="w-4 h-4 cursor-pointer ml-4"><use href="#trash"></use></svg>
                        </div>
                    </div>
                `;
          this.cartProductContainer.insertAdjacentHTML("beforeend", htmlCartProduct);
          const quantityInput = document.getElementById(
            `quantity-input-cart-${product.id}-${product.weight}`
          );
          const plusBtn = document.getElementById(
            `increment-button-${product.id}-${product.weight}`
          );
          const minusBtn = document.getElementById(
            `decrement-button-${product.id}-${product.weight}`
          );

          // مدیریت تعداد محصول با دکمه + و - در سبد خرید
          plusBtn.addEventListener("click", (e) => {
            this.plusProduct(e, quantityInput, arrayCartProduct);
            this.updateTotalPriceCart();
          });

          minusBtn.addEventListener("click", (e) => {
            this.minusProduct(e, quantityInput, arrayCartProduct);
            this.updateTotalPriceCart();
          });

          const trashBtn = document.getElementById(`trash-btn-${product.id}-${product.weight}`);
          trashBtn.addEventListener("click", (e) => {
            this.removeProductCart(e, arrayCartProduct);
            this.updateTotalPriceCart();
          });
        });
      }
      if (arrayCartProduct.length === 0) this.showNoProductCart();
      this.updateTotalPriceCart();
    });
  }

  // مدیریت اضافه کردن تعداد محصول
  plusProduct(e, quantityInput, arrayCartProduct) {
    // گرفتن والد - محصول
    const parentProduct = e.target.closest(".cart-product");
    // گرفتن دیتا ست آی دی
    const parentId = +parentProduct.dataset.id;
    // گرفتن دیتا ست وزن
    const parentWeight = +parentProduct.dataset.weight;
    // گرفتن مقدار جدید از اینپوت
    let numberValueInputCart = +quantityInput.value;
    numberValueInputCart++;
    // برابر قرار دادن متغیر numberValueInputCart با مقدار اینپوت
    quantityInput.value = numberValueInputCart;
    // پبدا کردن محصولی در آرایه یی که در لوکال ذخیره شده که آی دی و وزن مشابه محصول والد داره
    const findProduct = arrayCartProduct.find(
      (product) => product.id === parentId && product.weight === parentWeight
    );
    if (findProduct) {
      findProduct.quantity = numberValueInputCart;
      localStorage.setItem("cart", JSON.stringify(arrayCartProduct));
    }
  }
  // مدیریت کم کردن تعداد محصول
  minusProduct(e, quantityInput, arrayCartProduct) {
    // گرفتن والد - محصول
    const parentProduct = e.target.closest(".cart-product");
    // گرفتن دیتا ست آی دی
    const parentId = +parentProduct.dataset.id;
    // گرفتن دیتا ست وزن
    const parentWeight = +parentProduct.dataset.weight;
    // گرفتن مقدار جدید از اینپوت
    let numberValueInputCart = +quantityInput.value;
    numberValueInputCart--;
    // برابر قرار دادن متغیر numberValueInputCart با مقدار اینپوت
    quantityInput.value = numberValueInputCart;
    // پبدا کردن محصولی در آرایه یی که در لوکال ذخیره شده که آی دی و وزن مشابه محصول والد داره
    const findProduct = arrayCartProduct.find(
      (product) => product.id === parentId && product.weight === parentWeight
    );
    // اگر تعداد محصول مورد نظر بزرگتر از عدد 1 باشه
    if (findProduct && numberValueInputCart >= 1) {
      findProduct.quantity = numberValueInputCart;
      localStorage.setItem("cart", JSON.stringify(arrayCartProduct));
    }
    // اگر تعداد محصول مورد نظر کمتر از عدد 1 بشه
    if (findProduct && numberValueInputCart < 1) {
      const findIndex = arrayCartProduct.findIndex(
        (product) => product.id === parentId && product.weight === parentWeight
      ); //پیدا کردن ایندکس محصول مورد نظر
      arrayCartProduct.splice(findIndex, 1); //حذف محصول از ارایه با تغییر کل آرایه
      parentProduct.remove(); //حذف محصول در کانتینر کارت
      localStorage.setItem("cart", JSON.stringify(arrayCartProduct));
      if (arrayCartProduct.length === 0) this.showNoProductCart(); //نشان دادن متن سبد خرید خالی است
    }
  }
  // حذف کردن محصول با زدن دکمه سطل آشغال
  removeProductCart(e, arrayCartProduct) {
    // گرفتن والد - محصول
    const parentProduct = e.target.closest(".cart-product");
    // گرفتن دیتا ست آی دی
    const parentId = +parentProduct.dataset.id;
    // گرفتن دیتا ست وزن
    const parentWeight = +parentProduct.dataset.weight;
    const findIndex = arrayCartProduct.findIndex(
      (product) => product.id === parentId && product.weight === parentWeight
    ); //پیدا کردن ایندکس محصول مورد نظر
    arrayCartProduct.splice(findIndex, 1); //حذف محصول از ارایه با تغییر کل آرایه
    parentProduct.remove(); //حذف محصول در کانتینر کارت
    localStorage.setItem("cart", JSON.stringify(arrayCartProduct));
    if (arrayCartProduct.length === 0) this.showNoProductCart(); //نشان دادن متن سبد خرید خالی است
  }
  // آپدیت قیمت محصول در سبد خرید
  updateTotalPriceCart() {
    let arrayCartProduct = JSON.parse(localStorage.getItem("cart")) || [];
    let totalPrice = 0;

    arrayCartProduct.forEach((product) => {
      const price = Number(String(product.price).replace(/,/g, ""));
      const offPrice = Number(String(product.offPrice).replace(/,/g, ""));
      const totalValue = (offPrice || price) * product.quantity;
      totalPrice += totalValue;
    });
    this.cartTotalPriceNumber.innerHTML = totalPrice.toLocaleString();
    if (arrayCartProduct.length === 0) this.cartTotalPriceNumber.innerHTML = "0 تومان";
    else this.cartTotalPriceNumber.innerHTML = totalPrice.toLocaleString() + " تومان";
  }
  // مدیریت متن خالی بودن سبد خرید
  showNoProductCart() {
    const html = `
    <p class="empty-cart-text text-red-500 gap-y-2 border-b dark:border-b-slate-700 pb-4 mb-4">
    سبد خرید شما خالی است
  </p>
    `;
    this.cartProductContainer.innerHTML = "";
    this.cartProductContainer.insertAdjacentHTML("beforeend", html);
  }
  // تابع نمایش متن "محصولی برای نمایش وجود ندارد..."
  showNoProductText() {
    const textNoProduct = `
    <p class="my-24 text-center dark:text-yellow-400">محصولی برای نمایش وجود ندارد...</p>
  `;
    this.productContainer.innerHTML = textNoProduct;
  }

  // تابع مخفی کردن سایر بخش‌ها
  hideOtherSections() {
    this.commentSection = document.getElementById("comment-section");
    this.tabsBtnContainer.style.display = "none";
    this.commentSection.style.display = "none";
    this.similarProductContainer.style.display = "none";
  }

  // show content tab any product based title in url
  showContentProduct() {
    const currentProduct = this.getProductBasedUrl();
    if (currentProduct) {
      const htmlContent = `
      <div id="${currentProduct.id}">
      <h3 class="text-2xl mb-4">${currentProduct.title}</h3>
      <p class="leading-8">
      ${currentProduct.content}
      </p>
    </div>
      `;
      this.contentProductContainer.insertAdjacentHTML("beforeend", htmlContent);
    }
  }
  // render html comment product
  generateHtmlCommentProduct(name, text) {
    return `
    <div class="flex items-center gap-9 mb-9 border-b pb-9">
    <!-- avatar & name -->
    <div class="flex flex-col gap-2">
      <img class="w-9 h-9" src="images/person-1.png" alt="" />
      <p>${name}</p>
    </div>
    <!-- comment -->
    <div class="">
      <p>
        ${text}
      </p>
    </div>
  </div>
    `;
  }
  // submit New Review Product
  submitNewReviewProduct() {
    this.inputNameCommentProduct = document.getElementById("input-name-comment-product"); //input Name in form Comment Product
    this.inputEmailCommentProduct = document.getElementById("input-email-comment-product"); //input Email in form Comment Product
    this.inputTextCommentProduct = document.getElementById("text-comment-product"); //text Comment in form Comment Product

    this.submitCommentProductBtn = document.getElementById("submit-comment-product-btn"); //submit Comment button in form Comment Product

    this.submitCommentProductBtn.addEventListener("click", (e) => {
      e.preventDefault();

      // Retrieve and parse existing comments from localStorage
      let arrayCommentsProduct;
      try {
        arrayCommentsProduct = JSON.parse(localStorage.getItem("commentsProduct")) || [];
      } catch (error) {
        console.error("Error parsing comments from localStorage", error);
        arrayCommentsProduct = [];
      }

      const nameValue = this.inputNameCommentProduct.value.trim();
      const emailValue = this.inputEmailCommentProduct.value.trim();
      const textValue = this.inputTextCommentProduct.value.trim();
      // Validate input values
      if (!nameValue || !emailValue || !textValue) {
        alert("لطفاً مقادیر مورد نیاز را وارد کنید.");
        return;
      }

      // Get product title from URL
      const url = new URL(window.location.href);
      const getTitleUrl = url.searchParams.get("product");

      // Create new comment object
      const newComment = {
        title: getTitleUrl,
        name: nameValue,
        email: emailValue,
        text: textValue,
      };

      // Add new comment to the array and save to localStorage
      arrayCommentsProduct.push(newComment);
      localStorage.setItem("commentsProduct", JSON.stringify(arrayCommentsProduct));

      // Clear the comments container
      this.commentProductContainer.innerHTML = "";

      // Re-render all comments
      arrayCommentsProduct.forEach((comment) => {
        const htmlComments = this.generateHtmlCommentProduct(comment.name, comment.text);
        if (comment.title == getTitleUrl)
          this.commentProductContainer.insertAdjacentHTML("beforeend", htmlComments);
      });

      // reset form fields
      this.inputNameCommentProduct.value = "";
      this.inputEmailCommentProduct.value = "";
      this.inputTextCommentProduct.value = "";
    });
  }
  // show Comment Product From Local
  showCommentProductFromLocal() {
    window.addEventListener("load", () => {
      const arrayCommentsProduct = JSON.parse(localStorage.getItem("commentsProduct")) || [];

      // Get product title from URL
      const url = new URL(window.location.href);
      const getTitleUrl = url.searchParams.get("product");

      const filterProduct = arrayCommentsProduct.filter((comment) => comment.title === getTitleUrl);

      try {
        filterProduct.forEach((comment) => {
          const htmlComment = this.generateHtmlCommentProduct(comment.name, comment.text);
          this.commentProductContainer.insertAdjacentHTML("beforeend", htmlComment);
        });
      } catch (error) {
        console.error("Not Find Comment In Local", error);
        return;
      }
    });
  }

  // show similar product in product page and when click on product go to direct product
  showSimilarProduct() {
    const slutterProducts = allProducts.sort(() => 0.5 - Math.random());
    const sliceSortProducts = slutterProducts.slice(0, 4);

    this.similarProductWrapper = document.getElementById("similar-product-wrapper");

    sliceSortProducts.forEach((product) => {
      const htmlProduct = `
      <div data-id="${product.id}" data-weight="500"
      class="parent-product hover-border-right relative w-[45%] md:w-[22%] px-2 pb-6 rounded-lg bg-white shadow-lg cursor-pointer group" id=${
        product.id
      }>
      <!-- img -->
      <div class="mb-2">
        <img src="${product.src}" alt="" />
      </div>
      <!-- product price -->
      <div class="flex flex-col items-center gap-y-2">
        <!-- product title -->
        <h3 class="font-lalezar font-light text-lg md:text-xl text-amber-700">
          ${product.title}
        </h3>
        <!-- product price -->
        <div class="flex gap-x-2">
          <!-- main price -->
          <p class="font-sans-medium ${product.discountedPrice ? "off-price" : ""}">
            ${product.price} <span class="text text-[10px] ${
        product.discountedPrice ? "off-price" : ""
      }">تومان</span>
          </p>
          <!-- off price -->
          ${
            product.discountedPrice
              ? `<p class="font-sans-medium">${product.discountedPrice} <span class="text text-xs">تومان</span></p>`
              : ""
          }
        </div>
      </div>
      <!-- sale product badge -->
      ${
        product.discountedPrice
          ? `<div class="absolute flex justify-center items-center top-2 left-3 w-8 h-8 text-xs text-white rounded-full bg-amber-800"> ویژه
    </div>`
          : ""
      }
      <!-- hover border left -->
      <div class="hover-border-left"></div>
      <div class="hover-border-bottom"></div>
      <!-- icon hover -->
      <div class="hidden group-hover:block absolute top-[30%] left-0 right-0 mx-auto">
        <div class="flex items-center justify-center gap-x-2">
          <svg
            class="goToProductPageBtn w-10 h-10 p-2 rounded-full bg-white hover:bg-amber-700 text-amber-700 hover:text-white cursor-pointer transition-colors">
            <use class="w-5 h-5" href="#arrow-right-in"></use>
          </svg>
          <svg
            class="addProductToCartBtn w-10 h-10 p-2 rounded-full bg-white hover:bg-amber-700 text-amber-700 hover:text-white cursor-pointer transition-colors">
            <use class="w-5 h-5" href="#shopping-cart"></use>
          </svg>
        </div>
      </div>
    </div>
      `;
      this.similarProductWrapper.insertAdjacentHTML("beforeend", htmlProduct);
    });

    this.addEventListenersToSliderButtons()
    // when click on icon go to direct product
    // const buttons = document.querySelectorAll(".go-to-product-page");
    // buttons.forEach((btn) => {
    //   btn.addEventListener("click", (e) => {
    //     // parent clicked
    //     const parentProduct = e.target.closest(".parent-product");
    //     // get id product click
    //     const getIdProduct = parentProduct.id;
    //     // get details product in main array product
    //     const currentProduct = allProducts.find((product) => product.id == getIdProduct);

    //     window.location.href = `product.html?product=${currentProduct.title}`;
    //   });
    // });
  }

  // ---------------------------------------------------------------------------
  // ----------------------------- checkout ---------------------------------
  // ---------------------------------------------------------------------------
  // نشان دادن محصولات خریداری شده در ص تسویه
  showProductCheckout() {
    const arrayCartProduct = JSON.parse(localStorage.getItem('cart')) || [];
    if(arrayCartProduct.length !== 0) {
      // برای جمع کل قیمت ها
      let finalPriceCheckout = 0;
      arrayCartProduct.forEach(product => {
        const htmlProductCheckout = `
        <div class="flex flex-col p-2 border gap-y-4">
        <div
          class="flex justify-between items-center"
          id="${product.id}-${product.weight}">
          <!-- img & title -->
          <div class="flex gap-x-4 items-center">
            <!-- img -->
            <div class="relative w-24 h-24">
              <img class="w-full h-full" src="${product.src}" alt="" />
              <!-- number buy -->
              <p
                class="absolute top-0 right-0 w-6 h-6 flex justify-center items-center rounded-full bg-slate-800 text-white">
                ${product.quantity}
              </p>
            </div>
            <!-- title -->
            <div class="flex flex-col gap-y-2">
              <h4>${product.title}</h4>
              <p class="text-base">
              ${product.weight == 1000 ? '1 کیلو' : `${product.weight} گرم`}
              </p>
            </div>
          </div>
        </div>
        <!-- price -->
        <p class="text-left">
        ${product.offPrice ? (product.offPrice).toLocaleString() : (product.price).toLocaleString()} تومان
        </p>
      </div>
        `
        this.productCheckoutContainer.insertAdjacentHTML("beforeend", htmlProductCheckout)
        //استخراج قیمت درست در صورت داشتن محصولی با تخفیف قیمت
        const correctPrice = () => {
          return product.offPrice ? product.offPrice : product.price
        }
        // علامت کاما قیمت رو پاک میکنیم و از حالت رشته به عدد تبدیل میکنیم
        let ProPrice = Number(String(correctPrice()).replace(/,/g, ''))
        let price = product.quantity * ProPrice
        finalPriceCheckout += price
      })

      this.totalPriceCheckout.innerHTML = `${finalPriceCheckout.toLocaleString()} <span class="text-xs font-normal">تومان</span>`
    } else {
      const emptyCheckout = `
        <p class="font-sans-medium text-red-600 text-sm">محصولی انتخاب نکرده‌اید!!! برای دیدن محصولات به <a class="text-green-600" href="shop.html">فروشگاه</a> سر بزنید 🥰</p>
      `
      this.productCheckoutContainer.insertAdjacentHTML("beforeend", emptyCheckout)
    }
  }
  // اعمال کد تخفیف
  applyCoupon() {
    this.inputCouponCheckout = document.getElementById('input-checkout');// اینپوت تخفیف ص تسویه
    this.couponCheckoutBtn = document.getElementById('coupon-checkout-btn');//دکمه تخفیف ص تسویه
    this.couponDiscountPriceElem = document.getElementById('coupon-discount-price');//المنت قیمت با تخفیف
    this.couponDiscountPriceContainer = document.getElementById('coupon-discount-price-container');//کانتینر قیمت با تخفیف

    this.couponCheckoutBtn.addEventListener('click', () => {
      let totalPriceText = this.totalPriceCheckout.textContent;//گرقتن مقدار قیمت نهایی محصولات
      const totlaPriceNumber = parseInt(totalPriceText.replace(/,/g, ''));//تبدیل کردن قیمت به عدد
      // کد تخفیف FB369
      this.applyCouponNumber(totlaPriceNumber,'FB369', 0.1)
      // کد تخفیف AB1766
      this.applyCouponNumber(totlaPriceNumber,'AB1766', 0.15)
      // کد تخفیف SP9966
      this.applyCouponNumber(totlaPriceNumber,'SP9966', 0.12)
    })
  }

  // فانکشن برای حساب کردن کد تخفیف ها
  applyCouponNumber(totlaPriceNumber, couponNum, discountNum) {
    if (this.inputCouponCheckout.value == couponNum) {
      let discount  = totlaPriceNumber * discountNum;//10 درصد قیمت کل رو پیدا میکنیم
      let discountPrice = totlaPriceNumber - discount//10 درصد رو از قیمت نهایی کم میکنیم

      this.couponDiscountPriceContainer.style.display = 'flex'
      this.totalPriceCheckout.classList.add('off-price')
      this.couponDiscountPriceElem.innerHTML = `${discountPrice.toLocaleString()} <span class="text-xs font-normal">تومان</span>`
    }
  }

  // انتخاب استان و شهر از ص پرداخت
  chooseProvinceAndCitiesCheckout() {
    this.provinceInput = document.getElementById('province-input')
    this.citiesInput = document.getElementById('cities-input')
    // چاپ کردن لیست استان‌ها
    iranProvincesAndCities.forEach(item => {
      // استخراج لیست استان‌ها
      const {province} = item;
      const htmlProvince = `
      <option value="${province}">${province}</option>
      `
      this.provinceInput.insertAdjacentHTML("beforeend", htmlProvince)
    })
    
    //حذف آپشن اولیه انتخاب کنید از اینپوت استان
    this.provinceInput.addEventListener('change', () => {
      this.poochProvince = document.getElementById('pooch-province')
      this.poochProvince.style.display = 'none'
    })

    // چاپ کردن لیست شهرها بر اساس انتخاب استان‌
    this.provinceInput.addEventListener('change', () => {
      let nameProvince = this.provinceInput.value;//گرفتن اسم استان از اینپوت استان

      const findProvince = iranProvincesAndCities.find(item => item.province === nameProvince);//پیدا کردن آبجکتی که اسم استان همنام با اینپوت استان داره
      // استخراج لیست شهرها بر اساس لیست استان‌ها
      const {cities} = findProvince;
      // خالی کردن آپشن اینپوت
      this.citiesInput.innerHTML = '';

      cities.forEach(city => {
        const htmlCity = `
        <option value="${city}">${city}</option>
        `
        this.citiesInput.insertAdjacentHTML("beforeend", htmlCity)
      })
      
    })
  }

  // ---------------------------------------------------------------------------
  // ----------------------------- search ---------------------------------
  // ---------------------------------------------------------------------------
  showSearchResult() {
    this.searchBox.addEventListener('keyup', () => {
      let searchValue = this.searchBox.value;
      
      if(searchValue.length >= 3) {
        // فیلتر کردن محصولاتی که با سرچ مطابقت دارند
        const matchedProducts = allProducts.filter(product => {
          const { title } = product;
          return title.includes(searchValue); // تبدیل به حروف کوچک برای تطبیق درست
        });
        
        this.searchResultBox.style.display = 'flex';//نمایان شدن باکس نتیجه سرچ
        this.searchResultBox.innerHTML = ''; // پاک کردن نتایج قبلی
  
        if(matchedProducts.length > 0) {
          matchedProducts.forEach((product, index) => {
            const htmlProResult = `
              <a href="product.html?product=${product.title}" class="flex items-center justify-between gap-x-2 pb-3 ${index === matchedProducts.length - 1 ? '' : 'border-b border-b-slate-800'}">
                <img class="w-10 h-10" src="${product.src}" alt="">
                <p class="text-amber-400">${product.title}</p>
                <p class="text-amber-400">${product.price.toLocaleString()}</p>
              </a>
            `;
            this.searchResultBox.insertAdjacentHTML("beforeend", htmlProResult);
          });
        } else {
          this.searchResultBox.innerHTML = '<p class="text-amber-400 text-center">محصولی یافت نشد...!</p>';
        }
      } else {
        this.searchResultBox.style.display = 'none'; // مخفی کردن نتیجه جستجو در صورت کمتر بودن از 3 کاراکتر
      }
    });
  }
  
}
export default new waffy();
