import { PropsWithChildren } from 'react';

export default function WorkBar({
  children,
}: PropsWithChildren): React.ReactElement {
  return (
    <div className="pt-2 pb-1 px-2 text-sm text-gray-400 bg-gray-200 border-[1px] border-gray-300 ">
      {children}
    </div>
  );
}
