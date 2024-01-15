interface SubtitleProps {
    label: string
}

const Subtitle = ({label}: SubtitleProps) => {
  return (
    <div className="text-xl font-semibold mb-1 text-emerald-900 dark:text-emerald-600 font-mono">{label}</div>
  )
}

export default Subtitle