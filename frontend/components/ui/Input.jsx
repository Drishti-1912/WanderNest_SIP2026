/**
 * Props:
 * placeholder: string
 * value: string
 * onChange: function
 */
export default function Input(props) {
  return (
    <input
      {...props}
      style={{
        padding: "10px",
        width: "300px",
        borderRadius: "8px",
        border: "1px solid #ccc",
      }}
    />
  );
}