/**
 * Black Drop Cafe Offers Data Architecture
 * 
 * Note: No promotional discounts or active offers are currently confirmed by the cafe.
 * The structure below allows instant dynamic populating once the client supplies confirmed offers.
 */

export const ACTIVE_OFFERS = []; // Array left empty when no promo offers are active

export const OFFERS_CONFIG = {
  sectionTitle: "Specials & Cafe Offerings",
  subtitle: "Daily Craft Specials at Black Drop Cafe",
  fallbackMessage: "Ask about today's fresh daily specials, combo pairings, and seasonal craft beverages at our counter.",
  ctaText: "Explore Cafe Favorites"
};
