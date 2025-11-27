export async function getProducts() {
  const data = await fetch("https://backendnestecommercemotorshop-production.up.railway.app/api/products/", { cache: "no-store" });
  return await data.json();
}

export async function getProductsSearch(text:any) {
  const data = await fetch(
    `https://backendnestecommercemotorshop-production.up.railway.app/api/products/search?name=${encodeURIComponent(text), { cache: "no-store" }}`
  );
  return await data.json();
}

export async function getProductsID(id:number) {

  const data = await fetch(
    `https://backendnestecommercemotorshop-production.up.railway.app/api/products/${(id)}, { cache: "no-store" }`
  );
  if (!data.ok) {
    throw new Error("Error al obtener el producto");
  }
  return await data.json();
}

export async function addToCart(productId: number, quantity: number) {
  const res = await fetch(
    "https://backendnestecommercemotorshop-production.up.railway.app/api/shopping-cart",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId,
        quantity,
      }),
      cache: "no-store"
    }
  );

  if (!res.ok) {
    throw new Error("Error al agregar al carrito");
  }

  return res.json();
}


export async function getCarrito() {
  const data = await fetch("https://backendnestecommercemotorshop-production.up.railway.app/api/shopping-cart", { cache: "no-store" });
  return await data.json();
}

export async function deleteCartItem(id: number) {
  const res = await fetch(
    `https://backendnestecommercemotorshop-production.up.railway.app/api/shopping-cart/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Error al eliminar el ítem del carrito");
  }

  return res.json();
}

export async function createProduct(product: {
  name: string;
  price: number;
  brand: string;
  condition: string;
  seller: string;
  description: string;
  image: string;
}) {
  const res = await fetch(
    `https://backendnestecommercemotorshop-production.up.railway.app/api/products`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }
  );

  if (!res.ok) {
    throw new Error("Error al crear el producto");
  }

  return res.json();
}

export async function createOrder(cartItems: { productId: number; quantity: number }[]) {
  const res = await fetch(
    "https://backendnestecommercemotorshop-production.up.railway.app/api/payments/create",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItems }),
    }
  );

  if (!res.ok) {
    throw new Error("Error al crear la orden");
  }

  return res.json();
}
