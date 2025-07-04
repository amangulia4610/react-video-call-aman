import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomID } = useParams();
  const myMeeting = async (element) => {
    const appId = 1501307780;
    const encoded = "Y2Y3NzQ0ODkzOGZlMGE4YTZmOTdmMThmZmFmYzZjZTU=";
    const serverSecret = atob(encoded);
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomID,
      Math.random().toString(36).substring(2, 10),
      "User 1"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "#/room/" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };
  return (
    <div id="room">
      <div ref={myMeeting}></div>

      <button
        onClick={() => {
          window.location.href = "/react-video-call-aman/"; // Adjust the path as needed
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Room;
