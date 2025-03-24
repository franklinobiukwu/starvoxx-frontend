import { Input } from '../ui/input'
import { Search } from 'lucide-react'

const SearchBar = () => {
    return (
        <div className='flex rounded-sm justify-center items-center
                        max-w-90 shadow-sm text-blue-900 dark:bg-secondary dark:text-accent-foreground'>
            <Search className='p-2' size={40}/>
            <Input className='border-0 p-0 px-2' placeholder='search'/>            
        </div>
    )
}
export default SearchBar
