import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  // console.log(router)
  return (
    <nav>
      <Link href="/">
        <span style={{ color: router.pathname === "/" ? "red" : "black" }}>
          Home
        </span>
      </Link>
      <Link href="/about">
        <span style={{ color: router.pathname === "/about" ? "red" : "black" }}>
          About
        </span>
      </Link>
    </nav>
  );
}
