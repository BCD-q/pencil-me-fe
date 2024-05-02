import { PropsWithChildren } from 'react';

export default function WorkBar({
  children,
}: PropsWithChildren): React.ReactElement {
  return (
    <div className="w-[100vw] pt-3 pb-1 px-2 text-md text-gray-400 bg-gray-200">
      {children}
    </div>
  );
}
