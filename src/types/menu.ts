/**
 * MenuItem Interface
 * Defines the structure for menu items in the restaurant
 */
export interface MenuItem {
  id: string;
  nameAr: string;
  descriptionAr: string;
  image: string;
  imageAlt: string;
  category: 'مشويات' | 'مقبلات' | 'حلويات' | 'مشروبات';
  price?: string;
}

/**
 * Menu category type
 */
export type MenuCategory = 'مشويات' | 'مقبلات' | 'حلويات' | 'مشروبات';
