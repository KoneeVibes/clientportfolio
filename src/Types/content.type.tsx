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

export type Services = string[]

export type Clients = React.FunctionComponent<React.SVGProps<SVGSVGElement>>[]

export type Projects = {
    img: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    name: string
    description: string
    layout: string
}[]

export type Events = {
    eventName: string
    img: string
}[]

export type Skills = string[]