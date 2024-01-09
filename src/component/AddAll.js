import { useState } from "react";
import AddInfo from "./AddInfo";
import AddList from "./AddList";
import AddReserve from "./AddReserve";
import {BiDownArrow} from 'react-icons/bi';


export default function AddAll({list,setList,sortBy,setSortBy,dataChange,onChangeWrite}){
  // console.log(allData)
  const [toggle,setToggle] = useState(false);
  // console.log(toggle)
    return(
        <>
        {/* system */}
          <div className="system">
            <h2>예약시스템</h2>
            <AddReserve onChangeWrite={onChangeWrite}/>
          </div>


        {/* list */}
          <div className="list">
            <div>
            <h2>예약확인</h2>
            <button type="button"
                    onClick={()=>setToggle(!toggle)}>
             <BiDownArrow/>
            </button>
               <AddList sortBy={sortBy}
                        onChangeSort={(mySort)=>setSortBy(mySort)}
                        toggle={toggle}/>
            </div>

            {/* 예약 리스트 */}
            <ul>
               {/* 1. I can not understand it */}
               {dataChange.map((item)=>
                <AddInfo key={item.id}
                         info={item}
                         onDelete={(myId)=>{
                          return setList(
                            list.filter((item)=>{
                              return item.id !== myId
                            })
                          )
                         }}/> 
               )}
            </ul>
          </div>
        </>
    )
}