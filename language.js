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
"mission_text_1": "A Liberation Station nasceu da urgência de denunciar a forma como Israel e as suas estruturas de apoio utilizam a cultura e a música para lavar a sua imagem internacional e normalizar um genocídio em curso. Esta estratégia de branqueamento não é nova, já a vimos em eventos recentes, mas vimos também como a ação coletiva e o boicote podem desmontá-la.",
"mission_text_2": "O gatilho para a nossa iniciativa foi o Weekender da HÖR em Lisboa, uma plataforma que se apresenta como neutra, mas que na prática censurou artistas e cancelou vozes solidárias com a Palestina. Decidimos responder de forma criativa e solidária, desenvolvemos a nossa iniciativa de forma a coincidir nas mesmas datas com os mesmos meios de difusão: a música, o clubbing, o streaming e as community radios, tudo isto em simultâneo com uma campanha de angariação de fundos para Gaza.",
"mission_text_3": "De 30 de setembro a 5 de outubro, vamos organizar 9 eventos em 5 localidades de norte a sul do país, com transmissões em direto e em espaços de referência da cena underground e alternativa. Tudo de forma voluntária, sem fins lucrativos, com o único propósito de juntar forças, levantar vozes e canalizar recursos para quem mais precisa.",
"mission_text_4": "O nosso projeto afirma-se como um espaço de solidariedade ativa. Toda a angariação de fundos reverte para famílias em Gaza. Através dos nossos parceiros, estamos em contacto direto com várias famílias, das quais identificámos 4 como prioritárias devido a situações de maior urgência. Estas recebem apoio garantido. Depois, a cada €100 adicionais que conseguirmos angariar, permitirá apoiar mais uma das nossas famílias. Todas as transferências serão documentadas e publicadas posteriormente de forma a garantir total transparência.",
"mission_text_5": "A Liberation Station é música, solidariedade e resistência. É a prova de que a cultura não tem de ser cúmplice, mas sim um espaço de denúncia, de comunidade e de luta.",


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
  
  
// ===== FAQ =====
"faq_title": "Perguntas Frequentes",
"faq_q1": "Quem organiza a Liberation Station?",
"faq_a1": "Somos um coletivo de mais de trinta pessoas espalhadas por todo o país, na sua maioria ligadas à música como artista, produtor, entre outros. Organizamo-nos de forma totalmente voluntária, sem fins lucrativos, para criar um evento que denuncie a utilização da cultura como ferramenta de propaganda sionista e que, ao mesmo tempo, apoie diretamente famílias palestinianas em Gaza.",
"faq_q2": "Quem recebe as doações?",
"faq_a2": "Todas as doações feitas nos nossos eventos ou através do nosso site vão diretamente para a Associação Juvenil CulturMais, NIPC 510862110, uma associação legalmente registada em Portugal. Esta campanha foi formalmente aprovada pela direção da associação, a qual autorizou a angariação e consequente distribuição dos fundos.",
"faq_q3": "Porque é que as doações vão para uma associação?",
"faq_a3": "Para garantir segurança e transparência, escolhemos canalizar as doações através de uma associação legalmente registada em Portugal. Isto permite-nos recolher os fundos sem recorrer às nossas contas bancárias pessoais. A associação tem autorização formal da direção para esta campanha e todas as transferências para as famílias serão documentadas e publicadas.",
"faq_q4": "Para onde vão os fundos?",
"faq_a4": "A associação distribui 100% do valor angariado para famílias em Gaza através das suas campanhas pessoais no GoFundMe e plataformas semelhantes, que são atualmente os principais canais através dos quais estas famílias conseguem receber ajuda.",
"faq_q5": "Como são distribuídos os fundos?",
"faq_a5": "Através de parceiros nossos que mantêm contacto direto com 28 famílias, identificámos 4 famílias que estão em situação mais urgente devido a complicações de saúde, morte de familiares ou deslocações com custos elevados. Estas 4 são a nossa prioridade inicial. Depois, por cada €100 adicionais que angariarmos, conseguimos ajudar mais uma das restantes famílias.",
"faq_q6": "O que acontece se angariarmos mais do que o esperado?",
"faq_a6": "Quanto mais angariarmos, mais famílias conseguimos apoiar. Se ultrapassarmos o valor definido para as 28 famílias, reforçaremos os valores destinados a cada uma.",
"faq_q7": "De que forma enviar dinheiro para famílias em Gaza as ajuda?",
"faq_a7": "O custo de vida em Gaza tornou-se extremamente elevado devido ao bloqueio prolongado e à escassez de auxílio. Um quilo de arroz, por exemplo, pode chegar aos $40. Para além da alimentação e produtos essenciais, as famílias enfrentam despesas enormes com deslocações, cuidados médicos, substituição de bens destruídos ou outros imprevistos críticos. Cada contribuição ajuda a aliviar estas dificuldades, proporcionando às famílias os meios necessários para sobreviver e manter a sua dignidade no meio da adversidade.",
"faq_q8": "Como sei que o dinheiro chega às famílias?",
"faq_a8": "Todas as transferências serão documentadas e posteriormente publicadas nas nossas plataformas de forma a garantir transparência total.",
"faq_q9": "Posso doar mesmo sem ir aos eventos?",
"faq_a9": "Sim! Basta usar os métodos de pagamento disponíveis no site. Cada contribuição, por menor que seja, tem impacto direto.",
"faq_q10": "Posso doar diretamente às famílias sem passar por vocês?",
"faq_a10": "Sim. Queremos ser totalmente transparentes. As famílias que apoiamos têm campanhas pessoais no GoFundMe e plataformas semelhantes. Se preferires, podes doar diretamente através dessas campanhas. Há também coletivos e organizações a fazer trabalho fundamental no terreno e todas as contribuições fazem a diferença: Seeds of Hope, Gaza Soup Kitchen, Sameer Project, entre outros.",
"faq_q11": "Como posso ajudar além de doar?",
"faq_a11": "Divulga a Liberation Station, partilha a nossa campanha de angariação de fundos nas redes sociais e vem aos nossos eventos. A solidariedade constrói-se coletivamente :)",

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
