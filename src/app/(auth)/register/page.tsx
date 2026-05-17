import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="grid min-h-screen place-items-center p-4">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <h1 className="text-xl font-bold">Criar conta</h1>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2">
          <input className="rounded-xl border border-slate-300 p-2" placeholder="Nome" />
          <input className="rounded-xl border border-slate-300 p-2" placeholder="E-mail" />
          <input className="rounded-xl border border-slate-300 p-2" placeholder="Senha" type="password" />
          <input className="rounded-xl border border-slate-300 p-2" placeholder="Nome do estabelecimento" />
          <input className="sm:col-span-2 rounded-xl border border-slate-300 p-2" placeholder="Telefone (opcional)" />
          <Button className="sm:col-span-2">Criar conta</Button>
          <p className="sm:col-span-2 text-sm text-slate-500">Já tem conta? <Link href="/login" className="text-[var(--brand-primary)]">Entrar</Link></p>
        </CardContent>
      </Card>
    </main>
  );
}
