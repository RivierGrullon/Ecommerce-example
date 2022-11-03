
import { CartIcon } from "./Cart";
import { HeartIcon } from "./Heart";
import { SearchIcon } from "./Search";

export interface IconProps{
  className?: any;
  children?: React.ReactNode;
  icon?: string;
  height?: string;
  width?: string;
  filled?: boolean;
}
export const Icon = ({ icon, className, filled }: IconProps): JSX.Element => {
  switch (icon) {
    case "cart":
      return (
        <CartIcon className={className}/>
      );
    case "search":
      return (
        <SearchIcon className={className}/>
      );
    case "heart":
      return (
        <HeartIcon className={className} filled={filled}/>
      );
    default:
      return <>Icon Not Found</>;
  }
};
