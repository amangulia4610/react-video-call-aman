import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const { roomID } = useParams();
    const myMeeting=async(element) => {
    const appId=1501307780;
    const serverSecret='cf77448938fe0a8a6f97f18ffafc6ce5';
          const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomID,  Math.random().toString(36).substring(2, 10)," ");
     const zp = ZegoUIKitPrebuilt.create(kitToken);
    
       // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Copy link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });

    }
  return (
    
    <div id='room'>

            <div ref={myMeeting}></div>

        <button onClick={() => {
            window.location.href = '/';
        }}>Back to Home</button>
    </div>

  )
}

export default Room