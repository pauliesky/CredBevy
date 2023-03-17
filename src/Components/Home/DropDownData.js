import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const DropDownData = [
  {
    title: 'Products',
    path: null,
    iconClosed: <i className='bx bx-chevron-down ' ></i>,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Multiple Loan offers',
        path: '/LoanOffers',
        // cName: 'sub-nav',
        details: 'Get  instant loan disbursed to your account under 24 hrs of application.',
        icon: <IoIcons.IoIosPaper />,
      }
    ]

  },
  {
    title: 'Features',
    path: null,
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <i className='bx bx-chevron-down ' ></i>,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Multiple Loan offers',
        path: '/LoanOffers',
        // cName: 'sub-nav',
        details: 'Get  instant loan disbursed to your account under 24 hrs of application.',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Credit Score',
        path: '/ScoreRating',
        // cName: 'sub-nav',
        details: 'View your credit score rating and know where or how to improve it.',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Free Transfer',
        path: '/Transfer',
        // cName: 'sub-nav',
        details: 'Transfer money for free from your loan wallets to any bank account.',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Pay Bills',
        path: '/Bills',
        // cName: 'sub-nav',
        details: 'Pay for your airtime, data, light, water, cable bill at your convinience',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'API Integrations',
        path: '/PartnersIntegrations',
        // cName: 'sub-nav',
        details: 'Get  instant loan disbursed to your account under 24 hrs of application.',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'API Integrations',
        path: '/PartnersIntegrations',
        // cName: 'sub-nav',
        details: 'Get  instant loan disbursed to your account under 24 hrs of application.',
        icon: <IoIcons.IoIosPaper />,
      },
    ]
  },
  {
    title: 'Partners',
    path: null,
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <i className='bx bx-chevron-down ' ></i>,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Latest Articles  and Research',
        path: '/',
        // cName: 'sub-nav',
        details: 'Get  instant loan disbursed to your account under 24 hrs of application.',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Customer Hub',
        path: '/LendingPartners',
        // cName: 'sub-nav',
        details: 'Get  instant loan disbursed to your account under 24 hrs of application.',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'FAQs',
        path: '/FAQs',
        // cName: 'sub-nav',
        details: 'Get  instant loan disbursed to your account under 24 hrs of application.',
        icon: <IoIcons.IoIosPaper />,
      }, {
        title: 'API Documentation',
        path: '/',
        // cName: 'sub-nav',
        details: 'Get  instant loan disbursed to your account under 24 hrs of application.',
        icon: <IoIcons.IoIosPaper />,
      },
    ]
  },
  {
    title: 'Company',
    path: null,
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <i className='bx bx-chevron-down ' ></i>,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'About us ',
        path: '/aboutus',
        // cName: 'sub-nav',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Contact us',
        path: '//contactus',
        // cName: 'sub-nav',
        details: 'Get  instant loan disbursed to your account under 24 hrs of application.',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Career',
        path: '/',
        // cName: 'sub-nav',
        details: 'Get  instant loan disbursed to your account under 24 hrs of application.',
        icon: <IoIcons.IoIosPaper />,
      }, {
        title: 'News and Media',
        path: '/News',
        // cName: 'sub-nav',
        details: 'Get  instant loan disbursed to your account under 24 hrs of application.',
        icon: <IoIcons.IoIosPaper />,
      },
    ]
  },
];