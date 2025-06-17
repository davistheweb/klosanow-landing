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
  { title: "Terms of Use", href: "/terms" },
  { title: "Privacy Policy", href: "/privacy" },
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
    desc: "Learners access the video lessons by watching on the platform",
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
    title: "Our Benefits",
    desc: "",
  },
  {
    id: 2,
    title: "Teach with ease",
    desc: "Create your lessons with easy-to-use tools and share with learners easily.",
  },
  {
    id: 3,

    title: "Rewatch Lessons",
    desc: "Learners can rewatch video lessons as many times until they grasp the concept.",
  },
  {
    id: 4,
    title: "Time Flexibility",
    desc: "Tutors get to teach when they want, learners learn when they can.",
  },
  {
    id: 4,
    title: "Personalized Learning",
    desc: "Tutors can create learning contents in line with their learners' preferred language, curriculum and learning style.",
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
    text: "Klosanow is for tutors and learners across all levels of education. \
     Primary - Secondary - Tertiary - Corporate Education.",
  },
  {
    title: "What kind of App is Klosanow? ",
    text: "Klosanow is a web application and can be accessed through the web browser.",
  },
  {
    title: 'Does the "Create a lesson" feature work on the mobile browser? ',
    text: 'The "Create a lesson " feature can only be accessed through a desktop/computer browser. (Use a real computer not desktop mode on mobile browser)',
  },
  {
    title: "What browser does the other App's feature work with?",
    text: 'All the other App\'s features  work both on the desktop and mobile browsers. Only the  "Create a lesson" feature work on the desktop browser.',
  },
  {
    title: "Is using the platform free?",
    text: "Yes, we've launched with the free version. The free edition allows you save drafts, create lesson, view lessons, create a study group, send lessons & messages to numerous individual chats and 50mb of storage space.",
  },
];
