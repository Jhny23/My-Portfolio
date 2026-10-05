export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://kimeu-johnn,vercel,app/',
    title: 'John Kimeu',
    subtitle: 'Creative Artist &  Developer',
    description: 'Portfolio of John Kimeu -  Photographer, AI Developer, Cinephile, and Web App Developer',
    image: {
        src: '/3d-art/jjj.png',
        alt: 'John Kimeu - Portfolio'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Experience',
            href: '/experience'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Skills',
            href: '/skills'
        },
        {
            text: 'Xplore Art',
            href: '/3d-work'
        },
        {
            text: 'QXT',
            href: '/resume/qxt.pdf'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Socials',
            href: '/socials'
        }
    ],
    socialLinks: [
        {
            text: 'Behance',
            href: ''
        },
        {
            text: 'GitHub',
            href: 'https://github.com'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/john-kimeu-338052275/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BFohx4AaIR8KB7lW5WO2fBg%3D%3D'
        },
        {
            text: 'X',
            href: 'https://x.com/johncult23'
        }
    ],
    hero: {
        title: 'Superpositions of me, collapsing as you scroll.',
        text: "A creative technologist working at the intersection of software design, visual design, and filmography.\n\n" +
            "Skilled in AI development, prompt engineering, and web applications, with a focus on turning ideas into practical and innovative solutions.\n\n" +
            "A background in interior design and computer applications provides both a creative eye and technical problem-solving ability — blending how things look with how they work. exploring the possibilities of artificial intelligence in creative applications.",
        image: {
            src: '/jjj.png',
            alt: 'John Kimeu'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    projectsPerPage: 8
};

export default siteConfig;
