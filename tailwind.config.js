/** @type {import('tailwindcss').Config} */
export const content = [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
    extend: {},
};

module.exports = {
    theme: {
        extend:{
            backgroundImage: {
                'hero': "url('/storeImage.jpg')",
            }
        }
    }
}
export const plugins = [
    require('tailwind-scrollbar-hide')
];
  