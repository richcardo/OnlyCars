import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Color, theme } from "../../style/theme"
import {
  faHeart as faSolidHeart,
  faMicrophone,
  faBell,
  faSearch,
  faGear,
  faArrowRightArrowLeft,
  faArrowUp,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
  faGasPump,
  faDharmachakra,
  faUser,
  faStar as SolidStar,
  faShield,
} from "@fortawesome/free-solid-svg-icons"
import {
  faHeart,
  faStar,
  faStarHalfStroke,
  faDotCircle,
} from "@fortawesome/free-regular-svg-icons"
import { SizeProp } from "@fortawesome/fontawesome-svg-core"

export type Icon = keyof typeof icons

type Props = {
  color?: Color
  icon: Icon
  size?: SizeProp
  className?: string
}

const icons = {
  circle: faDotCircle,
  solidheart: faSolidHeart,
  heart: faHeart,
  mic: faMicrophone,
  bell: faBell,
  lense: faSearch,
  gear: faGear,
  switcher: faArrowRightArrowLeft,
  arrowDown: faArrowDown,
  arrowUp: faArrowUp,
  arrowRight: faArrowRight,
  arrowLeft: faArrowLeft,
  fuel: faGasPump,
  steering: faDharmachakra,
  people: faUser,
  solidStar: SolidStar,
  star: faStar,
  shield: faShield,
  halfStar: faStarHalfStroke,
}

export const Icon = ({ color = "grey", icon, size, className }: Props) => {
  return (
    <FontAwesomeIcon
      icon={icons[icon]}
      color={theme.palette.colors[color][400]}
      size={size}
      className={className}
    />
  )
}
