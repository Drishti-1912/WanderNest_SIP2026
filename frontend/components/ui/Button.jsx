/**
 * Props:
 * text: string
 * onClick: function
 */
export default function Button({ text }) {
  return (
    <button
      style={{
        background: "#d6a29a",
        color: "white",
        padding: "12px 24px",
        borderRadius: "8px",
        border: "none",
      }}
    >
      {text}
    </button>
  );
}