import { StaticImageData } from "next/image";

import menu_img1 from "@/assets/images/menu/home01.jpg"
import menu_img2 from "@/assets/images/menu/home02.jpg"
import menu_img3 from "@/assets/images/menu/home03.jpg"
import menu_img4 from "@/assets/images/menu/home04.jpg"
import menu_img5 from "@/assets/images/menu/home05.jpg"
import menu_img6 from "@/assets/images/menu/home06.jpg"
import menu_img7 from "@/assets/images/menu/home07.jpg"
import menu_img8 from "@/assets/images/menu/home08.jpg"
import menu_img9 from "@/assets/images/menu/home09.jpg"
import menu_img10 from "@/assets/images/menu/home10.jpg"

interface MenuItem {
    id: number;
    title: string;
    class_name?: string;
    link: string;
    has_dropdown: boolean;
    mega_menus?: {
        link: string;
        title: string;
        img: StaticImageData;
    }[];
    feature_menus?: {
        id: number;
        sub_title: string;
        menus: {
            title: string;
            link: string;
        }[];
    }[];
    sub_menus?: {
        link: string;
        title: string;
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "#",
        class_name: "mega-dropdown",
        has_dropdown: true,
        mega_menus: [
            { link: "/", title: "Payment Service", img: menu_img1 },
            { link: "/home-two", title: "AI Writer", img: menu_img2 },
            { link: "/home-three", title: "Website Builder", img: menu_img3 },
            { link: "/home-four", title: "CRM", img: menu_img4 },
            { link: "/home-five", title: "Project Management", img: menu_img5 },
            { link: "/home-six", title: "Mobile App Landing", img: menu_img6 },
            { link: "/home-seven", title: "Digital Agency", img: menu_img7 },
            { link: "/home-eight", title: "Help Desk", img: menu_img8 },
            { link: "/home-nine", title: "Web Hosting", img: menu_img9 },
            { link: "/home-ten", title: "Cyber Security", img: menu_img10 },
        ],
    },
    {
        id: 2,
        title: "Pages",
        link: "#",
        class_name: "mega-dropdown-sm",
        has_dropdown: true,
        feature_menus: [
            {
                id: 1,
                sub_title: "Essential",
                menus: [
                    { link: "/about-us-v1", title: "About Us-1" },
                    { link: "/about-us-v2", title: "About Us-2" },
                    { link: "/about-us-v3", title: "About Us-3" },
                    { link: "/team-v1", title: "Team-1" },
                    { link: "/team-v2", title: "Team-2" },
                ],
            },
            {
                id: 2,
                sub_title: "Features",
                menus: [
                    { link: "/service-v1", title: "Service-1" },
                    { link: "/service-v2", title: "Service-2" },
                    { link: "/service-v3", title: "Service-3" },
                    { link: "/service-details", title: "Service Details" },
                    { link: "/pricing-v1", title: "Pricing-1" },
                    { link: "/pricing-v2", title: "Pricing-2" },
                ],
            },
            {
                id: 3,
                sub_title: "Others",
                menus: [
                    { link: "/faq-v1", title: "FAQ-1" },
                    { link: "/faq-v2", title: "FAQ-2" },
                    { link: "/login", title: "Login" },
                    { link: "/signup", title: "Sign Up" },
                    { link: "/404", title: "404 Error" },
                ],
            },
        ],
    },
    {
        id: 3,
        title: "Project",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/project-v1", title: "Project-1" },
            { link: "/project-v2", title: "Project-2" },
            { link: "/project-v3", title: "Project-3" },
            { link: "/project-v4", title: "Project-4" },
            { link: "/project-v5", title: "Project-5" },
            { link: "/project-v6", title: "Project-6" },
            { link: "/project-details", title: "Project Details" },
        ],
    },
    {
        id: 4,
        title: "Blog",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/blog-v1", title: "Blog Full Width" },
            { link: "/blog-v2", title: "Blog List" },
            { link: "/blog-v3", title: "Blog 2 column" },
            { link: "/blog-details", title: "Blog Details" },
        ],
    },
    {
        id: 5,
        title: "Contact",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/contact-v1", title: "Contact Us-1" },
            { link: "/contact-v2", title: "Contact Us-2" },
        ],
    },
];

export default menu_data;
