import { useState } from "react";

export default function Email() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };
  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label
          htmlFor="email"
          className=" text-white block  text-md font-medium"
        >
          Your Email
        </label>
        <input
          name="email"
          type="email"
          id="email"
          required
          placeholder="example@gmail.com"
          className=" bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
        />
        <label
          htmlFor="subject"
          className=" text-white block  text-md font-medium"
        >
          Subject
        </label>
        <input
          name="subject"
          type="text"
          id="subject"
          required
          placeholder="Just saying hi!"
          className=" bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
        />
        <label
          htmlFor="message"
          className=" text-white block  text-md font-medium"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Let's talk about ..."
          className=" bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
        ></textarea>
        <button
          type="submit"
          className=" bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2.5 px-5 rounded-lg w-full "
        >
          Send Message
        </button>
        {emailSubmitted && (
          <p className=" text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        )}
      </form>
    </div>
  );
}
