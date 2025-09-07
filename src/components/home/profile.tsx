import { Github, Linkedin, Twitter, Mail, Send } from 'lucide-react';
import Link from 'next/link';

export default function Profile() {
  return (
    <section className="flex flex-col items-start gap-8 text-left">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-4xl font-headline font-bold">Vedang Vatsa</h1>
        <p className="text-xl text-muted-foreground">
          Founder, Hashtag Web3 | Web3 & AI
        </p>
      </div>
      <p className="max-w-3xl text-lg text-foreground/90">
        Fellow of the Royal Society of Arts and an IIT Kanpur alumnus, featured
        in Thinkers360’s Top 50 Metaverse Thought Leaders. Exploring the
        intersection of technology, community, and the future of the web.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link href="https://twitter.com/VedangVatsa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <Twitter className="h-5 w-5" />
          <span>Twitter</span>
        </Link>
        <Link href="https://www.linkedin.com/in/vedangvatsa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <Linkedin className="h-5 w-5" />
           <span>LinkedIn</span>
        </Link>
         <Link href="https://t.me/Web3JobsDaily" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <Send className="h-5 w-5" />
           <span>Telegram</span>
        </Link>
        <Link href="mailto:vedangvats@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <Mail className="h-5 w-5" />
          <span>Mail</span>
        </Link>
        <Link href="https://github.com/vedangvats" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <Github className="h-5 w-5" />
           <span>GitHub</span>
        </Link>
      </div>

       <div className="w-full pt-8">
            <h3 className="text-sm uppercase text-muted-foreground mb-4">As Seen On</h3>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-foreground/70">
                <span>Forbes</span>
                <span>The Economic Times</span>
                <span>Entrepreneur</span>
                <span>ISB Hyderabad</span>
                <span>IIT Delhi</span>
                <span>TUM Munich</span>
            </div>
        </div>
    </section>
  );
}
