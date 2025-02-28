"use client";
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";
export default function Layout({ children }) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div>
      <ul className="menu-link">
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        {pathName !== "/login/teacherlogin" && (
          <li>
            <Link href={"/login/studentlogin"}>Student Login</Link>
          </li>
        )}
        {pathName !== "/login/studentlogin" && (
          <li>
            <Link href={"/login/teacherlogin"}>Teacher Login</Link>
          </li>
        )}
      </ul>
      {children}
    </div>
  );
}
