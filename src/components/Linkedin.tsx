import { Linkedin } from "lucide-react"

interface LinkedinProps {
  size?: number
  color?: string
  url?: string
}

export default function LinkedinIcon({size = 32, color = "#FFF", url}: LinkedinProps) {
  return url ? (
    <a href={url} target="_blank">
      <Linkedin size={size} color={color}/>
    </a>
  ) : (
    <Linkedin size={size} color={color}/>
  )
}