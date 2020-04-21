import React from "react"
import Layout from "static/layout/layout";
import Image from "static/images/showfarm/showfarm-title.jpg";
import Title from "src/components/title/title";
import MainImage from "src/components/main-image/main-image";
import DogCard from "src/components/dog-card/dog-card";
import {Dogs} from "static/dogs";

const DogsPage = () => {
    return (
        <div>
            <Layout>
                <MainImage imgUrl={Image}/>
                <Title title={"Psy"}/>
                <DogCard
                    name={Dogs.Joy.name}
                    fullName={Dogs.Joy.fullName}
                    description={Dogs.Joy.description}
                    topImage={Dogs.Joy.topImage}
                    bottomImage={Dogs.Joy.bottomImg}/>
                <DogCard
                    name={Dogs.Dora.name}
                    fullName={Dogs.Dora.fullName}
                    description={Dogs.Dora.description}
                    topImage={Dogs.Dora.topImage}
                    bottomImage={Dogs.Dora.bottomImg}/>
                <DogCard
                    name={Dogs.Maizy.name}
                    fullName={Dogs.Maizy.fullName}
                    description={Dogs.Maizy.description}
                    topImage={Dogs.Maizy.topImage}
                    bottomImage={Dogs.Maizy.bottomImg}/>
                <DogCard
                    name={Dogs.Mora.name}
                    fullName={Dogs.Mora.fullName}
                    description={Dogs.Mora.description}
                    topImage={Dogs.Mora.topImage}
                    bottomImage={Dogs.Mora.bottomImg}/>
                <DogCard
                    name={Dogs.Abi.name}
                    fullName={Dogs.Abi.fullName}
                    description={Dogs.Abi.description}
                    topImage={Dogs.Abi.topImage}
                    bottomImage={Dogs.Abi.bottomImg}/>
                <DogCard
                    name={Dogs.Jaga.name}
                    fullName={Dogs.Jaga.fullName}
                    description={Dogs.Jaga.description}
                    topImage={Dogs.Jaga.topImage}
                    bottomImage={Dogs.Jaga.bottomImg}/>
                <DogCard
                    name={Dogs.Dakota.name}
                    fullName={Dogs.Dakota.fullName}
                    description={Dogs.Dakota.description}
                    topImage={Dogs.Dakota.topImage}
                    bottomImage={Dogs.Dakota.bottomImg}/>
                <DogCard
                    name={Dogs.Ruby.name}
                    fullName={Dogs.Ruby.fullName}
                    description={Dogs.Ruby.description}
                    topImage={Dogs.Ruby.topImage}
                    bottomImage={Dogs.Ruby.bottomImg}/>
                <DogCard
                    name={Dogs.Breg.name}
                    fullName={Dogs.Breg.fullName}
                    description={Dogs.Breg.description}
                    topImage={Dogs.Breg.topImage}
                    bottomImage={Dogs.Breg.bottomImg}/>
            </Layout>
        </div>
    )
};

export default DogsPage
