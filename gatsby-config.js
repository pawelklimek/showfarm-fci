const path = require('path');
module.exports = {
    siteMetadata: {
        title: "ShowFarm FCI",
        description: "Hodowla owczarków australijkich Hodowla owczarka miniaturowego amerykańskiego"
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-smoothscroll`,
        `react-animate-on-scroll`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Manrope`
                ],
                display: 'swap'
            }
        },
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                src: path.join(__dirname, 'src'),
                static: path.join(__dirname, 'static')
            }
        }
    ]
};

