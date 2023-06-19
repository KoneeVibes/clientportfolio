import { NavItems, SMIcons, Services, Clients } from "../Types/content.type";
import { ReactComponent as behance } from "../Assets/behance.svg";
import { ReactComponent as linkedIn } from "../Assets/linkedIn.svg";
import { ReactComponent as telegram } from "../Assets/telegram.svg";
import { ReactComponent as whatsapp } from "../Assets/whatsapp.svg";
import {ReactComponent as chaindustry} from "../Assets/chaindustry.svg";
import {ReactComponent as disgnPlus} from "../Assets/disgnPlus.svg";
import {ReactComponent as infinityAngel} from "../Assets/infinityAngel.svg";
import {ReactComponent as alibabaCloud} from "../Assets/alibabaCloud.svg";
import {ReactComponent as one2Cloud} from "../Assets/one2Cloud.svg";
import {ReactComponent as rbxs} from "../Assets/rbxs.svg";
import {ReactComponent as puli} from "../Assets/puli.svg";
import {ReactComponent as stepWatch} from "../Assets/stepWatch.svg";
import {ReactComponent as splabs} from "../Assets/splabs.svg";


export { ReactComponent as Headshot } from "../Assets/headshotBig.svg";
export { ReactComponent as Wave } from "../Assets/wave.svg";

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