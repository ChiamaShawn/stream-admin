import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-list',
    link: '/pages/dashboard',
    children: [
      {
        title: 'General',
        link: '/path/iot-dashboard'
      },
      {
        title: 'Statistics',
       link: '/path/dashboard'
      }
    ]
  },  
  {
    title: 'Movies',
    icon: 'nb-play-outline',
    children: [
      {
        title: 'Add Movies',
        link: '/pages/addmedia',
        icon: 'nb-plus'
      },
      {
        title: 'View Movies',
        link: '/pages/viewmedia',
        icon: 'nb-list'
      },
     
    ]
  },
  {
    title: 'User Management',
    icon: 'nb-person',
    children: [
      {
        title: 'Create User',
        icon: 'nb-plus'
      },
      {
        title: 'View Users',
        icon: 'nb-list',
        link: '/pages/viewusers'
      }
    ]

  },
  {
    title: 'Website Interface',
    icon: 'nb-tables',
    children: [
      {
        title: 'Jumbotron Slider',
        link: '/pages/editcarousel'     
      },
      {
        title: 'Categories',
        link: '/pages/addcategory'
      },

    ]
  },
  
  {
    title: 'Mailing Service',
    icon: 'nb-email',
    children: [{
      title: 'Single',
      link: '/pages/singlemail'


    },
    {
      title: 'Multiple',
      link: '/pages/multiplemail'
    }]
  },

  {
    title: 'SMS promo',
    link: '/pages/smspromo',  
    icon: 'nb-paper-plane'
  },
  {
    title: 'Payments',
    icon: 'nb-compose',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'UI Features',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Buttons',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Modals',
        link: '/pages/ui-features/modals',
      },
      {
        title: 'Popovers',
        link: '/pages/ui-features/popovers',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'Tabs',
        link: '/pages/ui-features/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
    ],
  }
];
