import * as React from 'react';
import Alert from '@mui/material/Alert';

const BasicAlert = ({ severity, message }) => {
  return (
    <Alert variant="filled" severity={severity} sx={{ mt: 2 }}>
      {message}
    </Alert>
  );
};

export default BasicAlert;
