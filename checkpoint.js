class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    toString() {
        return `Product ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    calculateTotalPrice() {
        return this.product.price * this.quantity;
    }

    toString() {
        return `${this.product.name} (x${this.quantity}) - Total: $${this.calculateTotalPrice()}`;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        let existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.calculateTotalPrice(), 0);
    }

    displayCart() {
        if (this.items.length === 0) {
            console.log("Your cart is empty.");
        } else {
            this.items.forEach(item => console.log(item.toString()));
        }
    }
}
const product1 = new Product(1, "Laptop", 1000);
const product2 = new Product(2, "Phone", 600);
const product3 = new Product(3, "Headphones", 150);

const cart = new ShoppingCart();

cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 3);

cart.displayCart();

console.log("Total Price: $" + cart.getTotalPrice());

cart.removeItem(2);

cart.displayCart();

console.log("Total Price after removal: $" + cart.getTotalPrice());
