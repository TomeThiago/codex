# AgendaFácil (MVP)

SaaS MVP para gestão de agendamentos para pequenos negócios.

## Stack
Next.js 14, TypeScript, Tailwind CSS, Prisma, PostgreSQL, NextAuth, Zod, FullCalendar, sonner.

## Setup
1. `npm install`
2. `cp .env.example .env`
3. `npx prisma migrate dev`
4. `npx prisma generate`
5. `npm run dev`

## Cron de lembretes
Use `GET /api/cron/reminders` com header `Authorization: Bearer CRON_SECRET`.

## WhatsApp
Provider padrão Evolution API (`WHATSAPP_PROVIDER=evolution`) com fallback estrutural para Twilio sandbox.

## Comandos úteis
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npx prisma migrate dev`
- `npx prisma generate`
