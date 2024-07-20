import { Outlet, useNavigate } from 'react-router-dom'
import { dark } from '@clerk/themes';
import { ClerkProvider} from '@clerk/clerk-react'
import Navbar from '../components/Navbar/Navbar';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

export default function RootLayout() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "green",
          colorText: "white"
        }
      }}
    >
      <header className="header mt-2 ml-2 mr-2"> 
        <Navbar/>
      </header>
      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  )
}