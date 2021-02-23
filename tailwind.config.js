module.exports = {
    future: {},
    purge: {
        mode: 'all',
        content: ['./src/**/*.svelte', './src/**/*.html'],
    },
    theme: {
        extend: {
            fontFamily: {
                header: ['lato-light', 'sans-serif'],
                sans: ['Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
            },
            colors: {
                oblivious: '#96c8ff',
                'oblivious-opaque': '#96c8ffad',
                'oblivious-dark': '#1871d3',
            },
            height: {
                '1/2vh': '50vh',
                '4/5vh': '80vh',
            },
            maxHeight: {
                '1/2vh': '50vh',
                '4/5vh': '80vh',
                '20': '5rem',
                '24': '6rem',
            },
            inset: {
                '1/4': '25%',
                '1/2': '50%',
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        maxWidth: "50ch",
                        hr: {
                            borderColor: theme("colors.oblivious"),
                            marginTop: "1.5em",
                            marginBottom: "1.5em"
                        },
                        "h1": {
                            fontWeight: "100"
                        },
                        p: {
                            marginTop: '0.5rem',
                            marginBottom: '0.5rem',
                        },
                    }
                },
                'lg': {
                    css: {
                        "h1": {
                            fontWeight: "100"
                        },
                        p: {
                            marginTop: '0.5rem',
                            marginBottom: '0.5rem',
                        },
                        hr: {
                            borderColor: theme("colors.oblivious"),
                            marginTop: "2.5em",
                            marginBottom: "2.5em"
                        }
                    },
                },
            }),
        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
    ]
}
