"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigateTo = (pathName) => {
    router.push(pathName);
  };
  return (
    <div>
      <h1>Hello Nex js App</h1>
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
