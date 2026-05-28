import ProductDetailsModalComponent from "@/components/modal/ProductDetailsModalComponent";

async function fetchDetail(uuid: string) {
  const res = await fetch(`https://ishop.cheat.casa/api/v1/products/${uuid}`, {
    cache: "no-store",
  });
  return await res.json();
}

export default async function Page({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const { uuid } = await params;
  const data = await fetchDetail(uuid);

  return (
    <ProductDetailsModalComponent
      uuid={data.uuid}
      name={data.name}
      thumbnail={data.thumbnail}
      priceOut={data.priceOut}
    />
  );
}