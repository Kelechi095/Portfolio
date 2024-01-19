interface SubtitleProps {
    label: string
}

const Subtitle = ({label}: SubtitleProps) => {
  return (
    <div className="text-base md:text-lg font-semibold mb-1 text-white">{label}</div>
  )
}

export default Subtitle