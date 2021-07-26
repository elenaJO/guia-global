module.exports = {
  lang: 'en-US',
  title: 'Global 66',
  themeConfig: {
    darkMode: false,
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Guía y Estilos',
        children: [
          {
            text: 'Instalaciones Front-end',
            link: '/guide/installation.html',
          },
          {
            text: 'Listados de comandos',
            link: '/guide/command-listings.html',
          },
          {
            text: 'Estilos Vue',
            link: '/guide/vue-styles.html',
          },
          {
            text: 'Creación de build',
            link: '/guide/build-creation.html',
          },
        ],
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Home',
          link: '/',
        },
        {
          text: 'Guía y Estilos',
          link: '/guide/',
          children: [
            {
              text: 'Instalaciones Front-end',
              link: '/guide/installation.html',
            },
            {
              text: 'Listados de comandos',
              link: '/guide/command-listings.html',
            },
            {
              text: 'Estilos Vue',
              link: '/guide/vue-styles.html',
            },
            {
              text: 'Creación de build',
              link: '/guide/build-creation.html',
            },
          ],
        },
      ],
    }
  },
}