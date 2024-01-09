import { useState } from "react"
import AddSelect from "./AddSelect"


export default function AddReserve({onChangeWrite}){
    // reset 데이터 만들기(form)
    const resetDate = {
        passengerName:"",
        seat:"",
        boardingTime:"",
        From:"",
        CountryFrom:"",
        To:"",
        CountryTo:"",
        boardingDate:""
    }
    // useState() 만들기(form)
    const [formData,setFormData] = useState(resetDate);
    const [data,setData] = useState("출발지");
    // 선택된 데이터 만들기
    function writePublish(){
        const write = {
            id:"",
            passengerName:formData.passengerName,
            seat:formData.seat,
            boardingTime:formData.boardingTime,
            From:formData.From,
            CountryFrom:formData.CountryFrom,
            To:formData.To,
            CountryTo:formData.CountryTo,
            boardingDate:formData.boardingDate 
        }
    // 데이터 보내기
    onChangeWrite(write);
    // reset 데이터 보내기
    setFormData(resetDate);
    }
    return(
        <>
         <ul className="reserve">
            <AddSelect formData={formData}
                       setFormData={setFormData}
                       data={data}/>
                       {/* 2. error or fix here */}
            <button type="submit"
                    onClick={writePublish}>예매하기</button>
         </ul>
        </>
    )
}