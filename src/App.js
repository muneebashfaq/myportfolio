import { Alert, Spin } from 'antd';
import { useEffect, useState } from 'react';
import Menu from './components/MenuBar/Menu';
function App() {
 const [loading,setloading]=useState(true)
 setTimeout(() => {
  setloading(false)
 }, 2000);
  return (<>
{loading?
  <Spin tip="Loading...">
    <Menu/>
    </Spin>
   :<Menu/>}
  </>);
}

export default App;
