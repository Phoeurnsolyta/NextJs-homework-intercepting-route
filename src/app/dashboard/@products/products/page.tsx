import { ProductCardComponent } from "@/components/product/ProductCardComponent";
import Link from "next/link";
import { Suspense, use } from "react";
import { ProductType } from "@/libs/type/ProductType";
import CreateProductPageModal from "../(.)create/page";

// async function to getProducts
async function getProducts() {
  try {
    // calling fetching data from api/products/route.ts
    const res = await fetch("http://localhost:3000/api/product", {
      cache: "no-store",
    });
    const products = await res?.json();
    console.log(`=> Product data: ${products}`);

    return products;
  } catch (err) {
    throw new Error("fail to fetch data from api");
  }
}
console.log(`===> get product : ${getProducts()}`);

// async function getProducts() {
//   const res = await fetch("https://ishop.cheat.casa/api/v1/products", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
//   }

//   const data = await res.json();

//   // ✅ Proper logging — use comma not template literal
//   console.log("=> Product data:", data);

//   return data;
// }

// loading suspense component
function LoadingSuspenseComponent() {
  return (
    <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="h-8 w-8 bg-black rounded-full animate-bounce" />
    </div>
  );
}

export default function ProductPageRoute() {
  return (
    <div>
      {/* navbar for create and edit */}
      <div className="flex gap-5">
        <button className="group relative overflow-hidden bg-blue-500 rounded-xl px-6 py-3 font-semibold text-white m-5">
          <Link
            href="/dashboard/create"
            className="relative z-10 flex items-center gap-2"
          >
            Create
          </Link>
        </button>
        <button className="group relative overflow-hidden bg-blue-500 rounded-xl px-6 py-3 font-semibold text-white m-5">
          <Link
            href="/dashboard/edit"
            className="relative z-10 flex items-center 2"
          >
            Edit
          </Link>
        </button>
      </div>
      {/* adding suspend */}
      <Suspense fallback={<LoadingSuspenseComponent />}>
        <ProductRenderingProcess />
      </Suspense>
    </div>
  );
}

function ProductRenderingProcess() {
  // using hook to fetch data from server
  const { data: products } = use(getProducts());
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products?.content.map(
        ({ uuid, thumbnail, priceOut, name }: ProductType) => (
          <ProductCardComponent
            uuid={uuid}
            key={uuid}
            thumbnail={thumbnail}
            priceOut={priceOut}
            name={name}
          />
        ),
      )}
    </div>
  );
}

// async function ProductRenderingProcess() {
//   const products = await getProducts();

//   return (
//     <div className="flex flex-5">
//       <div className="flex gap-5">
//         {products?.map(({ uuid, thumbnail, priceOut, name }: ProductType) => (
//           <ProductCardComponent
//             uuid={uuid}
//             key={uuid}
//             thumbnail={thumbnail}
//             priceOut={priceOut}
//             name={name}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
