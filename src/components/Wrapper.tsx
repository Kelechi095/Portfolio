import { useNav } from "../hooks/useNav";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  const { setIsOpen } = useNav();
  return (
    <main className="main" onClick={() => setIsOpen(false)}>
      {children}
    </main>
  );
};

export default Wrapper;
