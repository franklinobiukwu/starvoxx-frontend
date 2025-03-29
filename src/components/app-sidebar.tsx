import * as React from "react"
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  Handshake,
  LayoutDashboardIcon,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useTheme } from "./theme-provider.tsx";
import LightLogo from "@/assets/trimmed-starvoxx-logo-2.svg"
import DarkLogo from "@/assets/trimmed-starvoxx-logo-dark.png"

// This is sample data.
const data = {
  user: {
    name: "nigel",
    email: "nigel@starvoxx.com",
    role: "fan",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboardIcon,
      isActive: true,
    },
    {
      title: "Requests",
      url: "#",
      icon: Handshake,
      items: [
        {
          title: "New",
          url: "#",
        },
        {
          title: "Accepted",
          url: "#",
        },
        {
          title: "Completed",
          url: "#",
        },
        {
          title: "Fulfilled",
          url: "#",
        },
        {
          title: "Rejected",
          url: "#",
        },
      ],
    },
    {
      title: "Wallet",
      url: "#",
      icon: Wallet,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const {theme} = useTheme()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="w-24 mt-6">
            <img src={theme==="light"? DarkLogo : LightLogo} alt="starvoxx"/>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
