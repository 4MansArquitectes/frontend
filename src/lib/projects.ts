import type { Projects } from "../types/projectTypes";
import { v4 as uuidv4 } from "uuid";

const projects: Projects = [
  {
    id: uuidv4(),
    name: "Barcelona casa Paco",
    tags: ["Reforma integral"],
    coverImage: "https://i.imgur.com/eSXP6EZ.png",
    startDate: new Date("2016").getTime(),
    endDate: new Date("2020").getTime(),
  },
  {
    id: uuidv4(),
    name: "Barcelona casa Miguel",
    tags: ["Reforma integral"],
    coverImage: "https://i.imgur.com/eSXP6EZ.png",
    startDate: new Date("2016").getTime(),
    endDate: new Date("2015").getTime(),
  },
  {
    id: uuidv4(),
    name: "Barcelona casa Pau",
    tags: ["Reforma integral"],
    coverImage: "https://i.imgur.com/eSXP6EZ.png",
    startDate: new Date("2001").getTime(),
    endDate: new Date("2010").getTime(),
  },
  {
    id: uuidv4(),
    name: "Barcelona casa Jose",
    tags: ["Reforma integral"],
    coverImage: "https://i.imgur.com/eSXP6EZ.png",
    startDate: new Date("2016").getTime(),
    endDate: new Date("2015").getTime(),
  },
];

export default projects;
