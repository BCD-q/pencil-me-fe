import { PropsWithChildren } from 'react';

export default function WorkBar({
  children,
}: PropsWithChildren): React.ReactElement {
  return (
    <div className="w-[100vw] pt-3 pb-1 px-2 text-md text-gray-500 bg-gray-300 truncate">
      {children}
    </div>
  );
}
