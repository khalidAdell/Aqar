import Image from "next/image";
import Link from "next/link";

const Property = () => {
  return (
    <div className="mt-4">
      <div className="hero rounded-xl bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={400}
            height={800}
            className="w-full h-auto max-w-sm rounded-lg shadow-2xl"
            alt="property"
            priority={false}
          />
          <div>
            <h1 className="text-5xl font-bold">House</h1>
            <p className="py-6">
              Get started by choosing from one of our pre-built page templates
              to showcase your properties
            </p>
            <Link className="btn btn-primary" href="/">
              Check it Out
            </Link>
          </div>
        </div>
      </div>
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Link href="/buy/property" className="card shadow-lg mb-8">
          <figure>
            <Image
              width={400}
              height={300}
              src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="property"
              priority={false}
              className="w-auto h-auto"
            />
          </figure>
          <div className="card-body">
            <h3 className="text-violet-500 text-2xl font-semibold">
              {(81300).toLocaleString("eng", {
                style: "currency",
                currency: "USD",
              })}
            </h3>
            <h2 className="card-title">Property</h2>
            <p>
              Get started by choosing from one of our pre-built page templates
              to showcase your properties
            </p>
          </div>
        </Link>
        <Link href="/buy/property" className="card shadow-lg mb-8">
          <figure>
            <Image
              width={400}
              height={300}
              src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="property"
              priority={false}
              className="w-auto h-auto"
            />
          </figure>
          <div className="card-body">
            <h3 className="text-violet-500 text-2xl font-semibold">
              {(81300).toLocaleString("eng", {
                style: "currency",
                currency: "USD",
              })}
            </h3>
            <h2 className="card-title">Property</h2>
            <p>
              Get started by choosing from one of our pre-built page templates
              to showcase your properties
            </p>
          </div>
        </Link>
        <Link href="/buy/property" className="card shadow-lg mb-8">
          <figure>
            <Image
              width={400}
              height={300}
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="property"
              priority={false}
              className="w-auto h-auto"
            />
          </figure>
          <div className="card-body">
            <h3 className="text-violet-500 text-2xl font-semibold">
              {(81300).toLocaleString("eng", {
                style: "currency",
                currency: "USD",
              })}
            </h3>
            <h2 className="card-title">Property</h2>
            <p>
              Get started by choosing from one of our pre-built page templates
              to showcase your properties
            </p>
          </div>
        </Link>
        <Link href="/buy/property" className="card shadow-lg mb-8">
          <figure>
            <Image
              width={400}
              height={300}
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="property"
              priority={false}
              className="w-auto h-auto"
            />
          </figure>
          <div className="card-body">
            <h3 className="text-violet-500 text-2xl font-semibold">
              {(81300).toLocaleString("eng", {
                style: "currency",
                currency: "USD",
              })}
            </h3>
            <h2 className="card-title">Property</h2>
            <p>
              Get started by choosing from one of our pre-built page templates
              to showcase your properties
            </p>
          </div>
        </Link>
        <Link href="/buy/property" className="card shadow-lg mb-8">
          <figure>
            <Image
              width={400}
              height={300}
              src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="property"
              priority={false}
              className="w-auto h-auto"
            />
          </figure>
          <div className="card-body">
            <h3 className="text-violet-500 text-2xl font-semibold">
              {(81300).toLocaleString("eng", {
                style: "currency",
                currency: "USD",
              })}
            </h3>
            <h2 className="card-title">Property</h2>
            <p>
              Get started by choosing from one of our pre-built page templates
              to showcase your properties
            </p>
          </div>
        </Link>
        <Link href="/buy/property" className="card shadow-lg mb-8">
          <figure>
            <Image
              width={400}
              height={300}
              src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="property"
              priority={false}
              className="w-auto h-auto"
            />
          </figure>
          <div className="card-body">
            <h3 className="text-violet-500 text-2xl font-semibold">
              {(81300).toLocaleString("eng", {
                style: "currency",
                currency: "USD",
              })}
            </h3>
            <h2 className="card-title">Property</h2>
            <p>
              Get started by choosing from one of our pre-built page templates
              to showcase your properties
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Property;
