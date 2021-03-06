module.exports = {
    content: ['./pages/**/*.tsx', './components/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
    },
    darkMode: 'media',
    plugins: [require('@tailwindcss/forms')],
}
