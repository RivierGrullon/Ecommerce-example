import { InputField } from "@components/atoms/InputField/index";
import { Button } from "@components/atoms/Button/Button";
import { Icon } from "@components/atoms/Icons/index";
import { SearchBar } from "@components/molecules/SearchBar/index";
export default function HelloWorld() {
  return (
    <section className="p-6 md:p-8 lg:p-12">
      <h1 className="font-extrabold mb-4 text-5xl md:text-7xl">Hello world!</h1>
      <p className="font-bold mb-3">Welcome to Hydrogen.</p>
      <p>
        Hydrogen is a front-end web development framework used for building
        Shopify custom storefronts.
      </p>
      <Button className={"bg-black text-white"}>
        <p className="p-md">Get it now</p>
      </Button>
      <Icon icon="cart"></Icon>
      <Icon icon="search"></Icon>
      <Icon></Icon>
      <Button className={"bg-gray-400 rounded-full"}>
        <Icon icon="cart" className={""}></Icon>
      </Button>
      <SearchBar ></SearchBar>
    </section>
  );
}
