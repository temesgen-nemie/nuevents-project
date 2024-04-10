import Image from "next/image";
import { cookies } from "next/headers";

async function getCookieData() {
  const cookieData = cookies().getAll();
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(cookieData);
    }, 1000)
  );
}

export default function Home() {
  return (
    <div className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <h1 className="font-bold text-center mt-10">Home Page</h1>
      <br />
      <hr />
      <h1 className="font-bold text-center mt-10">Sample Events</h1>
      <br />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
        <li className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <Image
              src="/nu-events-logo.png"
              alt="Card 1"
              width={400}
              height={300}
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">Card 1</h3>
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-lg font-semibold text-gray-900">Card 1 Name</h4>
            <p className="mt-2 text-gray-600">Card 1 Description</p>
          </div>
        </li>

        <li className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <Image
              src="/nu-events-logo.png"
              alt="Card 2"
              width={400}
              height={300}
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">Card 2</h3>
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-lg font-semibold text-gray-900">Card 2 Name</h4>
            <p className="mt-2 text-gray-600">Card 2 Description</p>
          </div>
        </li>

        <li className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <Image
              src="/nu-events-logo.png"
              alt="Card 3"
              width={400}
              height={300}
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">Card 3</h3>
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-lg font-semibold text-gray-900">Card 3 Name</h4>
            <p className="mt-2 text-gray-600">Card 3 Description</p>
          </div>
        </li>

        <li className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <Image
              src="/nu-events-logo.png"
              alt="Card 4"
              width={400}
              height={300}
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">Card 4</h3>
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-lg font-semibold text-gray-900">Card 4 Name</h4>
            <p className="mt-2 text-gray-600">Card 4 Description</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
