import { StaticImageData } from "next/image";

import blog_thumb1 from "@/assets/images/blog/blog_img_01.jpg"
import blog_thumb2 from "@/assets/images/blog/blog_img_02.jpg"
import blog_thumb3 from "@/assets/images/blog/blog_img_03.jpg"
import blog_thumb4 from "@/assets/images/blog/blog_img_04.jpg"
import blog_thumb5 from "@/assets/images/blog/blog_img_05.jpg"

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData,
   tag?: string[];
   title: string;
   desc: string;
}

const blog_data: DataType[] = [
   {
      id: 1,
      page: "blog_1",
      thumb: blog_thumb1,
      tag: ["UI/UX design", "Design"],
      title: "How to become a web designer in 2021",
      desc: "Successful companies through collaborative efforts and strategic....",
   },
   {
      id: 2,
      page: "blog_1",
      thumb: blog_thumb2,
      tag: ["AI", "Application"],
      title: "Make Productive Day with AI app",
      desc: "Successful companies through collaborative efforts and strategic...."
   },
   {
      id: 3,
      page: "blog_1",
      thumb: blog_thumb3,
      tag: ["UI/UX", "Designer"],
      title: "Designer’s Checklist for Every UX Project",
      desc: "lass aptent taciti sociosqu ad litora torquent per coWinners never quit..."
   },
   {
      id: 4,
      page: "blog_1",
      thumb: blog_thumb4,
      tag: ["Event", "Wordcamp"],
      title: "Speaking remotely at WordCamp US",
      desc: "lass aptent taciti sociosqu ad litora torquent winners never quit..."
   },
   {
      id: 5,
      page: "blog_1",
      thumb: blog_thumb5,
      tag: ["Tips", "Lifestyle"],
      title: "Spending Habits, 13 Tips for Success.",
      desc: "Take all negative words out of your mental dictionary on the solut..."
   },
   {
      id: 6,
      page: "blog_1",
      thumb: blog_thumb3,
      tag: ["UI/UX", "Designer"],
      title: "Designer’s Checklist for Every UX Project",
      desc: "lass aptent taciti sociosqu ad litora torquent per coWinners never quit..."
   },
   {
      id: 7,
      page: "blog_1",
      thumb: blog_thumb4,
      tag: ["Event", "Wordcamp"],
      title: "Speaking remotely at WordCamp US",
      desc: "lass aptent taciti sociosqu ad litora torquent winners never quit..."
   },
];

export default blog_data;