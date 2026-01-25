import { Link } from 'react-router-dom'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showSubtitle?: boolean
}

export default function Logo({ size = 'md', showSubtitle = true }: LogoProps) {
  const sizes = {
    sm: { title: 'text-2xl', subtitle: 'text-[0.5rem] tracking-[3px]' },
    md: { title: 'text-3xl', subtitle: 'text-[0.65rem] tracking-[4px]' },
    lg: { title: 'text-4xl md:text-5xl', subtitle: 'text-xs tracking-[5px]' },
    xl: { title: 'text-5xl md:text-6xl', subtitle: 'text-sm tracking-[6px]' },
  }

  return (
    <Link to="/" className="text-center block">
      <h1 className={`font-blackletter ${sizes[size].title} text-white`}>
        Shield and Shadow
      </h1>
      {showSubtitle && (
        <p className={`font-display ${sizes[size].subtitle} uppercase text-gray-300 mt-1`}>
          Investigations
        </p>
      )}
    </Link>
  )
}
