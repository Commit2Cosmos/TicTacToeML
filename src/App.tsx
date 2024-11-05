import { useState } from "react";
// import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
    const [board, setBoard] = useState(new Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(false);
    // const [name, setName] = useState("");

    // async function changeBoard() {
    //     // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    //     setBoard(await invoke("changeBoard", { board }));
    // }

    const handleBoardChange = (idx: number) => {
        if (board[idx]) return;
    
        const newBoard = [...board];
        isXTurn ? newBoard[idx] = 'X' : newBoard[idx] = 'O';
        setBoard(newBoard);
        setIsXTurn(prev => !prev);
    }

    const handleReset = () => {
        setBoard(new Array(9).fill(null));
    }

    return (
        <main className="h-screen w-screen flex justify-center items-start relative
        ">
            <div className="mt-[44vh] -translate-y-[50%] squares-container
            w-80 h-80
            sm:w-96 sm:h-96
            md:w-[30rem] md:h-[30rem]
            lg:w-[34rem] lg:h-[34rem]
            ">
                <div 
                    className="square s-t s-l"
                    onClick={() => handleBoardChange(0)}
                >
                    <div className={`${board[0] || ''}`}></div>
                </div>

                <div 
                    className="square s-t s-l s-r"
                    onClick={() => handleBoardChange(1)}
                >
                    <div className={`${board[1] || ''}`}></div>
                </div>

                <div 
                    className="square s-t s-r"
                    onClick={() => handleBoardChange(2)}
                >
                    <div className={`${board[2] || ''}`}></div>
                </div>

                <div 
                    className="square s-t s-b s-l"
                    onClick={() => handleBoardChange(3)}
                >
                    <div className={`${board[3] || ''}`}></div>
                </div>

                <div 
                    className="square s-t s-b s-l s-r"
                    onClick={() => handleBoardChange(4)}
                >
                    <div className={`${board[4] || ''}`}></div>
                </div>

                <div 
                    className="square s-t s-b s-r"
                    onClick={() => handleBoardChange(5)}
                >
                    <div className={`${board[5] || ''}`}></div>
                </div>

                <div 
                    className="square s-b s-l"
                    onClick={() => handleBoardChange(6)}
                >
                    <div className={`${board[6] || ''}`}></div>
                </div>

                <div 
                    className="square s-b s-l s-r"
                    onClick={() => handleBoardChange(7)}
                >
                    <div className={`${board[7] || ''}`}></div>
                </div>

                <div 
                    className="square s-b s-r"
                    onClick={() => handleBoardChange(8)}
                >
                    <div className={`${board[8] || ''}`}></div>
                </div>
            </div>
            <button onClick={handleReset} className="border-2 w-24 h-14">
                RESET
            </button>
        </main>
    );
}

export default App;
