import React, { useContext, useState } from "react";
import { QuizContext } from "../context/QuizHolder";
export default function Quiz(){
    const [current, setCurrent]= useState(0)
    const {correct} =useContext(QuizContext);

    return(
        <div className='w-full h-screen flex justify-center items-center'>
            
            <Box current={current} next={setCurrent}/>
        </div>
    )
}

const Box=({current, next})=>{
    const {quizes,correct,setCorrect,setExit}= useContext(QuizContext)
    const [ans, setAns]= useState("");
    // console.log(quizes[current]);

    const saveHandller=()=>{
        if(quizes[current].correct==ans){
            setCorrect(correct+1);
        }
        setAns("");
        if(current+1=== quizes.length){
            setExit(true);
        }
        next(current+1);
    }
    return(
        <div className="w-[50%] border shadow-lg rounded-md overflow-hidden">
            <div className='p-2 text-3xl mt-2'>
                {quizes[current].question}
            </div>
            <div className="grid grid-cols-2 mt-3">
                <div className={`p-2 border ${ans==="a"? 'bg-blue-400 text-white':''} hover:bg-blue-400 hover:text-white cursor-pointer`} onClick={()=>setAns("a")}>{quizes[current].a}</div>
                <div className={`p-2 border ${ans==="b"? 'bg-blue-400 text-white':''} hover:bg-blue-400 hover:text-white cursor-pointer`} onClick={()=>setAns("b")}>{quizes[current].b}</div>
                <div className={`p-2 border ${ans==="c"? 'bg-blue-400 text-white':''} hover:bg-blue-400 hover:text-white cursor-pointer`} onClick={()=>setAns("c")}>{quizes[current].c}</div>
                <div className={`p-2 border ${ans==="d"? 'bg-blue-400 text-white':''} hover:bg-blue-400 hover:text-white cursor-pointer`} onClick={()=>setAns("d")}>{quizes[current].d}</div>

            </div>
            <div className="flex justify-between">
                <div className="h-[30px] cursor-pointer bg-orange-400 px-3 text-white" onClick={()=>setAns()}>Reset</div>
                <div className="h-[30px] cursor-pointer bg-green-700 px-3 text-white" onClick={saveHandller}>Save & Next</div>
                <div className="h-[30px] cursor-pointer bg-red-700 px-3 text-white" onClick={()=>setExit(true)}>Exit</div>
            </div>


        </div>
    )
}