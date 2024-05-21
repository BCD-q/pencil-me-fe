export default function ErrorToast({ children }: { children: String }) {
  return (
    <div className="z-50 toast toast-bottom mb-8 toast-center border-none">
      <div className="alert alert-info bg-red-500 text-black">
        <span>{children}</span>
      </div>
    </div>
  );
}
