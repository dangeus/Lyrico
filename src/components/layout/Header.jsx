import NavButton from "../ui/NavButton.jsx"
import HomeButton from '../../assets/icons/HomeIcon.svg'

export default function Header() {
    return (
        <header className="bg-blue-500 text-white p-4 shadow-md">
            <NavButton icon={HomeButton} text="Главная"/>
        </header>
    )
}