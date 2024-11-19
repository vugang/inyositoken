//footer.tsx

export function Footer() {
  return (
    <footer className="bg-[#f0f4ff] py-4 px-6 text-center animate-fade-in mt-0">
      <p className="text-[#6b7280] text-base">
        &copy; {new Date().getFullYear()} InYosi Token. All rights reserved.
      </p>
    </footer>
  );
}
