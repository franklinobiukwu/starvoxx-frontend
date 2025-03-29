import { Outlet } from "react-router";
import Navbar from "../components/blocks/Navbar.tsx";
import { AppSidebar } from "@/components/app-sidebar.tsx";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.tsx";
import { Separator } from "@radix-ui/react-menu";
import SearchBar from "../components/blocks/SearchBar.jsx";

const DashboardLayout = () => {
    return (
            <div className="flex flex-col h-screen">
                <SidebarProvider>
                    {/* Side Bar */}
                    <AppSidebar/>
                    <SidebarInset>
                        {/* Header */}
                        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                            <div className="flex items-center gap-2 px-4 w-full">
                                <SidebarTrigger className="-ml-1" />
                                <Separator orientation="vertical" className="mr-2 h-4 border-blue-950 bg-green-950" />
                                <div className="flex justify-center items-center w-full">
                                <SearchBar/>
                                </div>
                            </div>
                        </header>
                        {/* Page Outlet */}
                        <div>
                            <Outlet/>
                        </div>
                    </SidebarInset>
                </SidebarProvider>
            </div>
            )
}
export default DashboardLayout
