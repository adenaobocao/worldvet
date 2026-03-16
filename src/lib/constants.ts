export const CLINIC = {
  name: "World Vet",
  tagline: "Um mundo de cuidados para seu melhor amigo",
  description:
    "Clínica veterinária especializada em cirurgias de alta complexidade, exames de ponta e acompanhamento contínuo em Piraí do Sul, PR.",
  whatsapp: "5542998388882",
  whatsappDisplay: "(42) 99838-8882",
  address: "Rua Vinte e Três de Abril, Piraí do Sul - PR",
  addressShort: "Piraí do Sul - PR",
  hours: {
    weekdays: "Segunda a Sexta: 8h às 18h",
    saturday: "Sábado: 8h às 12h",
    urgency: "Urgências: plantão disponível",
  },
  instagram: "https://www.instagram.com/worldvetpiraidosul/",
  maps: "https://www.google.com/maps/place/World+Vet/@-24.5324775,-49.9450114,17z",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614!2d-49.9450114!3d-24.5324775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c27f003c5a8d9d%3A0x7a3dcaec1af11b3d!2sWorld%20Vet!5e0!3m2!1spt-BR!2sbr!4v1",
};

export const DOCTOR = {
  name: "Dr. Matheus A. F. Martins",
  nameShort: "Dr. Matheus",
  crmv: "CRMV-PR 18808",
  title: "Médico Veterinário Especialista em Cirurgia",
  specialization: "Especialização em Cirurgia Veterinária — ANCLIVEPA-SC",
  bio: "Especialista em cirurgias de alta complexidade, o Dr. Matheus Martins combina formação técnica sólida e experiência prática para oferecer os melhores cuidados ao seu animal. Com especialização pela ANCLIVEPA-SC, atua com precisão nos casos mais desafiadores da medicina veterinária.",
  photo: "/matheus.png",
};

export const WHATSAPP_LINKS = {
  urgency: `https://wa.me/${CLINIC.whatsapp}?text=Preciso%20de%20atendimento%20de%20urg%C3%AAncia%20para%20meu%20pet`,
  schedule: `https://wa.me/${CLINIC.whatsapp}?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta`,
  grooming: `https://wa.me/${CLINIC.whatsapp}?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20banho%20e%20tosa`,
  general: `https://wa.me/${CLINIC.whatsapp}?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20World%20Vet`,
};
