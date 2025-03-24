import { Button } from '../ui/button';
import BannerImg from '../../assets/ai-generated-9264240_1280-removebg-preview.png';
import { PartyPopper } from 'lucide-react';

const Banner = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row items-center min-h-screen px-6 lg:px-20 gap-10">
            {/* Left Side: Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <img 
                    src={BannerImg} 
                    alt="StarVoxx" 
                    className="max-w-[80%] lg:max-w-[90%] xl:max-w-[100%] drop-shadow-lg"
                />
            </div>

            {/* Right Side: Text Content */}
            <div className="md:block flex flex-col justify-center items-center w-full lg:w-1/2 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                    Book Personalized 
                </h1>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-primary">
                    Video Shoutouts
                </h1>
                <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 mt-4">
                    Make memories last a lifetime with a special message from your favorite stars.
                </p>

                {/* CTA Button */}
                <Button 
                    className="mt-6 px-6 py-3 text-lg font-semibold flex items-center gap-2 
                    bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition-all duration-300"
                >
                    <PartyPopper className="w-5 h-5" /> Request Shoutout
                </Button>
            </div>
        </div>
    );
};

export default Banner;

