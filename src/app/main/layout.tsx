import Footer from '@/component/common/Footer';
import Header from '@/component/common/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow mt-6">{children}</main>
      <Footer />
    </div>
  );
}
