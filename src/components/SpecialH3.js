const SpecialH3 = (props) => {
  return (
    <article
      className={`flex ${
        props.left ? "flex-row" : "flex-row-reverse"
      } gap-4 items-center w-full`}
    >
      <h3 className={`max-w-sm`}>{props.title}</h3>
      <div className={`flex-grow h-0.5 bg-black`}></div>
      <div
        className={`flex justify-center items-center w-10 h-10 rounded-full bg-black text-lg font-bold font-heading text-white tracking-widest`}
      >
        {props.number}
      </div>
    </article>
  );
};

export default SpecialH3;
