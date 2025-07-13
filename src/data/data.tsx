import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Sareer Ahmed - Lebenslauf',
  description: 'Persönliche Website und Lebenslauf von Sareer Ahmed, spezialisiert auf Cybersecurity und Penetrationstests.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: 'Sareer Ahmed',
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Visionär, Problemlöser und Cybersecurity-Enthusiast – ich glaube daran, dass Technologie die Welt verbessern kann. <br />
        Jeden Tag motiviert mich die Herausforderung, digitale Systeme sicherer und innovativer zu gestalten.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Lebenslauf',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Kontakt',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Informatikstudent mit OSCP-Zertifizierung, spezialisiert auf Cybersecurity. Praktische Erfahrung in Penetrationstests und Sicherheitsanalysen, mit einer Leidenschaft für das Finden von Schwachstellen und der Entwicklung sicherer Systeme.`,
  aboutItems: [
    {label: 'Wohnort', text: 'Leinfelden-Echterdingen,\nDeutschland', Icon: MapIcon},
    {label: 'Interessen', text: 'Cybersecurity, Penetrationstests, Toolentwicklung', Icon: SparklesIcon},
    {label: 'Beschäftigung', text: 'Mercedes-Benz Tech Innovation\nStuttgart', Icon: BuildingOffice2Icon},
    {label: 'Studium', text: 'Universität Stuttgart', Icon: AcademicCapIcon},
    {label: 'E-Mail', text: 'sareer.ahmed@outlook.de', Icon: EnvelopeIcon},
    {label: 'Alter', text: '24', Icon: CalendarIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Fähigkeiten',
    skills: [
      { name: 'Web Application Security', level: 9 },
      { name: 'Netzwerksicherheit', level: 8 },
      { name: 'Linux', level: 8 },
      { name: 'Red Teaming', level: 7 },
      { name: 'Report Writing', level: 8 },
      { name: 'Docker', level: 6 },
      { name: 'Scripting & Automation', level: 8 },
      { name: 'Security Tools', level: 8 },
      { name: 'SOC', level: 7 },
      { name: 'Risikomanagement', level: 7 },
      { name: 'Kryptographie', level: 6 },
      { name: 'ISO 27001', level: 6 },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '09/2024 - 08/2027',
    location: 'Universität Stuttgart',
    title: 'Informatik Bachelor of Science (B.Sc.)',
    content: (
      <ul>
        <li>Module: IT-Sicherheit, Technische Info (TGI), Theoretische Informatik, Netzwerke, Mathematik, Softwareentwicklung</li>
      </ul>
    ),
  },
  {
    date: '03/2023 - 02/2024',
    location: 'KIT - Karlsruher Institut für Technologie',
    title: 'Studienkolleg (T-Kurs)',
    content: (
      <ul>
        <li>Fächer: Informatik, Physik, Mathematik, Deutsch</li>
        <li>Abschlussnote: 2,2</li>
      </ul>
    ),
  },
  {
    date: '08/2019 - 09/2021',
    location: 'Army Public School and College',
    title: 'Higher Secondary School Certificate',
    content: (
      <ul>
        <li>Fächer: Informatik, Physik, Englisch, Mathematik, Chemie, Geschichte</li>
        <li>Abschlussnote: 1,6</li>
      </ul>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: '08/2023 - 03/2025',
    location: 'Mercedes-Benz Tech Innovation, Stuttgart',
    title: 'Offensive Security & Tool Development',
    content: (
      <ul>
        <li>Unterstützung des Sicherheitsteams bei internen Penetrationstests zur Identifikation von Sicherheitslücken</li>
        <li>Analyse von Schwachstellen und Entwicklung von Handlungsempfehlungen zur Verbesserung der IT-Sicherheit</li>
        <li>Entwicklung und Automatisierung von Tools und Skripten (Python & Bash) zur Prozessoptimierung</li>
        <li>Kontinuierliche Erweiterung des Cybersecurity-Know-hows durch praktische Projektarbeit</li>
      </ul>
    ),
  },
  {
    date: '10/2024 - 03/2025',
    location: 'Atruvia AG, Karlsruhe',
    title: 'Penetration Tester (Internship)',
    content: (
      <ul>
        <li>Unterstützung des Teams bei Penetrationstests als Werkstudent</li>
        <li>Identifizierung von Sicherheitslücken und Durchführung von Sicherheitsanalysen</li>
        <li>Erweiterung des Wissens im Bereich Cybersecurity</li>
        <li>Praktische Einblicke in komplexe Cybersecurity-Probleme</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Kontakt aufnehmen',
  description: 'Sie können mich gerne per E-Mail, LinkedIn oder Telefon kontaktieren.',
  items: [
    {
      type: ContactType.Email,
      text: 'sareer.ahmed@outlook.de',
      href: 'mailto:sareer.ahmed@outlook.de',
    },
    {
      type: ContactType.Location,
      text: 'Leinfelden-Echterdingen, Deutschland',
      href: 'https://www.google.com/maps/place/Leinfelden-Echterdingen',
    },
    {
      type: ContactType.Github,
      text: 'sarersim',
      href: 'https://github.com/sarerism',
    },
    {
      type: ContactType.LinkedIn,
      text: 'linkedin.com/in/sarersim',
      href: 'https://www.linkedin.com/in/sarerism/',
    },
    {
      type: ContactType.Phone,
      text: '+49 173 4846735',
      href: 'tel:+491734846735',
    },
    {
      type: ContactType.Github,
      text: 'hackerone.com/cahn',
      href: 'https://hackerone.com/cahn',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/sarersim'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://linkedin.com/in/sarersim'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/sarerism1'},
];
