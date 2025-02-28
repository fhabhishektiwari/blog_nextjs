import Link from "next/link";
import "./login.css";
export default function Layout({ children }) {
  return (
    <div>
      <ul className="menu-link">
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"/login/studentlogin"}>Student Login</Link>
        </li>
        <li>
          <Link href={"/login/teacherlogin"}>Teacher Login</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
