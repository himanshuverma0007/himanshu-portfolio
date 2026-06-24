import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
const [result, setResult] = useState("");

const handleSubmit = async (event) => {
event.preventDefault();

```
setResult("Sending...");

const formData = new FormData(event.target);

formData.append(
  "access_key",
  "43ae68f4-a4dc-4d0c-b17d-8afb9994a477"
);

const response = await fetch(
  "https://api.web3forms.com/submit",
  {
    method: "POST",
    body: formData,
  }
);

const data = await response.json();

if (data.success) {
  setResult("✅ Message Sent Successfully!");
  event.target.reset();
} else {
  setResult("❌ Failed to send message.");
  console.log(data);
}
```

};

return ( <section
   id="contact"
   className="min-h-screen bg-gray-800 text-white py-20 px-6"
 > <div className="max-w-6xl mx-auto">

```
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold">
        Contact <span className="text-cyan-400">Me</span>
      </h2>

      <p className="text-gray-400 mt-3">
        Feel free to connect with me for opportunities and collaborations.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-10">

      {/* Contact Information */}
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">

        <h3 className="text-2xl font-bold text-cyan-400 mb-6">
          Get In Touch
        </h3>

        <div className="space-y-6">

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-cyan-400 text-2xl" />

            <a
              href="mailto:0007hverma@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              0007hverma@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaLinkedin className="text-cyan-400 text-2xl" />

            <a
              href="https://www.linkedin.com/in/himanshu-verma-0661a4225"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaGithub className="text-cyan-400 text-2xl" />

            <a
              href="https://github.com/himanshuverma0007"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              GitHub Profile
            </a>
          </div>

        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-semibold transition"
          >
            Send Message
          </button>

          {result && (
            <p className="text-center text-cyan-400 mt-4">
              {result}
            </p>
          )}

        </form>

      </div>

    </div>
  </div>
</section>

);
};

export default Contact;
