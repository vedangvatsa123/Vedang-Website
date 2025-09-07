import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Profile() {
  return (
    <section className="flex flex-col items-start gap-4 text-left">
      <h1 className="text-4xl font-headline font-bold">Vedang Vatsa</h1>
      <p className="max-w-2xl text-lg text-muted-foreground">
        Exploring ideas in technology, design, and philosophy. Writing about the
        intersection of bits and humanity.
      </p>
      <div className="flex gap-4">
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          <Twitter className="h-6 w-6" />
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          <Linkedin className="h-6 w-6" />
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          <Github className="h-6 w-6" />
        </Link>
      </div>
    </section>
  );
}
