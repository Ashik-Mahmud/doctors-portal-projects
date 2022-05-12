module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {}, 
      fontFamily: {
        montserrat: ['Montserrat', 'poppins'],
        poppins: ['poppins', 'Montserrat'],
      },
    },
    plugins: [require("daisyui")],
    daisyui: {
        styled: true,
        themes: [
            {
              doctorsTheme: {
                primary: "#0FCFEC",
                secondary: "#19D3AE",
                accent: "#3A4256",
                "base-100": "#ffffff",
              },
            },
           
        ],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "light",
    },
}