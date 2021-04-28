import trackfit from '../assets/images/trackfit.jpg';
import mimadohotel from '../assets/images/mimadoHotel.jpg';
import portfolio from '../assets/images/portfolio.jpg';


const projectsWeb = [
  {
    id : 6,
    fullName: 'TrackFit - Journal alimentaire',
    technos: 'Html - Scss - React - Redux - Node.js - PostgreSQL',
    description: 'Journal alimentaire et sportif réalisé lors du projet de fin de formation chez O\'clock.',
    github: 'https://github.com/MarcChayer/TrackFit-Journal-alimentaire-et-sportif',
    website: 'http://3.90.247.93:8080',
    image: trackfit,
    isOpen: false,
  },
  {
    id : 7,
    fullName: 'Hotel Mimado - Les pieds dans l\'eau',
    technos: 'Html - Scss - React',
    description: 'Site vitrine pour un hôtel se trouvant au Cameroun',
    github: 'https://github.com/MarcChayer/hotel-Mimado/tree/mobileFirst',
    website: 'http://www.mimadohotel.com/',
    image: mimadohotel,
    isOpen: false,
  },
  {
    id : 8,
    fullName: 'Portfolio',
    technos: 'Html - Scss - React - Redux',
    description: 'Réalisation de mon portfolio',
    github: 'https://github.com/MarcChayer/portfolio',
    website: 'https://marc-chayer.netlify.app/',
    image: portfolio,
    isOpen: false,
  },
];

export default projectsWeb;
