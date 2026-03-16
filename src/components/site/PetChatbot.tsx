"use client";
import { useState, useRef, useEffect } from "react";
import { X, Send, MessageCircle } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function DogIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Ears */}
      <ellipse cx="14" cy="22" rx="9" ry="13" fill="#5c3d1e" transform="rotate(-15 14 22)" />
      <ellipse cx="50" cy="22" rx="9" ry="13" fill="#5c3d1e" transform="rotate(15 50 22)" />
      <ellipse cx="14" cy="22" rx="5.5" ry="9" fill="#8b5e3c" transform="rotate(-15 14 22)" />
      <ellipse cx="50" cy="22" rx="5.5" ry="9" fill="#8b5e3c" transform="rotate(15 50 22)" />
      {/* Head */}
      <ellipse cx="32" cy="34" rx="22" ry="20" fill="#c68642" />
      {/* Snout */}
      <ellipse cx="32" cy="42" rx="13" ry="9" fill="#e8a87c" />
      {/* Eyes */}
      <circle cx="23" cy="30" r="4.5" fill="#1a1a1a" />
      <circle cx="41" cy="30" r="4.5" fill="#1a1a1a" />
      <circle cx="24.5" cy="28.5" r="1.5" fill="white" />
      <circle cx="42.5" cy="28.5" r="1.5" fill="white" />
      {/* Nose */}
      <ellipse cx="32" cy="39" rx="5" ry="3.5" fill="#2d1a0e" />
      <ellipse cx="31" cy="38" rx="1.5" ry="1" fill="#5a3828" />
      {/* Mouth */}
      <path d="M27 43.5 Q32 48 37 43.5" stroke="#2d1a0e" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Tongue */}
      <ellipse cx="32" cy="47" rx="4" ry="3" fill="#e85d7a" />
      <line x1="32" y1="44" x2="32" y2="47" stroke="#c44d6a" strokeWidth="1" />
    </svg>
  );
}

export default function PetChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [bounce, setBounce] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initial greeting
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{
        role: "assistant",
        content: "Au au! Olá! Sou o assistente virtual da World Vet. Posso te ajudar com dúvidas sobre serviços, horários ou agendamentos. Como posso te ajudar hoje?",
      }]);
    }
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Stop bounce after 5 seconds
  useEffect(() => {
    const t = setTimeout(() => setBounce(false), 5000);
    return () => clearTimeout(t);
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.text }]);
    } catch {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Ops, tive um problema técnico! Entre em contato pelo WhatsApp (42) 99838-8882.",
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => { setOpen(true); setBounce(false); }}
          className={`fixed bottom-6 right-6 z-40 flex flex-col items-center gap-1 group ${bounce ? "animate-bounce" : ""}`}
          aria-label="Abrir chat"
        >
          <div className="relative">
            {/* Bubble hint */}
            <div className="absolute -top-10 right-0 bg-white text-[#003957] text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#c6ccb0]/40">
              Posso ajudar?
            </div>
            <div className="w-16 h-16 bg-[#003957] hover:bg-[#004d70] rounded-2xl shadow-[0_8px_32px_rgba(0,57,87,0.4)] hover:shadow-[0_12px_40px_rgba(0,57,87,0.5)] flex items-center justify-center transition-all duration-300 hover:scale-110">
              <DogIcon className="w-10 h-10" />
            </div>
          </div>
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[340px] sm:w-[380px] flex flex-col bg-white rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.2)] overflow-hidden border border-[#c6ccb0]/20"
          style={{ maxHeight: "min(560px, calc(100vh - 80px))" }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-[#001e2e] to-[#003957] px-4 py-3 flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 bg-[#a8c941]/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <DogIcon className="w-7 h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-sm leading-none">Vet Bot</p>
              <p className="text-[#a8c941] text-xs mt-0.5">Assistente World Vet</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
            >
              <X size={15} className="text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 bg-[#003957]/8 rounded-xl flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                    <DogIcon className="w-5 h-5" />
                  </div>
                )}
                <div
                  className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#003957] text-white rounded-tr-sm"
                      : "bg-[#f8faf5] text-[#003957] rounded-tl-sm border border-[#c6ccb0]/30"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="w-7 h-7 bg-[#003957]/8 rounded-xl flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                  <DogIcon className="w-5 h-5" />
                </div>
                <div className="bg-[#f8faf5] border border-[#c6ccb0]/30 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#003957]/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-[#003957]/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-[#003957]/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 flex gap-2 overflow-x-auto flex-shrink-0">
              {["Horários", "Serviços", "Agendar", "Emergência"].map(s => (
                <button
                  key={s}
                  onClick={() => { setInput(s); }}
                  className="px-3 py-1.5 bg-[#003957]/6 text-[#003957] text-xs font-semibold rounded-full whitespace-nowrap hover:bg-[#003957]/12 transition-colors flex-shrink-0"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-4 py-3 border-t border-gray-100 flex items-center gap-2 flex-shrink-0">
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Digite sua dúvida..."
              className="flex-1 bg-[#f8faf5] border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#003957] focus:ring-2 focus:ring-[#003957]/10 transition-all"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className="w-9 h-9 bg-[#003957] hover:bg-[#004d70] disabled:opacity-40 text-white rounded-xl flex items-center justify-center transition-all flex-shrink-0"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
