import React, { useEffect } from 'react';
import Footer from './Footer';
import Box from './Box';

function Grid({ apiResult }) {
    return (
        <section>
            <div className="container mx-auto px-5 py-10">
                <div className="-m-4 flex flex-wrap">
                    {apiResult.map(e => <Box name={e.name} url={e.url} id={e._id} />)}
                </div>
            </div>
        </section>
    );
}

export default Grid;