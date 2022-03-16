import React, { Component } from 'react';
import { render } from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import SelectCustom from './SelectCustom';
import { faCat, faDog } from '@fortawesome/free-solid-svg-icons';
library.add(faCat, faDog);

const data = [
    {
        sportType: faDog,
        sportTitle: 'GYM',
    },
    {
        sportType: faCat,
        sportTitle: 'YOGA',
    }
];

const SelectedBoxData = () => {
    return (
        <div>
            <SelectCustom
                data={data}
                placeholder='Hãy lựa chọn thể loại'
            />
        </div>
    );
}

export default SelectedBoxData

