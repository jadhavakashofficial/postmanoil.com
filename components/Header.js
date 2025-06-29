import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-yellow-50 shadow p-4">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-yellow-800">
          Postman Oils
        </Link>
        <div className="space-x-4 text-yellow-900 font-medium">
          <Link href="/mustard-oil">Mustard Oil</Link>
          <Link href="/postman-recipes">Recipes</Link>
          <Link href="/connect-for-dealership">Dealership</Link>
          <Link href="/terms-and-conditions">Terms & Conditions</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </nav>
    </header>
  );
}
