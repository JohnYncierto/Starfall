import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 bg-black/60 backdrop-blur-md border-b border-purple-900/40">
                <Link to="/" className="text-puple-300 font-bold text-xl tracking-widest uppercase">
                ✦ Starfall
                </Link>
                <div className="flex gap-8">
                    <Link to="/" className="text-purple-200/70 hover:text-purple-300 text-sm tracking-widest uppercase transition-colors duration-300">Home</Link>
                    <Link to="/about" className="text-purple-200/70 hover:text-purple-300 text-sm tracking-widest uppercase transition-colors duration-300">About</Link>
                    <Link to="/rules" className="text-purple-200/70 hover:text-purple-300 text-sm tracking-widest uppercase transition-colors duration-300">Rules</Link>
                    <Link to="/community" className="text-purple-200/70 hover:text-purple-300 text-sm tracking-widest uppercase transition-colors duration-300">Community</Link>
                </div>
                
        </nav>
    )
}

export default Navbar