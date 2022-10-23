import React from 'react';
import {useState, ReactElement} from "react";
import { GlobalContext } from '../context/GlobalContext';

export default function SearchBar({ph}: {ph: string}): ReactElement {
    const [query, set_query] = useState<string | null>();
    const { images, set_images_url } = React.useContext(GlobalContext);

    // when user input query changes
    function handle_query_change(event: React.ChangeEvent<HTMLInputElement>): void{
        send_query(event.target.value);
        set_query(query);
        return null;
    };

    // when use clicks on magnifier icon
    function submit_query(): void{
        send_query(query);
        return null;
    }

    async function send_query(input: string): Promise<void>{
        const res = await fetch(`http://localhost:7777/query?input=${input}`, {
            method: "GET"
        });
        const response = await res.json();

        /* 
            TODO: find a better place for this, or maybe turn this
            into a function
        */
        const imgtd: Array<string> = [];
        for(let i=0; i<images.length; i++){
            if(response.includes(images[i]["name"])){
                imgtd.push(URL.createObjectURL(images[i]));
            }
        }
        set_images_url(imgtd);

        return null;
    }

    return (
        <div className="flex justify-between w-3/4 mx-auto">
            <input
                type="text"
                className="block w-1/3 px-4 py-2 text-purple-300 bg-white border_lean"
                placeholder={ph}
                onChange={handle_query_change}
            />
            <button className="px-4 text-white bg-pink-200" onClick={submit_query}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </button>
        </div>
    );
}