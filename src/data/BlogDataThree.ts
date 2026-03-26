import { StaticImageData } from "next/image";

import blog_thumb1 from "@/assets/images/blog/blog_img_10.jpg"
import blog_thumb2 from "@/assets/images/blog/blog_img_11.jpg"
import blog_thumb3 from "@/assets/images/blog/blog_img_12.jpg"
import blog_thumb4 from "@/assets/images/blog/blog_img_13.jpg"
import blog_thumb5 from "@/assets/images/blog/blog_img_14.jpg"
import blog_thumb6 from "@/assets/images/blog/blog_img_15.jpg"
import blog_thumb7 from "@/assets/images/blog/blog_img_16.jpg"
import blog_thumb8 from "@/assets/images/blog/blog_img_17.jpg"

interface DataType {
   id: number;
   thumb: StaticImageData;
   date: string;
   title: string;
   tags: string[];
   category: string;
}

const blog_data_three: DataType[] = [
   {
      id: 1,
      thumb: blog_thumb1,
      date: "17 apr, 2024",
      title: "How to become a web designer in 2021",
      tags: ["UI/UX design", "Design"],
      category: "application lifestyle"
   },
   {
      id: 2,
      thumb: blog_thumb2,
      date: "09 mar, 2024",
      title: "Make Productive Day with AI app",
      tags: ["AI", "Application"],
      category: "application development others"
   },
   {
      id: 3,
      thumb: blog_thumb3,
      date: "13 apr, 2024",
      title: "Speaking remotely at WordCamp US",
      tags: ["Wordcamp", "Event"],
      category: "marketing design development others"
   },
   {
      id: 4,
      thumb: blog_thumb4,
      date: "09 mar, 2024",
      title: "Designer’s Checklist for Every UX Project",
      tags: ["Designer", "UI/UX"],
      category: "application"
   },
   {
      id: 5,
      thumb: blog_thumb5,
      date: "13 apr, 2024",
      title: "Spending Habits, 13 Tips for Success.",
      tags: ["Lifestyle", "Tips"],
      category: "marketing design development"
   },
   {
      id: 6,
      thumb: blog_thumb6,
      date: "09 mar, 2024",
      title: "Manage your online business easily",
      tags: ["business", "Tips"],
      category: "application others"
   },
   {
      id: 7,
      thumb: blog_thumb7,
      date: "13 apr, 2024",
      title: "Our Travel Card Makes you Happy.",
      tags: ["Lifestyle", "Tips"],
      category: "marketing lifestyle"
   },
   {
      id: 8,
      thumb: blog_thumb8,
      date: "09 mar, 2024",
      title: "Manage your online business easily",
      tags: ["business", "Tips"],
      category: "marketing design lifestyle"
   },
   {
      id: 9,
      thumb: blog_thumb3,
      date: "13 apr, 2024",
      title: "Speaking remotely at WordCamp US",
      tags: ["Wordcamp", "Event"],
      category: "marketing design development others"
   },
   {
      id: 10,
      thumb: blog_thumb4,
      date: "09 mar, 2024",
      title: "Designer’s Checklist for Every UX Project",
      tags: ["Designer", "UI/UX"],
      category: "application"
   },
   {
      id: 11,
      thumb: blog_thumb5,
      date: "13 apr, 2024",
      title: "Spending Habits, 13 Tips for Success.",
      tags: ["Lifestyle", "Tips"],
      category: "marketing design development"
   },
   {
      id: 12,
      thumb: blog_thumb6,
      date: "09 mar, 2024",
      title: "Manage your online business easily",
      tags: ["business", "Tips"],
      category: "application others"
   },
   {
      id: 13,
      thumb: blog_thumb7,
      date: "13 apr, 2024",
      title: "Our Travel Card Makes you Happy.",
      tags: ["Lifestyle", "Tips"],
      category: "marketing lifestyle"
   },
];

export default blog_data_three;