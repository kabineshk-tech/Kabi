export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#12283F] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8">
        <p className="text-center text-gray-400 text-sm">
          © {currentYear} Periyanayaki. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
