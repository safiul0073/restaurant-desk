module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      middle1Bg: '#BCDDD4',
      primary: '#519E8A',
      secondary: '#BCDDD4',
      gray: '#A7A7A7',
      blue: '#007657',
      black: '#000000',
      white: '#FFFFFF',
      TheadColor: '#748883',
      buttomButtonDarkLight: '#748883',
      red: '#CA054D',
      middleButtonFontColor: '#748883'
    },
    fontSize: {
      'mainButtonFontSize': '30px',
      'leftButtonFontSize': '24px',
      'smallFont': '10px',
      'extraSmall': '6px',
      'extraSmall2': '8px',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
     },
    extend: {
      width: {
        '1/3': '157px',
        'leftMainWidth': '10%',
        'middleWidth': '87.5%',
        'rigthWidth': '2.5%',
        'middle1': '47.6603%',
        'middle2': '22.5303%',
        'middle3': '29.809%',
        'width5%': '5%',
        'width3%': '3%',
        'width12%': '12%',
        'width20%': '20%',
        'width25%': '25%',
        'width30%': '30%',
        'width35%': '35%',
        'width40%': '40%',
        'width50%': '50%',
        'width55%': '55%',
        'width60%': '60%',
        'width70%': '70%',
        'width76%': '76%',
        'width65%': '65%',
        'width45%': '48%',
        'width80%': '80%',
        'width90%': '90%',
        'width94%': '94%',
        'width96%': '96%'
        
      },

      height: {
        'leftberButtonHeight': '8%',
        'topHeight': '5%',
        'middleHeight': '90%',
        'bottomHeight': '5%',
        'middle1SmallTableCollunmHeight': '7%',
        'middle1LongTableCollunmHeight': '79%',
        'height5%': '5%',
        'height9%': '9%',
        'height10%': '10%',
        'height14%': '14%',
        'height20%': '20%',
        'height25%': '25%',
        'height33%': '33%',
        'height64%': '64%',
        'height70%': '70%',
        'height75%': '75%',
        'height80%': '80%',
        'height35%': '35%',
        'height90%': '90%',
        'height96%': '96%',
        'height98%': '98%',
        'middle2ButtonHeight': '25%',
        'middle1BottomButtonHeight': '88%',
        'height18%': '18%',
        'height17%': '17%',
        'middle1MainAmountHeight': '18%',
        
      },
      borderRadius: {
        'none': '0',
       'sm': '0.125rem',
       DEFAULT: '0.25rem',
       DEFAULT: '4px',
       'md': '0.375rem',
       'lg': '0.5rem',
       'full': '9999px',
       'large': '12px',
       'middle1BottomRounded': '70px'
      },
      rotate: {
        '-180': '-180deg',
         '-90': '-90deg',
        '-45': '-45deg',
         '0': '0',
         '135': '-45deg',
         '45': '45deg',
         '90': '90deg',
        '135': '135deg',
         '180': '180deg',
        '270': '270deg',
       }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss"),
       require("autoprefixer")
  ],
};
