export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        <div>
          <h2 className="text-3xl font-bold mb-6">
            Shalom Breakthrough
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Equipping believers for ministry, leadership and transformational
            Kingdom impact.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">
            Quick Links
          </h3>

          <div className="flex flex-col gap-4 text-gray-400">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#admissions">Admissions</a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">
            Contact
          </h3>

          <div className="flex flex-col gap-4 text-gray-400">
            <p>Nairobi, Kenya</p>
            <p>sbbckenya@yahoo.com  www.sbbckenya.org </p>
            <p>+254 700 000000</p>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500">
        © 2026 Shalom Breakthrough Bible College. All rights reserved.
      </div>
    </footer>
  );
}