import {SkillModel} from '../models/skill.model';
import {parseJsonSchemaToCommandDescription} from '@angular/cli/utilities/json-schema';
export const SKILLS: SkillModel[] = [
  {
    id: 1 ,
    name: 'ANGLAIS',
    level: 80,
    logo: 'assets/logo/anglais.png',
    column: 1,
    description: 'Cursus bilingue (de la primaire au collège) et échanges scolaires avec les États-Unis.',
  },
  {
    id: 2,
    name: 'HTML 5',
    level: 80,
    logo: 'assets/logo/html5.png',
    column: 1,
    description: '',
  },
  {
    id: 3,
    name: 'CSS 3',
    level: 80,
    logo: 'assets/logo/css3.png',
    column: 1,
    description: '',
  },
  {
    id: 4,
    name: 'C# 7',
    level: 60,
    logo: 'assets/logo/Csharp.png',
    column: 1,
    description: 'Durant la période de formation création d\'applications en wpf ',
  },
  {
    id: 5,
    name: 'JAVA 8',
    level: 70,
    logo: 'assets/logo/java.png',
    column: 1,
    description: '',
  },
  {
    id: 6,
    name: 'PHP 7',
    level: 85,
    logo: 'assets/logo/php7.png',
    column: 2,
    description: '',
  },
  {
    id: 7,
    name: 'ANDROID',
    level: 70,
    logo: 'assets/logo/android.png',
    column: 2,
    description: '',
  },
  {
    id: 8,
    name: 'JAVASCRIPT 6',
    level: 60,
    logo: 'assets/logo/javascript.png',
    column: 2,
  description: '',
  },
  {
    id: 9,
    name: 'ANGULAR 7',
    level: 70,
    logo: 'assets/logo/angular.png',
    column: 2,
    description: '',
  },
  {
    id: 10,
    name: 'SYMFONY',
    level: 85,
    logo: 'assets/logo/symfony.png',
    column: 2,
    description: '',
  },
  {
    id: 11,
    name: 'NODE JS',
    level: 50,
    logo: 'assets/logo/nodjs.png',
    column: 2,
    description: '',
  }
];
