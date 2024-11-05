// import { useState } from "react";
// import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
//   const [greetMsg, setGreetMsg] = useState("");
//   const [name, setName] = useState("");

//   async function greet() {
//     // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
//     setGreetMsg(await invoke("greet", { name }));
//   }

  return (
        <main className="h-screen w-screen flex justify-center items-start relative
        ">
            <div className="mt-[44vh] -translate-y-[50%] squares-container
            w-80 h-80
            sm:w-96 sm:h-96
            md:w-[30rem] md:h-[30rem]
            lg:w-[34rem] lg:h-[34rem]
            ">
                <div className="square s-t s-l"><div></div></div>
                <div className="square s-t s-l s-r"><div></div></div>
                <div className="square s-t s-r"><div></div></div>

                <div className="square s-t s-b s-l"><div></div></div>
                <div className="square s-t s-b s-l s-r"><div></div></div>
                <div className="square s-t s-b s-r"><div></div></div>

                <div className="square s-b s-l"><div></div></div>
                <div className="square s-b s-l s-r"><div></div></div>
                <div className="square s-b s-r"><div></div></div>
            </div>
        </main>
  );
}

export default App;
