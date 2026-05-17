import { NextRequest, NextResponse } from "next/server";import { sendWhatsAppMessage } from "@/lib/whatsapp";
export async function POST(req:NextRequest){const body=await req.json();return NextResponse.json(await sendWhatsAppMessage(body));}
