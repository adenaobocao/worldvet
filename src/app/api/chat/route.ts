import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `Você é o assistente virtual da World Vet, clínica veterinária em Piraí do Sul - PR.
Seu nome é "Vet Bot" e você é amigável, simpático e objetivo.
Responda sempre em português brasileiro de forma breve (máximo 3-4 frases por resposta).
Você conhece estas informações sobre a clínica:
- Endereço: Rua Vinte e Três de Abril, Piraí do Sul - PR
- WhatsApp: (42) 99838-8882
- Horário: Segunda a Sexta 8h–18h, Sábado 8h–12h, Domingo fechado
- Veterinário responsável: Dr. Matheus A. F. Martins, CRMV-PR 18808, especialista em cirurgia veterinária
- Serviços: consultas, cirurgias, vacinas, internação, banho e tosa, microchipagem, exames laboratoriais
- Para agendamentos, direcione para o WhatsApp da clínica ou para o calendário de agendamento online no site.
Se não souber algo específico, peça para o tutor entrar em contato pelo WhatsApp.`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API key not configured" }, { status: 500 });
  }

  const { messages } = await req.json();

  const contents = messages.map((m: { role: string; content: string }) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: {
            maxOutputTokens: 256,
            temperature: 0.7,
          },
        }),
      }
    );

    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "Desculpe, não consegui processar sua pergunta. Entre em contato pelo WhatsApp (42) 99838-8882.";
    return NextResponse.json({ text });
  } catch {
    return NextResponse.json(
      { text: "Ops, tive um problema técnico. Entre em contato pelo WhatsApp (42) 99838-8882." },
      { status: 200 }
    );
  }
}
