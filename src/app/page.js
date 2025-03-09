"use client";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "100",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
}
