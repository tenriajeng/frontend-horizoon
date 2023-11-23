/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    theme: {
        screens: {
            xs: '0px',
            // => @media (min-width: 0px) { ... }

            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        maxWidth: '100ch', // add required value here
                    },
                },
                'dark-mode': {
                    css: {
                        '--tw-prose-body': theme('colors.gray[200]'),
                        '--tw-prose-headings': theme('colors.white'),
                        '--tw-prose-lead': theme('colors.gray[300]'),
                        '--tw-prose-links': theme('colors.cyan[400]'),
                        '--tw-prose-bold': theme('colors.cyan[400]'),
                        '--tw-prose-counters': theme('colors.gray[400]'),
                        '--tw-prose-bullets': theme('colors.gray[300]'),
                        '--tw-prose-hr': theme('colors.gray[400]'),
                        '--tw-prose-quotes': theme('colors.gray[300]'),
                        '--tw-prose-quote-borders': theme('colors.gray[300]'),
                        '--tw-prose-captions': theme('colors.gray[300]'),
                        '--tw-prose-code': theme('colors.cyan[400]'),
                        '--tw-prose-pre-code': theme('colors.cyan[400]'),
                        '--tw-prose-pre-bg': theme('colors.gray[900]'),
                        '--tw-prose-th-borders': theme('colors.gray[400]'),
                        '--tw-prose-td-borders': theme('colors.gray[400]'),
                        '--tw-prose-invert-body': theme('colors.black'),
                        '--tw-prose-invert-headings': theme('colors.white'),
                        '--tw-prose-invert-lead': theme('colors.gray[100]'),
                        '--tw-prose-invert-links': theme('colors.cyan[400]'),
                        '--tw-prose-invert-bold': theme('colors.cyan[400]'),
                        '--tw-prose-invert-counters': theme('colors.gray[200]'),
                        '--tw-prose-invert-bullets': theme('colors.gray[300]'),
                        '--tw-prose-invert-hr': theme('colors.gray[200]'),
                        '--tw-prose-invert-quotes': theme('colors.gray[300]'),
                        '--tw-prose-invert-quote-borders':
                            theme('colors.gray[200]'),
                        '--tw-prose-invert-captions': theme('colors.gray[200]'),
                        '--tw-prose-invert-code': theme('colors.cyan[400]'),
                        '--tw-prose-invert-pre-code': theme('colors.cyan[400]'),
                        '--tw-prose-invert-pre-bg': 'rgba(0, 0, 0, 0.5)',
                        '--tw-prose-invert-th-borders':
                            theme('colors.gray[300]'),
                        '--tw-prose-invert-td-borders':
                            theme('colors.gray[400]'),
                    },
                },
                'dark-cyan': {
                    css: {
                        '--tw-prose-body': theme('colors.cyan[400]'),
                        '--tw-prose-headings': theme('colors.cyan[600]'),
                        '--tw-prose-lead': theme('colors.cyan[300]'),
                        '--tw-prose-links': theme('colors.cyan[600]'),
                        '--tw-prose-bold': theme('colors.cyan[600]'),
                        '--tw-prose-counters': theme('colors.cyan[200]'),
                        '--tw-prose-bullets': theme('colors.cyan[100]'),
                        '--tw-prose-hr': theme('colors.cyan[100]'),
                        '--tw-prose-quotes': theme('colors.cyan[600]'),
                        '--tw-prose-quote-borders': theme('colors.cyan[100]'),
                        '--tw-prose-captions': theme('colors.cyan[300]'),
                        '--tw-prose-code': theme('colors.cyan[600]'),
                        '--tw-prose-pre-code': theme('colors.cyan[100]'),
                        '--tw-prose-pre-bg': theme('colors.cyan[600]'),
                        '--tw-prose-th-borders': theme('colors.cyan[100]'),
                        '--tw-prose-td-borders': theme('colors.cyan[200]'),
                        '--tw-prose-invert-body': theme('colors.cyan[200]'),
                        '--tw-prose-invert-headings': theme('colors.white'),
                        '--tw-prose-invert-lead': theme('colors.cyan[100]'),
                        '--tw-prose-invert-links': theme('colors.white'),
                        '--tw-prose-invert-bold': theme('colors.white'),
                        '--tw-prose-invert-counters': theme('colors.cyan[300]'),
                        '--tw-prose-invert-bullets': theme('colors.cyan[400]'),
                        '--tw-prose-invert-hr': theme('colors.cyan[500]'),
                        '--tw-prose-invert-quotes': theme('colors.cyan[100]'),
                        '--tw-prose-invert-quote-borders':
                            theme('colors.cyan[500]'),
                        '--tw-prose-invert-captions': theme('colors.cyan[300]'),
                        '--tw-prose-invert-code': theme('colors.cyan[600]'),
                        '--tw-prose-invert-pre-code': theme('colors.cyan[100]'),
                        '--tw-prose-invert-pre-bg': theme('colors.white'),
                        '--tw-prose-invert-th-borders':
                            theme('colors.cyan[400]'),
                        '--tw-prose-invert-td-borders':
                            theme('colors.cyan[500]'),
                    },
                },
                cyan: {
                    css: {
                        '--tw-prose-body': theme('colors.cyan[800]'),
                        '--tw-prose-headings': theme('colors.cyan[900]'),
                        '--tw-prose-lead': theme('colors.cyan[700]'),
                        '--tw-prose-links': theme('colors.cyan[900]'),
                        '--tw-prose-bold': theme('colors.cyan[900]'),
                        '--tw-prose-counters': theme('colors.cyan[600]'),
                        '--tw-prose-bullets': theme('colors.cyan[400]'),
                        '--tw-prose-hr': theme('colors.cyan[300]'),
                        '--tw-prose-quotes': theme('colors.cyan[900]'),
                        '--tw-prose-quote-borders': theme('colors.cyan[300]'),
                        '--tw-prose-captions': theme('colors.cyan[700]'),
                        '--tw-prose-code': theme('colors.cyan[900]'),
                        '--tw-prose-pre-code': theme('colors.cyan[100]'),
                        '--tw-prose-pre-bg': theme('colors.cyan[900]'),
                        '--tw-prose-th-borders': theme('colors.cyan[300]'),
                        '--tw-prose-td-borders': theme('colors.cyan[200]'),
                        '--tw-prose-invert-body': theme('colors.cyan[200]'),
                        '--tw-prose-invert-headings': theme('colors.white'),
                        '--tw-prose-invert-lead': theme('colors.cyan[300]'),
                        '--tw-prose-invert-links': theme('colors.white'),
                        '--tw-prose-invert-bold': theme('colors.white'),
                        '--tw-prose-invert-counters': theme('colors.cyan[400]'),
                        '--tw-prose-invert-bullets': theme('colors.cyan[600]'),
                        '--tw-prose-invert-hr': theme('colors.cyan[700]'),
                        '--tw-prose-invert-quotes': theme('colors.cyan[100]'),
                        '--tw-prose-invert-quote-borders':
                            theme('colors.cyan[700]'),
                        '--tw-prose-invert-captions': theme('colors.cyan[400]'),
                        '--tw-prose-invert-code': theme('colors.white'),
                        '--tw-prose-invert-pre-code': theme('colors.cyan[300]'),
                        '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
                        '--tw-prose-invert-th-borders':
                            theme('colors.cyan[600]'),
                        '--tw-prose-invert-td-borders':
                            theme('colors.cyan[700]'),
                    },
                },
                pink: {
                    css: {
                        '--tw-prose-body': theme('colors.pink[800]'),
                        '--tw-prose-headings': theme('colors.pink[900]'),
                        '--tw-prose-lead': theme('colors.pink[700]'),
                        '--tw-prose-links': theme('colors.pink[900]'),
                        '--tw-prose-bold': theme('colors.pink[900]'),
                        '--tw-prose-counters': theme('colors.pink[600]'),
                        '--tw-prose-bullets': theme('colors.pink[400]'),
                        '--tw-prose-hr': theme('colors.pink[300]'),
                        '--tw-prose-quotes': theme('colors.pink[900]'),
                        '--tw-prose-quote-borders': theme('colors.pink[300]'),
                        '--tw-prose-captions': theme('colors.pink[700]'),
                        '--tw-prose-code': theme('colors.pink[900]'),
                        '--tw-prose-pre-code': theme('colors.pink[100]'),
                        '--tw-prose-pre-bg': theme('colors.pink[900]'),
                        '--tw-prose-th-borders': theme('colors.pink[300]'),
                        '--tw-prose-td-borders': theme('colors.pink[200]'),
                        '--tw-prose-invert-body': theme('colors.pink[200]'),
                        '--tw-prose-invert-headings': theme('colors.white'),
                        '--tw-prose-invert-lead': theme('colors.pink[300]'),
                        '--tw-prose-invert-links': theme('colors.white'),
                        '--tw-prose-invert-bold': theme('colors.white'),
                        '--tw-prose-invert-counters': theme('colors.pink[400]'),
                        '--tw-prose-invert-bullets': theme('colors.pink[600]'),
                        '--tw-prose-invert-hr': theme('colors.pink[700]'),
                        '--tw-prose-invert-quotes': theme('colors.pink[100]'),
                        '--tw-prose-invert-quote-borders':
                            theme('colors.pink[700]'),
                        '--tw-prose-invert-captions': theme('colors.pink[400]'),
                        '--tw-prose-invert-code': theme('colors.white'),
                        '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
                        '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
                        '--tw-prose-invert-th-borders':
                            theme('colors.pink[600]'),
                        '--tw-prose-invert-td-borders':
                            theme('colors.pink[700]'),
                    },
                },
            }),
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [
        'prettier-plugin-tailwindcss',
        require('tailwindcss-animate'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
};
