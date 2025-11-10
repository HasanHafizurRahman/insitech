import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
    const [open, setOpen] = useState(false);
    const nav = [
        ["/", "Home"],
        ["/about", "About"],
        ["/team", "Team"],
        ["/services", "Services"],
        ["/solutions", "Solutions"],
        ["/resources", "Resources"],
        ["/blog", "Blog"],
        ["/careers", "Careers"],
        ["/contact", "Contact"],
    ];


    return (
        <header className="bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-4">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold">CS</div>
                            <span className="font-semibold text-lg">Insitech</span>
                        </Link>
                    </div>


                    <nav className="hidden md:flex gap-6 items-center">
                        {nav.map(([path, label]) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    `hover:text-cyan-300 ${isActive ? "text-cyan-300 font-medium" : "text-slate-200"}`
                                }
                            >
                                {label}
                            </NavLink>
                        ))}
                        <Link to="/login" className="ml-2 px-3 py-1 border rounded border-slate-700 hover:bg-slate-800">Login</Link>
                    </nav>


                    <div className="md:hidden">
                        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2 rounded-md">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-slate-800/90 px-4 pb-4">
                    <div className="flex flex-col gap-2 pt-2">
                        {nav.map(([path, label]) => (
                            <NavLink key={path} to={path} onClick={() => setOpen(false)} className={({ isActive }) => `block p-2 rounded ${isActive ? "bg-slate-700" : "hover:bg-slate-700/40"}`}>
                                {label}
                            </NavLink>
                        ))}
                        <Link to="/login" onClick={() => setOpen(false)} className="block p-2 rounded hover:bg-slate-700/40">Login</Link>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;