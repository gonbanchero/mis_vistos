module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				mui: '#0A1929',
				cartFooter: '#314159',
				footerButton: '#869CBC',
			},
			gridTemplateColumns: {
				autoFit: 'repeat(auto-fit, minmax(250px, 1fr))',
			},
			margin: {
				'0auto': '0 auto',
			},
		},
		minWidth: {
			'1/2': '50%',
		},
		maxWidth: {
			Card: '270px',
		},
	},
	plugins: [],
};
