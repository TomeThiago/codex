"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  ["Dashboard", "/dashboard"],
  ["Calendário", "/calendario"],
  ["Agendamentos", "/agendamentos"],
  ["Clientes", "/clientes"],
  ["Profissionais", "/profissionais"],
  ["Serviços", "/servicos"],
  ["Configurações", "/configuracoes"],
  ["Planos", "/planos"],
] as const;

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="h-screen border-r border-slate-200 bg-white p-4 md:sticky md:top-0">
      <div className="mb-6">
        <p className="text-lg font-bold">AgendaFácil</p>
        <p className="text-xs text-slate-500">Gestão de agendamentos</p>
      </div>
      <nav className="space-y-1">
        {items.map(([label, href]) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`block rounded-xl px-3 py-2 text-sm ${active ? "bg-[var(--brand-primary)] text-white" : "text-slate-700 hover:bg-slate-100"}`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-8 rounded-xl bg-slate-100 p-3 text-xs text-slate-600">
        <p className="font-semibold">EF</p>
        <p>Estabelecimento Exemplo</p>
        <p>contato@agendafacil.com</p>
      </div>
    </aside>
  );
}
