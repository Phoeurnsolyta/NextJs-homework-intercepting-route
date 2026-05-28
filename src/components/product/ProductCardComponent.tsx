import { Card } from "flowbite-react";
import { ProductType } from "@/libs/type/ProductType";
import Link from "next/link";

export function ProductCardComponent({
  uuid,
  thumbnail,
  name,
  priceOut,
}: ProductType) {
  return (
    <Link href={`/dashboard/products/${uuid}`}>
    <Card
      className="group max-w-sm overflow-hidden rounded-3xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
      imgAlt={name}
      imgSrc={thumbnail}
    >
      {/* Product Name */}
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </a>

      {/* Rating */}
      <div className="mb-4 flex items-center">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className="h-5 w-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <span className="ml-3 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-200">
          5.0
        </span>
      </div>

      {/* Price + Button */}
      <div className="flex items-center justify-between">
        <span className="text-3xl font-extrabold text-gray-900 dark:text-white">
          ${priceOut}
        </span>

        <button className="rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
          Add to Cart
        </button>
      </div>
    </Card>
    </Link>
  );
}
