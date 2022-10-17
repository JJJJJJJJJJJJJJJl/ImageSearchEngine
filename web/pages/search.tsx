import {ReactElement, useEffect, useState} from 'react';
import SearchBar from '../components/SearchBar';


export default function Home(): ReactElement{

    return (
    <div>
        <h1>Hi citizen of the world!</h1>
        <SearchBar ph={"slatº,~:`-"}></SearchBar>
    </div>
    );
};
