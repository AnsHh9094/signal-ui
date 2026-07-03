import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t py-12 md:py-16 bg-muted/20">
      <div className="container max-w-screen-2xl px-4 md:px-8 mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-primary to-primary/50 shadow-sm" />
            <span className="font-bold">Signal UI</span>
          </Link>
          <p className="text-sm text-muted-foreground mt-2">
            Motion-Native UI for AI Products.
            <br />
            Built with React, Tailwind v4, and Radix.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:ml-auto">
          <h3 className="font-semibold text-sm">Product</h3>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li><Link href="/components" className="hover:text-foreground hover:underline">Components</Link></li>
            <li><Link href="/docs/blocks" className="hover:text-foreground hover:underline">Blocks</Link></li>
            <li><Link href="/docs/ai-kit" className="hover:text-foreground hover:underline">AI Product Kit</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 sm:ml-auto">
          <h3 className="font-semibold text-sm">Resources</h3>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li><Link href="/docs/installation" className="hover:text-foreground hover:underline">Documentation</Link></li>
            <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-foreground hover:underline">GitHub</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-foreground hover:underline">Twitter</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 sm:ml-auto">
          <h3 className="font-semibold text-sm">Legal</h3>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li><Link href="/docs/license" className="hover:text-foreground hover:underline">MIT License</Link></li>
            <li><Link href="/docs/privacy" className="hover:text-foreground hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="container max-w-screen-2xl px-4 md:px-8 mx-auto mt-12 flex items-center justify-between border-t pt-8 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Signal UI. All rights reserved.</p>
      </div>
    </footer>
  )
}
