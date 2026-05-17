import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="grid min-h-screen place-items-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="text-xl font-bold">Entrar no AgendaFácil</h1>
        </CardHeader>
        <CardContent className="space-y-3">
          <input className="w-full rounded-xl border border-slate-300 p-2" placeholder="E-mail" />
          <input className="w-full rounded-xl border border-slate-300 p-2" placeholder="Senha" type="password" />
          <Button className="w-full">Entrar</Button>
          <p className="text-sm text-slate-500">Não tem conta? <Link href="/register" className="text-[var(--brand-primary)]">Criar agora</Link></p>
        </CardContent>
      </Card>
    </main>
  );
}
