import { AsideDashboardComponent } from "@/components/dashboard/AsideDashboardComponent";

export default function DashboardLayout({
  children,
  products,
  blogs,
  setting,
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  blogs: React.ReactNode;
  setting: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-4 gap-5">
      <AsideDashboardComponent />
      {/* render com as slot */}
      <section className="grid col-span-3">
        <div className="bg-pink-300 p-8">{children}</div>
        <div className="bg-blue-300 p-8">{products}</div>
        <div className="bg-green-300 p-8">{blogs}</div>
        <div className="bg-purple-300 p-8">{setting}</div>
      </section>
    </section>
  );
}
