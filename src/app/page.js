import Link from "next/link";

export default function Home() {
  let name = "park";
  return (
    <div>
      <h2 className="title">{name}</h2>
      <p className="title-sub">by dev Like</p>
    </div>
  );
}
