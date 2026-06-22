export default function Toast({ message }) {
  return (
    <div
      style={{
        background: "#dff0d8",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      {message}
    </div>
  );
}