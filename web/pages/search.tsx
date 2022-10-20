import React from 'react';
import {ReactElement} from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import ImagesShowcase from '../components/ImagesShowcase';
import { GlobalContext } from '../context/GlobalContext';

export default function Home(): ReactElement{
    const { images_url } = React.useContext(GlobalContext);

    return (
        <Layout>
            <h1>Hi citizen of the world!</h1>
            <SearchBar ph={"slatº,~:`-"}></SearchBar>
            <ImagesShowcase images_url={images_url}/>
        </Layout>
    );
};
