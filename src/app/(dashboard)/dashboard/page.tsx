import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
  ["Clientes", "128"],
  ["Agendamentos", "342"],
  ["Profissionais", "7"],
  ["Hoje", "R$ 1.980,00"],
];

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm text-slate-500">Visão geral operacional do seu estabelecimento.</p>
        </div>
        <Button>Novo agendamento</Button>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(([title, value]) => (
          <Card key={title}>
            <CardContent>
              <p className="text-sm text-slate-500">{title}</p>
              <p className="mt-1 text-2xl font-bold">{value}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <h2 className="font-semibold">Movimento semanal</h2>
          </CardHeader>
          <CardContent>
            <div className="h-64 rounded-xl bg-slate-100" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="font-semibold">Próximos eventos</h2>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              "14:00 · João Silva · Corte masculino",
              "15:00 · Ana Paula · Design de sobrancelha",
              "16:30 · Carlos Souza · Banho e tosa",
            ].map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 p-3 text-sm">
                {item}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
