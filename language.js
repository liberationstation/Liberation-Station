// language.js

// Mapping of all texts from English -> Portuguese
const translations = {
  "title": "Liberation Station",
  "nav_mission": "Missão",
  "nav_events": "Eventos",
  "nav_faq": "FAQ",
  "nav_partnerships": "Parcerias",
  "header_donate": "Doar",
  "donation_title": "Doar",
  "donation_other": "Outro valor",
  "donation_paypal": "PayPal",
  "donation_mbway": "MB WAY",
  "donation_proceed": "Prosseguir",
  "mission_title": "Missão",
  "mission_subtitle": "PELA PALESTINA LIVRE! ACABE COM O GENOCÍDIO!",
  "mission_text_1": "A organização de eventos culturais tem sido frequentemente usada pelo Estado de Israel para limpar a sua imagem internacional e, consequentemente, encobrir a sua responsabilidade pelo genocídio.",
  "mission_text_2": "No passado recente, vimos que o boicote coletivo a organizações sionistas provou ser eficaz em destruir esta estratégia de branqueamento. Serve como aviso para prevenir situações semelhantes no futuro. O Anta Gathering foi cancelado. Todos ganhamos – os amantes de música eletrónica, a população local e, acima de tudo – o povo palestiniano!",
  "mission_text_3": "Um grupo de mais de vinte pessoas espalhadas pelo país — a maioria envolvida na música — decidiu unir-se para criar a Liberation Station, que se apresenta como uma denúncia de todas as estratégias de branqueamento da imagem sionista através da música; uma alternativa humanitária e inteiramente voluntária, com forte compromisso em angariar fundos para a causa.",
  "mission_text_4": "Nove eventos serão realizados em cinco locais diferentes de 30 de Setembro a 5 de Outubro. Todo o programa será transmitido online, e a maioria dos eventos será pública.",
  "mission_text_5": "Todos os rendimentos irão para famílias necessitadas em Gaza. Identificámos quatro famílias em necessidade urgente e, por cada €100 adicionais, ajudaremos mais uma.",
  "mission_text_6": "Estamos também em parceria com a Occupy For Gaza e Coimbra Pela Palestina.",
  "events_title": "Eventos",
  "events_tickets": "Bilhetes",
  "e1_date": "30 DE SETEMBRO",
  "e1_location": "MONCARAPACHO",
  "e1_name": "AMIGO LAB",
  "e1_live": "TRANSMISSÃO AO VIVO",
  "e1_desc": "Dolor donec eget morbi nisi. Eu ut et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravida porttitor vel. Ut id velit tempor eu amet nunc. Vestibulum iaculis cras sed odio. A dolor vitae ultrices at maecenas massa urna massa erat. Enim in",
  "e2_date": "1 DE OUTUBRO",
  "e2_location": "LISBOA",
  "e2_name": "PASSEVITE",
  "e2_desc": "Dolor donec eget morbi nisi. Eu ut et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravida porttitor vel. Ut id velit tempor eu amet nunc. Vestibulum iaculis cras sed odio. A dolor vitae ultrices at maecenas massa urna massa erat. Enim in",
  "e3_date": "1 DE OUTUBRO",
  "e3_location": "LISBOA",
  "e3_name": "LISA",
  "e3_desc": "Dolor donec eget morbi nisi. Eu ut et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravida porttitor vel. Ut id velit tempor eu amet nunc. Vestibulum iaculis cras sed odio. A dolor vitae ultrices at maecenas massa urna massa erat. Enim in",
  "e4_date": "2 DE OUTUBRO",
  "e4_location": "LISBOA",
  "e4_name": "SIRIGAITA",
  "e4_desc": "Dolor donec eget morbi nisi. Eu ut et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravida porttitor vel. Ut id velit tempor eu amet nunc. Vestibulum iaculis cras sed odio. A dolor vitae ultrices at maecenas massa urna massa erat. Enim in",
  "e5_date": "2 DE OUTUBRO",
  "e5_location": "LISBOA",
  "e5_name": "OUTRA CENA",
  "e5_desc": "Dolor donec eget morbi nisi. Eu ut et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravida porttitor vel. Ut id velit tempor eu amet nunc. Vestibulum iaculis cras sed odio. A dolor vitae ultrices at maecenas massa urna massa erat. Enim in",
  "e6_date": "3 DE OUTUBRO",
  "e6_location": "COIMBRA",
  "e6_name": "REPÚBLICA SPREIT-Ó-FURO",
  "e6_desc": "Dolor donec eget morbi nisi. Eu ut et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravida porttitor vel. Ut id velit tempor eu amet nunc. Vestibulum iaculis cras sed odio. A dolor vitae ultrices at maecenas massa urna massa erat. Enim in",
  "e7_date": "3 DE OUTUBRO",
  "e7_location": "OPORTO",
  "e7_name": "PASSOS MANUEL",
  "e7_desc": "Dolor donec eget morbi nisi. Eu ut et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravida porttitor vel. Ut id velit tempor eu amet nunc. Vestibulum iaculis cras sed odio. A dolor vitae ultrices at maecenas massa urna massa erat. Enim in",
  "e8_date": "4 DE OUTUBRO",
  "e8_location": "OPORTO",
  "e8_name": "PEDREIRA",
  "e8_desc": "Dolor donec eget morbi nisi. Eu ut et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravida porttitor vel. Ut id velit tempor eu amet nunc. Vestibulum iaculis cras sed odio. A dolor vitae ultrices at maecenas massa urna massa erat. Enim in",
  "e9_date": "5 DE OUTUBRO",
  "e9_location": "SANTO TIRSO",
  "e9_name": "ALÍNEA A",
  "e9_live": "TRANSMISSÃO AO VIVO",
  "e9_desc": "Dolor donec eget morbi nisi. Eu ut et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravida porttitor vel. Ut id velit tempor eu amet nunc. Vestibulum iaculis cras sed odio. A dolor vitae ultrices at maecenas massa urna massa erat. Enim in",
  "view_event": "Ver Evento",
  "faq_title": "Perguntas Frequentes",
  "faq_q1": "Israel está a cometer genocídio na Palestina?",
  "faq_a1": "Sim. De acordo com as Nações Unidas; muitos historiadores palestinianos e israelitas; a Associação Internacional de Estudos sobre Genocídio; organizações de direitos humanos como Al Mezan e PCHR até à Amnesty International; os grupos israelitas B’Tselem e Physicians for Human Rights; governos da África do Sul à Arábia Saudita; e inúmeros outros investigadores e académicos. Estas acusações seguem anos de apartheid em Israel e esforços contínuos para construir assentamentos ilegais na Cisjordânia ocupada, tornando a independência palestiniana praticamente impossível. Eles não se têm envergonhado disto.",
  "faq_q2": "QUEM SOMOS?",
  "faq_a2": "Artistas, espaços e coletivos unidos para levantar a voz contra o genocídio em curso do povo palestiniano.",
  "faq_a3": "Um grupo de mais de vinte pessoas espalhadas pelo país — a maioria envolvida na música — decidiu unir-se para criar a Liberation Station, que se apresenta como uma denúncia de todas as estratégias de branqueamento da imagem sionista através da música; uma alternativa humanitária e inteiramente voluntária, com forte compromisso em angariar fundos para a causa.",
  "faq_q3": "O QUE MOTIVOU ESTA INICIATIVA?",
  "faq_a4": "O genocídio de um povo – o povo palestiniano. As tentativas do Estado sionista de branqueamento não passarão. Nem o branqueamento por plataformas como a HÖR Berlin. O Weekender Hör Lisboa não é neutro – é uma afronta ao povo palestiniano. Esse evento é a faísca da nossa iniciativa, que corre em paralelo, nas mesmas datas, usando os mesmos canais: música, cultura de clube, streaming e colaborações com rádios comunitárias. É isto que estamos a planear pelo país — tudo por uma causa: Liberdade para a Palestina.",
  "faq_q4": "PARA ONDE VÃO AS SUAS DOAÇÕES?",
  "faq_a5": "Cada euro doado à Liberation Station vai para famílias palestinianas necessitadas. Crianças em Gaza estão a ser enterradas sob os escombros, famintas devido ao cerco, mutiladas por bombas. Escolas e parques infantis tornaram-se alvos e locais de trauma. Uma geração está a ser apagada diante dos nossos olhos. No meio deste horror, humanitários palestinianos arriscam diariamente as suas vidas para salvar outros, entregando ajuda, comida, água, medicamentos e educação. O seu trabalho traz esperança na escuridão. Perderam tudo. Dê o que puder.",
  "partners_title": "Parcerias",
  "footer_name": "LIBERATION STATION",
  "footer_email": "Email",
  "footer_instagram": "Instagram",
  "footer_twitch": "Twitch",
  "footer_ra": "Resident Advisor",
  "footer_copyright": "©Copyright LIBERATION STATION 2025"
};

// Button toggle
const langBtn = document.querySelector('.pt-btn');
let currentLang = 'en'; // default

// Store original English text for each element
const originalText = {};
document.querySelectorAll('[data-translate]').forEach(el => {
  originalText[el.getAttribute('data-translate')] = el.textContent;
});

langBtn.addEventListener('click', () => {
  if (currentLang === 'en') {
    // Translate to Portuguese
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      if (translations[key]) el.textContent = translations[key];
    });
    langBtn.textContent = 'EN';
    currentLang = 'pt';
  } else {
    // Restore original English text
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      el.textContent = originalText[key];
    });
    langBtn.textContent = 'PT';
    currentLang = 'en';
  }
});
