import { Logo } from "./Logo"

export function Header() {
    return (
        <header className='w-full py-5 flex items-center justify-center bg-gray-700 border-gray-680'>
            <Logo />   
        </header>
        
    )
}