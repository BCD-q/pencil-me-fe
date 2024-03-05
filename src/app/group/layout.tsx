import Header from '@/component/common/Header';
import GroupFooter from '@/component/group/GroupFooter';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div className="flex flex-col h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <GroupFooter />
        </div>
      </body>
    </html>
  );
}
