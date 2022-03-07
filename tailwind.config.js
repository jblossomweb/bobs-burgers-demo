/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('./src/app/colors.json')

module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      keyframes: {
        fadein: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        fadein: 'fadein 0.333s',
      },
    },
  },
  plugins: [],
}
