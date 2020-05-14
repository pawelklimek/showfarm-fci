import React from 'react';
import {Helmet} from "react-helmet";

const MetaData = (props) => {
    return (
        <Helmet>
            <title>{props.title}</title>
            <meta charSet="utf-8"/>
            <meta name="description" content={props.description}/>
            <meta name="google-site-verification" content="1Bnxk1HkOuqMKLSnaWjQjmUrRPuPjmYU7Drig_giJhE"/>
            <meta name="author" content="Paweł Klimek"/>
            <meta name="robots" content="index,follow"/>
            <meta name="googlebot" content="all"/>
            <meta property="og:title" content="Showfarm FCI"/>
            <meta property="og:type" content="website"/>
            <meta property="og:description" content={props.description}/>
            <meta property="og:locale" content="pl_PL"/>
            <meta property="og:url" content="http://www.showfarm.pl"/>
            <link rel="canonical" href="http://www.showfarm.pl"/>
        </Helmet>
    )
};

export default MetaData;
