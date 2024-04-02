import GroupFooter from '@/app/group/components/GroupFooter';
import Header from '@/component/common/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-grow mt-6">{children}</main>
      <GroupFooter />
    </div>
  );
}
