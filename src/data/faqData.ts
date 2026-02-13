import { FaqItem, travelPlanningFaqs } from './faqTravelPlanning';
import { attractionsFaqs } from './faqAttractions';
import { accommodationFaqs } from './faqAccommodation';
import { foodWeatherFaqs } from './faqFoodWeather';
import { transportSafetyFaqs } from './faqTransportSafety';

export type { FaqItem };
export { travelPlanningFaqs, attractionsFaqs, accommodationFaqs, foodWeatherFaqs, transportSafetyFaqs };

export interface FaqSection {
  id: string;
  title: string;
  faqs: FaqItem[];
}

export const faqSections: FaqSection[] = [
  {
    id: 'travel-planning',
    title: 'Travel Planning & Basics',
    faqs: travelPlanningFaqs,
  },
  {
    id: 'attractions',
    title: 'Attractions & Things to Do',
    faqs: attractionsFaqs,
  },
  {
    id: 'accommodation',
    title: 'Accommodation & Areas',
    faqs: accommodationFaqs,
  },
  {
    id: 'food-weather',
    title: 'Food, Weather & Daily Life',
    faqs: foodWeatherFaqs,
  },
  {
    id: 'transport-safety',
    title: 'Transportation, Safety & Expat Info',
    faqs: transportSafetyFaqs,
  },
];
