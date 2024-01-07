import AddAll from "./component/AddAll";import Search from "./component/Search";
import './App.css';
import {BiCalendarHeart} from 'react-icons/bi';
import { useCallback, useEffect, useState } from "react";


function App() {
  // data.json가져와서 넣기
  const [list,setList] = useState([]);
  // search
  const [query,setQuery] = useState("");
  // sort
  const [sortBy,setSortBy] = useState("passengerName");

  // data.json 함수
  const Data = useCallback(()=>{
    fetch('./data.json')
    .then(response=>response.json())
    .then(data=>setList(data))
  },[]);

  useEffect(Data,[Data]);
  // 
  // search 함수
  const allData = list.filter((item)=>{
    return item.passengerName.toLowerCase().includes(query.toLowerCase()) ||
           item.From.includes(query.toLowerCase()) ||
           item.To.includes(query.toLowerCase()) ||
           item.seat.includes(query.toLowerCase())
  }).sort((a,b)=>a[sortBy] > b[sortBy] ? 1 : -1);



  return (
    <article>
    <div className="reservation">
      <h1>
        <BiCalendarHeart/>
        항공권 예매
      </h1>
    </div>

    <div className="search">
      <Search query={query}
              onChangeQuery={(myQuery)=>setQuery(myQuery)}/>
    </div>

    <div className="infomation">
      <AddAll list={list}
              setList={setList}
              sortBy={sortBy}
              setSortBy={setSortBy}
              dataChange={allData}
              onChangeWrite={(myList)=>setList([...list,myList])}
              />
    </div>
    </article>
  );
}

export default App;
