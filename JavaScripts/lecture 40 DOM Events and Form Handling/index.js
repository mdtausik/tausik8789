

// let div = document.querySelector("#reveal-gift")
// let h1 = document.querySelector("#gift")

// let btn = document.querySelector("#btn")

// function revelGift(event) {
// console.log(event);
// console.log(event.type);
// console.log("target", event.target);
// console.log("current target", event.currentTarget);
// h1.classList.toggle("hidden")
// h1.classList.add("visible")
// }

// btn.addEventListener('dblclick' , () => {
//     console.log("helo helloo mic check check");
// })


// div.addEventListener('click', revelGift)


// let counter = 0

// function fun1(e) {
//     if(counter < 3){
//         console.log(e);
//         counter++;
//     }else{
//         btn.removeEventListener('click' , fun1)
//     }
// }

// btn.addEventListener('click' , fun1)


// let outer = document.querySelector("#outer")
// let inner = document.querySelector("#inner")

// let btn2 = document.querySelector("#btn2")
// let body = document.querySelector("body")

// body.addEventListener('click', (e) => {
//     e.stopImmediatePropagation()
//     console.log("body");
// })

// outer.addEventListener('click', (e) => {
//     e.stopImmediatePropagation()
//     console.log("outer");
// })

// inner.addEventListener('click', (e) => {
//     e.stopImmediatePropagation()
//     console.log("inner");
// })

// btn2.addEventListener('click', (e) => {
//     e.stopImmediatePropagation()
//     console.log("btn2");
// })



let body = document.querySelector("body")

// body.appendChild(div)
// body.appendChild(div2)

// body.append(div, div2) // insert in last of body
// body.prepend(div, div2) // insert in start of body



let products = [
    {
        id: "1",
        name: "iphone 20",
        price: 12343,
        imgURL: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"

    },
    {
        id: "2",
        name: "sumsung 15",
        price: 12343,
        imgURL: "https://m.media-amazon.com/images/I/41cslOLNecL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        id: "3",
        name: "mi 23",
        price: 12343,
        imgURL: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        id: "4",
        name: "poco 10",
        price: 12343,
        imgURL: "https://m.media-amazon.com/images/I/41D9TUZxXwL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        id: "5",
        name: "lava 12",
        price: 12343,
        imgURL: "https://m.media-amazon.com/images/I/4120tymFBBL._SY300_SX300_QL70_FMwebp_.jpg"
    },
]



let ProductList = document.querySelector("#product-list")

products.forEach((product) => {
    const card = document.createElement("div")
    card.classList.add("singleproduct")

    card.dataset.productId = product.id;
    const dltBtn = document.createElement("button")
    const AddToCartBtn = document.createElement("button")
    dltBtn.textContent = "Remove product"
    AddToCartBtn.textContent = "Add To Cart"

    // dltBtn.addEventListener('click', (e) => {
    //     e.stopPropagation()
    //     card.remove()
    // })


    card.innerHTML = `<div>
        <img src="${product.imgURL}" alt="">
    </div>
    <div class="productDetail">
        <p>${product.name}</p>
        <p>${product.price}</p>
    </div>
    `

    card.append(dltBtn)
    card.append(AddToCartBtn)

    ProductList.append(card)


})


ProductList.addEventListener('click', (e) => {
    e.stopPropagation();

    const dltBtn = e.target;
    
    // console.log(dltBtn.parentElement);
    // console.log(dltBtn.tagName);
    // console.log(dltBtn.textContent);

    // if(e.target.tagName == "BUTTON"){
    //     // e.target.parentElement.remove()
    // }

    // console.log(dltBtn.parentElement.dataset.productId);

    if(dltBtn.textContent == "Remove product" && e.target.tagName == "BUTTON"){
        // dltBtn.parentElement.remove()
        dltBtn.closest(".singleproduct").remove()
    }

    // console.log(dltBtn.closest(".singleproduct"));
    
})
    