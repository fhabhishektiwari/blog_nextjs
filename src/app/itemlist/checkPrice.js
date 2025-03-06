"use client";
export default function CheckPrice({ price }) {
  return <button onClick={() => alert(price)}>Check Price</button>;
}
