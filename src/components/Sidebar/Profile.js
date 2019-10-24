import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import CreateTicket from '../CreateTicket';

const Profile = ({ credentials: { username, role } }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src="https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png"
        alt="hehe"
        style={{
          paddingTop: '20%',
          borderRadius: '50%',
          paddingBottom: '1em',
          width: '100px',
          height: '100%'
        }}
      />
      <br />
      <Button shape="round" ghost>
        {role}
      </Button>
      <h3 style={{ color: 'white', paddingTop: '20%' }}>{username}</h3>
      <br />

      <br />
      {role === 'student' && (
      <CreateTicket/>
      )}
    </div>
  );
};

const mapStateToProps = state => state.user;

export default connect(mapStateToProps)(Profile);
