import { Icon } from "../components/Icon/"
import { Select } from "../components/SelectionFilter"
import { Vehicle } from "../components/Vehicle"

export const vehicles: Vehicle[] = [
  {
    carID: "1",
    name: "Konisegg",
    type: "sport",
    image:
      "https://img.freepik.com/psd-gratis/auto-isolata-rossa_23-2151852884.jpg?t=st=1740667672~exp=1740671272~hmac=c83272cfc6937c2e466bddb432d4b1b754d0855283e1697285db90583b50e054&w=1380",
    isLiked: true,
    rate: 4,
    technicalData: [
      {
        label: "gasoline",
        content: "80L",
      },
      {
        label: "steering",
        content: "Manual",
      },
      {
        label: "capacity",
        content: "3",
      },
    ],
    pricePerDay: 100,
    discount: 20,
  },
  {
    carID: "2",
    name: "Nissan GT-R",
    type: "sport",
    image:
      "https://img.freepik.com/psd-gratis/auto-isolata-rossa_23-2151852884.jpg?t=st=1740667672~exp=1740671272~hmac=c83272cfc6937c2e466bddb432d4b1b754d0855283e1697285db90583b50e054&w=1380",
    isLiked: false,
    rate: 4.5,
    technicalData: [
      {
        label: "gasoline",
        content: "70L",
      },
      {
        label: "steering",
        content: "Manual",
      },
      {
        label: "capacity",
        content: "2",
      },
    ],
    pricePerDay: 90,
    discount: 10,
  },
  {
    carID: "3",
    name: "Konisegg",
    type: "sport",
    image:
      "https://img.freepik.com/psd-gratis/auto-isolata-rossa_23-2151852884.jpg?t=st=1740667672~exp=1740671272~hmac=c83272cfc6937c2e466bddb432d4b1b754d0855283e1697285db90583b50e054&w=1380",
    isLiked: true,
    rate: 4.5,
    technicalData: [
      {
        label: "gasoline",
        content: "80L",
      },
      {
        label: "steering",
        content: "Manual",
      },
      {
        label: "capacity",
        content: "3",
      },
    ],
    pricePerDay: 100,
    discount: 0,
  },
  {
    carID: "4",
    name: "Nissan GT-R",
    type: "sport",
    image:
      "https://img.freepik.com/psd-gratis/auto-isolata-rossa_23-2151852884.jpg?t=st=1740667672~exp=1740671272~hmac=c83272cfc6937c2e466bddb432d4b1b754d0855283e1697285db90583b50e054&w=1380",
    isLiked: false,
    rate: 4.5,
    technicalData: [
      {
        label: "gasoline",
        content: "70L",
      },
      {
        label: "steering",
        content: "Manual",
      },
      {
        label: "capacity",
        content: "2",
      },
    ],
    pricePerDay: 90,
    discount: 0,
  },
  {
    carID: "5",
    name: "Konisegg",
    type: "sport",
    rate: 4.5,
    image:
      "https://img.freepik.com/psd-gratis/auto-isolata-rossa_23-2151852884.jpg?t=st=1740667672~exp=1740671272~hmac=c83272cfc6937c2e466bddb432d4b1b754d0855283e1697285db90583b50e054&w=1380",
    isLiked: true,
    technicalData: [
      {
        label: "gasoline",
        content: "80L",
      },
      {
        label: "steering",
        content: "Manual",
      },
      {
        label: "capacity",
        content: "3",
      },
    ],
    pricePerDay: 100,
    discount: 10,
  },
  {
    carID: "6",
    name: "Nissan GT-R",
    type: "sport",
    image:
      "https://img.freepik.com/psd-gratis/auto-isolata-rossa_23-2151852884.jpg?t=st=1740667672~exp=1740671272~hmac=c83272cfc6937c2e466bddb432d4b1b754d0855283e1697285db90583b50e054&w=1380",
    isLiked: false,
    rate: 4.5,
    technicalData: [
      {
        label: "gasoline",
        content: "70L",
      },
      {
        label: "steering",
        content: "Manual",
      },
      {
        label: "capacity",
        content: "2",
      },
    ],
    pricePerDay: 90,
    discount: 0,
  },
]

export const selects: Select[] = [
  {
    name: "Locations",
    id: "locations",
    options: [{ id: "1", name: "Select your city" }],
  },
  {
    name: "Date",
    id: "date",
    options: [{ id: "1", name: "Select your date" }],
  },
  {
    name: "Time",
    id: "time",
    options: [{ id: "1", name: "Select your time" }],
  },
]

export type Cars = typeof cars

export const cars = [
  {
    title: "Popular",
    path: "path",
    vehicles: vehicles,
  },
  {
    title: "Recomendation Car",
    path: "path",
    vehicles: vehicles,
  },
]

export type Items = {
  label: string
  path: string
}

export type LinkType = {
  label: string
  items: Items[]
}

export type FooterLinksType = LinkType[]

export const FOOTER_LINKS = [
  {
    label: "About",
    items: [
      {
        label: "How it works",
        path: "",
      },
      {
        label: "Featured",
        path: "",
      },
      {
        label: "Partnership",
        path: "",
      },
      {
        label: "Business Relation",
        path: "",
      },
    ],
  },
  {
    label: "Community",
    items: [
      {
        label: "Events",
        path: "",
      },
      {
        label: "Blog",
        path: "",
      },
      {
        label: "Podcast",
        path: "",
      },
      {
        label: "Invite a Friend",
        path: "",
      },
    ],
  },
]

export type Social = {
  icon: Icon
  path: string
}

export const social_links: Social[] = [
  {
    icon: "facebook",
    path: "/",
  },
  {
    icon: "x",
    path: "/",
  },
  {
    icon: "linkedIn",
    path: "/",
  },
  {
    icon: "instagram",
    path: "/",
  },
]
