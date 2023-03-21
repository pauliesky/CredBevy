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
        // title: 'Multiple Loan offers',
        // path: '/LoanOffers',
        // cName: 'sub-nav',
        // details: 'Get  instant loan disbursed to your account under 24 hrs of application.',
        
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
      
      },
      {
        title: 'Credit Score',
        path: '/ScoreRating',
       
      },
      {
        title: 'Free Transfer',
        path: '/Transfer',

      },
      {
        title: 'Pay Bills',
        path: '/Bills',

      },
      {
        title: 'API Integrations',
        path: '/PartnersIntegrations',
      },
      {
        title: 'API Integrations',
       
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
       
      },
      {
        title: 'Customer Hub',
        path: '/LendingPartners',
       
      },
      {
        title: 'FAQs',
        path: '/FAQs',
        // cName: 'sub-nav',
     
      }, {
        title: 'API Documentation',
        path: '/',
    
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
      },
      {
        title: 'Contact us',
        path: '/contactus',
  
      },
      {
        title: 'Career',
        path: '/',

      }, {
        title: 'News and Media',
        path: '/News',

      },
    ]
  },
];