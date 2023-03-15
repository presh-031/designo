type OtherProjectTypesCardProps = {
  children: React.ReactNode;
};
const OtherProjectTypesCard = ({ children }: OtherProjectTypesCardProps) => {
  return (
    <div className=" mb-[-9.4rem] flex flex-col gap-[2.4rem] px-[2.4rem] sm:px-[4rem] ">
      {children}
    </div>
  );
};

export default OtherProjectTypesCard;
