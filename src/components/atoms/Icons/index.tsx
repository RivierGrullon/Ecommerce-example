import { IconProps } from "@models/types/Props";
import { CartIcon } from "./Cart";
import { SearchIcon } from "./Search";

//create an icon component that switches between icons
export const Icon = ({ icon, className }: IconProps): JSX.Element => {
  switch (icon) {
    case "cart":
      return (
        <CartIcon className={className}/>
      );
    case "search":
      return (
        <SearchIcon className={className}/>
      );
    default:
      return <>Icon Not Found</>;
  }
};
