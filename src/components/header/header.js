import { NavLink } from './navLink'
import { DrawerProvider } from '@/contexts/drawer/drawer.provider'
import MobileDrawer from './mobile'
import { SignIn } from '../button/buttons'
import { Logo } from './logo'

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header className={`${className}`}>
        <nav className="block">
          <div className="flex py-5 px-4 lg:px-8 justify-between items-center container mx-auto">
            <Logo className="md:flex" />            
            <div className="hidden lg:flex items-end justify-end lg:w-10/12">
              <NavLink className="hidden" />
              <SignIn />              
            </div>
            <MobileDrawer />
          </div>
        </nav>
      </header>
    </DrawerProvider>
  )
}
