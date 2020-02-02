import React from 'react';
import './App.css';
import GoogleButton from 'react-google-button';
import { Button } from '@material-ui/core';

const App = () => {
  return (
    <div className="App">
      <GoogleButton />
      <Button>Test</Button>
    </div>
  );
};

export default App;
