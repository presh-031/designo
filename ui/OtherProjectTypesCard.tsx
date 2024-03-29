type OtherProjectTypesCardProps = {
  children: React.ReactNode;
};
const OtherProjectTypesCard = ({ children }: OtherProjectTypesCardProps) => {
  return (
    <div className=" mb-[-9.4rem] flex flex-col gap-[2.4rem] px-[2.4rem] max-[300px]:px-[1.8rem]  sm:px-[4rem]  xl:flex-row xl:gap-[3rem] xl:px-[16.5rem] ">
      {children}
    </div>
  );
};

export default OtherProjectTypesCard;
