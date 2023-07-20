export default function CategoriesLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="flex-grow absolute min-h-full min-w-full">   
        <section className="flex-grow absolute min-h-full min-w-full">
            {children}
        </section>        
      </main>
    )
  }