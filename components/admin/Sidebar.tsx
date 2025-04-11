"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { 
  Users, 
  Rows4, 
  ShoppingCart, 
  Tags, 
  Package, 
  Menu, 
  Home,
  House,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import ThemeSwitch from "../ThemeSwitch"

const routes = [
  {
    label: 'Dashboard',
    icon: Home,
    href: '/admin',
  },
  {
    label: 'Users',
    icon: Users,
    href: '/admin/users',
  },
  {
    label: 'Categories',
    icon: Rows4,
    href: '/admin/categories',
  },
  {
    label: 'Orders',
    icon: ShoppingCart,
    href: '/admin/orders',
  },
  {
    label: 'Product Types',
    icon: Tags,
    href: '/admin/product-types',
  },
  {
    label: 'Products',
    icon: Package,
    href: '/admin/products',
  },
]

interface SidebarProps {
  className?: string
}

const Sidebar = ({ className }: SidebarProps) => {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Add class to body when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
      document.body.classList.add('sidebar-open')
    } else {
      document.body.classList.remove('overflow-hidden')
      document.body.classList.remove('sidebar-open')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
      document.body.classList.remove('sidebar-open')
    }
  }, [isOpen])

  return (
    <>
      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className={cn(
                "md:hidden pb-4 transition-opacity duration-200",
                isOpen && "opacity-0 pointer-events-none"
              )}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0 bg-background">
            <SheetHeader className="p-4 border-b flex flex-row items-center justify-between">
              <div className="flex items-center gap-4">
                <SheetTitle>Admin Dashboard</SheetTitle>
                <ThemeSwitch />
              </div>
            </SheetHeader>
            <ScrollArea className="flex-1 pt-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-x-2 text-slate-500 text-sm font-medium px-3 py-2 hover:text-slate-600 hover:bg-slate-100/50 rounded-lg mx-2 transition-all",
                    pathname === route.href && "text-slate-700 bg-slate-100/60"
                  )}
                >
                  <route.icon className={cn(
                    "h-5 w-5",
                    pathname === route.href && "text-slate-700"
                  )} />
                  <span>{route.label}</span>
                </Link>
              ))}
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <nav className={cn(
        "hidden md:flex flex-col min-h-screen bg-background border-r",
        isCollapsed ? "w-16" : "w-64",
        className
      )}>
        <div className="flex items-center justify-between p-4">
          <ThemeSwitch />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        <ScrollArea className="flex-1 pt-4">
          {routes.map((route) => (
            <TooltipProvider key={route.href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={route.href}
                    className={cn(
                      "flex items-center gap-x-2 text-slate-500 text-sm font-medium px-3 py-2 hover:text-slate-600 hover:bg-slate-100/50 rounded-lg mx-2 transition-all",
                      pathname === route.href && "text-slate-700 bg-slate-100/60",
                      isCollapsed && "justify-center mx-0"
                    )}
                  >
                    <route.icon className={cn(
                      "h-5 w-5",
                      pathname === route.href && "text-slate-700"
                    )} />
                    {!isCollapsed && <span>{route.label}</span>}
                  </Link>
                </TooltipTrigger>
                {isCollapsed && (
                  <TooltipContent side="right" className="bg-background">
                    <p>{route.label}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          ))}
        </ScrollArea>
      </nav>
    </>
  )
}

export default Sidebar