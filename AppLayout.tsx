export default function AppLayout({ children }: any) {
  return (
    <div className="min-h-screen">
      <header className="bg-white border-b p-4 font-semibold">
        BoostHR
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
