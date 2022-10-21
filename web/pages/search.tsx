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
            <SearchBar ph={"Query..."}></SearchBar>
            <ImagesShowcase images_url={images_url}/>
        </Layout>
    );
};
