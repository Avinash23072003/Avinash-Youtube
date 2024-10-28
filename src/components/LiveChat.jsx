import { useDispatch, useSelector } from "react-redux";
import ChatComments from "./ChatComments";
import { useState, useEffect } from "react";
import { chatMessage } from "../utils/chatSlice";
import { randomNameGenerator } from "./Helper";
import { getRandomMessage } from "./Helper";
const LiveChat = ({ name, message }) => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const getmessagesFromStore = useSelector((store) => store.chat.messages);
  useEffect(() => {
    //fetch API
    const i = setInterval(() => {
      // console.log("Hello Avinas");
      dispatch(
        chatMessage({
          name: randomNameGenerator(),
          message: getRandomMessage(),
        })
      );
    }, 88500);

    return () => {
      clearInterval(i);
    };
  }, []);
  //   const sendMsg = (e) => {
  //     setLiveMessage(e.target.value);
  //   };
  return (
    <div>
      <div className="bg-gray-100 border border-black w-full h-[425px] rounded-lg px-2 py-2 overflow-y-scroll flex flex-col-reverse">
        {getmessagesFromStore.map((msg, index) => (
          <ChatComments
            key={index}
            name={msg.name}
            message={msg.message}
          ></ChatComments>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLiveMessage(e.target.value);
          dispatch(
            chatMessage({
              name: "Avinash Chitare",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
        className="w-full p-3 mt-2 bg-slate-300 "
      >
        <input
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          className="px-2 w-[345px] border border-blue-400"
        />
        <button
          type="submit"
          className="bg-black text-white mx-4 w-[60px]  h-6"
        >
          Send
        </button>
      </form>
    </div>
  );
};
export default LiveChat;
