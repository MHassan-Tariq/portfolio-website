tailwind.config = {
    theme: {
      extend: {
        gridTemplateColumns: {
          auto: "repeat(auto-fit, minmax(200px,1fr))",
        },
        fontFamily: {
          outfit: ["Outfit", "sans-serif"],
          Ovo: ["Ovo", "serif"],
        },
        animation: {
          spin_slow: "spin 6s linear infinite",
        },
        colors: {
          lighthover: "#fcf4ff",
          darkhover: "#2a004a",
          darktheme: "#000",
        },
        boxShadow: {
          black: "4px 4px 0 #000",
          white: "4px 4px 0 #fff",
        },
      },
    },
    darkMode: "class", // Change 'selector' to 'class'
  };
  