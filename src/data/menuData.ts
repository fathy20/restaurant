import { MenuItem } from '../types/menu';

/**
 * Menu items data with Arabic content
 * Includes keywords: مشويات, كباب, كفتة, أكل بيتي
 */
export const menuItems: MenuItem[] = [
  // مشويات (Grills)
  {
    id: 'grill-1',
    nameAr: 'كباب مشوي على الفحم',
    descriptionAr: 'كباب طازج محضر من أجود أنواع اللحم، متبل بالبهارات الخاصة ومشوي على الفحم الطبيعي',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=2786&auto=format&fit=crop',
    imageAlt: 'كباب مشوي على الفحم - مطعم الضيافة',
    category: 'مشويات',
  },
  {
    id: 'grill-2',
    nameAr: 'كفتة مشوية',
    descriptionAr: 'كفتة لحم طازجة بالبقدونس والبصل، مشوية على الفحم وتقدم مع الطحينة والسلطة',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=2880&auto=format&fit=crop',
    imageAlt: 'كفتة مشوية - أكل بيتي أصيل',
    category: 'مشويات',
  },
  {
    id: 'grill-3',
    nameAr: 'دجاج مشوي',
    descriptionAr: 'دجاج طازج متبل لمدة 24 ساعة بخلطة البهارات السرية، مشوي ببطء حتى الكمال',
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8dd?q=80&w=2940&auto=format&fit=crop',
    imageAlt: 'دجاج مشوي على الفحم - مطعم الضيافة',
    category: 'مشويات',
  },
  {
    id: 'grill-4',
    nameAr: 'مشاوي مشكلة',
    descriptionAr: 'تشكيلة فاخرة من الكباب والكفتة والدجاج المشوي، تقدم مع الأرز والسلطات',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2787&auto=format&fit=crop',
    imageAlt: 'مشاوي مشكلة - أفضل مشويات',
    category: 'مشويات',
  },

  // مقبلات (Appetizers)
  {
    id: 'appetizer-1',
    nameAr: 'حمص بالطحينة',
    descriptionAr: 'حمص كريمي طازج محضر يومياً بالطحينة وزيت الزيتون والليمون',
    image: 'https://images.unsplash.com/photo-1633436374961-09b92742047b?q=80&w=2865&auto=format&fit=crop',
    imageAlt: 'حمص بالطحينة - مقبلات طازجة',
    category: 'مقبلات',
  },
  {
    id: 'appetizer-2',
    nameAr: 'بابا غنوج',
    descriptionAr: 'باذنجان مشوي على الفحم مع الطحينة والثوم وزيت الزيتون',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=2880&auto=format&fit=crop',
    imageAlt: 'بابا غنوج - أكل بيتي',
    category: 'مقبلات',
  },
  {
    id: 'appetizer-3',
    nameAr: 'سلطة فتوش',
    descriptionAr: 'سلطة خضراء طازجة مع الخبز المحمص ودبس الرمان',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2787&auto=format&fit=crop',
    imageAlt: 'سلطة فتوش - مقبلات طازجة',
    category: 'مقبلات',
  },
  {
    id: 'appetizer-4',
    nameAr: 'ورق عنب',
    descriptionAr: 'ورق عنب محشي بالأرز والخضار، محضر بطريقة بيتية أصيلة',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=2786&auto=format&fit=crop',
    imageAlt: 'ورق عنب - أكل بيتي',
    category: 'مقبلات',
  },

  // حلويات (Desserts)
  {
    id: 'dessert-1',
    nameAr: 'بقلاوة بالفستق',
    descriptionAr: 'بقلاوة طازجة محضرة يومياً بالفستق الحلبي والقطر',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=2788&auto=format&fit=crop',
    imageAlt: 'بقلاوة بالفستق - حلويات شرقية',
    category: 'حلويات',
  },
  {
    id: 'dessert-2',
    nameAr: 'كنافة نابلسية',
    descriptionAr: 'كنافة طازجة بالجبنة والقطر، تقدم ساخنة',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2789&auto=format&fit=crop',
    imageAlt: 'كنافة نابلسية - حلويات شرقية',
    category: 'حلويات',
  },
  {
    id: 'dessert-3',
    nameAr: 'أم علي',
    descriptionAr: 'حلى أم علي الشهير بالمكسرات والحليب، يقدم ساخناً',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2787&auto=format&fit=crop',
    imageAlt: 'أم علي - حلويات بيتية',
    category: 'حلويات',
  },

  // مشروبات (Drinks)
  {
    id: 'drink-1',
    nameAr: 'شاي بالنعناع',
    descriptionAr: 'شاي طازج بالنعناع الأخضر، يقدم ساخناً',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2864&auto=format&fit=crop',
    imageAlt: 'شاي بالنعناع - مشروبات ساخنة',
    category: 'مشروبات',
  },
  {
    id: 'drink-2',
    nameAr: 'قهوة عربية',
    descriptionAr: 'قهوة عربية أصيلة بالهيل، تقدم مع التمر',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2787&auto=format&fit=crop',
    imageAlt: 'قهوة عربية - مشروبات تقليدية',
    category: 'مشروبات',
  },
  {
    id: 'drink-3',
    nameAr: 'عصير ليمون بالنعناع',
    descriptionAr: 'عصير ليمون طازج بالنعناع والثلج',
    image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9d?q=80&w=2787&auto=format&fit=crop',
    imageAlt: 'عصير ليمون بالنعناع - مشروبات باردة',
    category: 'مشروبات',
  },
  {
    id: 'drink-4',
    nameAr: 'جلاب',
    descriptionAr: 'مشروب الجلاب التقليدي بماء الورد والزبيب والصنوبر',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2940&auto=format&fit=crop',
    imageAlt: 'جلاب - مشروبات تقليدية',
    category: 'مشروبات',
  },
];

/**
 * Get menu items by category
 */
export const getMenuItemsByCategory = (category: MenuItem['category']): MenuItem[] => {
  return menuItems.filter(item => item.category === category);
};

/**
 * Get all unique categories
 */
export const getCategories = (): MenuItem['category'][] => {
  return ['مشويات', 'مقبلات', 'حلويات', 'مشروبات'];
};
