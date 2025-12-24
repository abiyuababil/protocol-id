/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#1152d4",
                "protocol-primary": "#2b6cee",
                "background-light": "#f6f6f8",
                "background-dark": "#101622",
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"],
                "public": ["Public Sans", "sans-serif"],
                "body": ["Noto Sans", "sans-serif"],
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
        },
    },
    plugins: [
        require('@tailwindcss/container-queries'),
    ],
}
