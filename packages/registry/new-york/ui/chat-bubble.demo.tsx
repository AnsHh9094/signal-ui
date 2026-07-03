import { ChatBubble } from "@/registry/new-york/ui/chat-bubble"

export function ChatBubbleDefault() {
  return (
    <div className="flex w-full flex-col gap-6 p-6 bg-zinc-50 dark:bg-zinc-950 rounded-xl max-w-2xl mx-auto">
      <ChatBubble 
        role="user" 
        content="Can you explain how a hash table works in simple terms?" 
      />
      <ChatBubble 
        role="assistant" 
        content={`Sure! Imagine a massive library with millions of books. 
        
Normally, finding a book might require searching shelf by shelf. But with a **Hash Table**, there's a magical librarian. You tell the librarian the title (the *Key*), and they instantly do a quick math trick (the *Hash Function*) that tells them exactly which shelf (the *Bucket*) the book (the *Value*) is on.

- **Key**: The name or ID you want to look up.
- **Hash Function**: The math trick that converts the Key into a location.
- **Bucket/Slot**: The actual location where the data is stored.

This makes looking up data almost instantly fast (\`O(1)\` time complexity), no matter how big the library gets!`} 
      />
    </div>
  )
}
