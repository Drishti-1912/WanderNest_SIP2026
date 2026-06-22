/**
 * Props:
 * open: boolean
 * children: ReactNode
 */
export default function Modal({ open, children }) {
  if (!open) return null;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        width: "300px",
      }}
    >
      {children}
    </div>
  );
}