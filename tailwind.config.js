/** @type {import('tailwindcss').Config} */
export default  {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        Primary:"#6e5515",
        Back:"#050505",
        Secondery:"#688265",
        T_2:"#725136" ,
        im:"#543c2f",
        Card:"#a1450b",
        Card2:"#ff7b00",
        Card3:"#823b0c",
        
        
        
        T:"#cc5902" ,
        navText:"#f7f6ef",
        nav:"#cc5902",
        
        
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
