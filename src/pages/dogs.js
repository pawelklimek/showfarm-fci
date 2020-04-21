import React from "react"
import Layout from "static/layout/layout";
import Image from "static/images/showfarm/showfarm-title.jpg";
import Maizy1 from "static/images/dogs/maizy1.jpg";
import Maizy2 from "static/images/dogs/maizy2.jpg";

import Title from "src/components/title/title";
import MainImage from "src/components/main-image/main-image";
import DogCard from "src/components/dog-card/dog-card";

const DogsPage = () => {
    return (
        <div>
            <Layout>
                <MainImage imgUrl={Image}/>
                <Title title={"Psy"}/>
                <DogCard
                    name={"Maizy"}
                    fullName={"Jr.Ch.Pl, Ch.Pl Showfarm Polish Vodka Maizy (Ch.Hearthside French Connection X Ch.Tanmark's Dreams Come True"}
                    description={`Ur. 14.05.2012<br/>" +
                    "Umaszczenie: blue merle\n" +
                    "HD: A/A   ED: 0/0  \n" +
                    "Badania:\n" +
                    "MDR1 +/+\n" +
                    "CEA - clear \n" +
                    "PRA - clear\n" +
                    "HFS4 - clear\n" +
                    "Uzębienie pełne, zgryz nożycowy\n" +
                    "Właściciel: Karolina Klimek`}
                    topImage={Maizy2}
                    bottomImage={Maizy1}
                />
            </Layout>
        </div>
    )
};

export default DogsPage
