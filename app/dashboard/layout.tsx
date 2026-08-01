import Sidebar from "../sidebar/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#080b0a]">
      <Sidebar />
      <div className="min-w-0 flex-1">
        {children}
      </div>
    </div>
  );
}