type WhiteButtonProps = {
  text: string;
};

const WhiteButton = (props: WhiteButtonProps) => {
  return (
    <button className="uppercase bg-light-grey rounded-2xl text-dark-grey px-[2.4rem] py-[1.8rem] font-medium text-[1.5rem] leading-[2.198rem] tracking-[0.1rem]">
      {props.text}
    </button>
  );
};

export default WhiteButton;
