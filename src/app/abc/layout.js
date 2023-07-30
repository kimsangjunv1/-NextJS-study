import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <div className="navbar gray">
      <Link href="/abc/detail">detail</Link>
      {children}
    </div>
  );
}
