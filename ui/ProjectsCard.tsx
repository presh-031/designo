type ProjectsCardProps = {
  children: React.ReactNode;
};

const ProjectsCard = ({ children }: ProjectsCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-[4rem] px-[2.4rem] pt-[9.6rem] sm:px-[3.9rem] sm:pt-[12rem]">
      {children}
    </div>
  );
};

export default ProjectsCard;
