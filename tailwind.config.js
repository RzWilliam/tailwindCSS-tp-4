module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      padding: {
        'p-xxs': '.125rem',
      },
      fontSize: {
        'xxs': '.5rem',
      },
      borderRadius: {
        'card': '.6rem',
      },
      backgroundColor: {
        'body': '#e9f1fa',
        'button' : '#141414',
        'card' : '#f7f7f7',
        'dark-card' : '#262226',
        'dark-button' : '#3f3f46',
      },
      rotate: {
        '30': '30deg',
      },
      width: {
        '84' : '21rem',
        '88' : '22rem',
        '92' : '23rem',
      },
      backgroundImage : {
        'bottom-card' : "url('https://images.pexels.com/photos/6975800/pexels-photo-6975800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
      }
    },
  },
  plugins: [],
  darkMode: "class",
};

