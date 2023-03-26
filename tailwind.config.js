module.exports = {
    mode: 'jit',
    content: [
        './build/**/*.{js,html}',
        './_site/**/*.{js,html}',
        './src/**/*.{js,html}',
    ],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Balsamiq Sans']
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}