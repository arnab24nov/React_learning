const Contact = () => {
  return (
    <div className="border rounded-lg w-4/12 shadow-lg mx-auto mb-10 px-10">
      <h1 className="font-bold text-slate-600 p-4, m-4 text-center text-[30px]">
        {" "}
        Contact Us
      </h1>
      <form className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter your name."
          className="border p-2 mb-4 w-full rounded-lg"
        />
        <input
          type="text"
          placeholder="Enter your email id."
          className="border p-2 mb-4 w-full rounded-lg"
        />
        <textarea
          placeholder="Write your feedback here."
          className="border p-2 mb-4 rounded-lg w-full"
        />
        <button className="px-4 h-10 mb-4 bg-green-600 rounded-lg hover:text-white font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
