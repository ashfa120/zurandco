const button = document.querySelector("button");

if (button) {
    button.addEventListener("click", () => {
        alert("Welcome to Vintage Boutique!");
    });
}

function openProduct(name, price, media, description, phone, gallery = []) {

    let image = "";
    let video = "";

    if (media.endsWith(".mp4")) {
        video = media;
    } else {
        image = media;
    }

    const productGallery = Array.isArray(gallery) && gallery.length ? gallery : [media];
    window.location.href = `product.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}&video=${encodeURIComponent(video)}&desc=${encodeURIComponent(description)}&phone=${encodeURIComponent(phone)}&gallery=${encodeURIComponent(JSON.stringify(productGallery))}`;
}
