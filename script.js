// Handle Add to Cart functionality
const cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.getAttribute('data-product');
        const price = parseFloat(event.target.getAttribute('data-price'));

        cart.push({ product, price });
        alert(`${product} added to cart!`);
        console.log(cart); // You can replace this with cart display logic
    });
});

// Contact form validation (basic)
document.getElementById('contactForm').addEventListener('submit', (event) => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name.trim() === '' || email.trim() === '') {
        event.preventDefault();
        alert('Please fill in all fields');
    }
});
