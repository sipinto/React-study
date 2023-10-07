/*eslint-disable*/

// LifeCycle
import { useState, useEffect, useCallback, useContext } from "react";
import { Context1 } from "../App";

function TabBox({tab}) {

    let [fade, setFade] = useState('');
    let {재고} = useContext(Context1);
    
    useEffect(()=>{
        setTimeout(()=>{ setFade('end') }, 100)
      return ()=>{
        setFade('')
      }
      }, [tab])

    return (
        <div className={'start ' + fade}>
        { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab] }
        </div>
    )

}

export default TabBox;