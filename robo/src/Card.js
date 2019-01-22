import React from 'react';

const Card = ({id, name, email}) =>{
    return(
        <div className='bg-light-green pa3 br3 ma2 dib grow shadow-5 bw2 tc'>
            <img alt='robot' src={`https://robohash.org/${id}?size=200x200&set=set3`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;
