interface ContainerProps {
  children?: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex justify-center">
      <div className="md:w-4/6 sm:w-5/6 px-3">
        <div className="flex flex-col justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
