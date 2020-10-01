import React, { Component } from 'react';
import styled from 'styled-components';
import './layout.css'


class Layout extends Component {
    state = {  }

    wrapper = styled.div`  
   
    `;
    render() { 
        return ( 
            <this.wrapper>
                {this.props.children}
            </this.wrapper>
         );
    }
}
 
export default Layout;