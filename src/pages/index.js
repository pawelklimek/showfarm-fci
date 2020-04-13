import React from "react"
import Layout from "../components/layout"
import "./index.scss"

const IndexPage = () => {
    return (
        <Layout>
            <div className="header-image"/>
            <div className="page-content">
                <div className="image-wrapper">
                    <div className="big-image"/>
                </div>
                <div className="content">
                    <div className="logo">
                        <h2 className="logo-title">Showfarm FCI</h2>
                        <p className="logo-sub-title">Owczarek Australijski </p>
                        <p className="logo-sub-title">Miniaturowy Owczarek Amerykański</p>
                    </div>
                    <p className="description"> Showfarm FCI to mała domowa hodowla owczarków australijskich,
                        która nierozłącznie wiąże się z miłością i pasją do psów. Wszystkie psy z naszej hodowli są
                        pełnoprawnymi członkami rodziny, które mieszkają z nami i towarzyszą nam w życiu codziennym.
                        Założycielką hodowli jestem ja, czyli Karolina Klimek. Prowadzę hodowlę w asyście
                        doświadczonych koleżanek - Magdaleny Sołtysiak oraz Celiny Grundland. Połączyła nas miłość
                        do owczarków, stąd wspólne dążenie do tego, aby psy pochodzące z naszej hodowli były nie
                        tylko zdrowe i piękne, ale przede wszystkim miały zrównoważone charaktery i były kochanymi
                        członkami rodziny!</p>
                    <div className="certification-logo">
                        <div className="fci-logo"/>
                        <div className="zk-logo"/>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default IndexPage
