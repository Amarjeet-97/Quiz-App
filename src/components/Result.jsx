import React, { useContext } from "react";
import { QuizContext } from "../context/QuizHolder";
export default function Result(){
    const {correct,setExit,setStart,quizes} =useContext(QuizContext)
    const playAgain=()=>{
        setExit(false)
        setStart(false)
    }
    return(
        
        <>
            <div className='w-full h-screen flex justify-center items-center'>
                <div className="w-[50%] border shadow-lg rounded-md overflow-hidden text center p-3">
                    <h2 className="text-4xl p-3 my-2">{correct} are correct out of {quizes.length}</h2>
                    <button onClick={playAgain} className="border border-orange-300 p-3 text-5xl rounded mx-20">Play Again</button>
                </div>
            </div>
        </>
    )
}