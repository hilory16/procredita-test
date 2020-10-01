import React,{ Component} from 'react';
import {connect} from 'react-redux';
import {getAuthenticatedPartner} from '../redux/actions/partnersAction';
import jwt from 'jsonwebtoken';
import Loader from '../components/Loader';
import axios from 'axios';

export default function(ComposedClass, i){
    const token = localStorage.getItem('auth')
    axios.defaults.headers.common['partner_x_token'] = `Bearer ${token}`;
    class AuthenticationCheck extends Component{
        state={
            loading:true
        }

        async componentDidMount(){
            
            if(token === null || !token) return this.props.history.push('/login')

            const decoded = jwt.decode(token)
            const id = decoded.partnerId

            try{
                const result = await this.props.dispatch(getAuthenticatedPartner(id))
                this.setState({loading:false})
                if(result.payload !== null){
                    if(result.payload.error || result.payload.data === null){
                        localStorage.removeItem('auth')
                        this.props.history.push('/partner/login')
                        // console.log("error")
                    }
                }else{
                    localStorage.removeItem('auth')
                    this.props.history.push('/partner/login')
                }
            }
            catch(e){
                console.log(e)
            }

           
            // console.log(result)
           
        }
        componentWillReceiveProps(){
            
        }

        

        
        
        render(){
            // console.log(this.props)
            if(this.state.loading){
                return <Loader/>
            }
            return <ComposedClass {...this.props}/>
           
        }
    }

    const mapStateToProps = state =>{
        return {
            partner:state.Partner.partner
        }
    }

    return connect(mapStateToProps)(AuthenticationCheck)
}