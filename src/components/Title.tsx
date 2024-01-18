
interface TitleProps {
    label: string
}
const Title = ({label}: TitleProps) => {
  return (
    <div className="text-3xl font-semibold mt-12 mb-6 text-blue-200">{label}</div>
  )
}

export default Title