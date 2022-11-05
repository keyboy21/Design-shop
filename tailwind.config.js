/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors:{
      'blue-for-admin':"#3D639D",
      'white-for-admin':"#FFFFFF",
      "Notification":"#BBC2D0",
      "Primarygreen":"#00C48C",
      "Content":"#F3F5F8",
      "ProductBackground":"#F7F7F7",
      "Extra":"#FF647C"
    },
  },
  variants:{
    backgroundColor:['active']
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
