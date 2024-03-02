import { Twitch } from "lucide-react"

interface TwitchProps {
  size?: number
  color?: string
  url?: string
}

export default function TwitchIcon({size = 32, color = "#FFF", url}: TwitchProps) {
  return url ? (
    <a href={url} target="_blank">
      <Twitch size={size} color={color}/>
    </a>
  ) : (
    <Twitch size={size} color={color}/>
  )
}