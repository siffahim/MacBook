
let extraMemoryCharge = 0;
let extraSsdCharge = 0;
let diliverCharge = 0;
totalPrice = 1299 + extraMemoryCharge + extraSsdCharge + diliverCharge;
const discountPrice = document.getElementById('discount-price');

function totalPriceAmount() {
    const currentTotalPrice = document.getElementById('total-price');
    discountPrice.innerText = totalPrice;
    currentTotalPrice.innerText = totalPrice;
}

function getPrice(product,extraBuild) {
    const productPrice = document.getElementById(product+'-price');
    productPrice.innerText = extraBuild;
}

//memory
document.getElementById('gb8-btn').addEventListener('click', () => {
    extraMemoryCharge = 0;
    getPrice('memory',extraMemoryCharge);
    totalPrice = 1299 + extraMemoryCharge + extraSsdCharge + diliverCharge;
    totalPriceAmount()
})

document.getElementById('gb16-btn').addEventListener('click', () => {
    if (extraMemoryCharge === 0) {
        extraMemoryCharge = 180
    }
    getPrice('memory',extraMemoryCharge);
    totalPrice = 1299 + extraMemoryCharge + extraSsdCharge + diliverCharge;
    totalPriceAmount();
})

//storage
document.getElementById('ssd-256').addEventListener('click', () => {
    extraSsdCharge = 0;
    getPrice('storage',extraSsdCharge);
    totalPrice = 1299 + extraMemoryCharge + extraSsdCharge + diliverCharge;
    totalPriceAmount();
})

document.getElementById('ssd-512').addEventListener('click', () => {
    if (extraSsdCharge !== 100) {
        extraSsdCharge = 100
    }
    getPrice('storage',extraSsdCharge);
    totalPrice = 1299 + extraMemoryCharge + extraSsdCharge + diliverCharge;
    totalPriceAmount();
})

document.getElementById('ssd-1tb').addEventListener('click', () => {

    if (extraSsdCharge !== 180) {
        extraSsdCharge = 180
    }
    getPrice('storage',extraSsdCharge);
    totalPrice = 1299 + extraMemoryCharge + extraSsdCharge + diliverCharge;
    totalPriceAmount();
})

//delivery
document.getElementById('delivery-free').addEventListener('click', () => {
    diliverCharge = 0;
    getPrice('delivery',diliverCharge);
    totalPrice = 1299 + extraMemoryCharge + extraSsdCharge + diliverCharge;
    totalPriceAmount();

})
document.getElementById('delivery-cost').addEventListener('click', () => {
    if (diliverCharge === 0) {
        diliverCharge = 20
    }
    getPrice('delivery',diliverCharge);
    totalPrice = 1299 + extraMemoryCharge + extraSsdCharge + diliverCharge;
    totalPriceAmount();
})

//pomoDiscount;
function popoDiscount() {
    document.getElementById('pomo-btn').addEventListener('click', () => {
        const pomoInput = document.getElementById('pomo-input').value;
        if (pomoInput == 'stevekaku') {
            let discountPriceAmount = totalPrice * 0.2
            let finalPrice = totalPrice - discountPriceAmount
            discountPrice.innerText = finalPrice;
        }
    })
}

popoDiscount();
