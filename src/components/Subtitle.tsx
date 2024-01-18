interface SubtitleProps {
    label: string
}

const Subtitle = ({label}: SubtitleProps) => {
  return (
    <div className="text-base md:text-xl font-semibold mb-1 text-neutral-300">{label}</div>
  )
}

export default Subtitle