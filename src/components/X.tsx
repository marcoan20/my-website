import X from "./Svg/X"

interface XProps {
  size?: number
  color?: string
  url?: string
}

export default function XIcon({size = 32, color = "#FFF", url}: XProps) {
  return url ? (
    <a href={url} target="_blank">
      <X size={size} color={color}/>
    </a>
  ) : (
    <X size={size} color={color}/>
  )
}