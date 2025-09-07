import Image from 'next/image';
import { Github, Linkedin, Twitter, Mail, Send } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Profile() {
  return (
    <section className="flex flex-col md:flex-row items-start gap-12 text-left">
      <div className="md:w-1/3 w-1/2 mx-auto md:mx-0 flex-shrink-0">
        <Image
          src="https://i.imgur.com/KwoA438.jpeg"
          alt="Vedang Vatsa"
          width={400}
          height={400}
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex-grow">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-4xl font-headline font-bold">Vedang Vatsa</h1>
          <p className="text-xl text-muted-foreground">
            Exploring the intersection of technology, community, and the future of the web.
          </p>
        </div>
        <p className="max-w-3xl text-lg text-foreground/90 mt-4">
          Founder of Hashtag Web3, a community of over 100,000 AI & Web3 professionals. Featured in Thinkers360’s Top 50 Metaverse Thought Leaders and a Fellow of the Royal Society of Arts.
        </p>
        <div className="flex flex-wrap gap-4 items-center mt-8">
          <Button asChild>
            <Link href="/profile">
              View Full Profile
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <div className="flex flex-wrap gap-4">
            <Link href="https://twitter.com/VedangVatsa" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/vedangvatsa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="https://t.me/Web3JobsDaily" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-muted-foreground hover:text-foreground">
              <Send className="h-6 w-6" />
            </Link>
            <Link href="mailto:vedangvats@gmail.com" aria-label="Mail" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-6 w-6" />
            </Link>
            <Link href="https://github.com/vedangvats" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground">
              <Github className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
