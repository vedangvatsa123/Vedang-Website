import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Globe, BookOpen } from "lucide-react";
import Link from "next/link";

const resumeData = {
    name: "Vedang Vatsa FRSA",
    title: "100k Web3 Community | KPMG, EY, IIT-K alumnus | 22 publications",
    location: "India",
    contact: {
        email: "vedangvats@gmail.com",
        linkedin: "www.linkedin.com/in/vedangvatsa",
        website: "vedangvats.com",
        googleScholar: "scholar.google.co.in/citations"
    },
    summary: [
        "Computer Engineer, MBA, Young Achiever 2020-21 and Young Researcher 2020 Awardee (22 publications)",
        "Earned recognition from a Nobel Laureate, head of MIT Media Lab, Screenwriter of Oscars, and the Former Director of Prime Minister's Office in India",
        "Among Top 50 Global Thought Leaders & Influencers on Metaverse 2022 & 2023 - by Thinkers360",
        "Fellow of the Royal Society for the Encouragement of Arts, Manufactures and Commerce",
        "Former Head, Entrepreneurship Cell (for ~6500 students) of Indian Institute of Technology Kanpur",
        "Represented Indian delegation in the India-Venezuela Youth Dialogue, India-Norway Youth Dialogue, India-China Dialogue, New India Youth Dialogue and World Business Dialogue in Germany",
        "Issued Japan’s special visa for Intellectual Figures"
    ],
    experience: [
        {
            company: "#Web3",
            role: "Founder",
            period: "October 2022 - Present (3 years)",
            details: [
                "Built a global community of 100,000 web3 professionals and the largest telegram channel for Web3 jobs with 55 million yearly views.",
                "Weekly Twitter space sessions (with guests like the Band Member of Pink Floyd, Partners of EY, Father of Digital Twin, CSO of Microsoft, etc.) were attended by 20-40k live listeners.",
                "Published crash courses on Web3, NFT, Metaverse, Tokenomics, DAO, Blockchain, DeFi, etc.: 50,000+ accessed in the first month. Got 11,000 newsletter subscribers in just 11 editions.",
                "Featured among the top 3 web3 products of the week by Smoothie (ProductHunt for web3) + supported by Microsoft for Startups.",
                "Partnered with Harvard Blockchain Club, ETH Oxford, Token 2049, ETH Vietnam, Taipei Blockchain Week, Oxford Blockchain Conference, ETH Brussels, etc."
            ]
        },
        {
            company: "The RSA (The royal society for arts, manufactures and commerce)",
            role: "Fellow",
            period: "October 2020 - Present (5 years)",
            location: "London, England, United Kingdom",
            details: [
                "FRSA is an award granted to individuals that the Royal Society of Arts (RSA) judges to have made outstanding achievements to social progress and development.",
                "Past and current Fellows include leading activists, artists, writers, journalists and former politicians who have made significant contributions to their fields.",
                "Previous Fellows have included Stephen Hawking, Charles Dickens, Karl Marx and Benjamin Franklin."
            ]
        },
        {
            company: "Prosple",
            role: "Country Head",
            period: "October 2021 - October 2022 (1 year 1 month)",
            location: "Sydney, New South Wales, Australia",
            details: ["Facilitated early-stage career growth"]
        },
        {
            company: "KPMG",
            role: "Consultant",
            period: "September 2019 - October 2021 (2 years 2 months)",
            details: [
                "Multiple Kudos + Top scorer: KPMG's Digital Premier League on Emerging Technologies (Data Science, AI, Cloud, IoT, Blockchain, AR/ VR): Special appreciation certificate by the Partner"
            ]
        },
        {
            company: "EY",
            role: "Base Erosion and Profit Shifting",
            period: "2018 - 2018 (less than a year)",
            details: []
        },
        {
            company: "Studio Tesseract",
            role: "Project Manager",
            period: "May 2013 - August 2017 (4 years 4 months)",
            location: "India",
            details: [
                "Delivered 27 website and mobile app products covering the complete life cycle of product development",
                "Managed a cross-functional 30 member team",
                "Handled the business development and UI design/ development for clients from 5 continents",
                "Recommendations by Jack Alison (Screenwriter for 2017 Oscars) and CPA+ Israel"
            ]
        }
    ],
    education: [
        {
            institution: "Indian Institute of Technology, Kanpur",
            degree: ""
        }
    ],
    skills: ["Community Management", "Online Marketing", "Project Management"],
    certifications: [
        "Scrum Fundamentals Certified (SFC)",
        "Tableau Desktop Specialist",
        "Enterprise Design Thinking Practitioner",
        "The Fundamentals of Digital Marketing : Endorsed by IAB Europe",
        "Presentation skills"
    ],
    honors: [
        "Presented a prototype model on ‘Raspberry Pi based low cost laptop’",
        "Runner's Up - Pitch Your Product",
        "Felicitation by Former Director of Prime Minister's Office, India",
        "Winner & Top Scorer of KPMG’s IGH – Digital Premier League 2020",
        "Chartered Engineer [India]"
    ],
    publications: [
        "Coronavirus Outbreak: Trillion-Dollar Crisis and Evolution of New Global Order",
        "Emergence of TechFin in the emerging economies",
        "Catalysing the National Infrastructure Pipeline: Project India",
        "Security in Ubiquitous Computing- Location Based Applications",
        "Current Trends and Approaches of Network Intrusion Detection System"
    ]
};

const Section: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
    <div className={className}>
        <h2 className="text-2xl font-headline font-semibold mb-4 border-b pb-2">{title}</h2>
        <div className="space-y-4">
            {children}
        </div>
    </div>
);

const ExperienceItem: React.FC<{ item: typeof resumeData.experience[0] }> = ({ item }) => (
    <div>
        <h3 className="text-lg font-semibold">{item.role}</h3>
        <p className="text-md text-muted-foreground">{item.company}</p>
        <p className="text-sm text-muted-foreground">{item.period} {item.location && `· ${item.location}`}</p>
        <ul className="mt-2 list-disc list-inside text-foreground/90 space-y-1">
            {item.details.map((detail, i) => <li key={i}>{detail}</li>)}
        </ul>
    </div>
);


export default function ProfilePage() {
    return (
        <div className="container max-w-4xl mx-auto py-12 px-4">
            <Card className="overflow-hidden">
                <CardHeader className="bg-muted/50 p-6">
                    <div className="text-center">
                        <h1 className="text-4xl font-headline font-bold">{resumeData.name}</h1>
                        <p className="text-lg text-muted-foreground mt-1">{resumeData.title}</p>
                        <p className="text-sm text-muted-foreground">{resumeData.location}</p>
                    </div>
                    <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mt-4">
                        <Link href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 hover:text-foreground">
                            <Mail className="h-4 w-4" /><span>{resumeData.contact.email}</span>
                        </Link>
                         <Link href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground">
                            <Linkedin className="h-4 w-4" /><span>LinkedIn</span>
                        </Link>
                         <Link href={`https://${resumeData.contact.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground">
                            <Globe className="h-4 w-4" /><span>Website</span>
                        </Link>
                        <Link href={`https://${resumeData.contact.googleScholar}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground">
                            <BookOpen className="h-4 w-4" /><span>Google Scholar</span>
                        </Link>
                    </div>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                    <Section title="Summary">
                        <ul className="list-disc list-inside space-y-2 text-foreground/90">
                            {resumeData.summary.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </Section>

                    <Section title="Experience">
                        {resumeData.experience.map((item, i) => <ExperienceItem key={i} item={item} />)}
                    </Section>

                    <Section title="Education">
                        <div>
                            <h3 className="text-lg font-semibold">{resumeData.education[0].institution}</h3>
                        </div>
                    </Section>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                         <Section title="Top Skills">
                            <div className="flex flex-wrap gap-2">
                                {resumeData.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                            </div>
                        </Section>

                        <Section title="Certifications">
                            <ul className="list-disc list-inside space-y-1 text-foreground/90">
                                {resumeData.certifications.map(cert => <li key={cert}>{cert}</li>)}
                            </ul>
                        </Section>
                    </div>

                     <Section title="Honors & Awards">
                        <ul className="list-disc list-inside space-y-1 text-foreground/90">
                            {resumeData.honors.map(honor => <li key={honor}>{honor}</li>)}
                        </ul>
                    </Section>

                    <Section title="Publications">
                        <ul className="list-disc list-inside space-y-1 text-foreground/90">
                             {resumeData.publications.map(pub => <li key={pub}>{pub}</li>)}
                        </ul>
                    </Section>
                </CardContent>
            </Card>
        </div>
    );
}
