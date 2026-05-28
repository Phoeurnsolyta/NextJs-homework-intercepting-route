import { AsideDashboardComponent } from "@/components/dashboard/AsideDashboardComponent";

export default function DashboardLayout({
  children,
  products,
  blogs,
  setting,
  modal, // ← ADD THIS
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  blogs: React.ReactNode;
  setting: React.ReactNode;
  modal: React.ReactNode; // ← ADD THIS
}) {
  return (
    <section className="grid grid-cols-4 gap-5">
      <AsideDashboardComponent />
      <section className="grid col-span-3">
        <div className="bg-pink-300 p-8">{children}</div>
        <div className="bg-blue-300 p-8">{products}</div>
        <div className="bg-green-300 p-8">{blogs}</div>
        <div className="bg-purple-300 p-8">{setting}</div>
      </section>
      {modal} {/* ← ADD THIS outside the inner section so it overlays everything */}
    </section>
  );
}