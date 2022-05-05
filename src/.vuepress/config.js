module.exports = {
	dest: 'docs',
	base: '/fundamentos-de-frontend/', // VISUALIZACIÓN EN GITHUB
	// base: '/', // VISUALIZACIÓN LOCAL
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
			// {
			// 	text: 'Vuepress',
			// 	link: 'https://vuepress.vuejs.org/',
			// },
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
			'/05-javascript/',
			'/07-jest/',
			'/03a-ejercicios-html/',
			'/04a-ejercicios-css/',
			'/06-desafios/',
		],
	},

	plugins: [
		'@vuepress/plugin-back-to-top',
		'@vuepress/plugin-medium-zoom',
	],
};
