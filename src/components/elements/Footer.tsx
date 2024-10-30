import Text from "./Text";

export default function Footer() {
  return (
    <footer className="bg-green-100 h-28 flex items-center justify-center mt-8 rounded-lg">
      <Text content={`All Rights Reserved. @${new Date().getFullYear()}`} />
    </footer>
  );
}
