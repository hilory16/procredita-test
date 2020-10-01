import React from 'react'

export default function Loader() {
    return (
        <div style={{position:'absolute', top:'0', right:'0', bottom:'0', left:'0'}} className="d-flex align-items-center justify-content-center">
             <img src={require('../../assets/img/logo.svg')} />
        </div>
    )
}
