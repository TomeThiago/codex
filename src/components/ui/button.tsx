import { ButtonHTMLAttributes } from "react";
export function Button(props:ButtonHTMLAttributes<HTMLButtonElement>){return <button {...props} className={`px-3 py-2 rounded-md bg-[var(--brand-primary,#2563EB)] text-white ${props.className??""}`}/>;}
