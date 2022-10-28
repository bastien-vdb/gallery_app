import React, { useRef } from 'react';
import { useEffect } from 'react';

function Box({ name, url, id }) {

    const deleteButton = useRef();

    useEffect(()=>{
        console.log(deleteButton.current.id)
    },[])

    const deletePic = () => {
        fetch(`http://localhost:3000/api/${id}`,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
        })
        .then(success=>success.json().then(success=>{
            console.log(success)
            window.location.reload();
        }))
        .catch(err=>err.message)
    }

    return (
        <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <button id={id} ref={deleteButton} onClick={()=>deletePic()} className='float-right bg-gray-300 px-2 rounded-md m-1 text-white hover:scale-125'>X</button>
            <a className="relative block h-48 overflow-hidden rounded">
                <img alt={name} className="block h-full w-full object-cover object-center cursor-pointer" src={url} />
            </a>
            <div className="mt-4">
                <h2 className="title-font text-lg font-medium text-gray-900">{name}</h2>
            </div>
        </div>
    );
}

export default Box;