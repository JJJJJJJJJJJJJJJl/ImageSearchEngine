import React from 'react';
import { ReactElement, useEffect} from 'react';
import Layout from '../components/Layout';
import ImagesShowcase from '../components/ImagesShowcase';
import Link from 'next/link';
import { GlobalContext } from '../context/GlobalContext';

export default function Home(): ReactElement{
    const { images, set_images, images_url, set_images_url, MAX_IMAGE_UPLOAD } = React.useContext(GlobalContext);

    useEffect(() => {
        const images_size: number = images.length;
        if(images_size > 0 && images_size < MAX_IMAGE_UPLOAD+1){
            const new_images_url = new Array<string>(MAX_IMAGE_UPLOAD);
            var index: number = 0;
            while(index < images_size){
                new_images_url.push(URL.createObjectURL(images[index++]));
            }
            set_images_url(new_images_url);
        }
        else if(images_size > 0){
            alert("You can only upload up to " + MAX_IMAGE_UPLOAD + " images.");
        }
        else{
            return;
        }
    },
    [images]);

    function on_image_change(e): void{
        set_images([...e.target.files]);
        return null;
    };

    function get_form(): FormData{
        if(images.length == 0){
            return null;
        }
        let form = new FormData();
        let image_number = 0;
        for(let image of images){
            form.append(images[image_number++]["name"].toString(), image);
        }
        return form;
    }

    async function send_images(): Promise<void>{
        const form = get_form();
        if(form == null) {
            alert("You might want to add some images");
            return null;
        }
        const res = await fetch("http://localhost:7777/submit_data", {
            method: "POST",
            body: form
        });
        /* 
            TODO: add loading screen page while waiting for response.
            *So I remember later* Reason: wait while model processes
            and add images to trie
        */
        console.log("res: " + res);
        return null;
    }

    return (
        <Layout>
            <div className="flex justify-between">
                <label className="bg-pink-200 text-slate-700 px-4 py-3 m-1 hover:cursor-pointer">
                    <input type="file" multiple accept="image/*" onChange={on_image_change} className="text-red-600 hidden"/>
                    Choose your images
                </label>
                {/* 
                    TODO: create component for button (add it to searchbar component aswell);
                */}
                <Link href="/search">
                    <button onClick={send_images} className="px-4 py-3 m-1 text-slate-700 bg-pink-200">Submit</button>
                </Link>
            </div>
            <ImagesShowcase images_url={images_url}/>
        </Layout>
    );
};
