
interface TitleProps {
    label: string
}
const Title = ({label}: TitleProps) => {
  return (
    <div className="text-xl md:text-3xl font-semibold hidden md:block mt-2 mb-6 text-blue-200">{label}</div>
  )
}

export default Title