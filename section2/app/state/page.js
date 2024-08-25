"use client";

import { useState } from "react";

export default function Statemgmt() {

    const [count, setCount] = useState(0);
    const increment = () => {
        if(count < 10){
            setCount(count + 1);
        }
    }
    const decrement = () => {
        if(count > 0){
            setCount(count - 1);
        }   
    }

    return (
      <main className="flex justify-center items-center min-h-screen">
        <div>
        <h1>State Management</h1>
        
        <div>
            Count : {count}
        </div>
        <div>
            <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            
            onClick={increment}>
                Increment
            
            </button>
            <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            
            onClick={decrement}>
                Decrement
            
            </button>
        </div>
        </div>
      </main>
    );
}