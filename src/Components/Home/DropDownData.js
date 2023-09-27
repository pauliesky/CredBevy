import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

export const DropDownData = [
  {
    title: "Products",
    path: null,
    iconClosed: <i className="bx bx-chevron-down "></i>,
    iconOpened: <i className="bx bx-chevron-up "></i>,
    subNav: [
      {
        // title: 'Multiple Loan offers',
        // path: '/loan-offers',
        // cName: 'sub-nav',
        // details: 'Get  instant loan disbursed to your account under 24 hrs of application.',
      },
    ],
  },
  {
    title: "Features",
    path: null,
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <i className="bx bx-chevron-down "></i>,
    iconOpened: <i className="bx bx-chevron-up "></i>,

    subNav: [
      {
        title: "Multiple Loan offers",
        path: "/loan-offers",
      },
      {
        title: "Credit Score",
        path: "/score-rating",
      },
      {
        title: "Free Transfer",
        path: "/transfer",
      },
      {
        title: "Pay Bills",
        path: "/bills",
      },
      {
        topic: "Integrations",
      },
      {
        title: "API Integrations",
        path: "/partners-integrations",
      },
      {
        title: "Partner Integrations",
        path: "/partners-integrations",
      },
    ],
  },
  {
    title: "Partners",
    path: null,
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <i className="bx bx-chevron-down "></i>,
    iconOpened: <i className="bx bx-chevron-up "></i>,

    subNav: [
      {
        topic: "News & Resources",
      },
      {
        title: "Latest Articles  and Research",
        path: "/",
      },
      {
        topic: "Help & Support",
      },
      {
        title: "Customer Hub",
        path: "/lending-partners",
      },
      {
        title: "FAQs",
        path: "/faqs",
        // cName: 'sub-nav',
      },
      {
        title: "API Documentation",
        path: "/",
      },
    ],
  },
  {
    title: "Company",
    path: null,
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <i className="bx bx-chevron-down "></i>,
    iconOpened: <i className="bx bx-chevron-up "></i>,

    subNav: [
      {
        title: "About us ",
        path: "/about-us",
      },
      {
        title: "Contact us",
        path: "/contact-us",
      },
      {
        title: "Career",
        path: "/",
      },
      {
        title: "News and Media",
        path: "/news",
      },
    ],
  },
];
