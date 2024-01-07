import {BiCheckCircle} from 'react-icons/bi';



export default function AddList({sortBy,onChangeSort,toggle}){
  if(!toggle){
    return null;
  }
    return(
        <>
         <ul className="select">
            <li onClick={()=>onChangeSort("passengerName")}>탑승자명
              {sortBy === "passengerName" && <BiCheckCircle style={{marginLeft:"5px"}}/>} 
            </li>
            <li onClick={()=>onChangeSort("boardingDate")}>날짜순
              {sortBy === "boardingDate" && <BiCheckCircle style={{marginLeft:"5px"}}/>}
            </li>
            <li onClick={()=>onChangeSort("boardingTime")}>시간순
              {sortBy === "boardingTime" && <BiCheckCircle style={{marginLeft:"5px"}}/>}
            </li>
         </ul>
        </>
    )
}