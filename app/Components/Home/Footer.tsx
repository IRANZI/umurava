interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = (className) => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-6 py-6 flex justify-between items-center border-b border-gray-700">
        <div className="flex items-center">
          <img src="/footer.png" alt="Logo" className="h-24 w-auto mr-4" />
        </div>

        <div className="flex space-x-4">
          {" "}
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-800 hover:bg-blue-400 transition"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              viewBox="0 0 24 24"
            >
              <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-800 hover:bg-blue-400 transition"
            aria-label="Custom Icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              viewBox="0 0 24 24"
            >
              <path d="M19.545 15.025v-2.421h2.422v-1.815h-2.422V8.368H17.73v2.421h-2.421v1.815h2.421v2.421zM8.052 8.302c1.133 0 1.896.484 2.33.896l1.722-1.67c-1.048-.98-2.415-1.58-4.052-1.58C4.714 5.947 2 8.659 2 12s2.714 6.053 6.052 6.053c3.493 0 5.812-2.457 5.812-5.913 0-.503-.064-.86-.153-1.24H8.049v2.256h3.332c-.158.951-1.011 2.556-3.329 2.556-2.003 0-3.637-1.665-3.637-3.704 0-2.042 1.634-3.706 3.637-3.706z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-800 hover:bg-blue-400 transition"
            aria-label="Custom Icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              viewBox="0 0 24 24"
            >
              <circle cx="4.983" cy="5.009" r="2.188" />
              <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
            </svg>
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-800 hover:bg-blue-400 transition"
            aria-label="Custom Icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              viewBox="0 0 24 24"
            >
              <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Our Address Section */}
        <div className="pr-4">
          <h2 className="text-lg font-bold mb-4">Our Address</h2>
          <p>career@tickets.com</p>
          <p>89 KG 14 Ave, Kigali</p>
          <p>+250 700 000</p>
        </div>

        {/* Quick Links Section */}
        <div className="pr-4">
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-400">
                Program
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="mb-4">
          {" "}
          <h2 className="text-lg font-bold mb-4">
            Join our newsletter to keep up to <br /> date with us!
          </h2>
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="flex-grow p-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 pr-12"
            />
            <button className="bg-customBlue text-white p-3 rounded-r-md hover:bg-blue-700 transition ml-[-1px]">
              Subscribe
            </button>{" "}
          </div>
        </div>
      </div>

      {/* Copyright and Links Section */}
      <div className="mb-4 border-t border-gray-700 pt-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <p className="text-sm">
            Copyright © All Rights Reserved Sawarey 2024.
          </p>
          <p className="text-sm">
            <a href="#" className="text-white hover:underline">
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="text-white hover:underline ml-2">
              Terms and Conditions
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
