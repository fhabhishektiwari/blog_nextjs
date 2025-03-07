"use client";
import Script from "next/script";

export default function Userdetails() {
  return (
    <div>
      <Script
        src="/location.js"
        onLoad={() => {
          console.log("file loaded");
        }}
      />
      <h1>Get current User location.</h1>
    </div>
  );
}
