import { Instagram } from "lucide-react"

interface InstagramProps {
  size?: number
  color?: string
  url?: string
}

export default function InstagramIcon({size = 32, color = "#FFF", url}: InstagramProps) {
  return url ? (
    <a href={url} target="_blank">
      <Instagram size={size} color={color}/>
    </a>
  ) : (
    <Instagram size={size} color={color}/>
  )
}