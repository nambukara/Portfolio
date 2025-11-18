import HeroImage from "/assets/DP.jpeg";

const Image = {
  HeroImage,
};

import Logo from "/assets/logo/1.png";

Image.Logo = Logo;

export default Image;


{/*Projects*/}
import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.jpeg";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek2.jpeg";


export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Sekolah",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "AOS"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "ApolloCabs",
    desk: "ApolloCabs is a fully functional online taxi and cab booking platform built entirely with Java OOP principles.",
    tools: ["HTML", "CSS", "Javascript", "Java", ],
    dad: "300",
    sourcecode: "https://github.com/Hasanga910/ApolloCabs",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Ceylon Safari! 🐘🚙",
    desk: "A full-stack web platform developed to streamline wildlife safari tour management in Sri Lanka.",
    tools: ["HTML", "Javascript", "Java", "TailwindCSS", "sql server"],
    dad: "400",
    sourcecode: "https://github.com/nambukara/Ceylon_Safari",
  },
  {
    id: 4,
    gambar: Proyek3,
    nama: "Ceylon Safari! 🐘🚙",
    desk: "A full-stack web platform developed to streamline wildlife safari tour management in Sri Lanka.",
    tools: ["HTML", "Javascript", "Java", "TailwindCSS", "sql server"],
    dad: "400",
    sourcecode: "https://github.com/nambukara/Ceylon_Safari",
  },
];
{/*Certificates*/}
import cert1 from '/assets/Certifications/UC-4b536295-cc2b-4dcc-9f69-ba059bce751a.jpg';
import cert2 from '/assets/Certifications/Front-End_Web_Development_E-Certificate_page-0001.jpg';
import cert3 from '/assets/Certifications/Web_Design_for_Beginners_E-Certificate-1.png';
import cert4 from '/assets/Certifications/Python_for_Beginners_E-Certificate_page-0001.jpg';

export const certificates = [
  {
    id: 1,
    title: 'React - The Complete Guide',
    issuer: 'Udemy | Maximilian Schwarzmüller',
    date: 'March 2024',
    image: cert1,
    credentialUrl: 'https://ude.my/UC-abc123',
  },
  {
    id: 2,
    title: 'Node.js - The Complete Guide',
    issuer: 'Udemy',
    date: 'June 2024',
    image: cert2,
    credentialUrl: 'https://ude.my/UC-xyz789',
  },
  {
    id: 3,
    title: 'Node.js - The Complete Guide',
    issuer: 'Udemy',
    date: 'June 2024',
    image: cert3,
    credentialUrl: 'https://ude.my/UC-xyz789',
  },
  {
    id: 4,
    title: 'Node.js - The Complete Guide',
    issuer: 'Udemy',
    date: 'June 2024',
    image: cert3,
    credentialUrl: 'https://ude.my/UC-xyz789',
  },
]


