// LifeCycle
import { useState, useEffect } from "react";

function TabBox({tab}) {

    let [fade, setFade] = useState('');
    
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