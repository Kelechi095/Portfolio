interface SubtitleProps {
    label: string
}

const Subtitle = ({label}: SubtitleProps) => {
  return (
    <div className="text-xl font-semibold mb-1 text-white">{label}</div>
  )
}

export default Subtitle