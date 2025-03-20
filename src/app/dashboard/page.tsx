"use client"; // Next.js 13+ 클라이언트 컴포넌트
import { useState } from "react";

export default function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ padding: "20px", textAlign: "center" }}>
      <h1>📊 대시보드</h1>
      <p>이곳에서 데이터를 확인하세요.</p>
      <h2>카운터: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </main>
  );
}
