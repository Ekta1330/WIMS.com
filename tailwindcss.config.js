/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
      extend: {
        // Your custom theme configurations here
      },
    },
    plugins: [
      require('@tailwindcss/forms'),         // Optional: Style forms
      require('@tailwindcss/typography'),    // Optional: Style rich text content
      require('@tailwindcss/aspect-ratio'),  // Optional: Maintain aspect ratios
    ],
  };
  