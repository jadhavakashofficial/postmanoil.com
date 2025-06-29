// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-yellow-50 shadow p-4">
      <nav className="flex justify-between">
        <Link href="/" className="text-xl font-bold text-yellow-800">Postman Oils</Link>
        <div className="space-x-4">
          <Link href="/mustard-oil">Mustard Oil</Link>
          <Link href="/postman-recipes">Recipes</Link>
          <Link href="/connect-for-dealership">Dealership</Link>
          <Link href="/privacy-policy">PrivacyPolicy</Link>
        </div>
      </nav>
    </header>
  );
}
