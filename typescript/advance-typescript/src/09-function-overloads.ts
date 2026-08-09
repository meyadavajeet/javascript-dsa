// Function overloading

//- Function overloading in TypeScript allows you to define multiple ways a single function can be called, each with different parameter types and return types.

type Product = {
  name: string;
  price: number;
  inStock: boolean;
};

const laptopProduct: Product = {
  name: "name",
  price: 78900,
  inStock: true,
};

// function signature
function getProductValue(product: Product, key: "name"): string;
function getProductValue(product: Product, key: "price"): number;
function getProductValue(product: Product, key: "inStock"): boolean;

// function implementation
function getProductValue(
  product: Product,
  key: "name" | "price" | "inStock",
): string | number | boolean {
  return product[key];
}

const proudctName = getProductValue(laptopProduct, "name");
console.log(proudctName.toUpperCase());

const productPrice = getProductValue(laptopProduct, "price");
console.log(productPrice.toFixed());

const productInStock = getProductValue(laptopProduct, "inStock");
console.log(productInStock);
