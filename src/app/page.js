"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "100",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const router = useRouter();
  const navigateTo = (pathName) => {
    router.push(pathName);
  };
  return (
    <div>
      <h1 className={roboto.className}>Hello Nex js App</h1>
      <User name="Ashwini" />

      <User name="Nishant" />
      <User name="Ketan" />
      <User name="Omen" />
      <Counter />
      <Link href={"/login"}>Go to Login Page</Link>
      <Link href={"/about"}>Go to About Page</Link>

      <button onClick={() => navigateTo("/login")}>Go to Login Page</button>
      <button onClick={() => navigateTo("/about")}>Go to About Page</button>

      {/* {Counter()}//avoid to use */}

      {/* Image Optimization */}
      {/* <Image
        src={
          "https://images.unsplash.com/photo-1559981421-3e0c0d712e3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWV8ZW58MHx8MHx8fDA%3D"
        }
        width={200}
        height={200}
        alt="anime image"
      />

      <img src="https://images.unsplash.com/photo-1559981421-3e0c0d712e3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWV8ZW58MHx8MHx8fDA%3D" /> */}

      {/* <h1
        style={{
          fontFamily: "Roboto",
          fontWeight: 100,
        }}
      >
        Heading with roboto font family
      </h1> */}

      <h1 className={roboto.className}>Heading with roboto font family</h1>
    </div>
  );
}

const User = (props) => {
  return <h3>Hello {props.name}</h3>;
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h4>Count:{count}</h4>
      <button onClick={handleClick}>Inc</button>
    </>
  );
};
