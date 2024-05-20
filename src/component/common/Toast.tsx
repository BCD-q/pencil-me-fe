export default function Toast({ children }: { children: String }) {
  return (
    <div className="z-50 toast toast-bottom toast-center">
      <div className="alert alert-info bg-accent text-white">
        <span>{children}</span>
      </div>
    </div>
  );
}
