import laBoite from '../assets/images/laBoite.jpg';
import lpgc from '../assets/images/lpGenieClimatique.jpg';
import ltdm from '../assets/images/leToitDeMauzac.jpg';
import mof from '../assets/images/MOF.jpg';
import d3d from '../assets/images/doudoune.png';

const projectsWeb = [
  {
    id : 1,
    fullName: 'La boite',
    technos: 'vectoriel',
    description: 'Création du logo d\'une boite d\'événementiel',
    image: laBoite,
  },
  {
    id : 2,
    fullName: 'LP génie climatique',
    technos: 'vectoriel',
    description: 'Création du logo et de la carte de visite d\'une société spécialisée dans le secteur d\'activité des travaux d\'installation d\'équipements thermiques et de climatisation.',
    image: lpgc,
  },
  {
    id : 3,
    fullName: 'Le toit de Mauzac',
    technos: 'vectoriel',
    description: 'Création du logo d\'une boite spécialisée dans le secteur d\'activité des travaux de charpente.',
    image: ltdm,
  },
  {
    id : 4,
    fullName: 'Men On Fire',
    technos: 'vectoriel',
    description: 'Création du logo d\'une marque de sport spécialisée dans le crossfit.',
    image: mof,
  },
  {
    id : 5,
    fullName: 'Doudoune 3D',
    technos: 'Clo 3D',
    description: 'Modélisation d\'une doudoune 3D',
    image: d3d,
  },
];

export default projectsWeb;
