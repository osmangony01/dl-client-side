
import { FaSearch } from "react-icons/fa";

const SearchMenu = () => {
    return (
        <div>
            <div className="border-[1px]  py-2.5 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
                <div className="flex flex-row items-center justify-between">
                    <div className="text-sm font-semibold text-[#4e4e4e] px-4">
                        Anywhere
                    </div>
                    <div className="text-sm font-semibold text-[#4e4e4e] border-x-[1px] px-4 text-center">
                        Any week
                    </div>
                    <div className="text-sm font-semibold text-[#8b8b8b]   px-4 text-center">
                        Add guests...
                    </div>
                    <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                        <div className="hidden sm:block"></div>
                        <div className="p-2  bg-rose-500 rounded-full  text-white">
                            <FaSearch></FaSearch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchMenu;