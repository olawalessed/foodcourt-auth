import Footer from "./Footer";
import HeaderBar from "./HeaderBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col h-[89vh] md:h-screen justify-between">
        <HeaderBar />
        <div className="w-full md:mx-auto md:h-[80vh] flex items-center justify-center">
          <div className="p-10 md:p-16 md:w-[700px] rounded-xl bg-white drop-shadow">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
