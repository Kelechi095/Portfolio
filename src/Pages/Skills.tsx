
import ListItem from "../components/ListItem";
import Nav from "../components/Nav";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import { GiSkills } from "react-icons/gi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiPrisma } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";

import Javascript from '../public/images/javascript.png'
import Html from '../public/images/html.png'
import Css from '../public/images/css.png'
import Typescript from '../public/images/typescript.png'
import Node from '../public/images/node.png'
import React from '../public/images/react.png'
import Redux from '../public/images/redux.png'
import Tailwind from '../public/images/tailwind.png'
import Git from '../public/images/git.png'
import Npm from '../public/images/npm.png'
import Jest from '../public/images/jest.png'



const Skills = () => {
  return (
    <Wrapper>
      <Nav />
      <Title label="SKILLS" />
      {/*  */}

      <section className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="p-6 bg-slate-800 shadow-sm rounded-md">
          <Subtitle label="Frontend" />
          <ul>
            <ListItem text="HTML5" src={Html} />
            <ListItem text="CSS3" src={Css} />
            <ListItem text="JavaScript(ES6+)" src={Javascript} />
            <ListItem text="TypeScript" src={Typescript} />
            <ListItem text="ReactJs" src={React} />
            <ListItem text="NextJs" icon={TbBrandNextjs} black />
          </ul>
        </div>

        <div className="p-6 bg-slate-800 shadow-sm rounded-md">
          <Subtitle label="Backend" />
          <ul>
            <ListItem text="NodeJs" src={Node} />
            <ListItem text="Express" icon={IoLogoJavascript} blue/>
            <ListItem text="PostgreSQL" icon={BiLogoPostgresql} blue/>
            <ListItem text="MongoDB" icon={DiMongodb} mongo/>
            <ListItem text="Prisma" icon={SiPrisma} black/>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 shadow-sm rounded-md">
          <Subtitle label="Tools & Libraries" />
          <ul>
            <ListItem text="React Query" src="" />
            <ListItem text="Redux tool kit" src={Redux} />
            <ListItem text="Tailwind CSS" src={Tailwind} />
            <ListItem text="Axios" src="" />
            <ListItem text="Git" src={Git} />
            <ListItem text="NPM" src={Npm} />
            <ListItem text="Jest" src={Jest} />
          </ul>
        </div>

        <div className=" p-6 bg-slate-800 shadow-sm rounded-md">
          <Subtitle label="Soft Skills" />
          <ul>
            <ListItem text="Good communication skills" icon={GiSkills} blue/>
            <ListItem text="Critical thinking and problem solving" icon={GiSkills} blue/>
            <ListItem text="Team work and collaboration" icon={GiSkills} blue/>
            <ListItem text="Strong work ethic" icon={GiSkills} blue/>
            <ListItem text="Flexibility and adaptability" icon={GiSkills} blue/>
            <ListItem text="Time management skills" icon={GiSkills} blue/>
          </ul>
        </div>

        
      </section>
    </Wrapper>
  );
};

export default Skills;
