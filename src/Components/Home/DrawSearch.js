import React from 'react';

const DrawSearch = ({dataChild}) => {

        <>
            {dataChild?.map(({name,timezones,demonyms,flags, id}) => {
                return (
                    <>
                        <div key={id}>
                            <p>{name.common}</p>
                            <img className='img' src={flags.svg} alt='img'/>
                        </div>
                    </>
                );
            })}
        </>

}

export default DrawSearch;