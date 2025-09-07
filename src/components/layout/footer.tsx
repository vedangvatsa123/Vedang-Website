export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Vedang Vatsa. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
