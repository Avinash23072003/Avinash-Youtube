const Button = ({ name }) => {
  return (
    <div className=" mx-4 mt-4 flex border border-gray rounded-2xl w-24">
      <button className="p-2 align-middle">{name}</button>
    </div>
  );
};
export default Button;
