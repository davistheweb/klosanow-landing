import { ReactNode } from "react";
import * as yup from "yup";

export const Links = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
];
export const MobileLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Join waitlist", href: "#" },
  // { title: "LogIn", href: "https://klosanow-frontend.vercel.app" },
];

export const navFooter = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Contact Us", href: "/contact" },
  { title: "Privacy Policy", href: "#" },
  { title: "Terms and Conditions", href: "#" },
];

export const authFooter: { title: string; href: string }[] | null = [
  { title: "Login", href: "#" },
  {
    title: "Create Account",
    href: "#",
  },
  { title: "Reset Password", href: "#" },
];

export interface NavLinkProps {
  children: ReactNode;
  href: string;
  onClose?: () => void;
}

export interface SocialBtnProps {
  children: ReactNode;
  label: string;
  href: string;
}

export const features = [
  {
    src: "/images/features/mic.png",
    desc: "Tutors create a video lesson, by verbally explaining the visuals lesson slides while screen recording.",
  },
  {
    src: "/images/features/videoIcon.png",
    desc: "Learners access the video lessons by watching online  or downloading for offline access.",
  },
  {
    src: "/images/features/msgIcon.png",
    desc: "Tutors and learners stay connected 24/7 through the study chat feature",
  },
];

export const contactSchema = yup.object().shape({
  phone: yup.string().required("Phone Number is required"),
  email: yup.string().email().required("Email is required"),
  message: yup.string().required("Message is required").max(2500),
});

export const aboutSlide = [
  {
    id: 1,
    // img_url: "/images/about/vision.png",
    title: "Our Vision",
    desc: " We aspire to create an online education platform that is designed to meet the diverse and dynamic educational requirements of induvials residing in Sub-Saharan Africa",
  },
  {
    id: 2,
    // img_url: "/images/about/vision.png",
    title: "Our Mission",
    desc: " We aspire to create an easy to use, flexible and engaging platform where the educational goals of our customers are achieved",
  },
];

interface FAQItem {
  title: string;
  text: string;
}

export const faqItems: FAQItem[] = [
  {
    title: "What is Klosanow ?",
    text: "Klosanow is an Edtech Platform that allows tutors create and send pre-recorded video lessons to learners as video messages. Learners can stream the video lessons  online.",
  },
  {
    title: "Who is it for?",
    text: "Klosanow is for tutors and learners across all levels of education. Primary - Secondary - Tertiary - Corporate Education.",
  },
  {
    title: "What kind of App is Klosanow? ",
    text: "Klosanow is a web application and can be accessed through the web browser.",
  },
  {
    title: 'Does the "create lesson" feature work on the mobile browser? ',
    text: 'The "Create lesson " feature can only be accessed through a desktop/computer browser. (Use a real computer not desktop mode on mobile browser)',
  },
  {
    title: "What browser does the other App's feature work with?",
    text: 'All the other App\'s features  work both on the desktop and mobile browsers. Only the  "create lesson" feature work with desktop browser.',
  },
  {
    title: "Is using the platform free?",
    text: "For a start, we've launched with the free version. The free edition allows you save drafts, create lesson, view lessons, create a study group, send lessons & messages to numerous individual chats and 50mb of storage space.",
  },
];
