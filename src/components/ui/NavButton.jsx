export default function NavButton({icon, text}) {
    return (
        <button
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
            <img src={icon} alt="icon" className="w-6 h-6" />
            <span>{text}</span>
        </button>
    )
}