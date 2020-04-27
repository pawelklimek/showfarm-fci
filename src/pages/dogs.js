import React from "react"
import Layout from "static/layout/layout";
import DogCard from "src/components/dog-card/dog-card";
import {Dogs} from "static/dogs";
import DogScrollNavi from "src/components/dog-scroll-navi/dog-scroll-navi";


const DogsPage = () => {
    return (
        <div>
            <Layout>
                <div>
                <DogScrollNavi/>
                <div id='joy'/>
                <DogCard
                    name={Dogs.Joy.name}
                    fullName={Dogs.Joy.fullName}
                    description={Dogs.Joy.description}
                    topImage={Dogs.Joy.topImage}
                    bottomImage={Dogs.Joy.bottomImg}>
                </DogCard>
                <div id='dora'/>
                <DogCard
                    name={Dogs.Dora.name}
                    fullName={Dogs.Dora.fullName}
                    description={Dogs.Dora.description}
                    topImage={Dogs.Dora.topImage}
                    bottomImage={Dogs.Dora.bottomImg}/>
                <div id='maizy'/>
                <DogCard
                    name={Dogs.Maizy.name}
                    fullName={Dogs.Maizy.fullName}
                    description={Dogs.Maizy.description}
                    topImage={Dogs.Maizy.topImage}
                    bottomImage={Dogs.Maizy.bottomImg}/>
                <div id='mora'/>
                <DogCard
                    name={Dogs.Mora.name}
                    fullName={Dogs.Mora.fullName}
                    description={Dogs.Mora.description}
                    topImage={Dogs.Mora.topImage}
                    bottomImage={Dogs.Mora.bottomImg}/>
                <div id='abi'/>
                <DogCard
                    name={Dogs.Abi.name}
                    fullName={Dogs.Abi.fullName}
                    description={Dogs.Abi.description}
                    topImage={Dogs.Abi.topImage}
                    bottomImage={Dogs.Abi.bottomImg}/>
                <div id='jaga'/>
                <DogCard
                    name={Dogs.Jaga.name}
                    fullName={Dogs.Jaga.fullName}
                    description={Dogs.Jaga.description}
                    topImage={Dogs.Jaga.topImage}
                    bottomImage={Dogs.Jaga.bottomImg}/>
                <div id='dakota'/>
                <DogCard
                    name={Dogs.Dakota.name}
                    fullName={Dogs.Dakota.fullName}
                    description={Dogs.Dakota.description}
                    topImage={Dogs.Dakota.topImage}
                    bottomImage={Dogs.Dakota.bottomImg}/>
                <div id='ruby'/>
                <DogCard
                    name={Dogs.Ruby.name}
                    fullName={Dogs.Ruby.fullName}
                    description={Dogs.Ruby.description}
                    topImage={Dogs.Ruby.topImage}
                    bottomImage={Dogs.Ruby.bottomImg}/>
                <div id='brag'/>
                <DogCard
                    name={Dogs.Brag.name}
                    fullName={Dogs.Brag.fullName}
                    description={Dogs.Brag.description}
                    topImage={Dogs.Brag.topImage}
                    bottomImage={Dogs.Brag.bottomImg}/>
                </div>
            </Layout>
        </div>
    )
};

export default DogsPage
