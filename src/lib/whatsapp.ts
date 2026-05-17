export type SendWhatsAppMessageInput={to:string;message:string};
export async function sendWhatsAppMessage(input:SendWhatsAppMessageInput){const provider=(process.env.WHATSAPP_PROVIDER??"evolution").toLowerCase();if(provider==="twilio"){return {provider:"twilio",status:"stubbed",to:input.to};}
const url=`${process.env.EVOLUTION_API_URL}/message/sendText/${process.env.EVOLUTION_INSTANCE}`;
const res=await fetch(url,{method:"POST",headers:{"Content-Type":"application/json",apikey:process.env.EVOLUTION_API_KEY??""},body:JSON.stringify({number:input.to,text:input.message})});
if(!res.ok) throw new Error(`Falha Evolution API: ${res.status}`);return {provider:"evolution",status:"sent",to:input.to};}
