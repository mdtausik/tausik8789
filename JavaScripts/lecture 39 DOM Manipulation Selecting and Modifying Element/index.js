// let h1 = document.getElementById("h1")
// let h1 = document.querySelector("h1")
// let h1 = document.querySelector(".h1")
// let h1 = document.querySelector("#h1")

// let h1 = document.querySelectorAll("#h1")

// console.log(h1);

// let p = document.querySelector("#desc")

// p.textContent ="<h2>hello dostoooo</h2>"
// p.innerHTML = "<h2>hello dostoooo</h2>"  //very very risky

// console.log(p.textContent);
// console.log(p.innerHTML);
// console.log(p.innerText);



// p.setAttribute("style" , "background-color: pink; font-size : 50px ")

// let btn = document.querySelector("#btn")

// btn.setAttribute("disabled" , "false")
// btn.removeAttribute("disabled")
// btn.textContent = "remove"


// let res = p.getAttribute("style")

// console.log(res);


// p.removeAttribute("style")


// p.classList.add("random")
// p.classList.remove("random")
// p.classList.toggle()

// console.log(p.classList.contains("random"));


// p.style.backgroundColor = "red" //camel case

// p.dataset.helloDostoHii = "hii"

// console.log(p.dataset.helloDostoHii);



// let div = document.createElement("div")
// let div2 = document.createElement("div")

// div.textContent = "hello"
// div2.textContent = "div 2"

let body = document.querySelector("body")

// body.appendChild(div)
// body.appendChild(div2)

// body.append(div, div2) // insert in last of body
// body.prepend(div, div2) // insert in start of body



let products = [
    {
        name : "iphone 20",
        price : 12343,
        imgURL: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"

    },
       {
        name : "sumsung 15",
        price : 12343,
        imgURL: "https://m.media-amazon.com/images/I/41cslOLNecL._SY300_SX300_QL70_FMwebp_.jpg"
    },
       {
        name : "mi 23",
        price : 12343,
        imgURL: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
       {
        name : "poco 10",
        price : 12343,
        imgURL: "https://m.media-amazon.com/images/I/41D9TUZxXwL._SY300_SX300_QL70_FMwebp_.jpg"
    },
       {
        name : "lava 12",
        price : 12343,
        imgURL: "https://m.media-amazon.com/images/I/4120tymFBBL._SY300_SX300_QL70_FMwebp_.jpg"
    },
]



let ProductList = document.querySelector("#product-list")

products.forEach((product) => {
    const card = document.createElement("div")
    card.classList.add("singleproduct")   


    card.innerHTML = `<div>
        <img src="${product.imgURL}" alt="">
    </div>
    <div class="productDetail">
        <p>${product.name}</p>
        <p>${product.price}</p>
    </div>`

    ProductList.append(card)
    

})


let h2 = document.querySelector("#h23")

// body.removeChild(h2) // you have to perform on parent 

h2.remove() // directly on the element you want to remove

let clone = ProductList.cloneNode(true);

// body.append(clone)


const items = ProductList.children

// ProductList.insertBefore(h2 , items[2])  // for precise position

// items[2].before(h2)
items[2].after(h2)

