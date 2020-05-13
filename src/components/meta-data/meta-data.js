import React from 'react';
import {Helmet} from "react-helmet";

const MetaData = () => {
    return (
        <Helmet>
            <title>Showfarm FCI</title>
            <meta charSet="utf-8"/>
            <meta name="description" content="Showfarm FCI domowa hodowla owczarków australijskich"/>
            <meta name="keywords"
                  content="showfarm, showfarm fci, hodowla, Owczarek Australijski, Miniaturowy Owczarek Amerykański"/>
            <meta name="google-site-verification" content="1Bnxk1HkOuqMKLSnaWjQjmUrRPuPjmYU7Drig_giJhE"/>
            <meta property="og:title" content="Showfarm FCI"/>
            <meta property="og:type" content="website"/>
            <meta property="og:description" content="Showfarm FCI domowa hodowla owczarków australijskich"/>
            <meta property="og:locale" content="pl_PL"/>
            <meta property="og:url" content="http://www.showfarm.pl"/>
            <link rel="canonical" href="http://www.showfarm.pl"/>
        </Helmet>
    )
};

export default MetaData;
