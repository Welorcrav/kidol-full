class ContactInfo {
  constructor(description, number, email, account) {
    this.description = description
    this.number = number
    this.email = email
    this.account = account
  }

  generateHTML() {
    return `
      <p>${this.description}</p>
      <div class="contact-one">
        <p style="border-right: 1px solid grey; padding-right: 15px;">
          <i class="fa-solid fa-phone"></i> ${this.number}
        </p>
        <p style="border-right: 1px solid grey; padding-right: 15px;">
          <i class="fa-solid fa-envelope"></i> ${this.email}
        </p>
        <p>
          <i class="fa-solid fa-user"></i> ${this.account}
        </p>
      </div>
    `
  }
}

class Navbar {
  constructor(logo, search) {
    this.logo = logo
    this.search = search
  }

  generateHTML() {
    return `
      <nav id="navbar">
        <div class="logo">
          <img src="${this.logo}" alt="Logo">
        </div>
        <div class="search-menu">
          <input type="text" placeholder="Search Everything">
          <button><img src="${this.search}"></button>
        </div>
        <div class="nav-icons">
          <i class="fa-regular fa-heart"></i>
          <div class="shopping-cart">
            <i class="fa-solid fa-bag-shopping"></i>
            <span class="cart-count">01</span>
          </div>
        </div>
      </nav>
    `
  }
}

class NavbarItems {
  constructor(
    home1,
    home2,
    title1,
    title2,
    title3,
    title4,
    title5,
    title6,
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8,
    shop1,
    shop2,
    shop3,
    shop4,
    shop5,
    shop6,
    shop7,
    shop8,
    blog1,
    blog2,
    blog3,
    blog4,
    blog5,
    blog6,
    blog7,
    blog8,
    // content
    mainTitle,
    mainParagraph,
    mainButton
  ) {
    this.home1 = home1
    this.home2 = home2
    this.title1 = title1
    this.title2 = title2
    this.title3 = title3
    this.title4 = title4
    this.title5 = title5
    this.title6 = title6
    this.page1 = page1
    this.page2 = page2
    this.page3 = page3
    this.page4 = page4
    this.page5 = page5
    this.page6 = page6
    this.page7 = page7
    this.page8 = page8
    this.shop1 = shop1
    this.shop2 = shop2
    this.shop3 = shop3
    this.shop4 = shop4
    this.shop5 = shop5
    this.shop6 = shop6
    this.shop7 = shop7
    this.shop8 = shop8
    this.blog1 = blog1
    this.blog2 = blog2
    this.blog3 = blog3
    this.blog4 = blog4
    this.blog5 = blog5
    this.blog6 = blog6
    this.blog7 = blog7
    this.blog8 = blog8
    // content
    this.mainTitle = mainTitle
    this.mainParagraph = mainParagraph
    this.mainButton = mainButton
  }

  generateHTML() {
    return `
      <div id="nav-items">
        <ul>
          <li class="has-submenu">
            <a href="index.html">${this.title1} <i class="fa-solid fa-angle-down"></i></a>
            <ul class="submenu-nav">
              <li><a href="index.html">${this.home1}</a></li>
              <li><a href="index.html">${this.home2}</a></li>
            </ul>
          </li>

          <li><a href="index.html">${this.title2}</a></li>

          <li class="has-submenu">
            <a href="index.html">${this.title3} <i class="fa-solid fa-angle-down"></i></a>
            <ul class="submenu-nav">
              <li><a href="index.html">${this.page1}</a></li>
              <li><a href="index.html">${this.page2}</a></li>
              <li><a href="index.html">${this.page3}</a></li>
              <li><a href="index.html">${this.page4}</a></li>
              <li><a href="index.html">${this.page5}</a></li>
              <li><a href="index.html">${this.page6}</a></li>
              <li><a href="index.html">${this.page7}</a></li>
              <li><a href="index.html">${this.page8}</a></li>
            </ul>
          </li>

          <li class="has-submenu">
            <a href="index.html">${this.title4} <i class="fa-solid fa-angle-down"></i></a>
            <ul class="submenu-nav">
              <li><a href="index.html">${this.shop1}</a></li>
              <li><a href="index.html">${this.shop2}</a></li>
              <li><a href="index.html">${this.shop3}</a></li>
              <li><a href="index.html">${this.shop4}</a></li>
              <li><a href="index.html">${this.shop5}</a></li>
              <li><a href="index.html">${this.shop6}</a></li>
              <li><a href="index.html">${this.shop7}</a></li>
              <li><a href="index.html">${this.shop8}</a></li>
            </ul>
          </li>

          <li class="has-submenu">
            <a href="index.html">${this.title5} <i class="fa-solid fa-angle-down"></i></a>
            <ul class="submenu-nav">
              <li><a href="index.html">${this.blog1}</a></li>
              <li><a href="index.html">${this.blog2}</a></li>
              <li><a href="index.html">${this.blog3}</a></li>
              <li><a href="index.html">${this.blog4}</a></li>
              <li><a href="index.html">${this.blog5}</a></li>
              <li><a href="index.html">${this.blog6}</a></li>
              <li><a href="index.html">${this.blog7}</a></li>
              <li><a href="index.html">${this.blog8}</a></li>
            </ul>
          </li>

          <li><a href="index.html">${this.title6}</a></li>
        </ul>
      </div>

      <div class="round-img">
        <img src="/assets/img/rounded-line.webp">
      </div>

      <section id="main-content">
        <div class="inner-content">
          <h2>${this.mainTitle}</h2>
          <p>${this.mainParagraph}</p>
          <a href="index.html">${this.mainButton}</a>
        </div>
      </section>
    `
  }
}

class Products {
  constructor(productName, productCost, productLink, productImg, productId) {
    this.productName = productName
    this.productCost = productCost
    this.productLink = productLink
    this.productImg = productImg
    this.productId = productId
  }

  generateHTML() {
    return `
        <div class="product-card ${this.productId}">
          <div class="product-card_1">
            <h2>${this.productName}</h2>
            <h4>${this.productCost}</h4>
            <a href="index.html">${this.productLink}</a>
          </div>
          <div class="product-img">
            <img src="${this.productImg}" alt="${this.productName}">
          </div>
        </div>
    `
  }
}

class MiniTitle {
  constructor(title, paragraph, button1, button2, button3) {
    this.title = title
    this.paragraph = paragraph
    this.button1 = button1
    this.button2 = button2
    this.button3 = button3
  }

  generateHTML() {
    return `
    <div id="mini-title">
      <h2>${this.title}</h2>
      <p>${this.paragraph}</p>
      <div class="pro-buttons">
        <button class="active_btn">${this.button1}</button>
        <button>${this.button2}</button>
        <button>${this.button3}</button>
      </div>
    </div>
    `
  }
}
class Gallery {
  constructor(img, star, name, cost) {
    this.img = img
    this.star = star
    this.name = name
    this.cost = cost
  }

  generateHTML() {
    return `
      <div id="gallery-card">
        <div class="gallery-product">
          <img src="${this.img}" alt="${this.name}">
        </div>
        <div class="product-action">
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-solid fa-expand"></i>
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-arrow-right-arrow-left"></i>
        </div>
        <div class="gallery-card-info">
          <span>${this.star}</span> <br>
          <a href="index.html">${this.name}</a>
          <p>${this.cost}</p>
        </div>
      </div>

    `
  }
}

class Discount {
  constructor(roundImage, boyImage, girlImage, title, text, button, pinkText, roundImage2) {
    this.roundImage = roundImage
    this.boyImage = boyImage
    this.girlImage = girlImage
    this.title = title
    this.text = text
    this.button = button
    this.pinkText = pinkText
    this.roundImage2 = roundImage2
  }

  generateHTML() {
    return `
      <div class="discount-part">
        <div class="dis-round-img">
          <img src="${this.roundImage}" alt="Round Image" />
        </div>
        <div class="dis-info">
          <div class="boy-img">
            <img src="${this.boyImage}" alt="Boy Image" />
          </div>
          <div class="dis-text">
            <h2>${this.title}</h2>
            <p><span>${this.pinkText}</span> ${this.text}</p>
            <a href="index.html">${this.button}</a>
          </div>
          <div class="girl-img">
            <img src="${this.girlImage}" alt="Girl Image" />
          </div>
        </div>
        <div class="dis-round-img-1">
          <img src="${this.roundImage2}" alt="Round Image" />
        </div>
      </div>
    `
  }
}

class Collection {
  constructor(title, percent, dis, img, dis2, link, idName) {
    this.title = title
    this.percent = percent
    this.dis = dis
    this.img = img
    this.dis2 = dis2
    this.link = link
    this.idName = idName
  }
  generateHTML() {
    return `
      <div class="collection">
      <img src="${this.img}" alt="${this.title}">
        <div id="${this.idName}" class="collection-discount">
          <h2>${this.title}</h2>
          <p>${this.dis}<span>${this.percent}</span> ${this.dis2}</p>
          <a href="index.html">${this.link}</a>
        </div>
      </div>
    `
  }
}

class Slider {
  constructor(left, right) {
    this.left = left
    this.right = right
  }

  generateHTML() {
    return `
      <div class="slider-btns">
        <i class="${this.left}" id="slider-left"></i>
        <i class="${this.right}" id="slider-right"></i>
      </div>
    `
  }
}

class CarouselProducts {
  constructor(img, star, name, cost) {
    this.img = img
    this.star = star
    this.name = name
    this.cost = cost
  }

  generateHTML() {
    return `
      <div id="gallery-card">
        <div class="gallery-product">
          <img src="${this.img}" alt="${this.name}">
        </div>
        <div class="product-action">
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-solid fa-expand"></i>
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-arrow-right-arrow-left"></i>
        </div>
        <div class="gallery-card-info">
          <span>${this.star}</span> <br>
          <a href="index.html">${this.name}</a>
          <p>${this.cost}</p>
        </div>
      </div>

    `
  }
}

class BlogPost {
  constructor(image, author, date, title, link) {
    this.image = image
    this.author = author
    this.date = date
    this.title = title
    this.link = link
  }

  generateHTML() {
    return `
      <div class="blog-card">
        <div class="blog-image">
          <img src="${this.image}" alt="${this.title}">
        </div>
        <div class="blog-content">
          <div class="blog-meta">
            <span class="blog-author">By <strong>${this.author}</strong></span>
            <span class="blog-date">${this.date}</span>
          </div>
          <h3 class="blog-title">${this.title}</h3>
          <a href="${this.link}" class="blog-button">Read More</a>
        </div>
      </div>
    `
  }
}

class Footer {
  constructor(data) {
    this.data = data
  }

  generateHTML() {
    return `
      <footer class="footer">
        <div class="footer-top">
          <div class="footer-column footer-about">
            <div class="footer-logo">
              <img src="${this.data.logo}" alt="Kidol">
              <h3>${this.data.logoText}</h3>
            </div>
            <p>${this.data.description}</p>
            <div class="social-links">
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-tumblr"></i></a>
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
          </div>

          <div class="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">- Support</a></li>
              <li><a href="#">- Helpline</a></li>
              <li><a href="#">- Courses</a></li>
              <li><a href="#">- About</a></li>
              <li><a href="#">- Event</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Other Page</h4>
            <ul>
              <li><a href="#">- About</a></li>
              <li><a href="#">- Blog</a></li>
              <li><a href="#">- Speakers</a></li>
              <li><a href="#">- Contact</a></li>
              <li><a href="#">- Tricket</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">- Jesco</a></li>
              <li><a href="#">- Shop</a></li>
              <li><a href="#">- Contact us</a></li>
              <li><a href="#">- Log in</a></li>
              <li><a href="#">- Help</a></li>
            </ul>
          </div>

          <div class="footer-column footer-store">
            <h4>Store Information.</h4>
            <p>${this.data.address}</p>
            <p>${this.data.phone}</p>
            <p>${this.data.email}</p>
            <div class="payment-methods">
              <img src="${this.data.payment1}" alt="amex">
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2021 <span class="highlight">KIDOL</span>. Made with ❤️ by HasThemes</p>
        </div>
      </footer>
    `
  }
}

class User {
  constructor() {
    this.mainDiv = document.getElementById('app')
  }

  displayContact() {
    const contactData = [
      {
        description: 'Free Returns and Free Shipping',
        number: '+00 123 456 789',
        email: 'demo@example.com',
        account: 'Account',
      },
    ]

    if (!this.mainDiv) return

    const contactDiv = document.createElement('div')
    contactDiv.classList.add('contact-top')
    this.mainDiv.appendChild(contactDiv)

    contactData.forEach((data) => {
      const contactObj = new ContactInfo(data.description, data.number, data.email, data.account)
      contactDiv.innerHTML += contactObj.generateHTML()
    })
  }

  displayNavbar() {
    const navbarData = [
      {
        logo: '/assets/img/logo.webp',
        search: '/assets/icons/search-icon.png',
      },
    ]

    if (!this.mainDiv) return

    const navbarSection = document.createElement('section')
    navbarSection.classList.add('navbar')

    navbarData.forEach((data) => {
      const navbarObj = new Navbar(data.logo, data.search)
      navbarSection.innerHTML += navbarObj.generateHTML()
    })

    this.mainDiv.appendChild(navbarSection)
  }

  displayNavbarItems() {
    const navItemsData = [
      {
        home1: 'Home One',
        home2: 'Home Two',
        title1: 'HOME',
        title2: 'ABOUT',
        title3: 'PAGES',
        title4: 'SHOP',
        title5: 'BLOG',
        title6: 'CONTACT',
        page1: 'Cart page',
        page2: 'Checkout',
        page3: 'My Account',
        page4: 'Wishlist',
        page5: 'Compare',
        page6: 'Login / Register',
        page7: 'Coming soon',
        page8: '404',
        shop1: 'Shop 3 Column',
        shop2: 'Shop 4 Column',
        shop3: 'Shop Left Sidebar',
        shop4: 'Shop Right Sidebar',
        shop5: 'Shop No Sidebar',
        shop6: 'Product Details',
        shop7: 'Product Variable',
        shop8: 'Product Grouped',
        blog1: 'Blog 3 Column',
        blog2: 'Blog 4 Column',
        blog3: 'Blog Left Sidebar',
        blog4: 'Blog Right Sidebar',
        blog5: 'Blog No Sidebar',
        blog6: 'Blog Details Left Sidebar',
        blog7: 'Blog Details Right Sidebar',
        blog8: 'Blog Details No Sidebar',
        // content
        mainTitle: 'Best Kids Store & Online Shop',
        mainParagraph: 'Give The Gift Of Your Children Everyday',
        mainButton: 'Shop this now',
      },
    ]

    if (!this.mainDiv) return

    navItemsData.forEach((data) => {
      const navbarItemsObj = new NavbarItems(
        data.home1,
        data.home2,
        data.title1,
        data.title2,
        data.title3,
        data.title4,
        data.title5,
        data.title6,
        data.page1,
        data.page2,
        data.page3,
        data.page4,
        data.page5,
        data.page6,
        data.page7,
        data.page8,
        data.shop1,
        data.shop2,
        data.shop3,
        data.shop4,
        data.shop5,
        data.shop6,
        data.shop7,
        data.shop8,
        data.blog1,
        data.blog2,
        data.blog3,
        data.blog4,
        data.blog5,
        data.blog6,
        data.blog7,
        data.blog8,
        // content
        data.mainTitle,
        data.mainParagraph,
        data.mainButton
      )

      this.mainDiv.innerHTML += navbarItemsObj.generateHTML()
    })
  }

  displayProducts() {
    const productsData = [
      {
        productName: 'Funskool Teddy Brown',
        productCost: '$190.12',
        productImg: '/assets/img/product-1.webp',
        productId: 'product-1',
      },
      {
        productName: 'Newborn Kit Set',
        productCost: '$190.12',
        productImg: '/assets/img/product-2.webp',
        productId: 'product-2',
      },
      {
        productName: 'Classic Fisher Gift',
        productCost: '$190.12',
        productImg: '/assets/img/product-3.webp',
        productId: 'product-3',
      },
    ]

    if (!this.mainDiv) return

    const productsSection = document.createElement('section')
    productsSection.classList.add('products')
    this.mainDiv.appendChild(productsSection)

    productsData.forEach((data) => {
      const productsObj = new Products(
        data.productName,
        data.productCost,
        data.productLink,
        data.productImg,
        data.productId
      )
      productsSection.innerHTML += productsObj.generateHTML()
    })
  }

  displayMinitleTitle() {
    const miniTitleData = [
      {
        title: 'New Products',
        paragraph:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua',
        button1: 'All Items',
        button2: 'Baby Dress',
        button3: 'Baby Toys',
      },
    ]
    if (!this.mainDiv) return

    const miniTitleSection = document.createElement('section')
    miniTitleSection.classList.add('mini-title')
    this.mainDiv.appendChild(miniTitleSection)

    miniTitleData.forEach((data) => {
      const miniTitleObj = new MiniTitle(
        data.title,
        data.paragraph,
        data.button1,
        data.button2,
        data.button3
      )
      miniTitleSection.innerHTML += miniTitleObj.generateHTML()
    })
  }

  displayGallery() {
    const galleryData = [
      {
        img: '/assets/productImgs/1.webp',
        star: '⭐⭐⭐⭐⭐',
        name: 'Funskool Teddy',
        cost: '$190.12',
      },
      {
        img: '/assets/productImgs/2.webp',
        star: '⭐⭐⭐⭐⭐',
        name: 'Baby Play Sets',
        cost: '$190.12',
      },
      {
        img: '/assets/productImgs/3.webp',
        star: '⭐⭐⭐⭐⭐',
        name: 'Jigsaw Puzzles For Kids',
        cost: '$190.12',
      },
      {
        img: '/assets/productImgs/4.webp',
        star: '⭐⭐⭐⭐⭐',
        name: 'Abstract Girl Dress',
        cost: '$190.12',
      },
      {
        img: '/assets/productImgs/5.webp',
        star: '⭐⭐⭐⭐⭐',
        name: 'Bruder Toys Mini Ships',
        cost: '$190.12',
      },
      {
        img: '/assets/productImgs/6.webp',
        star: '⭐⭐⭐⭐⭐',
        name: 'Abstract Boy Dress',
        cost: '$190.12',
      },
      {
        img: '/assets/productImgs/7.webp',
        star: '⭐⭐⭐⭐⭐',
        name: 'Funskool Teddy Pink',
        cost: '$190.12',
      },
      {
        img: '/assets/productImgs/8.webp',
        star: '⭐⭐⭐⭐⭐',
        name: 'Toys Box For Baby',
        cost: '$190.12',
      },
    ]

    if (!this.mainDiv) return

    const gallerySection = document.createElement('section')
    gallerySection.classList.add('gallery')
    this.mainDiv.appendChild(gallerySection)

    galleryData.forEach((data) => {
      const galleryObj = new Gallery(data.img, data.star, data.name, data.cost)
      gallerySection.innerHTML += galleryObj.generateHTML()
    })
  }

  displayDiscount() {
    const discountData = [
      {
        roundImage: '/assets/img/rounded-line.webp',
        boyImage: '/assets/img/boy-1.webp',
        title: 'Deal Of The Day',
        text: 'On All Other Baby Products',
        button: 'Shop Now',
        girlImage: '/assets/img/girl-2.webp',
        pinkText: 'UPTO 35% OFF',
        roundImage2: '/assets/img/shape2.png',
      },
    ]

    if (!this.mainDiv) return

    const discountSection = document.createElement('section')
    discountSection.classList.add('discount')
    this.mainDiv.appendChild(discountSection)

    discountData.forEach((data) => {
      const discountObj = new Discount(
        data.roundImage,
        data.boyImage,
        data.girlImage,
        data.title,
        data.text,
        data.button,
        data.pinkText,
        data.roundImage2
      )
      discountSection.innerHTML += discountObj.generateHTML()
    })
  }

  displayCOllection() {
    const collectionData = [
      {
        title: 'Collection',
        percent: '20%',
        dis: 'Flat',
        img: '/assets/img/4.webp',
        dis2: 'Off',
        link: 'Shop Now',
      },
      {
        title: 'Collection',
        percent: '30%',
        dis: 'Flat',
        img: '/assets/img/5.webp',
        dis2: 'Off',
        link: 'Shop Now',
        idName: 'collection-discount-2',
      },
    ]

    if (!this.mainDiv) return

    const collectionSection = document.createElement('section')
    collectionSection.classList.add('collection-section')
    this.mainDiv.appendChild(collectionSection)

    collectionData.forEach((data) => {
      const collectionObj = new Collection(
        data.title,
        data.percent,
        data.dis,
        data.img,
        data.dis2,
        data.link,
        data.idName
      )
      collectionSection.innerHTML += collectionObj.generateHTML()
    })
  }

  displaySlider() {
    const sliderData = [
      {
        left: 'fa-solid fa-angle-left',
        right: 'fa-solid fa-angle-right',
      },
    ]
    if (!this.mainDiv) return

    const sliderSection = document.createElement("section");
    sliderSection.classList.add("slider");
    this.mainDiv.appendChild(sliderSection)

    sliderData.forEach((data) => {
      const sliderObj = new Slider(
        data.left,
        data.right
      )
      sliderSection.innerHTML += sliderObj.generateHTML()
    })
  }

  displayCarouselProducts() {
    const carouselProductsData = [
      {
        img: '/assets/products/product1.webp',
        star: '⭐⭐⭐⭐⭐',
        name: 'Funskool Teddy Brown',
        cost: '$190.12',
      },
      {
        img: '/assets/products/product2.webp',
        star: '⭐⭐⭐⭐⭐',
        name: 'Newborn Kit Set',
        cost: '$190.12',
      },
      {
        img: '/assets/products/product3.webp',
        star: '⭐⭐⭐⭐⭐',
        name: 'Classic Fisher Gift',
        cost: '$190.12',
      },
      {
        img: '/assets/products/product4.webp',
        star: '⭐⭐⭐⭐⭐',
        name: 'Sassy Crib and Floor Mirror',
        cost: '$190.12',
      },
    ]

    if (!this.mainDiv) return

    const carouselSection = document.createElement('section')
    carouselSection.classList.add('carousel-products')
    this.mainDiv.appendChild(carouselSection)

    carouselProductsData.forEach((data) => {
      const carouselProductsObj = new CarouselProducts(
        data.img,
        data.star,
        data.name,
        data.cost
      )
      carouselSection.innerHTML += carouselProductsObj.generateHTML()
    })
  }

  displayBlog() {
    const blogData = [
      {
        image: '/assets/img/kids1.webp',
        author: 'June Cha',
        date: '25 May, 2121',
        title: "Baby Planet's toys makes learning so easy",
        link: 'index.html',
      },
      {
        image: '/assets/img/kids2.webp',
        author: 'June Cha',
        date: 'July 24, 2022',
        title: 'Mother revolves around her children',
        link: 'index.html',
      },
      {
        image: '/assets/img/kids3.webp',
        author: 'June Cha',
        date: 'January 28, 2022',
        title: 'Learn while you grow toys Baby Planet',
        link: 'index.html',
      },
    ]

    if (!this.mainDiv) return

    const blogSection = document.createElement('section')
    blogSection.classList.add('blog-section')
    this.mainDiv.appendChild(blogSection)

    const blogTitle = document.createElement('div')
    blogTitle.classList.add('blog-title-section')
    blogTitle.innerHTML = `
      <h2>Latest Blog</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua</p>
    `
    blogSection.appendChild(blogTitle)

    const blogContainer = document.createElement('div')
    blogContainer.classList.add('blog-container')
    blogSection.appendChild(blogContainer)

    blogData.forEach((data) => {
      const blogObj = new BlogPost(data.image, data.author, data.date, data.title, data.link)
      blogContainer.innerHTML += blogObj.generateHTML()
    })
  }

  displayFooter() {
    const footerData = {
      logo: '/assets/icons/cart.png',
      logoText: 'Kidol',
      description:
        'Lorem ipsum dolor sit amet, consec adipisicing elit, sed do eiusmod teml incididunt ut labore et dolore magna aliqua Ut enim',
      address: '2005 Your Address Goes Here. 896, Address 10010, HGJ',
      phone: 'Phone/Fax: 0123456789',
      email: 'Email: demo@example.com',
      payment1: '/assets/img/payment1.webp',
    }

    const footer = new Footer(footerData)
    this.mainDiv.insertAdjacentHTML('beforeend', footer.generateHTML())
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const user = new User()
  user.displayContact()
  user.displayNavbar()
  user.displayNavbarItems()
  user.displayProducts()
  user.displayMinitleTitle()
  user.displayGallery()
  user.displayDiscount()
  user.displayCOllection()
  user.displaySlider()
  user.displayCarouselProducts()
  user.displayBlog()
  user.displayFooter()
})

window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar')

  if (window.scrollY > 50) {
    navbar.classList.add('fixed-navbar')
  } else {
    navbar.classList.remove('fixed-navbar')
  }
})
