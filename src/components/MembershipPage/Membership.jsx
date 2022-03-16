import React, { useState, useEffect } from 'react';
import Present from "../Present"
import ListCard from './ListCard';


const Membership = () => {

    return (
        <div className='membership'>
            <Present name = "Membership"/>
            <ListCard />
        </div>
    )
}

export default Membership