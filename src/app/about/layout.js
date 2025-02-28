import Link from "next/link";
import "./about.css";
export default function Layout({ children }) {
  return (
    <div>
      <ul className="menu-list">
        <li>
          <Link href={"/about"}>About Page</Link>
        </li>
        <li>
          <Link href={"/about/aboutstudent"}>About Student</Link>
        </li>
        <li>
          <Link href={"/about/aboutcollege"}>About College</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
