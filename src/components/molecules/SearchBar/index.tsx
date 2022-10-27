import { Button } from "@components/atoms/Button/index";
import { Icon } from "@components/atoms/Icons/index";
import { InputField } from "@components/atoms/InputField/index";

export const SearchBar = (): JSX.Element => {
    return (
        <div className="flex  items-center bg-white rounded-md shadow-md">
        <InputField
            type="text"
            placeholder="Search for awesome"
            className=" rounded-full border-none"
        />
        <Button
            type="button"
            className=" bg-gray-100 rounded-full ml-0" 
        >
            <Icon icon="search" className="w-4 h-4" />
        </Button>
        </div>
    );
    };

