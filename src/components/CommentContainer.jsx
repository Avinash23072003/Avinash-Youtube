const CommentContainer = () => {
  const commentantData = [
    {
      name: "Avinash chitare",
      text: "Here is yout first comment",
      replies: [
        {
          name: "Avinash chitare",
          text: "Here is yout first comment",
          replies: [
            {
              name: "Avinash chitare",
              text: "Here is yout first comment",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Avinash chitare",
      text: "Here is yout first comment",
      replies: [],
    },
    {
      name: "Avinash chitare",
      text: "Here is yout first comment",
      replies: [
        {
          name: "Avinash chitare",
          text: "Here is yout first comment",
          replies: [
            {
              name: "Avinash chitare",
              text: "Here is yout first comment",
              replies: [
                {
                  name: "Avinash chitare",
                  text: "Here is yout first comment",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Avinash chitare",
      text: "Here is yout first comment",
      replies: [
        {
          name: "Avinash chitare",
          text: "Here is yout first comment",
          replies: [],
        },
        {
          name: "Avinash chitare",
          text: "Here is yout first comment",
          replies: [],
        },
        {
          name: "Avinash chitare",
          text: "Here is yout first comment",
          replies: [],
        },
      ],
    },
    {
      name: "Avinash chitare",
      text: "Here is yout first comment",
      replies: [],
    },
  ];
  const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
      <div className="flex shadow-sm bg-gray-200 rounded-lg pt-4 mt-4">
        <img
          className="w-10 h-10"
          alt="user icon"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
        />
        <div className="px-2 ">
          <p className="font-bold ">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    );
  };

  const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div>
        <Comment key={index} data={comment}></Comment>
        <div className="ml-10 border border-l-black">
          <CommentList key={index} comments={comment.replies}></CommentList>
        </div>
      </div>
    ));
  };
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentantData}></CommentList>
    </div>
  );
};
export default CommentContainer;
