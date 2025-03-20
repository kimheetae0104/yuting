"use client"; // ✅ 클라이언트 컴포넌트 선언

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // ✅ useParams 사용
import { products } from "@/data/products";
import { useCartStore } from "@/store/cart";

export default function ProductDetail() {
    const params = useParams(); // ✅ params를 useParams로 가져오기
    const [product, setProduct] = useState(null);
    const { addToCart } = useCartStore();

    useEffect(() => {
        if (!params?.id) return;

        const foundProduct = products.find((p) => p.id === Number(params.id));
        setProduct(foundProduct);
    }, [params]);

    if (!product) return <p>Product not found</p>;

    return (
        <div>
            <h1>{product.name}</h1>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}