import Footer from '@/component/common/Footer';
import Header from '@/component/common/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-[100vh]">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
