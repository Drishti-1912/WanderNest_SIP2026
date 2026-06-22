import {
  Button,
  Input,
  Modal,
  Toast,
  Loader
} from "@/components/ui";

export default function ComponentDemo() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Component Demo</h1>

      <Button text="Book Trip" />
      <br /><br />

      <Input placeholder="Destination" />
      <br /><br />

      <Loader />
      <br /><br />

      <Toast message="Trip Created Successfully" />
      <br /><br />

      <Modal open={true}>
        Demo Modal
      </Modal>
    </div>
  );
}