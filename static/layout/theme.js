export const deviceSize = {
    mobileS: `(min-width: 320px)`,
    mobileM: `(min-width: 375px)`,
    mobileL: `(min-width: 425px)`,
    tablet: ` (min-width: 768px)`,
    laptop: `(min-width: 1024px)`,
    laptopL: `(min-width: 1224px)`,
    desktop: `(min-width: 1440px)`,
    desktopL: `(min-width: 2560px)`
};

export const colors = {
    darkGold: '#b29a36',
    backgroundColor: '#f2f2f2',
    mediumGray: '#888589',
    fontColorGray: '#474448',
    color1: '#c7bab8',
    color2: '#d5a482',
    color3: '#592E21',
    color4: '#734b4b',
    color5: '#684D45',
};

export const effects = {
    shadow: `0 1px 1px rgba(0,0,0,0.11), 
             0 2px 2px rgba(0,0,0,0.11), 
             0 4px 4px rgba(0,0,0,0.11), 
             0 8px 8px rgba(0,0,0,0.11), 
             0 16px 16px rgba(0,0,0,0.11), 
             0 32px 32px rgba(0,0,0,0.11);`,
    animation: {
        text: `animation: tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
                @keyframes tracking-in-expand {
                0% {
                letter-spacing: -0.5em;
                opacity: 0;
                }
                40% {
                opacity: 0.6;
                }
                100% {
                opacity: 1;
                }
                }`,
        entranceRight: `animation: fade-in-right 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
@keyframes fade-in-right {
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
`,
        entranceLeft: `animation: fade-in-left 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
@keyframes fade-in-left {
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
`, entranceTop: `animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
@keyframes fade-in-top {
 0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
`
        , entranceBottom: `animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
@keyframes fade-in-bottom {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
`
    }
};

export const theme = {
    colors,
    effects,
    font: {
        thin: 100,
        regular: 300
    },
    media: {
        deviceSize
    }
};
