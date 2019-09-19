import React, { Component } from 'react'

class RouteProfile extends Component {

    constructor(props){
        super(props);
        this.state = {}

        this.props.setLanding(false)
    }
    render() {
        var {currentUser} = this.props
        return (
            <div className="main profile">

            </div>
        )
    }
}

export default RouteProfile;
