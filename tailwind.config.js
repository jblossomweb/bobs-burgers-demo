/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('./src/app/colors.json')

module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { colors },
  },
  plugins: [],
}
