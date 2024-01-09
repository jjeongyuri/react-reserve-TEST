import {BiRefresh} from 'react-icons/bi';


export default function AddSelect({formData,setFormData,data}){
    return(
        <>
        {/* 1 */}
         <li>
            <select  onClick={(e)=>setFormData({...formData,From:e.target.value,CountryFrom:e.target.value})}>
            <option>출발지</option>
                    <option >인천ICN</option>
                    <option >대구TAE</option>
                    <option >울산USN</option>
                    <option >부산PUS</option>
                    <option >청주CJJ</option>
                    <option >광주KWJ</option>
            </select>
            <span>
             <BiRefresh/>
            </span>

            <select onClick={(e)=>setFormData({...formData,To:e.target.value,CountryTo:e.target.value})}>
            <option >도착지</option>
                    <option>제주CJU</option>
                    <option>김포GMP</option>
                    <option>포항KPO</option>
                    <option>진주HIN</option>
                    <option>부산PUS</option>
                    <option>대구TAE</option>
            </select>
         </li>

         {/* 2 */}
         <li>
            <label htmlFor='userName'>탑승자명</label>
            <input type='text'
                   id='userName'
                   onChange={(e)=>setFormData({...formData,passengerName:e.target.value})}/>
         </li>

         {/* 3 */}
         <li>
            <label htmlFor='userTime'>탑승시간</label>
            <input type='time'
                   id='userTime'
                   onChange={(e)=>setFormData({...formData,boardingTime:e.target.value})}/>
         </li>

         {/* 4 */}
         <li>
            <label htmlFor='userDate'>탑승일</label>
            <input type='date'
                   id='userDate'
                   onChange={(e)=>setFormData({...formData,boardingDate:e.target.value})}/>
         </li>

         {/* 5 */}
         <li>
            <span>좌석등급 선택</span>
            {/* 3. I can not understand it */}
            <button type='button'
                    value="이코노미"
                    onClick={(e)=>setFormData({...formData,seat:e.target.value})}>이코노미</button>
            <button type='button'
                    value="비지니스"
                    onClick={(e)=>setFormData({...formData,seat:e.target.value})}>비지니스</button>
            <button type='button'
                    value="퍼스트"
                    onClick={(e)=>setFormData({...formData,seat:e.target.value})}>퍼스트</button>
         </li>
        </>
    )
}