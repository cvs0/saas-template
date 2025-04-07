import { BookOpen, Code, FileText, HelpCircle, Users } from 'lucide-react'
import { ResourceItem } from "@/lib/types"

export const resourceItems: ResourceItem[] = [
  {
    icon: <BookOpen className="h-4 w-4 text-gray-300" />,
    title: "Documentation",
    description:
      "Comprehensive guides and references for using Linear effectively.",
    href: "#",
    gradient: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
  },
  {
    icon: <Code className="h-4 w-4 text-gray-300" />,
    title: "API Reference",
    description:
      "Detailed API documentation for developers building on Linear.",
    href: "#",
    gradient: "linear-gradient(135deg, #10B981 0%, #3B82F6 100%)",
  },
  {
    icon: <FileText className="h-4 w-4 text-gray-300" />,
    title: "Guides & Tutorials",
    description:
      "Step-by-step tutorials to help you get the most out of Linear.",
    href: "#",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
  },
  {
    icon: <HelpCircle className="h-4 w-4 text-gray-300" />,
    title: "Help Center",
    description: "Find answers to common questions and troubleshooting tips.",
    href: "#",
    gradient: "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)",
  },
  {
    icon: <Users className="h-4 w-4 text-gray-300" />,
    title: "Community",
    description:
      "Join discussions, share ideas, and connect with other Linear users.",
    href: "#",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #2DD4BF 100%)",
  },
]
