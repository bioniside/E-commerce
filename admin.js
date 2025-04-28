document.addEventListener('DOMContentLoaded', () => {
    const addProductForm = document.getElementById('addProductForm');

    // Add product to localStorage
    addProductForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const productName = document.getElementById('productName').value;
        const productCategory = document.getElementById('productCategory').value;
        const productPrice = document.getElementById('productPrice').value;
        const productImage = document.getElementById('productImage').value;

        const product = {
            id: Date.now(),
            name: productName,
            category: productCategory,
            price: parseFloat(productPrice),
            image: productImage,
        };

        // Retrieve existing products or initialize
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));

        alert('Product added successfully!');
        addProductForm.reset();
    });
});
