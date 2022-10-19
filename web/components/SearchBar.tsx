import {useState, ReactElement} from "react";

export default function SearchBar({ph}: {ph: string}): ReactElement {
    const [query, set_query] = useState<string | null>();

    // when user input query changes
    function handle_query_change(event: React.ChangeEvent<HTMLInputElement>): void{
        send_query(event.target.value);
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
        console.log(response[0]);
        //ACCESS response urls like this -> response[0], response[1], response[..]...
        return null;
    }

    return (
        <div className="flex items-center mx-10 my-10">
            <div className="flex space-x-1">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-red-700 bg-white border focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder={ph}
                    onChange={handle_query_change}
                />
                <button className="px-4 text-white bg-red-600" onClick={submit_query}>
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
        </div>
    );
}