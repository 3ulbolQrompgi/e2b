export interface Props {
  className?: string
}
function Nodejs({
  className,
}: Props) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="#689F63"
    >
      <path d="M8 15.9c-.2 0-.42-.06-.6-.17l-1.93-1.14c-.3-.17-.15-.22-.06-.26.39-.13.47-.16.88-.4.04-.02.1 0 .14.02l1.48.88a.2.2 0 00.18 0l5.79-3.34c.05-.03.08-.1.08-.16V4.66a.19.19 0 00-.09-.16L8.1 1.16a.18.18 0 00-.17 0L2.14 4.5c-.06.03-.1.1-.1.16v6.67c0 .06.04.13.1.16l1.58.91c.86.43 1.38-.08 1.38-.59V5.23c0-.1.08-.17.17-.17H6c.1 0 .17.07.17.17v6.59c0 1.14-.63 1.8-1.71 1.8-.34 0-.6 0-1.34-.36l-1.51-.87A1.22 1.22 0 011 11.33V4.66c0-.44.23-.84.6-1.06L7.4.26c.36-.2.85-.2 1.21 0l5.78 3.35A1.22 1.22 0 0115 4.66v6.67c0 .44-.23.84-.6 1.06l-5.8 3.34c-.18.1-.4.16-.6.16m1.79-4.59c-2.53 0-3.06-1.17-3.06-2.14 0-.1.07-.17.17-.17h.74c.09 0 .15.06.17.14.11.76.45 1.15 1.98 1.15 1.22 0 1.73-.28 1.73-.92 0-.38-.14-.65-2.04-.84-1.58-.15-2.56-.5-2.56-1.77 0-1.17.98-1.86 2.63-1.86 1.85 0 2.77.64 2.89 2.02a.17.17 0 01-.17.18h-.75a.17.17 0 01-.16-.13c-.18-.8-.62-1.05-1.8-1.05-1.34 0-1.5.46-1.5.8 0 .43.19.55 1.98.79 1.78.24 2.62.57 2.62 1.82 0 1.26-1.05 1.98-2.88 1.98z"></path>
    </svg>
  )
}

export default Nodejs