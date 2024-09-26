import './main.scss';
import {useState} from 'react';



export default function SignatureApp(){
    const [modified, setModified]=useState('');
    const [valDate, setvalDate]=useState('');
    return (
    <>
       <div className="name">
         <div>{modified==""?'Name':modified.toUpperCase()}</div>
         <div>{valDate==""?'Date':valDate}</div>
       </div>
       <p className="lorem">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, corporis pariatur eligendi excepturi soluta molestias.</p>
       <div className="date">
          <input type="date" name="" id="" value={valDate} onChange={(e)=>{setvalDate(e.target.value)}} />
       </div>
       <input type="text" name="" id='inputRight' value={modified} onChange={(e)=>{setModified(e.target.value)
       
       }}/>
    </>
    )
}