import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { CalendarCheck, Search, SquarePlay } from 'lucide-react'

const cardDetails = [
    {
        icon: <Search className='size-10 md:size-14 text-primary' />,
        title: "Discover",
        content: "Explore stars across genres—actors, musicians, influencers. Find your favorite and get ready for a unique connection."
    },
    {
        icon: <CalendarCheck className='size-10 md:size-14 text-primary' />,
        title: "Book",
        content: "Book effortlessly. Click 'Book a Star,' choose options, and receive a personalized video shout-out from your star."
    },
    {
        icon: <SquarePlay className='size-10 md:size-14 text-primary' />,
        title: "Cherish",
        content: "Enjoy the magic! Your unique video shout-out is delivered. Share with friends or keep it as a cherished memento."
    }
]

const UnlockStarvoxx = () => {
    return (
        <section className="px-6 py-16 bg-muted/20 dark:bg-muted/40 text-center">
            {/* Title */}
            <h2 className="text-4xl font-extrabold text-gray-700 dark:text-white mb-16">
                Shoutout in <span className="text-accent bg-foreground px-4 py-2 rounded-md shadow-md inline-block transform skew-y-3">
                    3 Simple Steps
                </span>
            </h2>
            
            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {cardDetails.map((cardDetail, index) => (
                    <Card key={index} className="bg-white dark:bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
                        <CardHeader className="flex flex-col items-center justify-center py-6">
                            {cardDetail.icon}
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">{cardDetail.title}</h3>
                        </CardHeader>
                        <CardContent className="text-gray-600 dark:text-gray-300 text-sm px-6 py-4">
                            {cardDetail.content}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default UnlockStarvoxx;

