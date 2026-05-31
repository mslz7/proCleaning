import footer__logo from"../../../../public/icons/footer__logo (2).svg"
export default function Footer() {
  return (
    <footer className="bg-[#111D15] text-white pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img className="mb-6" src={footer__logo} alt="logo" />
          <p className="text-gray-300 text-sm leading-6">
            Stay updated with our latest cleaning tips, service updates, and helpful articles on maintaining a spotless home.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 cursor-pointer">About Us</li>
            <li className="hover:text-green-400 cursor-pointer">Services</li>
            <li className="hover:text-green-400 cursor-pointer">Our Team</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Know More</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 cursor-pointer">Support</li>
            <li className="hover:text-green-400 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-green-400 cursor-pointer">Terms & conditions</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>📍 Tashkent, Uzbekistan</li>
            <li>📞 +998 123-123-12</li>
            <li>📧 @procleaning.uz</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2024 Procleaning. All Rights Reserved
      </div>
    </footer>
  );
}