import {useState, ReactElement} from "react";

export default function SearchBar({ph}: {ph: string}): ReactElement {
    const [query, on_query_change] = useState<string | null>("");

    function handle_query_change(event: React.ChangeEvent<HTMLInputElement>): void{
        on_query_change(event.target.value);
        return null;
    };

    return (
        <div className="flex items-center mx-10 my-10">
            <div className="flex space-x-1">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-red-700 bg-white border focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder={ph}
                    onChange={handle_query_change}
                    value={query}
                />
                <button className="px-4 text-white bg-red-600 ">
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