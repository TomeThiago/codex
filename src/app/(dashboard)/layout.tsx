import { ReactNode } from "react";
import Sidebar from "@/components/layout/Sidebar";
export default function DashboardLayout({children}:{children:ReactNode}){return <div className="min-h-screen md:grid md:grid-cols-[260px_1fr]"><Sidebar/><main className="p-6">{children}</main></div>;}
