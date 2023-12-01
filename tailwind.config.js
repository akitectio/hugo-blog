/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: 'tw-',
    mode: 'jit',
    content: ['./layouts/**/*.html'],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
            '3xl': '1920px',
        },
        extend: {
            width: {
                '3/5': '60%',
                '2/5': '40%',
            }
        },
    },
    plugins: []
}