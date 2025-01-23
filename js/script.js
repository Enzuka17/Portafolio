document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('projectModal');
  const modalClose = document.querySelector('.modal-close');
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.dataset.project;
      const projectData = projectsData[projectId];

      if (projectData) {
        // Actualizar el contenido del modal
        document.getElementById('modalTitle').textContent = projectData.title;
        document.getElementById('modalDescription').innerHTML = projectData.description;
        
        // Mostrar los logros como lista
        const achievementsList = document.getElementById('modalTechnologies');
        achievementsList.innerHTML = `<ul>${projectData.achievements
          .map(achievement => `<li>${achievement}</li>`).join('')}</ul>`;

        document.getElementById('modalPreview').innerHTML = projectData.previewSvg;

        // Actualizar el enlace del proyecto
        const projectLink = document.getElementById('projectLink');
        projectLink.href = projectData.link;
        projectLink.target = "_blank";  // Abrir en una nueva pestaña

        // Mostrar el modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Cerrar el modal
  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  // Datos de los proyectos
  const projectsData = {
    tutorSeguro: {
      title: 'Tutor Seguro',
      description: 'Aplicación para la seguridad en el retiro de menores.',
      achievements: [
        'Diseño de una aplicación móvil para optimizar la seguridad en el retiro de menores, utilizando reconocimiento facial y autenticación vía SMS.',
        'Mejora en la experiencia de usuario, asegurando una navegación intuitiva y accesible en dispositivos móviles, enfocada en las necesidades de las educadoras de párvulo.',
        'Optimización del proceso de verificación de identidad minimizando errores humanos.',
        'Incremento en la confianza de las familias al proporcionar un sistema automatizado que refuerza la seguridad infantil.'
      ],
      link: 'https://www.behance.net/gallery/209511125/Tutor-Seguro-Diseno-App-Movil',
     previewSvg: '<img src="img/imagenes_grandes/TutorSeguro.png" alt="Vista previa de Tutor Seguro"/>'
    },
    hunTI: {
      title: 'HunTI Consultores',
      description: 'Rediseño de sitio web de HunTI Consultores incoporando un inicio de sesión y un portal de alumnos.',
      achievements: [
        'Rediseño la interfaz del sitio web, centralizando el acceso a materiales y gestión de cursos en una plataforma intuitiva que optimizó la interacción entre alumnos y profesores, facilitando el seguimiento académico.',
        'Implementación de herramientas que simplificaron la navegación y organización de recursos educativos.',
        'Mejora en la claridad del proceso de aprendizaje con una interfaz más organizada y accesible.'
      ],
      link: 'https://www.behance.net/gallery/209620945/Caso-de-Estudio-HuntiConsultoresTI',
     previewSvg: '<img src="img/imagenes_grandes/HuntiConsultores.png" alt="Vista previa de Tutor Seguro"/>'
    },
    ecommerce: {
      title: 'Macrosoftware Spa',
      description: 'Diseño y desarrollo de Landing Page.',
      achievements: [
        'Análisis de necesidades del cliente y desarrollo del sitio web de la empresa fortaleciendo su presencia digital.',
        'Implementación de pruebas de funcionalidad, lo que permitió identificar y corregir errores que mejoraron la estabilidad del sitio.'
      ],
      link: 'https://www.macrosoftware.cl/',
      previewSvg: '<img src="img/imagenes_grandes/Macrosoftware.png" alt="Vista previa de Tutor Seguro"/>'
    },
    dashboard: {
      title: 'Geotren',
      description: 'Sistema de visualización de datos en tiempo real para empresa de transporte minera.',
      achievements: [
        'Desarrollo de una plataforma para la gestión de órdenes de trabajo en mantenimiento ferroviario.',
        'Implementación de funcionalidades para la administración de usuarios y trabajadores, con exportación de datos a Excel.',
        'Integración de un mapa interactivo para la visualización de órdenes de trabajo.',
        'Creación de una interfaz web intuitiva y desarrollo de una aplicación móvil para acceso remoto a la información.',
        'Aplicación de la metodología incremental con entregas parciales y mejoras continuas.'
      ],
      link: 'https://example.com/geotren',
      previewSvg: '<img src="img/imagenes_grandes/GEOTREN.png" alt="Vista previa de Tutor Seguro"/>'
    }
  };
});


