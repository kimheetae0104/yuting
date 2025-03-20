import { useCartStore } from "@/store/cart";

export default function CartPage() {
  const { cart } = useCartStore();

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold">🛒 장바구니</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">장바구니가 비어 있습니다.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="border-b py-2">
              {item.name} - {item.price.toLocaleString()} 원
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}