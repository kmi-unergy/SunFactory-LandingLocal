import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        about: 'Quiénes Somos',
        us: 'Nosotros',
        projects: 'Proyectos',
        connect: 'Conectemos',
        ethics: 'Ética'
      },
      hero: {
        title: 'Desarrollamos energía con propósito',
        subtitle: 'En Sun Factory creemos que la energía solar no solo transforma territorios: transforma futuros.',
        cta: 'Conectemos'
      },
      about: {
        title: 'Quiénes Somos',
        text: 'Somos una empresa colombiana que impulsa proyectos solares desde su origen, conectando necesidades reales con soluciones responsables. Acompañamos cada etapa del proceso con una mirada integral, eficiente y comprometida con el entorno.'
      },
      us: {
        title: 'Nosotros',
        sustainability: {
          title: 'Sostenibilidad y comunidades',
          text: 'Cada proyecto es una oportunidad para construir confianza, fortalecer capacidades locales y dejar huellas que trascienden lo energético.'
        },
        safety: {
          title: 'Seguridad y bienestar',
          text: 'Implementamos protocolos rigurosos en seguridad y salud para proteger a nuestro equipo y a las comunidades donde trabajamos.'
        },
        environment: {
          title: 'Impacto ambiental positivo',
          text: 'Gestionamos cada proyecto con respeto por la tierra, promoviendo prevención, diálogo y mejora continua.'
        }
      },
      projects: {
        title: 'Nuestros Proyectos',
        intro: 'Desarrollamos proyectos solares que combinan conocimiento técnico, visión financiera y sensibilidad social. Próximamente encontrarás aquí nuestras instalaciones en operación.',
        cta: 'Conectemos para conocer más',
        viewMap: 'Ver Mapa',
        viewList: 'Ver Listado',
        mapTitle: 'Ubicación de Proyectos',
        listTitle: 'Proyectos en Desarrollo',
        inDevelopment: 'Proyectos en desarrollo',
        inConstruction: 'Proyectos en construcción',
        comingSoon: 'Próximamente'
      },
      connect: {
        title: 'Conectemos',
        subtitle: 'Tu voz transforma nuestros proyectos',
        intro: 'En Sun Factory hemos creado el programa Conectemos como el canal oficial para recibir tus Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones (PQRSF). Queremos escucharte y asegurarte un proceso claro, transparente y oportuno.',
        viewForm: 'Formulario',
        viewTracking: 'Seguimiento',
        form: {
          name: 'Nombre',
          email: 'Correo electrónico',
          phone: 'Teléfono/Celular',
          location: 'Ubicación (Vereda, Municipio, Departamento)',
          category: 'Categoría de solicitud',
          message: 'Mensaje',
          anonymous: 'Enviar de manera anónima',
          submit: 'Enviar',
          tracking: 'Seguimiento de PQRSF',
          trackingPlaceholder: 'Ingresa tu número de radicado',
          trackButton: 'Consultar estado',
          selectCategory: 'Seleccione una categoría',
          petition: 'Petición',
          complaint: 'Queja',
          claim: 'Reclamo',
          suggestion: 'Sugerencia',
          congratulation: 'Felicitación'
        },
        confirmation: {
          title: '¡Solicitud enviada exitosamente!',
          message: 'Tu solicitud ha sido enviada exitosamente. Tu número de radicado es:',
          note: 'Guarda este número para hacer seguimiento.',
          emailSent: 'Se ha enviado una copia de confirmación a tu correo electrónico.'
        },
        status: {
          title: 'Estado de tu solicitud',
          filing: 'Número de radicado:',
          currentStatus: 'Estado actual:',
          date: 'Fecha de envío:',
          inReview: 'En revisión',
          responded: 'Respondida',
          closed: 'Cerrada',
          notFound: 'No se encontró ninguna solicitud con este número de radicado.'
        },
        sidebar: {
          contactTitle: 'Otras formas de contacto',
          contactEmail: 'conectemos@sunfactory.io',
          contactPhone: '+57 301 695 3489',
          contactWhatsApp: 'WhatsApp',
          commitmentsTitle: 'Nuestros Compromisos',
          commitment1: 'Respuesta oportuna en máximo 15 días hábiles',
          commitment2: 'Proceso transparente y seguimiento continuo',
          commitment3: 'Confidencialidad y respeto por tu información',
          commitment4: 'Atención personalizada y profesional'
        }
      },
      ethics: {
        title: 'Gobierno Ético & Políticas de Ética',
        intro: 'En Sun Factory, creemos que la integridad y la transparencia deben estar en el corazón de cada decisión. Nuestras políticas de ética corporativa establecen los principios y normas que guían el comportamiento de nuestro equipo, aliados y colaboradores, asegurando coherencia entre nuestros valores y nuestras acciones.',
        principles: {
          title: 'Principios éticos fundamentales',
          text: 'Integridad, transparencia, respeto, responsabilidad.'
        },
        scope: {
          title: 'Ámbitos de aplicación',
          text: 'Conducta laboral, medio ambiente, conflictos de interés, cumplimiento legal.'
        },
        reporting: {
          title: 'Mecanismos de reporte y cumplimiento',
          text: 'Línea Ética y Línea Sorora: +57 300 123 4567'
        },
        supervision: {
          title: 'Supervisión y mejora continua',
          text: 'Auditorías, capacitación, revisión anual de políticas.'
        },
        download: 'Descargar documento completo de Políticas de Ética (PDF)'
      },
      footer: {
        quickLinks: 'Enlaces Rápidos',
        followUs: 'Síguenos',
        rights: '© 2025 Sun Factory. Todos los derechos reservados.'
      },
      accessibility: {
        title: 'Opciones de Accesibilidad',
        highContrast: 'Alto contraste',
        textToSpeech: 'Lectura en voz alta',
        largeText: 'Texto grande'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About Us',
        us: 'Our Values',
        projects: 'Projects',
        connect: 'Connect',
        ethics: 'Ethics'
      },
      hero: {
        title: 'We develop energy with purpose',
        subtitle: "At Sun Factory, we believe that solar energy doesn't just transform territories: it transforms futures.",
        cta: 'Connect with us'
      },
      about: {
        title: 'About Us',
        text: 'We are a Colombian company that drives solar projects from their origin, connecting real needs with responsible solutions. We accompany every stage of the process with a comprehensive, efficient approach committed to the environment.'
      },
      us: {
        title: 'Our Values',
        sustainability: {
          title: 'Sustainability and communities',
          text: 'Each project is an opportunity to build trust, strengthen local capacities and leave footprints that transcend the energy sector.'
        },
        safety: {
          title: 'Safety and well-being',
          text: 'We implement rigorous safety and health protocols to protect our team and the communities where we work.'
        },
        environment: {
          title: 'Positive environmental impact',
          text: 'We manage each project with respect for the land, promoting prevention, dialogue and continuous improvement.'
        }
      },
      projects: {
        title: 'Our Projects',
        intro: 'We develop solar projects that combine technical knowledge, financial vision and social sensitivity. Soon you will find our operating facilities here.',
        cta: 'Connect to learn more',
        viewMap: 'View Map',
        viewList: 'View List',
        mapTitle: 'Project Locations',
        listTitle: 'Projects in Development',
        inDevelopment: 'Projects in development',
        inConstruction: 'Projects under construction',
        comingSoon: 'Coming Soon'
      },
      connect: {
        title: 'Connect with Us',
        subtitle: 'Your voice transforms our projects',
        intro: 'At Sun Factory, we have created the Connect program as the official channel to receive your Petitions, Complaints, Claims, Suggestions and Congratulations (PQRSF). We want to listen to you and ensure a clear, transparent and timely process.',
        viewForm: 'Form',
        viewTracking: 'Tracking',
        form: {
          name: 'Name',
          email: 'Email',
          phone: 'Phone/Mobile',
          location: 'Location (Village, Municipality, Department)',
          category: 'Request category',
          message: 'Message',
          anonymous: 'Send anonymously',
          submit: 'Submit',
          tracking: 'PQRSF Tracking',
          trackingPlaceholder: 'Enter your filing number',
          trackButton: 'Check status',
          selectCategory: 'Select a category',
          petition: 'Petition',
          complaint: 'Complaint',
          claim: 'Claim',
          suggestion: 'Suggestion',
          congratulation: 'Congratulation'
        },
        confirmation: {
          title: 'Request submitted successfully!',
          message: 'Your request has been submitted successfully. Your filing number is:',
          note: 'Save this number to track your request.',
          emailSent: 'A confirmation copy has been sent to your email.'
        },
        status: {
          title: 'Request Status',
          filing: 'Filing number:',
          currentStatus: 'Current status:',
          date: 'Submission date:',
          inReview: 'Under review',
          responded: 'Responded',
          closed: 'Closed',
          notFound: 'No request found with this filing number.'
        },
        sidebar: {
          contactTitle: 'Other ways to contact',
          contactEmail: 'conectemos@sunfactory.io',
          contactPhone: '+57 300 123 4567',
          contactWhatsApp: 'WhatsApp',
          commitmentsTitle: 'Our Commitments',
          commitment1: 'Timely response within 15 business days',
          commitment2: 'Transparent process and continuous tracking',
          commitment3: 'Confidentiality and respect for your information',
          commitment4: 'Personalized and professional attention'
        }
      },
      ethics: {
        title: 'Corporate Governance & Ethics Policies',
        intro: 'At Sun Factory, we believe that integrity and transparency must be at the heart of every decision. Our corporate ethics policies establish the principles and standards that guide the behavior of our team, partners and collaborators, ensuring coherence between our values and our actions.',
        principles: {
          title: 'Fundamental ethical principles',
          text: 'Integrity, transparency, respect, responsibility.'
        },
        scope: {
          title: 'Areas of application',
          text: 'Work conduct, environment, conflicts of interest, legal compliance.'
        },
        reporting: {
          title: 'Reporting and compliance mechanisms',
          text: 'Ethics Line and Sorora Line: +57 300 123 4567'
        },
        supervision: {
          title: 'Supervision and continuous improvement',
          text: 'Audits, training, annual policy review.'
        },
        download: 'Download complete Ethics Policies document (PDF)'
      },
      footer: {
        quickLinks: 'Quick Links',
        followUs: 'Follow Us',
        rights: '© 2025 Sun Factory. All rights reserved.'
      },
      accessibility: {
        title: 'Accessibility Options',
        highContrast: 'High contrast',
        textToSpeech: 'Text to speech',
        largeText: 'Large text'
      }
    }
  }
};
i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false
  }
});
export default i18n;
