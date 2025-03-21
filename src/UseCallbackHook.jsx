import React, { memo, useCallback, useState } from "react"

export default function UseCallbackHook(){
    const [initialState , setInitailState] = useState(0);
    const handeClick = useCallback(()=>{
            console.log('clicked');
    },[])

    return (
        <>
            {initialState}
            <button 
                onClick={()=>setInitailState(initialState+1)}>
               
                    {initialState}
            
            </button>
            <ChildCompoent onClick={handeClick} />
        </>
    )
}

const ChildCompoent = memo(({onClick}) => {
        console.log("Child Component rerendered");
        return(
            <>
            <button onClick={onClick}>Click Me</button>
            </>
        )
    }
)

