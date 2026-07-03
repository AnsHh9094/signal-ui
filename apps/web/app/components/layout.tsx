import Link from "next/link";
import { componentsData, ComponentCategory } from "@/lib/components-data";

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  // Group components by category
  const groupedComponents = componentsData.reduce((acc, component) => {
    if (!acc[component.category]) {
      acc[component.category] = [];
    }
    acc[component.category].push(component);
    return acc;
  }, {} as Record<ComponentCategory, typeof componentsData>);

  const categoryOrder: ComponentCategory[] = ["Forms", "Feedback", "Data Display", "Navigation", "Primitives"];

  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 px-4 md:px-8 max-w-screen-2xl mx-auto">
      {/* Sidebar */}
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block overflow-y-auto">
        <div className="py-8 pr-6 space-y-6">
          {categoryOrder.map((category) => {
            const items = groupedComponents[category];
            if (!items) return null;

            return (
              <div key={category}>
                <h4 className="mb-2 rounded-md px-2 py-1 text-sm font-semibold flex items-center justify-between text-foreground">
                  {category}
                  <span className="bg-muted text-muted-foreground text-xs px-2 py-0.5 rounded-full">
                    {items.length}
                  </span>
                </h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  {items.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/components/${item.slug}`}
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1.5 hover:underline text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="relative py-6 lg:gap-10 lg:py-8">
        <div className="mx-auto w-full min-w-0">
          {children}
        </div>
      </main>
    </div>
  );
}
