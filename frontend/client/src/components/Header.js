// icons
// pen
import { RiQuillPenFill } from "react-icons/ri"

// main
const Header = () => {
  return (
    <header className="bg-emerald-700 text-xs text-gray-200">
        <div className="max-w-[720px] mx-auto flex items-center px-3">
            <div className="cursor-pointer text-xl font-black py-1 flex items-center">
                <RiQuillPenFill className="text-2xl text-gray-400"/>
                <span className="text-gray-400">My</span><span>note</span>
            </div>
        </div>
    </header>
  )
}

export default Header