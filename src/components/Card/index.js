import React from 'react';
import * as UI from './style';

export default function Index({name, img}) {
    return (
        <UI.Wrapper className="card-container mx-auto">
            <div className="gift-card d-flex d-flex align-items-center justify-content-center  mx-auto">
                <img src={img} alt="" style={{width:"80px"}} />
            </div>
            <p className="mb-0">{name}</p>
        </UI.Wrapper>
    )
}
