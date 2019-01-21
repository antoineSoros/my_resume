import {HobbyModel} from '../models/hobby.model';

export const HOBBIES: HobbyModel[] = [
  {
    id: 1,
    name: 'musique',
    description: 'J\'aime tous les styles avec une préférence pour le rock des années 90',
    icon: '/assets/logo/rock.png'
  },
  {
    id: 2,
    name: 'rugby',
    description: 'Rien de mieux que de regarder un bon crunch dans un pub avec des amis.',
    icon: '/assets/logo/rugby.png'
  },
  {
    id: 3,
    name: 'la raclette',
    description: 'tout est dit....',
    icon: '/assets/logo/food.png'
  },
  {
    id: 4,
    name: 'jeux vidéo vr',
    description: 'Une découverte toute récente!!! ',
    icon: 'assets/logo/vr.png'
  }
];
