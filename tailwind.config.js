/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary1: "#FFBE34",
                primary2: "#091242",
                secondary1: "#F4F4f4",
                headingColor: "#1C1F35",
                paragraphColor: "#666C89",
            },
            backgroundImage: {
                airplace:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbOyxTqVZ6VAbHYQb9iFB1s-65e-WEbJHugPK4YvJc&s",
            },
        },
    },
    plugins: [],
};
