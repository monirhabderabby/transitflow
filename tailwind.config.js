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
            background: {
                "gradient-primary":
                    "linear-gradient(90deg, rgba(255,190,52,1) 0%, rgba(255,218,86,1) 50%, rgba(255,215,166,1) 100%)",
            },
        },
    },
    plugins: [],
};
