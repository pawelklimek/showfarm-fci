import React from "react"
import Layout from "static/layout/layout";
import MainImage from "src/components/main-image/main-image";
import PuppyTheme from "static/images/puppies/puppy-theme.jpg"

const PuppiesPage = () => {
    return (
        <div>
            <Layout>
                <MainImage imgUrl={PuppyTheme}/>
            </Layout>
        </div>
    )
};

export default PuppiesPage
