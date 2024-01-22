

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {

  return (
    <main className="px-4 md:px-44 my-4">
      {children}
    </main>
  );
};

export default Wrapper;
