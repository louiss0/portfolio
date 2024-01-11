import type { CollectionEntry } from "astro:content";

export type Project = Omit<CollectionEntry<"project">, "layout" | "draft">["data"] & { slug: CollectionEntry<"project">["slug"] }


export type TailwindScaleNumbers = 0 |
    'px' |
    0.5 |
    1 |
    1.5 |
    2 |
    2.5 |
    3 |
    3.5 |
    4 |
    5 |
    6 |
    7 |
    8 |
    9 |
    10 |
    11 |
    12 |
    14 |
    16 |
    20 |
    24 |
    28 |
    32 |
    36 |
    40 |
    44 |
    48 |
    52 |
    56 |
    60 |
    64 |
    72 |
    80 |
    96

export const Stacks = {
    TALL: "Tailwind Alpine Laravel Livewire",
    MERN: "MongoDB Express React Node",
    MEVN: "MongoDB Express Vue Node",
    LV: "Laravel Vue",
    LR: "Laravel React",
    AV: "Astro Vue",
    CV: "Create Vue",
    RV: "React Vite",
    AR: "Astro React",
} as const


export const projectTypes = ["Web App", "Landing Page", "Web Site"] as const

export type LayoutProps = Record<"title" | "description", string>

export type ProjectTypeChoices = typeof projectTypes[number]



