import { Link } from "react-router";
import LightLogo from "../../assets/trimmed-starvoxx-logo.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <div className="bg-foreground text-background dark:bg-background dark:text-foreground px-10 py-8 border-t border-foreground/10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
                {/* Logo and Social Media */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="w-24 mb-3">
                        <img src={LightLogo} alt="StarVoxx Logo" className="w-full"/>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" aria-label="Facebook" className="hover:text-gray-400">
                            <Facebook size={20} />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-gray-400">
                            <Instagram size={20} />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-gray-400">
                            <Twitter size={20} />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Resources and Links */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center md:text-left">
                    <div>
                        <h3 className="font-semibold text-lg">Service</h3>
                        <Link to="/overview" className="text-background/80 dark:text-foreground/80 hover:underline block">Overview</Link>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Resources</h3>
                        <Link to="/blog" className="text-background/80 dark:text-foreground/80 hover:underline block">Blog</Link>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Company</h3>
                        <Link to="/ourstory" className="text-background/80 dark:text-foreground/80 hover:underline block">Our Story</Link>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm border-t border-gray-500/20 pt-4">
                <p>&copy; {year} StarVoxx. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
