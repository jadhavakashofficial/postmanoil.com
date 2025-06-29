// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-yellow-100 text-center p-4 mt-8 text-sm text-gray-600">
      © {new Date().getFullYear()} Postman Oils. All rights reserved.
    </footer>
  );
}
