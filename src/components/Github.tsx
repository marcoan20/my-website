import { Github } from "lucide-react"

interface GithubProps {
  size?: number
  color?: string
  url?: string
}

export default function GithubIcon({size = 32, color = "#FFF", url}: GithubProps) {
  return url ? (
    <a href={url} target="_blank">
      <Github size={size} color={color}/>
    </a>
  ) : (
    <Github size={size} color={color}/>
  )
}