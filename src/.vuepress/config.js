module.exports = {
  dest: 'docs',
  base: '/guia-fundamentos-de-frontend/', // VISUALIZACIÓN EN GITHUB
  // base: '/', // VISUALIZACIÓN LOCAL
  title: 'Fundamentos de Frontend',
  description: 'Curso intersemestral de Fundamentos de Frontend.',

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black',
      },
    ],
  ],

  themeConfig: {
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guía',
        link: '/',
      },
      {
        text: 'Html',
        link: 'https://developer.mozilla.org/es/docs/Web/HTML',
      },
      {
        text: 'Css',
        link: 'https://developer.mozilla.org/es/docs/Web/CSS',
      },
      {
        text: 'Javascript',
        link: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
      },
      {
        text: 'Jest',
        link: 'https://jestjs.io/es-ES/docs/28.0/getting-started',
      },
      {
        text: 'Vuepress',
        link: 'https://vuepress.vuejs.org/',
      },
      {
        text: 'Markdown',
        link: 'https://markdown.es/',
      },
    ],
    sidebar: [
      '/',
      '/01-fundamentos/',
      '/02-instalacion/',
      '/03-html/',
      '/04-css/',
      '/04-css-flexbox/',
      '/04-css-grid/',
      '/05-javascript/',
      '/07-jest/',
      '/03-ejercicios-html/',
      '/04-ejercicios-css/',
      '/06-desafios/',
    ],
  },

  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
