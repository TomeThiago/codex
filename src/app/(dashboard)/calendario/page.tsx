import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Page(){
  return <div className="space-y-5"><div className="flex items-center justify-between"><h1 className="text-2xl font-bold capitalize">calendario</h1><Button>Nova ação</Button></div><Card><CardHeader><h2 className="font-semibold">Módulo calendario</h2></CardHeader><CardContent><p className="text-sm text-slate-600">Tela responsiva pronta para evolução, com aparência SaaS profissional para desktop, tablet e mobile.</p></CardContent></Card></div>
}
