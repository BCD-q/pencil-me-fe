import { PropsWithChildren } from 'react';

export default function WorkBar({
  children,
}: PropsWithChildren): React.ReactElement {
  return (
    <div className="pt-3 pb-1 px-2 text-md text-gray-400 bg-gray-200 border-[1px] border-gray-300 ">
      {children}
    </div>
  );
}
