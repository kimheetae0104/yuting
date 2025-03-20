import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold text-center mb-6">🛒 쇼핑몰</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-lg text-gray-600">{product.price.toLocaleString()} 원</p>
          </Link>
        ))}
      </div>
    </main>
  );
}