/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  prefix: '',
  mode: 'jit',
  important: false,
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    scrollbar: ['dark', 'rounded'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    'prettier-plugin-tailwindcss',
  ]
}
