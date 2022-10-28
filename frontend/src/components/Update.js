import React, { useRef, useState } from 'react';

function Update(props) {

    const [nameOfPic, setNameOfPic] = useState('');

    return (
        <section>
            <div className="container mx-auto px-5 py-10">
                <div className="max-w-2xl mx-auto">
                    <div className="flex flex-col gap-14 items-center justify-center w-full">
                        <input className='p-1 h-20 w-64 text-2xl text-center bg-sky-100 border-2 rounded-xl' placeholder='Name of the pic' onChange={e => setNameOfPic(e.target.value)} />
                        <label htmlFor="dropzone-file" className="p-4 flex flex-col items-center justify-center w-/1/2 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG</p>
                            </div>
                            <form action="http://localhost:3000/api/" method="POST" encType="multipart/form-data" onSubmit={(e) => { return (e.preventDefault, console.log()) }}>
                                <input type="text" name="name" value={nameOfPic} className="hidden" />
                                <input name="image" id="dropzone-file" type="file" className="hidden" />
                                <button className='bg-red-400 px-20 rounded-full' type='submit'>OK</button>
                            </form>
                        </label>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Update;