import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(()=> {
    // 测试跨域，不成功重启或者换一个接口试试
    axios.get('/api/mmdb/movie/v3/list/hot.json?ct=%E6%B7%B1%E5%9C%B3&ci=30&channelId=4').then(res => {
      console.log('res.data', res.data)
    })
  },[])

  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
