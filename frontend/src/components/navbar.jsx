import { Link } from "react-router-dom";
import { Sparkles } from 'lucide-react'

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 bg-black/60 backdrop-blur-md border-b border-purple-900/40">
                <Link to="/"  className="text-purple-300 font-bold font-pixel text-3xl tracking-widest uppercase hover:text-purple-200 transition-colors duration-300"
                style={{
                    WebkitTextStroke: '2px #bee4eb',
                    paintOrder: 'stroke fill'
                }}
                >
                    <Sparkles className="inline-block mr-1" size={20} />
                    Starfall
                </Link>
                <div className="flex gap-8">
                    <Link to="/" className="font-pixel text-purple-200/70 hover:text-purple-300 text-sm tracking-widest uppercase transition-colors duration-300">Home</Link>
                    <Link to="/about" className="font-pixel text-purple-200/70 hover:text-purple-300 text-sm tracking-widest uppercase transition-colors duration-300">About</Link>
                    <Link to="/rules" className="font-pixel text-purple-200/70 hover:text-purple-300 text-sm tracking-widest uppercase transition-colors duration-300">Rules</Link>
                    <Link to="/community" className="font-pixel text-purple-200/70 hover:text-purple-300 text-sm tracking-widest uppercase transition-colors duration-300">Community</Link>
                </div>
                
        </nav>
    )
}

export default Navbar