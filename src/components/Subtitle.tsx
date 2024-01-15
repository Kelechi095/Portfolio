interface SubtitleProps {
    label: string
}

const Subtitle = ({label}: SubtitleProps) => {
  return (
    <div className="text-xl font-semibold mb-1 text-sky-900 dark:text-sky-500 font-mono">{label}</div>
  )
}

export default Subtitle