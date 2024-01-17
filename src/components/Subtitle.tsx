interface SubtitleProps {
    label: string
}

const Subtitle = ({label}: SubtitleProps) => {
  return (
    <div className="text-xl font-semibold mb-1 text-blue-200">{label}</div>
  )
}

export default Subtitle