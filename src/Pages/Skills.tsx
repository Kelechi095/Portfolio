import ListItem from "../components/ListItem";
import Subtitle from "../components/Subtitle";
import Wrapper from "../components/Wrapper"
import { TbBrandNextjs } from "react-icons/tb";
import { SiPrisma } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";

import Javascript from "../public/images/javascript.png";
import Html from "../public/images/html.png";
import Css from "../public/images/css.png";
import Typescript from "../public/images/typescript.png";
import Node from "../public/images/node.png";
import React from "../public/images/react.png";
import Redux from "../public/images/redux.png";
import Tailwind from "../public/images/tailwind.png";
import Git from "../public/images/git.png";
import Npm from "../public/images/npm.png";
import Jest from "../public/images/jest.png";
import Axios from "../public/images/axios.png";
import ReactQuery from "../public/images/reactquery.png";
import Title from "../components/Title";

const Skills = () => {
  return (
    <Wrapper>
      <Title label="Skills" />

      <section className="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-8 w-full px-2">
        <div className="py-2">
          <Subtitle label="Frontend" />
          <ul className="grid grid-cols-3 gap-4">
            <ListItem text="HTML5" src={Html} />
            <ListItem text="CSS3" src={Css} />
            <ListItem text="JavaScript" src={Javascript} />
            <ListItem text="TypeScript" src={Typescript} />
            <ListItem text="ReactJs" src={React} />
            <ListItem text="NextJs" icon={TbBrandNextjs} black />
          </ul>
        </div>

        <div className="py-2">
          <Subtitle label="Backend" />
          <ul className="grid grid-cols-3 gap-4">
            <ListItem text="NodeJs" src={Node} />
            <ListItem text="Express" icon={IoLogoJavascript} blue />
            <ListItem text="PostgreSQL" icon={BiLogoPostgresql} blue />
            <ListItem text="MongoDB" icon={DiMongodb} mongo />
            <ListItem text="Prisma" icon={SiPrisma} black />
          </ul>
        </div>

        <div className="py-2">
          <Subtitle label="Tools & Libraries" />
          <ul className="grid grid-cols-3 gap-4">
            <ListItem text="React Query" src={ReactQuery} />
            <ListItem text="Redux" src={Redux} />
            <ListItem text="Tailwind" src={Tailwind} />
            <ListItem text="Axios" src={Axios} />
            <ListItem text="Git" src={Git} />
            <ListItem text="NPM" src={Npm} />
            <ListItem text="Jest" src={Jest} />
          </ul>
        </div>
      </section>
    </Wrapper>
  );
};

export default Skills;
