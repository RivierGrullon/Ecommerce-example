import { Button } from "@components/atoms/Button/index";
import { Icon } from "@components/atoms/Icons/index";
import { SearchBar } from "@components/molecules/SearchBar/index";
import { ProductThumbnail } from "@components/molecules/Product/ProductThumbnail.client";
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
      <SearchBar></SearchBar>

      <ProductThumbnail
        src="https://assets.ajio.com/medias/sys_master/root/20220121/ihND/61ea59caaeb2695cdd244401/-1117Wx1400H-461085141-blue-MODEL.jpg"
        alt="Product"
        liked={true}
      ></ProductThumbnail>
    </section>
  );
}
