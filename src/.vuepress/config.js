module.exports = {
	title: 'Fundamentos de Frontend',
	description:
		'Curso intersemestral de Fundamentos de Frontend.',

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

	dest: 'docs',
	base: '/fundamentos-de-frontend',
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
		],
		sidebar: ['/', '/01-fundamentos/'],
	},

	plugins: [
		'@vuepress/plugin-back-to-top',
		'@vuepress/plugin-medium-zoom',
	],
};
