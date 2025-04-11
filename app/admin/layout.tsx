import Sidebar from "@/components/admin/Sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full relative">
      {/* Mobile header with menu button */}
      {/* <div className="md:hidden flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      </div> */}

      {/* large screens sidebar and main area implementation */}
      <div className="flex h-full w-full">
        <Sidebar className="h-full" />
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto p-4 md:p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}