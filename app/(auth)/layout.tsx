
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full w-full flex items-center justify-center">
       <div className="lg:min-w-[600px] sm:min-w-full sm:px-10">
          {children}
       </div>
    </div>
  )
}
