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
                'book': '60rem'
            },
            inset: {
                '1/4': '25%',
                '1/2': '50%',
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        maxWidth: "50ch",
                        a: {
                            textDecoration: "none"
                        },
                        hr: {
                            borderColor: theme("colors.oblivious"),
                            marginTop: "1.5em",
                            marginBottom: "1.5em"
                        },
                        "h1": {
                            fontWeight: "100"
                        },
                        "h2": {
                            margin: 0
                        },
                        p: {
                            marginTop: '0.5rem',
                            marginBottom: '0.5rem',
                        },
                        img: {
                            // position: "relative",
                            // left: "50%",
                            // right: "50%",
                            // marginLeft: "-50vw",
                            // marginRight: "-50vw",
                            // maxWidth: "100vw",
                            // width: "100vw"
                            cursor: theme("cursor['zoom-in']")
                        }
                    }
                },
                'xl': {
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
            cursor: {
                "zoom-in": "zoom-in",
                "zoom-out": "zoom-out"
            }
        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
    ]
}
