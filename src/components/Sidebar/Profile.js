import React from 'react';
import {connect} from 'react-redux'

const Profile = ({credentials: {username, role}}) => {
    return (
        <div>
            
        </div>
    );
};

const mapStateToProps = state => state.user

export default connect(mapStateToProps)(Profile);