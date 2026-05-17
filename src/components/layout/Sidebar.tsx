const items=["Dashboard","Calendário","Agendamentos","Clientes","Profissionais","Serviços","Loja pública","Configurações","Planos"];
export default function Sidebar(){return <aside className='border-r bg-white p-4'><div className='font-bold mb-4'>AgendaFácil</div><nav className='space-y-1'>{items.map((i)=><div key={i} className='px-3 py-2 rounded hover:bg-slate-100'>{i}</div>)}</nav></aside>;}
