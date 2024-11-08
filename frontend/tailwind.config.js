/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../consulting_site/templates/**/*.html',
    // Add other paths if necessary
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
