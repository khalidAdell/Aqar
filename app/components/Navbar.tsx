import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full z-50 mx-auto sticky top-0">
      <div className="navbar bg-violet-600 pb-2 md:px-12 w-full">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl text-white">
            Aqar
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                className="hover:text-white text-gray-200 hover:bg-gray-300 text-md font-semibold"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-white text-gray-200 hover:bg-gray-300 text-md font-semibold"
                href="/property"
              >
                Property
              </Link>
            </li>
          </ul>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="a"
                  width={100}
                  height={100}
                  className="mx-auto rounded-lg"
                  priority={true}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link href="/">Settings</Link>
              </li>
              <li>
                <Link href="/">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
