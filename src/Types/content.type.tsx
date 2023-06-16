import React from "react"

export type NavItems = {
    name: string
    link: string
}[]

export type SMIcons = {
    name: string
    img: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    link: string
}[]