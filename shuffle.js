const products = [
    { name: "Pink Ceramic Raised Cat Bowl", img: "images/Pink Ceramic Raised Cat Bowl.jpg", price: "$70.00", rating: 4.5 },
    { name: "Cute Mushroom Raised Cat Bowl", img: "images/Cute Mushroom Raised Cat Bowl.jpg", price: "$60.00", rating: 4 },
    { name: "Foldable Cat Carrier Bag", img: "images/Foldable Cat Carrier Bag.jpg", price: "$110.00", rating: 5 },
    { name: "Exercise Wheel For Cat", img: "images/Exercise Wheel For Cat.jpg", price: "$300.00", rating: 5 },
    { name: "Cat Tumbler Ball Toy", img: "images/Cat Tumbler Boy Toy.jpg", price: "$20.00", rating: 4 },
    { name: "Spaceship Litter Box", img: "images/Spaceship Litter Box.jpg", price: "$35.00", rating: 5 },
    { name: "Hollow Plastic Ball", img: "images/Hollow Plastic Ball.webp", price: "$9.00", rating: 4 },
    { name: "Mushroom Cat Scratcher", img: "images/Mushroom Cat Scratcher.jpg", price: "$130.20", rating: 4.5 },
    { name: "Cupcake Cat Tree", img: "images/cupcake cat tree.jpg", price: "$150.00", rating: 4 },
    { name: "Cat Frog Bed", img: "images/c40339c1a8de417f0b4ea5d968799846.jpg", price: "$16.00", rating: 4 },
    { name: "3-in-1 Interactive Cat Toy", img: "images/3n1 Interactive Toy With Fluttering Butterfly Led Light Automatic Cat Toy.jpg", price: "$60.00", rating: 5 },
    { name: "Flower Cat Tree", img: "images/Flower Cat Tree.jpg", price: "$132.00", rating: 4.5 },
    { name: "Cat Scratch Post", img: "images/scratchcat.jpg", price: "$100.00", rating: 4 },
    { name: "Cat Mouse Toy", img: "images/catmouse.jpg", price: "$10.00", rating: 4},
    { name: "Cat Bed", img: "images/catbed.jpg", price: "$45.00", rating: 4.5 },
    { name: "Cat Tree", img: "images/cattree.jpg", price: "$200.00", rating: 4 },
    { name: "Wiggly Worm Cat Teaser Wand", img: "images/wiggly worm cat teaser wand.jpg", price: "$15.00", rating: 3.5 },
    { name: "Cat Food Bowl", img: "images/catfoodbowl.jpg", price: "$35.00", rating: 4 },
    { name: "Cat Litter Box", img: "images/litterbox.jpg", price: "$99.00", rating: 4 },
    { name: "Cat Carrier", img: "images/catcarrier.jpg", price: "$160.20", rating: 4 },
    { name: "Cute Cartoon Ceramic Cat Bowl", img: "images/cute cartoon ceramic cat bowl with high stand.jpg", price: "$160.20", rating: 4 },
    { name: "Flower Shaped Cat Bed", img: "images/ed10f9b63f00da532aeae7a698b1a931.jpg", price: "$32.00", rating: 4 },
    


];


// Fisher–Yates shuffle
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// ⭐ Generate star icons (supports half stars)
function getStars(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars += '<i class="fa-solid fa-star" style="color: gold;"></i>';
        } else if (rating >= i - 0.5) {
            stars += '<i class="fa-solid fa-star-half-stroke" style="color: gold;"></i>';
        } else {
            stars += '<i class="fa-regular fa-star" style="color: gold;"></i>';
        }
    }
    return stars;
}

// 🐾 Try to detect current product name automatically
let currentProductName = "";
const headings = document.querySelectorAll("h1, h2, h3, .product-name, .product-title");

for (const h of headings) {
    const text = h.textContent.trim();
    // Check if this text matches one of your product names
    if (products.some(p => p.name.toLowerCase() === text.toLowerCase())) {
        currentProductName = text;
        break;
    }
}

// Exclude current product if found
const filteredProducts = currentProductName
    ? products.filter(p => p.name.toLowerCase() !== currentProductName.toLowerCase())
    : products;

// Shuffle and show 4 random related products
const relatedContainer = document.getElementById("related-container");
const shuffled = shuffle([...filteredProducts]).slice(0, 4);

shuffled.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("related-item");
    div.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h4>${product.name}</h4>
        <div class="rating">${getStars(product.rating)}</div>
        <p><strong>${product.price}</strong></p>
        <button class="purchase-btn">Purchase</button>
    `;
    relatedContainer.appendChild(div);
});