/**
 * Service Definitions
 * Professional service categories (generic, not overly specific)
 */

import {
  Globe,
  Smartphone,
  Cloud,
  Zap,
  Palette,
  BookOpen,
} from 'lucide-react';

export const SERVICE_CATEGORIES = {
  WEB: {
    id: 1,
    name: 'Web Development',
    titleKey: 'services.web.title',
    descKey: 'services.web.desc',
    icon: Globe,
  },
  APP: {
    id: 2,
    name: 'App Development',
    titleKey: 'services.app.title',
    descKey: 'services.app.desc',
    icon: Smartphone,
  },
  CLOUD: {
    id: 3,
    name: 'Cloud Services',
    titleKey: 'services.cloud.title',
    descKey: 'services.cloud.desc',
    icon: Cloud,
  },
  OPTIMIZATION: {
    id: 4,
    name: 'Performance Optimization',
    titleKey: 'services.optimization.title',
    descKey: 'services.optimization.desc',
    icon: Zap,
  },
  DESIGN: {
    id: 5,
    name: 'UI/UX Design',
    titleKey: 'services.design.title',
    descKey: 'services.design.desc',
    icon: Palette,
  },
  CONSULTING: {
    id: 6,
    name: 'Tech Consulting',
    titleKey: 'services.consulting.title',
    descKey: 'services.consulting.desc',
    icon: BookOpen,
  },
};

export const SKILLS = [
  'Web Development',
  'App Development',
  'Mobile Solutions',
  'Cloud Services',
  'Performance Optimization',
  'UI/UX Design',
];
