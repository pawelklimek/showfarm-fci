const path = require('path');

module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-smoothscroll`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Manrope`
                ],
                display: 'swap'
            }
        }

        ,
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                src: path.join(__dirname, 'src'),
                static: path.join(__dirname, 'static')
            }
        }
    ]
};

