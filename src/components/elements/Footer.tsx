export default function Footer() {
  let year = new Date();

  return (
    <footer className="bg-green-100 h-28 flex items-center justify-center mt-8 rounded-lg">
      <p>All Rights Reserved. @{year.getFullYear()}</p>
    </footer>
  );
}
