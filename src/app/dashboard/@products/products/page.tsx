import { ProductCardComponent } from "@/components/product/ProductCardComponent";
import Link from "next/link";
import { Suspense, use } from "react";
import { ProductType } from "@/libs/type/ProductType";
// async function to getProducts
async function getProducts() {
  try {
    // calling fetching data from api/products/route.ts
    const res = await fetch('http://localhost:3000/api/product', {
      cache: 'no-store'
    });
    const products = await res?.json();
    console.log(`=> Product data: ${products?.content}`);

    return products;

  } catch (err) {
    throw new Error('fail to fetch data from api')
  }
}

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
        <Link href={"/dashboard/create"}></Link>create
        <Link href={"/dashboard/edit"}></Link>edit
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
    <div className="flex flex-5">
      {/* display data heere from api */}
      <div className="flex gap-5">
        {products?.map(({ uuid, thumbnail, priceOut, name }: ProductType) => (
          <ProductCardComponent
            uuid={uuid}
            key={uuid}
            thumbnail={thumbnail}
            priceOut={priceOut}
            name={name}
          />
        ))}
      </div>
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
