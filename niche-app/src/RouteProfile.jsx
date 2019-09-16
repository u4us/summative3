import React, { Component } from 'react'

class RouteProfile extends Component {
    render() {
        var {currentUser} = this.props
        return (
            <div>
                <p>Welcome {currentUser}</p>
            </div>
        )
    }
}

export default RouteProfile;
