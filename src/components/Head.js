import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Head = () => {

    const [Searchquerry ,setSearchquerry]=useState("");

    const [Suggestion, setSuggestions]=useState([]);

    useEffect(()=>{

        //API CALL
        const timer=setTimeout(() => 
                                getSearchSuggestions()        
        , 200);

        return ()=>{
            clearTimeout(timer);
        };
    


    },[Searchquerry]);
    
    const getSearchSuggestions=async()=>{

        const data= await fetch(YOUTUBE_SEARCH_API+Searchquerry);
        const json= await data.json();
        console.log(json);
        setSuggestions(json[1]);

    };
    const dispatch =useDispatch();

    const toggleMenuhandler=()=>{
        dispatch(toggleMenu());
    }

  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
        <div className='flex col-span-1'>
        <img className='h-6 cursor-pointer' onClick={()=>toggleMenuhandler()} 
        alt='menu' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///90d3lxdHZtcHJqbW/AwcHk5eWVmJlnam1rbnCpq6yBhIb5+fnHyMng4eH29veKjI6ztLWipKV5fH6OkZLZ2tvq6+vLzMy5u7zIycnR0tLCw8OanJ7n5uYQAAACyUlEQVR4nO3di27iMBCFYcfOFodbEiBAgfd/ziXQSlvJNqkWCc3h/54gR3ac1p4xzgEAAAAAAAAAAAAAAAAoa4fVH2tWQzs13vK4qJtgT1MvjsspAfsYfGWTD7F/mG+/Da9+zv8StvtywKG2On7ffD2UAn7EVz/gE8SPfMCl7Rn6LeTXm5n1KXrnZ7mAa4U5Oopr7SHMD2KrMoTXQUz/eXPQWGdG4ZBMOFeZpNdpOk8m3Akl3CUTLoQSLt40YSeUsEsm3Agl3CQTnoW+Fudkwr3QFz/zT6LMUpNZaJw71a9+tCepT5mEKoOYHUKZNzH3Fo7OChFjeiH9crQfMR5LAZ37jLbfRR8/ywGv72JneEPR192D7dKbYReb4O0JTdwV90r/0Z76zcyaTX+afDQDAAAAAAAAAAAAYDL180P1M2D5c/yV+VqMVTmgfD2NfE2UROtasXlNvjbxIFNfmm6ZkRnC/CCKVJeOMhWm+rX6+v0W+j0zMgvNG3d26fcf6veQ6vcB6/dy6/fjv8GdCiqDmL8X4w3uNtH4J790P41zg/GttnGz7cGeqfw9UU7/ri93u68tmryvLU68r23UDquzNb+4cw8AAAAAAAAAAADAdKd5V726i+nXqm6evSD5p2UfGm/xnNv7JvQTDoFXwXKpQggP2p6cu1ivqImXcsCd5QG8C+nq2S8b+wGvEdOF+jcn61P0LubXVIsraIrPBTwqzNFRyDVZvvrBnigdcK3SnFdVdbpIWGaSZqfpRWWhuS416c8+nV2GvG1nl0gvwijTj9ALraXpYuihefWDPU2TqdcX+uKnA+o0IGbaD51rVQaxzta0i6w1mXXmRuKTWPhRMueWlf2IviruKLbG257GxqdHjSUX091r/tFm4mhYRJNb3uOmd1xM+0mr9Xzb1PY023mxt/Kn5f7Dmv3kvjUAAAAAAAAAAAAAUPUXCyx+ltjBidoAAAAASUVORK5CYII="/>
        <img className='h-6 mx-2' 
        alt='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"/>
    </div>
    <div className='col-span-10 '>
        <div>
            <input className="px-5 w-1/2 border border-gray-400 rounded-l-full"
        onChange={(e)=>setSearchquerry(e.target.value)} placeholder="  Search" type='text'/>
        <button className='border border-gray-400 px-5 rounded-r-full bg-gray-200 '>🔍</button>
</div>
<div className='fixed bg-white py-2 px-5 w-[28rem] shadow-lg rounded-lg border border-gray-100'>
    <ul>
        {
            Suggestion.map((s)=>( <li key={s} className='py-1 shadow-sm hover:bg-gray-200'>🔍  {s}</li>))
        }
       
        
       
        
    </ul>
</div>
    </div>
    <div className='col-span-1'>
        <img className="h-6" alt='user' src="data:image/png;base64,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"/>
    </div>
    </div>
  )
}

export default Head
