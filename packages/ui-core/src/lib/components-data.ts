export type ComponentCategory = "Forms" | "Feedback" | "Data Display" | "Navigation" | "Primitives" | "Effects" | "AI Components"

export interface ComponentProp {
  name: string
  type: string
  default: string
  description: string
}

export interface ComponentData {
  name: string
  slug: string
  description: string
  category: ComponentCategory
  props: ComponentProp[]
}

export const componentsData: ComponentData[] = [
  {
    name: "Button",
    slug: "button",
    description: "Displays a button or a component that looks like a button.",
    category: "Navigation",
    props: [
      { name: "variant", type: "'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'", default: "'default'", description: "The visual style of the button." },
      { name: "size", type: "'default' | 'sm' | 'lg' | 'icon'", default: "'default'", description: "The size of the button." },
      { name: "asChild", type: "boolean", default: "false", description: "Change the default rendered element for the one passed as a child, merging their props and behavior." }
    ]
  },
  {
    name: "Badge",
    slug: "badge",
    description: "Displays a badge or a component that looks like a badge.",
    category: "Data Display",
    props: [
      { name: "variant", type: "'default' | 'secondary' | 'destructive' | 'outline'", default: "'default'", description: "The visual style of the badge." }
    ]
  },
  {
    name: "Card",
    slug: "card",
    description: "Displays a card with header, content, and footer.",
    category: "Data Display",
    props: []
  },
  {
    name: "Input",
    slug: "input",
    description: "Displays a form input field or a component that looks like an input field.",
    category: "Forms",
    props: [
      { name: "type", type: "string", default: "'text'", description: "The type of the input." }
    ]
  },
  {
    name: "Label",
    slug: "label",
    description: "Renders an accessible label associated with controls.",
    category: "Forms",
    props: [
      { name: "htmlFor", type: "string", default: "undefined", description: "The id of the element the label is associated with." }
    ]
  },
  {
    name: "Avatar",
    slug: "avatar",
    description: "An image element with a fallback for representing the user.",
    category: "Data Display",
    props: []
  },
  {
    name: "Checkbox",
    slug: "checkbox",
    description: "A control that allows the user to toggle between checked and not checked.",
    category: "Forms",
    props: [
      { name: "checked", type: "boolean | 'indeterminate'", default: "false", description: "The controlled checked state of the checkbox." },
      { name: "defaultChecked", type: "boolean | 'indeterminate'", default: "undefined", description: "The default checked state when initially rendered." },
      { name: "onCheckedChange", type: "(checked: boolean | 'indeterminate') => void", default: "undefined", description: "Event handler called when the state of the checkbox changes." }
    ]
  },
  {
    name: "Dialog",
    slug: "dialog",
    description: "A window overlaid on either the primary window or another dialog window.",
    category: "Feedback",
    props: [
      { name: "open", type: "boolean", default: "false", description: "The controlled open state of the dialog." },
      { name: "defaultOpen", type: "boolean", default: "false", description: "The open state of the dialog when it is initially rendered." },
      { name: "onOpenChange", type: "(open: boolean) => void", default: "undefined", description: "Event handler called when the open state of the dialog changes." }
    ]
  },
  {
    name: "Form",
    slug: "form",
    description: "Building forms with React Hook Form and Zod.",
    category: "Forms",
    props: []
  },
  {
    name: "Tabs",
    slug: "tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    category: "Data Display",
    props: [
      { name: "defaultValue", type: "string", default: "undefined", description: "The value of the tab that should be active when initially rendered." },
      { name: "value", type: "string", default: "undefined", description: "The controlled value of the tab to activate." },
      { name: "onValueChange", type: "(value: string) => void", default: "undefined", description: "Event handler called when the value changes." }
    ]
  },
  {
    name: "Select",
    slug: "select",
    description: "Displays a list of options for the user to pick from—triggered by a button.",
    category: "Forms",
    props: [
      { name: "defaultValue", type: "string", default: "undefined", description: "The value of the select when initially rendered." },
      { name: "value", type: "string", default: "undefined", description: "The controlled value of the select." },
      { name: "onValueChange", type: "(value: string) => void", default: "undefined", description: "Event handler called when the value changes." }
    ]
  },
  {
    name: "Table",
    slug: "table",
    description: "A responsive table component.",
    category: "Data Display",
    props: []
  },
  {
    name: "Toast",
    slug: "toast",
    description: "A succinct message that is displayed temporarily.",
    category: "Feedback",
    props: [
      { name: "variant", type: "'default' | 'destructive'", default: "'default'", description: "The visual style of the toast." }
    ]
  },
  {
    name: "Tooltip",
    slug: "tooltip",
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    category: "Feedback",
    props: [
      { name: "defaultOpen", type: "boolean", default: "false", description: "The open state of the tooltip when it is initially rendered." },
      { name: "open", type: "boolean", default: "false", description: "The controlled open state of the tooltip." },
      { name: "onOpenChange", type: "(open: boolean) => void", default: "undefined", description: "Event handler called when the open state of the tooltip changes." }
    ]
  },
  {
    name: "Dropdown Menu",
    slug: "dropdown-menu",
    description: "Displays a menu to the user—such as a set of actions or functions—triggered by a button.",
    category: "Navigation",
    props: []
  },
  {
    name: "Accordion",
    slug: "accordion",
    description: "A vertically stacked set of interactive headings that each reveal a section of content.",
    category: "Data Display",
    props: []
  },
  {
    name: "Alert",
    slug: "alert",
    description: "Displays a callout for user attention.",
    category: "Feedback",
    props: []
  },
  {
    name: "Textarea",
    slug: "textarea",
    description: "Displays a form textarea.",
    category: "Forms",
    props: []
  },
  {
    name: "Slider",
    slug: "slider",
    description: "An input where the user selects a value from within a given range.",
    category: "Forms",
    props: []
  },
  {
    name: "Toggle",
    slug: "toggle",
    description: "A two-state button that can be either on or off.",
    category: "Forms",
    props: []
  },
  {
    name: "Switch",
    slug: "switch",
    description: "A control that allows the user to toggle between checked and not checked.",
    category: "Forms",
    props: []
  },
  {
    name: "Progress",
    slug: "progress",
    description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    category: "Feedback",
    props: []
  },
  {
    name: "Separator",
    slug: "separator",
    description: "Visually or semantically separates content.",
    category: "Data Display",
    props: []
  },
  {
    name: "Skeleton",
    slug: "skeleton",
    description: "Use to show a placeholder while content is loading.",
    category: "Feedback",
    props: []
  },
  {
    name: "Scroll Area",
    slug: "scroll-area",
    description: "Augments native scroll functionality for custom, cross-browser styling.",
    category: "Data Display",
    props: []
  },
  {
    name: "Breadcrumb",
    slug: "breadcrumb",
    description: "Displays the path to the current resource using a hierarchy of links.",
    category: "Navigation",
    props: []
  },
  {
    name: "Hover Card",
    slug: "hover-card",
    description: "For sighted users to preview content available behind a link.",
    category: "Feedback",
    props: []
  },
  {
    name: "Collapsible",
    slug: "collapsible",
    description: "An interactive component which expands/collapses a panel.",
    category: "Data Display",
    props: []
  },
  {
    name: "Drawer",
    slug: "drawer",
    description: "A drawer component for React.",
    category: "Feedback",
    props: []
  },
  {
    name: "Aspect Ratio",
    slug: "aspect-ratio",
    description: "Displays content within a desired ratio.",
    category: "Data Display",
    props: []
  },
  {
    name: "Calendar",
    slug: "calendar",
    description: "A date field component that allows users to enter and edit date.",
    category: "Forms",
    props: []
  },
  {
    name: "Date Picker",
    slug: "date-picker",
    description: "A date picker component with range and presets.",
    category: "Forms",
    props: []
  },
  {
    name: "Popover",
    slug: "popover",
    description: "Displays rich content in a portal, triggered by a button.",
    category: "Feedback",
    props: []
  },
  {
    name: "Carousel",
    slug: "carousel",
    description: "A carousel with motion and swipe built using Embla.",
    category: "Data Display",
    props: []
  },
  {
    name: "Radio Group",
    slug: "radio-group",
    description: "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
    category: "Forms",
    props: []
  },
  {
    name: "Navigation Menu",
    slug: "navigation-menu",
    description: "A collection of links for navigating websites.",
    category: "Navigation",
    props: []
  },
  {
    name: "Menubar",
    slug: "menubar",
    description: "A visually persistent menu common in desktop applications.",
    category: "Navigation",
    props: []
  },
  {
    name: "Context Menu",
    slug: "context-menu",
    description: "Displays a menu to the user—such as a set of actions or functions—triggered by a button.",
    category: "Navigation",
    props: []
  },
  {
    name: "Toolbar",
    slug: "toolbar",
    description: "A container for grouping a set of controls, such as buttons, toggle groups or dropdown menus.",
    category: "Navigation",
    props: []
  },
  {
    name: "Text Scramble",
    slug: "text-scramble",
    description: "A text component that scrambles characters on hover or mount.",
    category: "Effects",
    props: []
  },
  {
    name: "Typewriter",
    slug: "typewriter",
    description: "A text component that types out text with a blinking cursor.",
    category: "Effects",
    props: []
  },
  {
    name: "Animated Gradient Text",
    slug: "animated-gradient-text",
    description: "A fluid moving gradient across text.",
    category: "Effects",
    props: []
  },
  {
    name: "Border Glow",
    slug: "border-glow",
    description: "An animated glow around a container.",
    category: "Effects",
    props: []
  },
  {
    name: "Spotlight Card",
    slug: "spotlight-card",
    description: "A card effect with a subtle spotlight that follows the mouse.",
    category: "Effects",
    props: []
  },
  {
    name: "Particles",
    slug: "particles",
    description: "A floating interactive particle canvas background.",
    category: "Effects",
    props: []
  },
  {
    name: "Prompt Input",
    slug: "prompt-input",
    description: "A multi-line auto-expanding textarea with send and attach buttons.",
    category: "AI Components",
    props: []
  },
  {
    name: "Chat Bubble",
    slug: "chat-bubble",
    description: "A chat message bubble that supports markdown and avatars.",
    category: "AI Components",
    props: []
  },
  {
    name: "Agent Reasoning Trace",
    slug: "agent-reasoning-trace",
    description: "An expandable component that shows an AI's thought process.",
    category: "AI Components",
    props: []
  },
  {
    name: "Tool Call Card",
    slug: "tool-call-card",
    description: "A sleek card that displays when an AI calls a tool.",
    category: "AI Components",
    props: []
  },
  {
    name: "Token Meter",
    slug: "token-meter",
    description: "A progress bar showing prompt tokens vs completion tokens used.",
    category: "AI Components",
    props: []
  },
  {
    name: "Model Picker",
    slug: "model-picker",
    description: "A custom Select dropdown specifically styled for picking AI models.",
    category: "AI Components",
    props: []
  },
  {
    name: "Streaming Text",
    slug: "streaming-text",
    description: "Text that renders token-by-token with a blinking cursor, simulating an LLM streaming response.",
    category: "AI Components",
    props: [
      { name: "text", type: "string", default: "undefined", description: "The full text to stream." },
      { name: "speed", type: "number", default: "30", description: "Delay between character output in milliseconds." },
      { name: "streaming", type: "boolean", default: "true", description: "Whether the text should start streaming immediately." },
      { name: "onComplete", type: "() => void", default: "undefined", description: "Callback triggered when streaming finishes." }
    ]
  },
  {
    name: "Citation Panel",
    slug: "citation-panel",
    description: "A collapsible side panel that displays numbered source citations with titles, URLs, and relevance scores.",
    category: "AI Components",
    props: [
      { name: "citations", type: "Citation[]", default: "[]", description: "Array of structured source references." },
      { name: "title", type: "string", default: "'Sources & Citations'", description: "The title header text." }
    ]
  },
  {
    name: "Voice Waveform",
    slug: "voice-waveform",
    description: "An animated audio waveform visualizer (like Siri or ChatGPT voice mode) using CSS transitions.",
    category: "AI Components",
    props: [
      { name: "isListening", type: "boolean", default: "false", description: "Triggers gentle listening bounce animation." },
      { name: "isSpeaking", type: "boolean", default: "false", description: "Triggers vibrant speaking wave motion." },
      { name: "barsCount", type: "number", default: "15", description: "The number of vertical waveform bars." },
      { name: "color", type: "string", default: "'rgb(168, 85, 247)'", description: "Fill color of the wave bars." }
    ]
  },
  {
    name: "Diff Viewer",
    slug: "diff-viewer",
    description: "A side-by-side or unified diff viewer that highlights added/removed lines.",
    category: "AI Components",
    props: [
      { name: "oldValue", type: "string", default: "undefined", description: "The original code or text version." },
      { name: "newValue", type: "string", default: "undefined", description: "The updated code or text version." },
      { name: "viewMode", type: "'unified' | 'split'", default: "'unified'", description: "The layout rendering style." },
      { name: "fileName", type: "string", default: "undefined", description: "Optional file header path display." }
    ]
  },
  {
    name: "Copilot Sidebar",
    slug: "copilot-sidebar",
    description: "A slide-out sidebar panel with a chat interface inside (like GitHub Copilot Chat or Cursor's sidebar).",
    category: "AI Components",
    props: [
      { name: "defaultOpen", type: "boolean", default: "true", description: "Initial open state of the side drawer panel." },
      { name: "initialMessages", type: "Message[]", default: "[]", description: "Historical chat message list." }
    ]
  },
  {
    name: "Multi-Agent Board",
    slug: "multi-agent-board",
    description: "A kanban-style board showing multiple AI agents working on tasks simultaneously.",
    category: "AI Components",
    props: [
      { name: "agents", type: "Agent[]", default: "[]", description: "Lanes tracking agent statuses and progress metrics." },
      { name: "boardTitle", type: "string", default: "'Active Agent Swarm'", description: "Board header description." }
    ]
  }
]
