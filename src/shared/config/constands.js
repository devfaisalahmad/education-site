import classNames from "classnames";
import { icons } from "../libs/icons";
//
export const cx = classNames;

export const menuData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    subItems: [
      { label: "About Us2", href: "/about-us2" },
      { label: "About Us3", href: "/about-us3" },
      { label: "About Us4", href: "/about-us4" },
    ],
  },
  {
    label: "Admission",
    subItems: [
      { label: "Admission2", href: "/admission2" },
      { label: "Admission3", href: "/admission3" },
      { label: "Admission4", href: "/admission4" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },

  // Add more menu items and sub-items as needed
];

// edu course items
export const tabs = [
  {
    id: 1,
    title: "Networking",
    icon: icons.network,

    data: [
      {
        title: "Rural Networking",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
        icon: icons.square,
        text: "You can join any course my edugarden",
        text_2: "Education is a backbone a nation",
        text_3: "24-hour Supports for any courses",
        text_4: "Every exam online class recoding",
        link: "https://youtu.be/s0ksvPulHt8",
        btn_text: "Start Learn Now",
      },
    ],
  },
  {
    id: 2,
    title: "php",
    icon: icons.php,
    data: [
      {
        title: "Learning PHP",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
        icon: icons.square,
        text: "You can join any course my edugarden",
        text_2: "Education is a backbone a nation",
        text_3: "24-hour Supports for any courses",
        text_4: "Every exam online class recoding",
        link: "https://youtu.be/-RSvsJL-a3c",
        btn_text: "Start Learn Now",
      },
    ],
  },
  {
    id: 3,
    title: "python",
    icon: icons.python,
    data: [
      {
        title: "Learning Python",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
        icon: icons.square,
        text: "You can join any course my edugarden",
        text_2: "Education is a backbone a nation",
        text_3: "24-hour Supports for any courses",
        text_4: "Every exam online class recoding",
        link: "https://youtu.be/b6uPyqdvt4E",
        btn_text: "Start Learn Now",
      },
    ],
  },
  {
    id: 4,
    title: "design",
    icon: icons.design,
    data: [
      {
        title: "Creative Design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
        icon: icons.square,
        text: "You can join any course my edugarden",
        text_2: "Education is a backbone a nation",
        text_3: "24-hour Supports for any courses",
        text_4: "Every exam online class recoding",
        link: "https://youtu.be/6SkQ-srIJVM",
        btn_text: "Start Learn Now",
      },
    ],
  },
  {
    id: 5,
    title: "html5/css3",
    icon: icons.html,
    data: [
      {
        title: "HTML5/CSS3 Essentials",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
        icon: icons.square,
        text: "You can join any course my edugarden",
        text_2: "Education is a backbone a nation",
        text_3: "24-hour Supports for any courses",
        text_4: "Every exam online class recoding",
        link: "https://youtu.be/z4Xqfvhb6-w",
        btn_text: "Start Learn Now",
      },
    ],
  },
  {
    id: 6,
    title: "photography",
    icon: icons.camera,
    data: [
      {
        title: "Art of Photography",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
        icon: icons.square,
        text: "You can join any course my edugarden",
        text_2: "Education is a backbone a nation",
        text_3: "24-hour Supports for any courses",
        text_4: "Every exam online class recoding",
        link: "https://youtu.be/F9DstkJDyXw",
        btn_text: "Start Learn Now",
      },
    ],
  },
];
