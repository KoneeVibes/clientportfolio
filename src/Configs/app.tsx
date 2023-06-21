import { NavItems, SMIcons, Services, Clients, Projects, Events, Skills } from "../Types/content.type";
import { ReactComponent as behance } from "../Assets/behance.svg";
import { ReactComponent as linkedIn } from "../Assets/linkedIn.svg";
import { ReactComponent as telegram } from "../Assets/telegram.svg";
import { ReactComponent as whatsapp } from "../Assets/whatsapp.svg";
import { ReactComponent as chaindustry } from "../Assets/chaindustry.svg";
import { ReactComponent as disgnPlus } from "../Assets/disgnPlus.svg";
import { ReactComponent as infinityAngel } from "../Assets/infinityAngel.svg";
import { ReactComponent as alibabaCloud } from "../Assets/alibabaCloud.svg";
import { ReactComponent as one2Cloud } from "../Assets/one2Cloud.svg";
import { ReactComponent as rbxs } from "../Assets/rbxs.svg";
import { ReactComponent as puli } from "../Assets/puli.svg";
import { ReactComponent as stepWatch } from "../Assets/stepWatch.svg";
import { ReactComponent as splabs } from "../Assets/splabs.svg";
import { ReactComponent as meta } from "../Assets/meta.svg";
import { ReactComponent as lemon } from "../Assets/lemon.svg";
import { ReactComponent as capitalBloc } from "../Assets/capitalBloc.svg";
import { ReactComponent as open } from "../Assets/open.svg";
import { ReactComponent as event1 } from "../Assets/event1.svg";
export { ReactComponent as Headshot } from "../Assets/headshotBig.svg";
export { ReactComponent as Wave } from "../Assets/wave.svg";
export { ReactComponent as Arrow } from "../Assets/arrow.svg";
export { ReactComponent as BlockArrow } from "../Assets/blockArrow.svg"
export { ReactComponent as Students } from "../Assets/students.svg";

export const navItems: NavItems = [
    {
        name: "Home",
        link: ""
    },
    {
        name: "About",
        link: ""
    },
    {
        name: "Projects",
        link: ""
    },
    {
        name: "Download CV",
        link: ""
    },
]

export const smIcons: SMIcons = [
    {
        name: "linkedIn",
        img: linkedIn,
        link: "",
    },
    {
        name: "telegram",
        img: telegram,
        link: "",
    },
    {
        name: "whatsapp",
        img: whatsapp,
        link: "",
    },
    {
        name: "behance",
        img: behance,
        link: "",
    },
]

export const services: Services = ["Web Design", "Brand Identity", "Graphic Design", "Video Editing"]

export const clients: Clients = [
    chaindustry,
    disgnPlus,
    infinityAngel,
    alibabaCloud,
    one2Cloud,
    rbxs,
    puli,
    stepWatch,
    splabs,
]

export const projects: Projects = [
    {
        img: meta,
        name: "Metta Wallet",
        description: "Brand Identity and Web Design",
        layout: "row",
    },
    {
        img: lemon,
        name: "Lemon Design",
        description: "Brand Identity and Web Design",
        layout: "row-reverse",
    },
    {
        img: capitalBloc,
        name: "Capital Bloc",
        description: "Brand Identity",
        layout: "row",
    },
    {
        img: open,
        name: "Open",
        description: "Brand Identity and Web Design",
        layout: "row-reverse",
    },
]

export const events: Events = [
    {
        eventName: "Edns Event",
        img: event1,
    },
    {
        eventName: "Edns Event",
        img: event1,
    },
    {
        eventName: "Edns Event",
        img: event1,
    },
    {
        eventName: "Edns Event",
        img: event1,
    },
]

export const skills: Skills = ["Adobe Photoshop", "Adobe illustrator", "Figma", "Adobe Premiere pro", "Adobe XD" ]
