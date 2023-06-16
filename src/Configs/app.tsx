import { NavItems, SMIcons } from "../Types/content.type";
import {ReactComponent as behance} from "../Assets/behance.svg";
import {ReactComponent as linkedIn} from "../Assets/linkedIn.svg";
import {ReactComponent as telegram} from "../Assets/telegram.svg";
import {ReactComponent as whatsapp} from "../Assets/whatsapp.svg";
export {ReactComponent as Headshot} from "../Assets/headshotBig.svg";

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