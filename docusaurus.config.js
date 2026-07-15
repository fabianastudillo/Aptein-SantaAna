// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aptein-Santa Ana',
  tagline: 'La U que vive la vinculación',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://fabianastudillo.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Aptein-SantaAna',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fabianastudillo', // Usually your GitHub org/user name.
  projectName: 'Aptein-SantaAna', // Usually your repo name.

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Tipografía institucional UCuenca:
  // Alegreya Sans (sustituto libre de FF Meta Pro) + Alegreya (serif del slogan).
  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Alegreya+Sans:wght@400;500;700;800&display=swap',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          editUrl:
            'https://github.com/fabianastudillo/Aptein-SantaAna/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Aptein-Santa Ana',
        logo: {
          alt: 'UCuenca',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {
            href: 'https://github.com/fabianastudillo/Aptein-SantaAna',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'Presentación del proyecto',
                to: '/docs/intro',
              },
              {
                label: 'Datos Generales',
                to: '/docs/Datos-Generales',
              },
              {
                label: 'Objetivos',
                to: '/docs/Objetivos',
              },
            ],
          },
          {
            title: 'Universidad de Cuenca',
            items: [
              {
                label: 'Facultad de Ingeniería',
                href: 'https://www.ucuenca.edu.ec/ingenieria/',
              },
              {
                label: 'Vinculación con la Sociedad',
                href: 'https://www.ucuenca.edu.ec/vinculacion/',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/fabianastudillo/Aptein-SantaAna',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Universidad de Cuenca · La U que vive la vinculación. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
