import React from 'react';
import Present from "../Present"
import ListCoach from './ListCoach';

const coach = () => {

    return (
        <div className='coach_page'>
            <Present name="Coach"/>
            <ListCoach />
        </div>
    )
}

export default coach;