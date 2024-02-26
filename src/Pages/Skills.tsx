import ListItem from "../components/ListItem";
import Subtitle from "../components/Subtitle";
import Wrapper from "../components/Wrapper"

import Javascript from "../public/images/javascript.png";
import Html from "../public/images/html.png";
import Css from "../public/images/css.png";
import Typescript from "../public/images/typescript.png";
import Node from "../public/images/node.png";
import React from "../public/images/react.png";
import Next from "../public/images/next14.png";
import Redux from "../public/images/redux.png";
import Tailwind from "../public/images/tailwind.png";
import Git from "../public/images/git.png";
import Npm from "../public/images/npm.png";
import Postgres from "../public/images/postgress.png";
import Prisma from "../public/images/prisma4.png";
import MongoDb from "../public/images/mongo3.jpg";
import Axios from "../public/images/axios.png";
import ReactQuery from "../public/images/reactquery.png";
import Title from "../components/Title";

const Skills = () => {
  return (
    <Wrapper>
      <Title label="Skills" />

      <section className="grid grid-cols-1 gap-8 mb-8 w-full px-2">
        <div className="py-2">
          <Subtitle label="Frontend" />
          <ul className="grid grid-cols-3 gap-4">
            <ListItem text="HTML5" src={Html} />
            <ListItem text="CSS3" src={Css} />
            <ListItem text="JavaScript" src={Javascript} />
            <ListItem text="TypeScript" src={Typescript} big/>
            <ListItem text="ReactJs" src={React} />
            <ListItem text="NextJs" src={Next} />
          </ul>
        </div>

        <div className="py-2">
          <Subtitle label="Backend" />
          <ul className="grid grid-cols-3 gap-4">
            <ListItem text="NodeJs" src={Node} />
            <ListItem text="Express" src={Javascript}/>
            <ListItem text="PostgreSQL" src={Postgres} />
            <ListItem text="MongoDB" src={MongoDb} big/>
            <ListItem text="Prisma" src={Prisma} black />
          </ul>
        </div>

        <div className="py-2">
          <Subtitle label="Tools & Libraries" />
          <ul className="grid grid-cols-3 gap-4">
            <ListItem text="React Query" src={ReactQuery} />
            <ListItem text="Redux" src={Redux} />
            <ListItem text="Tailwind" src={Tailwind} />
            <ListItem text="Axios" src={Axios} big />
            <ListItem text="Git" src={Git} />
            <ListItem text="NPM" src={Npm} />
            <ListItem text="Zustand" src={Npm} />
          </ul>
        </div>
      </section>
    </Wrapper>
  );
};

export default Skills;
