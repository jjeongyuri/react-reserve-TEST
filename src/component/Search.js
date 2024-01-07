import { BiSearch } from "react-icons/bi";

export default function Search({query,onChangeQuery}){
    return(
        <>
        <input type="text" 
               placeholder="search"
               value={query}
               onChange={(e)=>onChangeQuery(e.target.value)}/>
        <BiSearch style={{width:"30px",
                          fontSize:"25px",
                          marginLeft:"10px"}} />
        </>
    )
}