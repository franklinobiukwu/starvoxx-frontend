import { Link } from 'react-router';
import { Button } from '../ui/button';
import SearchBar from './SearchBar';
import DarkLogo from '../../assets/trimmed-starvoxx-logo-dark.png';
import LightLogo from '../../assets/trimmed-starvoxx-logo.png';
import "../../App.css";
import { ModeToggle } from '../mode-toggle';
import { useTheme } from '../theme-provider';

const Navbar = () => {
    const { theme } = useTheme();

    return (
        <nav className="border-b border-foreground/10 bg-transparent">
            <div className="container flex items-center justify-between px-5 py-3">
                {/* Logo */}
                <div className="w-24">
                    <img src={theme === 'light' ? DarkLogo : LightLogo} alt="StarVoxx Logo" className="w-full" />
                </div>

                {/* Search Bar */}
                <div className="hidden md:block">
                    <SearchBar />
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-5">
                    {/* Dark Mode Toggle */}
                    <ModeToggle />

                    {/* Login Button */}
                    <Button variant="secondary" asChild>
                        <Link to="/login">Login</Link>
                    </Button>

                    {/* Signup Button */}
                    <Button asChild>
                        <Link to="/signup">Signup</Link>
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
