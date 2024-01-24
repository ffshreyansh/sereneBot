import { Header } from '@/components/header'
import { SidebarDesktop } from '@/components/sidebar-desktop'

const ChatLayout = async ({ children })=> {
  return (
    <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden">
      <SidebarDesktop />
      <div className="group w-full overflow-auto pl-0 animate-in duration-300 ease-in-out peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]">
        <Header/>
        {children}
      </div>
    </div>
  )
}

export default ChatLayout
