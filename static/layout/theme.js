export const deviceSize = {
    tablet: `@media (min-width: 768px)`,
    laptop: `@media (min-width: 1024px)`,
    laptopL: `@media (min-width: 1224px)`
};

export const colors = {
    detailColor: '#D77926',
    backgroundColor: '#f2f2f2',
    mediumGray: '#888589',
    fontColorGray: '#333f4c',
};

export const effects = {
    shadow: `0 1px 1px rgba(0,0,0,0.11), 
             0 2px 2px rgba(0,0,0,0.11), 
             0 4px 4px rgba(0,0,0,0.11), 
             0 8px 8px rgba(0,0,0,0.11), 
             0 16px 16px rgba(0,0,0,0.11), 
             0 32px 32px rgba(0,0,0,0.11);`
};

export const theme = {
    colors,
    effects,
    media: {
        deviceSize
    }
};
