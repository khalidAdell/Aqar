import Image from "next/image";
import Link from "next/link";
import FilterMenu from "../components/Filter";

const Property = () => {
  return (
    <div className="mt-4 p-4">
      {/* <FilterMenu /> */}
      <div className="my-4 grid gap-4">
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
              <h1 className="text-3xl font-bold">House</h1>
              <p className="py-2 max-w-xl">
                Stunning waterfront property with panoramic views, located in a
                prime residential area. This luxurious estate features modern
                architecture, spacious interiors, and high-end finishes.
              </p>
              <p className="mb-2 text-gray-600 font-medium">
                <span className="text-lg font-semibold text-primary">
                  Price:{" "}
                </span>
                $500,000
              </p>
              <p className="mb-2 text-gray-600 font-medium">
                <span className="text-lg font-semibold text-primary">
                  Rooms:{" "}
                </span>
                4
              </p>
              <p className="mb-2 text-gray-600 font-medium">
                <span className="text-lg font-semibold text-primary">
                  Baths:{" "}
                </span>
                2
              </p>
              <Link className="btn btn-primary" href="/">
                Check it Out
              </Link>
            </div>
          </div>
        </div>
        <div className="hero rounded-xl bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={400}
              height={800}
              className="w-full h-auto max-w-sm rounded-lg shadow-2xl"
              alt="property"
              priority={false}
            />
            <div>
              <h1 className="text-3xl font-bold">House</h1>
              <p className="py-2 max-w-xl">
                Stunning waterfront property with panoramic views, located in a
                prime residential area. This luxurious estate features modern
                architecture, spacious interiors, and high-end finishes.
              </p>
              <p className="mb-2 text-gray-600 font-medium">
                <span className="text-lg font-semibold text-primary">
                  Price:{" "}
                </span>
                $500,000
              </p>
              <p className="mb-2 text-gray-600 font-medium">
                <span className="text-lg font-semibold text-primary">
                  Rooms:{" "}
                </span>
                4
              </p>
              <p className="mb-2 text-gray-600 font-medium">
                <span className="text-lg font-semibold text-primary">
                  Baths:{" "}
                </span>
                2
              </p>
              <Link className="btn btn-primary" href="/">
                Check it Out
              </Link>
            </div>
          </div>
        </div>
        <div className="hero rounded-xl bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={400}
              height={800}
              className="w-full h-auto max-w-sm rounded-lg shadow-2xl"
              alt="property"
              priority={false}
            />
            <div>
              <h1 className="text-3xl font-bold">House</h1>
              <p className="py-2 max-w-xl">
                Stunning waterfront property with panoramic views, located in a
                prime residential area. This luxurious estate features modern
                architecture, spacious interiors, and high-end finishes.
              </p>
              <p className="mb-2 text-gray-600 font-medium">
                <span className="text-lg font-semibold text-primary">
                  Price:{" "}
                </span>
                $500,000
              </p>
              <p className="mb-2 text-gray-600 font-medium">
                <span className="text-lg font-semibold text-primary">
                  Rooms:{" "}
                </span>
                4
              </p>
              <p className="mb-2 text-gray-600 font-medium">
                <span className="text-lg font-semibold text-primary">
                  Baths:{" "}
                </span>
                2
              </p>
              <Link className="btn btn-primary" href="/">
                Check it Out
              </Link>
            </div>
          </div>
        </div>
        <div className="hero rounded-xl bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={400}
              height={800}
              className="w-full h-auto max-w-sm rounded-lg shadow-2xl"
              alt="property"
              priority={false}
            />
            <div>
              <h1 className="text-3xl font-bold">House</h1>
              <p className="py-2 max-w-xl">
                Stunning waterfront property with panoramic views, located in a
                prime residential area. This luxurious estate features modern
                architecture, spacious interiors, and high-end finishes.
              </p>
              <p className="mb-2 text-gray-600 font-medium">
                <span className="text-lg font-semibold text-primary">
                  Price:{" "}
                </span>
                $500,000
              </p>
              <p className="mb-2 text-gray-600 font-medium">
                <span className="text-lg font-semibold text-primary">
                  Rooms:{" "}
                </span>
                4
              </p>
              <p className="mb-2 text-gray-600 font-medium">
                <span className="text-lg font-semibold text-primary">
                  Baths:{" "}
                </span>
                2
              </p>
              <Link className="btn btn-primary" href="/">
                Check it Out
              </Link>
            </div>
          </div>
        </div>
        <div className="hero rounded-xl bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={400}
              height={800}
              className="w-full h-auto max-w-sm rounded-lg shadow-2xl"
              alt="property"
              priority={false}
            />
            <div>
              <h1 className="text-3xl font-bold">House</h1>
              <p className="py-2 max-w-xl">
                Stunning waterfront property with panoramic views, located in a
                prime residential area. This luxurious estate features modern
                architecture, spacious interiors, and high-end finishes.
              </p>
              <p className="mb-2 text-gray-600 font-medium">
                <span className="text-lg font-semibold text-primary">
                  Price:{" "}
                </span>
                $500,000
              </p>
              <p className="mb-2 text-gray-600 font-medium">
                <span className="text-lg font-semibold text-primary">
                  Rooms:{" "}
                </span>
                4
              </p>
              <p className="mb-2 text-gray-600 font-medium">
                <span className="text-lg font-semibold text-primary">
                  Baths:{" "}
                </span>
                2
              </p>
              <Link className="btn btn-primary" href="/">
                Check it Out
              </Link>
            </div>
          </div>
        </div>
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
              <h1 className="text-3xl font-bold">House</h1>
              <p className="py-2 max-w-xl">
                Stunning waterfront property with panoramic views, located in a
                prime residential area. This luxurious estate features modern
                architecture, spacious interiors, and high-end finishes.
              </p>
              <p className="mb-2 text-gray-600 font-medium">
                <span className="text-lg font-semibold text-primary">
                  Price:{" "}
                </span>
                $500,000
              </p>
              <p className="mb-2 text-gray-600 font-medium">
                <span className="text-lg font-semibold text-primary">
                  Rooms:{" "}
                </span>
                4
              </p>
              <p className="mb-2 text-gray-600 font-medium">
                <span className="text-lg font-semibold text-primary">
                  Baths:{" "}
                </span>
                2
              </p>
              <Link className="btn btn-primary" href="/">
                Check it Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
