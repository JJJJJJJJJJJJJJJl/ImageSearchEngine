import {ReactElement, useEffect, useState} from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';


export default function Home(): ReactElement{

    return (
    <Layout>
        <h1>Hi citizen of the world!</h1>
        <SearchBar ph={"slatº,~:`-"}></SearchBar>
    </Layout>
    );
};
