import trackfit from '../assets/images/trackfit.jpg';
import mimadohotel from '../assets/images/mimadoHotel.jpg';
import portfolio from '../assets/images/portfolio.jpg';


const projectsWeb = [
  {
    id : 6,
    fullName: 'TrackFit - Journal alimentaire',
    technos: 'Html - Scss - React - Redux - Node.js - PostgreSQL',
    description: 'TrackFit est un journal alimentaire et sportif, qui propose des articles sur l\'alimentation, le sport et le bien-être. Les membres connectés ont accès à un tableau de bord, qui leur permet d\'enregistrer leurs repas, leur activité sportive, leur consommation d\'eau, leur poids et leur sommeil. Un récapitulatif de l\'utilisateur est également présent sur le tableau de bord. Les membres ont également la possibilité d\'ajouter des articles en favoris, créer et supprimer des tâches et de renseigner son profil via la page de paramètre du profil... Dans une v2, un suivi sera disponible dans l\'onglet "Statistiques", ainsi que d\'autres fonctionnalités !.',
    github: 'https://github.com/MarcChayer/TrackFit-Journal-alimentaire-et-sportif',
    website: 'http://3.90.247.93:8080',
    image: trackfit,
  },
  {
    id : 7,
    fullName: 'Hotel Mimado - Les pieds dans l\'eau',
    technos: 'Html - Css - JavaScript',
    description: 'Site vitrine pour un hôtel se trouvant au Cameroun',
    github: '',
    website: 'http://www.mimadohotel.com/',
    image: mimadohotel,
  },
  {
    id : 8,
    fullName: 'Portfolio',
    technos: 'Html - Scss - React - Redux',
    description: 'Réalisation de mon portfolio',
    github: '',
    website: '',
    image: portfolio,
  },
];

export default projectsWeb;
