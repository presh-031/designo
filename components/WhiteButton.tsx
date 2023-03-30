import Link from "next/link";

type WhiteButtonProps = {
  text: string;
  url: string;
};

const WhiteButton = (props: WhiteButtonProps) => {
  return (
    <Link
      href={props.url}
      className="inline-block rounded-2xl bg-white px-[2.4rem] py-[1.8rem] text-[1.5rem] font-medium uppercase leading-[2.198rem] tracking-[0.1rem] text-dark-grey hover:bg-light-peach hover:text-white"
    >
      {props.text}
    </Link>
  );
};

export default WhiteButton;
