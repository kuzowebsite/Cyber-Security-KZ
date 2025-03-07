"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Laptop, Shield, FileText, Search, Lightbulb, AlertTriangle, BookOpen, UserCheck, Users, ChevronDown, Cpu, Lock } from 'lucide-react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function MainSidebar() {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <Sidebar className="border-r">
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2">
            <Shield className="h-6 w-6 text-blue-500" />
            <div className="font-semibold">КиберХамгаалалт</div>
          </div>

          <div className="px-2 mt-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input type="text" placeholder="Хайх..." className="pl-9 h-9 text-sm w-full" />
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Үндсэн</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/"}>
                    <Link href="/">
                      <FileText className="text-blue-500" />
                      <span>Нүүр хуудас</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/computer-tips-guide"}>
                    <Link href="/computer-tips-guide">
                      <Laptop className="text-green-500" />
                      <span>Компьютер хэрэглээ</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/device-comparison"}>
                    <Link href="/device-comparison">
                      <Cpu className="text-blue-500" />
                      <span>Техник харьцуулалт</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <Collapsible defaultOpen className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <Shield className="text-purple-500" />
                        <span>Аюулгүй байдал</span>
                        <ChevronDown className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                  </SidebarMenuItem>
                  <CollapsibleContent className="pt-1">
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={pathname === "/cyber-security-guide"}>
                          <Link href="/cyber-security-guide">
                            <span>Хакерын халдлагууд</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton
                          asChild
                          isActive={pathname === "/components/tutorials/protection-tutorials"}
                        >
                          <Link href="/components/tutorials/protection-tutorials">
                            <span>Хамгаалалт</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={pathname === "/components/legal/cyber-law-info"}>
                          <Link href="/components/legal/cyber-law-info">
                            <span>Хууль эрх зүй</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Интерактив</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Link href="/components/interactive/password-strength-checker" className={pathname === "/components/interactive/password-strength-checker" ? "active" : ""}>
                      <Lock className="text-amber-500" />
                      <span>Нууц үг шалгагч</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/components/interactive/security-quiz"}>
                    <Link href="/components/interactive/security-quiz">
                      <BookOpen className="text-indigo-500" />
                      <span>Аюулгүй байдлын тест</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/components/interactive/phishing-detection-game"}>
                    <Link href="/components/interactive/phishing-detection-game">
                      <AlertTriangle className="text-red-500" />
                      <span>Фишинг илрүүлэх тоглоом</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Тусламж</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/senior-tech-help"}>
                    <Link href="/senior-tech-help">
                      <UserCheck className="text-blue-500" />
                      <span>Ахмадуудад зориулсан IT туслах</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/components/tutorials/ai-security-advisor"}>
                    <Link href="/components/tutorials/ai-security-advisor">
                      <Lightbulb className="text-yellow-500" />
                      <span>AI Зөвлөх</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <div className="p-2">
            <Button className="w-full" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              <span>Холбоо барих</span>
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}
