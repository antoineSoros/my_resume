import {XpModel} from '../models/xp.model';

export const EXPRERIENCES: XpModel[] = [
  {
    id: 1,
    date: 'Fevrier à Mars 2019',
    title: 'Stagiaire Backend - My Works ',
    description: 'Développement de nouvelles fonctionnalités de l\'API\n' +
      'Utilisation du framework Symfony 4.\n' +
      'Création d\'un service de notifications pushs pour l\'application mobile\n' +
      'Élaboration de tests avec le framework Codeception et Postman.\n' +
      'Écriture de la documentation technique (diagrammes UML et description de la stack technique)\n' +
      'de la plateforme .'
  },
  {
    id: 2,
    date: '2007-2018',
    title: 'Régisseur Lumière - employeurs multiples',
    description: 'Mise en lumière de spectacle : théâtre, concert, danse, conférence, et tous types ' +
      'd\'événements.' +
      ' Création sur logiciel, programmation, montage/démontage ' +
      'Management d’équipe, préparation (devis/matériel).'
  },
  {
     id: 3,
    date: '2002-2006',
    title: 'Autres expériences',
    description: 'Manutentionnaire, monteur, livreur, préparateur de commandes'
  }
];
