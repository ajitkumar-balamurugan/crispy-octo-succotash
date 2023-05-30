interface Product {
  thumbnail: string;
  title: string;
  description: string;
  price: number;
}

interface Data {
  products: Product[];
}

class ProductsPage {
  private productsContainer: HTMLDivElement;

  constructor() {
    this.productsContainer = document.getElementById(
      "products"
    ) as HTMLDivElement;
    this.displayProducts();
  }

  private async displayProducts() {
    const res = await fetch("https://dummyjson.com/products?limit=21", {
      method: "GET",
    });
    const data: Data = await res.json();
    console.log(data.products);
    const productsArr = data.products;
    const str = productsArr
      .map((product) => {
        return this.getProductHTML(product);
      })
      .join("");

    this.productsContainer.innerHTML = str;
  }

  private getProductHTML(product: Product): string {
    return `<div id="product">
        <img src="${product.thumbnail}" alt="${product.title}">
        <h2 id="title">${product.title}</h2>
        <p id="description">${product.description}</p>
        <p id="price">$.${product.price}</p>
      </div>`;
  }
}

const productsPage = new ProductsPage();
