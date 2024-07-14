const ChatComments = ({ name, message }) => {
  return (
    <div className="flex p-2 items-center shadow-md">
      <img
        alt="user icon"
        className="w-8 h-8"
        src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
      />
      <span className="px-2 font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};
export default ChatComments;
