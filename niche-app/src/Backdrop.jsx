import React from 'react';
import './App.scss';

class Backdrop extends React.Component{

    render(){
        var backdropClasses = 'backdrop'
        if(this.props.show){
            backdropClasses = ['backdrop open']
        }
        return(
            <div className={backdropClasses}/>
        );
    }
}

export default Backdrop;