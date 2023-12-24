import { SVGProps } from 'react'
import {
  LogosAppwriteIcon,
  LogosCss3,
  LogosFigma,
  LogosHtml5,
  LogosNextjsIcon,
  LogosNodejsIcon,
  LogosReact,
  LogosTailwindcssIcon,
  LogosTypescriptIcon,
} from './icons'

const logos = {
  appwrite: LogosAppwriteIcon,
  css: LogosCss3,
  figma: LogosFigma,
  html5: LogosHtml5,
  nextJs: LogosNextjsIcon,
  nodeJs: LogosNodejsIcon,
  tailwind: LogosTailwindcssIcon,
  react: LogosReact,
  typescript: LogosTypescriptIcon,
}

function LogoIcon({ kind, className }: { kind: Logos; className: string }) {
  const LogoSvg = logos[kind]
  return <LogoSvg className={className} />
}

export default LogoIcon

export type Logos = keyof typeof logos
