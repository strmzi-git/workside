interface ContainerProps {
  children: React.ReactElement | React.ReactElement[];
}

const Container: React.FC<ContainerProps> = function ({ children }) {
  return (
    <div className="px-0 sm:px-10 h-[100vh] lg:px-24 py-5">{children}</div>
  );
};

export default Container;
