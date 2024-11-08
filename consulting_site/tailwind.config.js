/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './consulting_site/templates/**/*.html',
    './consulting_site/static/js/**/*.js',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
