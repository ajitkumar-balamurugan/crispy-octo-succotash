// Interface for Product
interface Product {
  name: string;
  price: number;
}

// Abstract class for pages
abstract class Page {
  protected container: HTMLElement;

  constructor() {
    this.container = document.getElementById("app") as HTMLDivElement;
  }

  public abstract render(): void;
}

// Preloader page
class PreloaderPage extends Page {
  public render(): void {
    this.container.innerHTML = `
        <div class="loader">
          <h2>Loading...</h2>
        </div>
      `;
  }
}

// Login page
class LoginPage extends Page {
  public render(): void {
    this.container.innerHTML = `
        <div class="container">
          <h2>Login</h2>
          <form class="login-form">
            <input type="text" placeholder="Username">
            <input type="password" placeholder="Password">
            <button type="submit">Login</button>
          </form>
        </div>
      `;
  }
}

// Lobby with products page
class LobbyPage extends Page {
  private products: Product[];

  constructor(products: Product[]) {
    super();
    this.products = products;
  }

  public render(): void {
    this.container.innerHTML = `
        <div class="container">
          <h2>Welcome to the Lobby</h2>
          <ul class="product-list">
            ${this.renderProductList()}
          </ul>
        </div>
      `;
  }

  private renderProductList(): string {
    return this.products
      .map((product) => `<li>${product.name} - $${product.price}</li>`)
      .join("");
  }
}

// Create instances of the pages
const preloaderPage = new PreloaderPage();
const loginPage = new LoginPage();
const products = [
  { name: "Product 1", price: 9.99 },
  { name: "Product 2", price: 19.99 },
  { name: "Product 3", price: 14.99 },
];
const lobbyPage = new LobbyPage(products);

// Render the pages
preloaderPage.render();

// Simulate loading delay
setTimeout(() => {
  loginPage.render();

  // Simulate login
  setTimeout(() => {
    lobbyPage.render();
  });
}, 2);
// });
// });
