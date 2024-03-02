interface XProps {
  size?: number
  color?: string
}
export default function X({size = 32, color = "#FFF"}: XProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.0774 0H39.5177L25.4476 17.7908L42 42H29.0396L18.8886 27.3172L7.27356 42H0.829332L15.8788 22.9708L0 0H13.2893L22.465 13.4206L33.0774 0ZM30.8172 37.7354H34.3857L11.3503 4.04059H7.52077L30.8172 37.7354Z" fill={color}/>
    </svg>
  )
}