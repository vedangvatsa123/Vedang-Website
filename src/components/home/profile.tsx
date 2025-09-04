import Image from 'next/image';
import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export default function Profile() {
  return (
    <section className="flex flex-col sm:flex-row items-center gap-8">
      <Avatar className="h-32 w-32">
        <AvatarImage
          src="https://picsum.photos/128/128"
          alt="Vedang Vatsa"
          data-ai-hint="man portrait"
        />
        <AvatarFallback>VV</AvatarFallback>
      </Avatar>
      <div className="text-center sm:text-left">
        <h1 className="text-4xl font-headline font-bold">Vedang Vatsa</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Software Engineer & Digital Minimalist. Crafting clean, efficient, and
          user-centric web experiences.
        </p>
        <div className="mt-4 flex justify-center sm:justify-start gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
