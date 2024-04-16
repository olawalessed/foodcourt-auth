export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full mx-auto h-screen flex items-center justify-center">
      <div className="p-16 md:w-[700px] rounded-xl bg-white drop-shadow">{children}</div>
    </div>
  );
}
