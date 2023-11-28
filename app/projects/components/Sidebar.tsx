const Sidebar = () => {
  return (
    <aside className="md:sticky z-10 right-0 top-16 shadow-lg bg-white border border-gray-300 h-fit w-full md:w-1/3 p-4 rounded-xl">
      <h1 className="font-medium text-xl ">Contact Sellers in</h1>
      <h2 className="font-medium text-base my-3">
        <span className="bg-primary text-white p-2 px-3 rounded-lg bg-opacity-70">
          D
        </span>{" "}
        DLF The Aralias
      </h2>
      <form className="shadow border p-3 my-4 rounded-md">
        <h3 className="font-medium text-base">Please share your contact</h3>
        <div>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="border-b w-full my-3 outline-none"
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="border-b w-full my-3 outline-none"
          />
        </div>
        <div>
          <input
            type="text"
            id="phone"
            placeholder="Phone Number"
            className="border-b w-full my-3 outline-none"
          />
        </div>
        <div className="my-2">
          <label htmlFor="agree" className="flex items-center">
            <input type="checkbox" id="agree" className="mr-2" />
            <span className="text-gray-500 text-sm">
              I agree to be contacted by AqarStock and other agents via
              WhatsApp, SMS, phone, email, etc.
            </span>
          </label>
        </div>
      </form>
      <button type="submit" className="w-full btn btn-primary text-base">
        Submit
      </button>
    </aside>
  );
};

export default Sidebar;
