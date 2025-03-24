import Banner from "@/components/blocks/Banner"
import FeaturedStars from "@/components/blocks/FeaturedStars"
import Footer from "@/components/blocks/Footer"
import Navbar from "@/components/blocks/Navbar"
import UnlockStarvoxx from "@/components/blocks/UnlockStarvoxx"

const LandingPage = () => {
    return (
        <div className="bg-background text-foreground">
            {/* Fixed Navigation Bar */}
            <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-opacity-90 backdrop-blur-md">
                <Navbar />
            </div>

            {/* Page Content Wrapper */}
            <div className="pt-16">
                {/* Hero Banner Section */}
                <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-primary/10 to-transparent">
                    <Banner />
                </section>

                {/* Featured Stars Section */}
                <section className="py-20 mx-auto">
                    <FeaturedStars />
                </section>

                {/* Steps to Use Starvoxx */}
                <section className="py-20 bg-gray-100 dark:bg-gray-900 px-4 sm:px-8 lg:px-16 mx-auto">
                    <UnlockStarvoxx />
                </section>

                {/* Footer */}
                <footer className="mt-20 border-t border-gray-300 dark:border-gray-700">
                    <Footer />
                </footer>
            </div>
        </div>
    );
};

export default LandingPage;

