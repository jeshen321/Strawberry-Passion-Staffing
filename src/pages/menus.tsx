import About from "./About";
import Careers from "./Careers";
import Contact from "./Contact";
import Faqs from "./Faqs";
import Pricing from "./Pricing";
import WhySPS from "./WhySps";

export default [
  {
    name: "Pricing",
    path: "/pricing",
    element: <Pricing />,
  },
  {
    name: "Resources",
    children: [
      {
        name: "FAQS",
        path: "/Faqs",
        element: <Faqs />,
      },
      {
        name: "Why SPS?",
        path: "/WhySps",
        element: <WhySPS />,
      },
    ],
  },
  {
    name: "Company",
    children: [
      {
        name: "About Us",
        path: "/About",
        element: <About />,
      },
      {
        name: "Contact Us",
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
  {
    name: "Careers",
    path: "/Careers",
    element: <Careers />,
  },
];
