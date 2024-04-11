import { useEffect } from 'react'
import {notifications, totalNotificationSelector } from './atom';
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp(){
 const [networkCount, setNetworkCount] = useRecoilState(notifications);
 const totalNotificationCount = useRecoilValue(totalNotificationSelector);

 useEffect(() => {
   // fetch
   axios.get("https://sum-server.100xdevs.com/notifications").then((res) => {
     setNetworkCount(res.data);
   });
 }, []);

  return (
    <>
      <button>Home</button>

      <button>
        My network (
        {networkCount.networks >= 100 ? "99+" : networkCount.network})
      </button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notification ({networkCount.notifications})</button>
      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App
