import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Hello Nex js App</h1>
      <User name="Ashwini" />

      <User name="Nishant" />
      <User name="Ketan" />
      <User name="Omen" />
    </div>
  );
}

const User = (props) => {
  return <h3>Hello {props.name}</h3>;
};
