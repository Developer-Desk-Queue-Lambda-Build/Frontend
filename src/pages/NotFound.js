import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to="/login">
          <Button type="primary" style={{ width: '200px' }}>
            Back Home
          </Button>
        </Link>
      }
    />
  );
};

export default NotFound;
