"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Hello Nex js App</h1>
      <User name="Ashwini" />

      <User name="Nishant" />
      <User name="Ketan" />
      <User name="Omen" />
      <Counter />
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
