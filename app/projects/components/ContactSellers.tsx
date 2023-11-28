import Image from "next/image";
import Link from "next/link";

const ContactSellers = () => {
  return (
    <div className="w-full bg-white border py-8 px-6 rounded-2xl">
      <h1 className="text-xl font-bold">Contact Sellers</h1>
      <div className="divider"></div>
      <div className="flex justify-between items-center sm:flex-row flex-col gap-4">
        <div className="flex items-center gap-1">
          <Image
            src="/images/logo.jpg"
            width={100}
            height={100}
            alt="logo"
            className="w-20 h-20"
          />
          <div>
            <h2 className="text-lg font-bold">AQAR STOCK</h2>
            <p className="text-sm text-gray-500 my-1">Seller</p>
            <p className="text-sm">24 Cr - 25 Cr</p>
          </div>
        </div>
        <Link
          href="/"
          className="btn btn-primary text-white px-10 w-full sm:w-auto"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default ContactSellers;
