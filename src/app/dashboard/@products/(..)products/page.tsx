// app/dashboard/@products/(.)products/[uuid]/page.tsx

import ProductDetailsModalComponent from "@/components/modal/ProductDetailsModalComponent";

export default async function Page({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
//   const { uuid } = await params;

  return (
    <ProductDetailsModalComponent
    //   uuid={uuid}
    />
  );
}