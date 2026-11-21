import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => (
  <div
    id="connect"
    className="px-6 md:px-12 lg:px-[100px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 min:h-screen p-8 gap-10"
  >
    <h1 className="text-center text-4xl md:text-6xl font-semibold text-gray-800 mb-12">
      Get in touch
    </h1>

    <div className="flex flex-col md:flex-row justify-center items-start">
      <div className="md:w-1/2 w-full">
        <form action="https://formspree.io/f/xqpqlrly" method="POST">
          <input
            className="border border-gray-300 rounded-md w-full px-4 py-2 h-12 mb-4"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="border border-gray-300 rounded-md w-full px-4 py-2 h-12 mb-4"
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
          <textarea
            rows={6}
            className="border border-gray-300 rounded-md w-full px-4 py-2 mb-4"
            name="message"
            placeholder="Message"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="md:w-1/2 w-full space-y-6 mt-8 md:mt-0 md:pt-19 md:pl-32">
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-white bg-gray-600 p-3 rounded-full text-xl"
          />
          <div>
            <p className="font-semibold text-gray-700">Email</p>
            <a
              href="mailto:prajubhattarai2@gmail.com"
              className="text-red-900 hover:underline"
            >
              prajubhattarai2@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-white bg-gray-600 p-3 rounded-full text-xl"
          />
          <div>
            <p className="font-semibold text-gray-700">Address</p>
            <p className="text-red-900">Biratnagar, Morang</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;