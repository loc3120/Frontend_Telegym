import React from 'react';
import Present from "../Present"
import FormCandidate from './FormCandidate';

const Candidate = () => {

    return (
        <div className='candidate_page'>
            <Present name="Candidate"/>
            <FormCandidate />
        </div>
    )
}

export default Candidate;