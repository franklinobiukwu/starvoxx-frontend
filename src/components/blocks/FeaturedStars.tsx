import { Star } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import StarvoxxLogo from '../../assets/trimmed-starvoxx-logo.png'

const starArray = [
    {
        _id: '1',
        photo: 'https://plus.unsplash.com/premium_photo-1682096309781-3ba5820a2259?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Nigerl Scatter',
        category: 'Relationship Counselor',
        rating: '3.2'
    },
    {
        _id: '2',
        photo: 'https://images.unsplash.com/photo-1642928825702-4595a49823fd?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Habie Songs',
        category: 'Music',
        rating: '4.0'
    },
    {
        _id: '3',
        photo: 'https://images.unsplash.com/photo-1522938974444-f12497b69347?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Memoe Adora',
        category: 'Hospitality',
        rating: '4.5'
    },
    {
        _id: '4',
        photo: 'https://images.unsplash.com/photo-1567948579347-8d66a02cbf56?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Stephen Bomb',
        category: 'Kinetic Combat',
        rating: '5.0',
    },
    {
        _id: '5',
        photo: 'https://images.unsplash.com/photo-1534868106572-5307385af17d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Franklin Arrow',
        category: 'Hunting',
        rating: '3.0'
    },
]

const defaultImage = StarvoxxLogo

const FeaturedStars = () => {
    return (
        <section className="py-14 px-6 bg-muted/20 dark:bg-muted/40 text-center">
            {/* Title */}
            <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-16">
                🌟 Featured Stars
            </h2>
            
            {/* Carousel */}
            <div className="relative max-w-6xl mx-auto">
                <Carousel>
                    <CarouselContent className="flex gap-4">
                        {starArray.map(star => (
                            <CarouselItem 
                                key={star._id} 
                                className="basis-1/2 md:basis-1/3 lg:basis-1/4 min-w-[280px] md:min-w-[340px]"
                            >
                                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
                                    <CardContent className="p-0 relative">
                                        {/* Image */}
                                        <div className="relative w-full h-60">
                                            <img 
                                                src={star.photo || defaultImage} 
                                                alt={star.name} 
                                                className="w-full h-full object-cover rounded-t-lg"
                                            />
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                        </div>

                                        {/* Star Info */}
                                        <div className="px-5 py-4 text-left">
                                            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{star.name}</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{star.category}</p>
                                            <div className="flex items-center mt-2">
                                                <Star className="size-5 text-yellow-400 fill-yellow-400" />
                                                <span className="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300">{star.rating}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))} 
                    </CarouselContent>

                    {/* Carousel Navigation */}
                    <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition" />
                    <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition" />
                </Carousel>
            </div>
        </section>
    )
}

export default FeaturedStars;

