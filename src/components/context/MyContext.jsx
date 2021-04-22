import React from 'react'
import Bus from './bus'

const MyContext = React.createContext({
  bus: new Bus()
});

export default MyContext