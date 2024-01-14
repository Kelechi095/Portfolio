import { Bs0CircleFill, BsFileEarmarkPerson } from "react-icons/bs";
import { IconType } from "react-icons"

export type ProjectType = {
    id: number;
    icon: IconType,
    text1: string
    text2: string
  };

export const projects: ProjectType[] = [
  {
    id: 1,
    icon: BsFileEarmarkPerson,
    text1: "Web Design",
    text2: "My goal is to help businesses and individuals establish a strong online presence and effectively communicate their brand to their target audience."
  },

  {
    id: 2,
    icon: Bs0CircleFill,
    text1: "Web Development",
    text2: "With usability, accessibility & functionality in mind, I build simple, flexible, mobile responsive & custom websites for individuals & small/medium sized company",
  },
  {
    id: 3,
    icon: BsFileEarmarkPerson,
    text1: "Api Integration",
    text2: "I can create and integrate 3rd party APIs into web apps that help keep data in sync, automate tasks, enhance productivity & drive more revenue.",
  },
  {
    id: 4,
    icon: BsFileEarmarkPerson,
    text1: "Continuous Support",
    text2: "I provide continous support for existing projects which may include fixes, updates and development of additional functionality or features that will make the product more marketable",
  },
  
];