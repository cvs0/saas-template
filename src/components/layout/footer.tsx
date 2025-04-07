import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { JSX } from "react";

interface Icon {
  icon: JSX.Element;
  url: string;
}

const icons: Icon[] = [
  { icon: <LinkedInLogoIcon />, url: "#" },
  { icon: <InstagramLogoIcon />, url: "#" },
  { icon: <TwitterLogoIcon />, url: "#" },
];

const footerLinks: { id: number; title: string; url: string }[][] = [
  [
    { id: 1, title: "About", url: "#" },
    { id: 2, title: "Contact", url: "#" },
    { id: 3, title: "Blog", url: "#" },
    { id: 4, title: "Story", url: "#" },
  ],
  [
    { id: 5, title: "Company", url: "#" },
    { id: 6, title: "Product", url: "#" },
    { id: 7, title: "Press", url: "#" },
    { id: 8, title: "More", url: "#" },
  ],
  [
    { id: 9, title: "Press", url: "#" },
    { id: 10, title: "Careers", url: "#" },
    { id: 11, title: "Newsletters", url: "#" },
    { id: 12, title: "More", url: "#" },
  ],
  [
    { id: 13, title: "Press", url: "#" },
    { id: 14, title: "Careers", url: "#" },
    { id: 15, title: "Newsletters", url: "#" },
    { id: 16, title: "More", url: "#" },
  ],
];

export function Footer() {
  return (
    <footer className="footer border-neutral-700/50 border-t">
      <div className="flex w-full flex-col px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex w-full items-center justify-between gap-x-3 lg:pl-10">
          {footerLinks.map((column, columnIndex) => (
            <ul key={columnIndex} className="flex flex-col gap-y-2">
              {column.map((link) => (
                <a href={link.url} key={link.id}>
                  <li className="text-[15px]/normal transition-all duration-100 ease-linear hover:underline hover:underline-offset-4 font-medium text-neutral-400 hover:text-neutral-100">
                    {link.title}
                  </li>
                </a>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-y-5 border-t px-7 py-10 border-neutral-700/50 bg-[#0a0a0a] md:flex-row  md:items-center md:px-10">
        <div className="flex flex-col items-start justify-start gap-y-3.5">
          <a href="#" className="flex items-center gap-x-2.5">
            <div className="h-5 w-5 rounded-full bg-white"></div>
            <h1 className="text-xl font-bold text-white">Linear</h1>
          </a>
          <p className="text-white ">
            Linear is a fast, simple, and intuitive issue tracker that helps
            teams build better software faster.
          </p>
        </div>

        <div className="flex flex-col gap-y-5">
          <div className="flex items-center gap-x-4">
            {icons.map((icon, index) => (
              <a
                key={index}
                href={icon.url}
                className="flex h-6 w-6 items-center justify-center transition-all duration-100 ease-linear hover:text-neutral-100 hover:underline hover:underline-offset-4 font-medium text-neutral-500"
              >
                {icon.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-white">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
