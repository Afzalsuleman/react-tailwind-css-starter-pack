import { useState } from "react";
import "./App.css";

function App() {
  const[count,setCount]=useState(0);
  function decHandler(){
      setCount(count-1);
  }
  function incHandler(){
    setCount(count+1);
}
function resetHnadler(){
  setCount(0);
}
  return (
    <div className="w-[100vw], h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-2xl">Increment & Decrement</div>
      <div className="flex bg-white justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
          -
        </button>
        <div className="font-bold gap-12 text-5xl">
            {count}
        </div>
        <button onClick={incHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
          +
        </button>
      </div>
      <button onClick={resetHnadler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">  
        Reset
      </button>
    </div>
    // <main className="flex justify-center gap-4 flex-col min-h-screen">
    //   <h1 className="text-3xl text-center font-bold underline">React & Tailwind CSS Starter Pack</h1>
    //   <p className="text-center text-xl">This is a starter pack for React & Tailwind CSS projects.</p>
    //   <img src="https://bit.ly/3wsmzTy" alt="meme" className="mx-auto" />
    // </main>
  );
}

export default App;
