# مستند التصميم التقني - تحسينات موقع مطعم الضيافة

## Overview

هذا المستند يحدد التصميم التقني لتحويل موقع مطعم الضيافة إلى موقع عربي بالكامل مع تحسينات SEO وأداء شاملة. المشروع يستخدم React + TypeScript + Vite ويتضمن ستة مكونات رئيسية.

### الأهداف الرئيسية

1. تحويل كامل المحتوى للغة العربية مع دعم RTL
2. إزالة وظائف تبديل اللغة لجعل الموقع عربي فقط
3. تحديث الصور والمحتوى المرئي
4. تحسين SEO للسوق العربي
5. تحسين إمكانية الوصول (Accessibility)
6. تحسين الأداء وسرعة التحميل

### النطاق

التعديلات تشمل:
- جميع المكونات الستة: Hero, Navbar, Menu, Story, Atmosphere, Footer
- ملفات التكوين (index.html, vite.config.ts)
- ملفات الأنماط (CSS/Tailwind)
- الصور والأصول (Assets)

## Architecture

### البنية العامة

المشروع يتبع معمارية Component-Based Architecture باستخدام React:

```
src/
├── components/
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Menu.tsx
│   ├── Story.tsx
│   ├── Atmosphere.tsx
│   └── Footer.tsx
├── assets/
│   └── images/
├── styles/
│   └── index.css
├── App.tsx
└── main.tsx
```

### استراتيجية التحويل للعربية

1. **RTL Support**: استخدام `dir="rtl"` على مستوى HTML root
2. **Font Selection**: استخدام خطوط عربية واضحة (مثل Cairo, Tajawal)
3. **Layout Adjustments**: عكس اتجاه Flexbox/Grid layouts تلقائياً
4. **Text Alignment**: محاذاة النصوص لليمين

### استراتيجية SEO

1. **Meta Tags**: إضافة meta tags شاملة في index.html
2. **Semantic HTML**: استخدام H1, H2, H3 بشكل صحيح
3. **Open Graph**: دعم المشاركة على وسائل التواصل الاجتماعي
4. **Structured Data**: إضافة JSON-LD للمطعم (اختياري)

### استراتيجية تحسين الأداء

1. **Image Optimization**: 
   - استخدام WebP format مع fallback
   - Responsive images باستخدام srcset
   - Lazy loading للصور تحت الـ fold

2. **Code Splitting**: 
   - Dynamic imports للمكونات الكبيرة (إذا لزم الأمر)
   
3. **Build Optimization**:
   - Minification تلقائي عبر Vite
   - Tree shaking للكود غير المستخدم

## Components and Interfaces

### 1. Hero Component

**المسؤولية**: عرض القسم الرئيسي في أعلى الصفحة مع صورة خلفية وعنوان جذاب.

**التعديلات المطلوبة**:
- تحديث النصوص للعربية
- تغيير صورة الخلفية
- إضافة alt text بالعربي
- تحسين الصورة (WebP, lazy loading للصور الإضافية)

**Props Interface**:
```typescript
interface HeroProps {
  // No props needed - static content
}
```

**المحتوى العربي**:
- العنوان: "مطعم الضيافة - وجهتك الأولى لأفضل مشويات وأكل بيتي"
- الوصف: نص جذاب يصف تجربة المطعم

### 2. Navbar Component

**المسؤولية**: شريط التنقل الرئيسي.

**التعديلات المطلوبة**:
- إزالة Language Switcher بالكامل
- تحويل روابط التنقل للعربية
- عكس ترتيب العناصر (RTL)

**Props Interface**:
```typescript
interface NavbarProps {
  // No props needed - static navigation
}
```

**روابط التنقل**:
- الرئيسية
- القائمة
- قصتنا
- الأجواء
- اتصل بنا

### 3. Menu Component

**المسؤولية**: عرض قائمة الطعام بالأقسام المختلفة.

**التعديلات المطلوبة**:
- تحويل أسماء الأطباق والأوصاف للعربية
- إضافة alt text للصور
- تحسين الصور (optimization, lazy loading)
- دمج الكلمات المفتاحية: "مشويات", "كباب", "كفتة"

**Props Interface**:
```typescript
interface MenuItem {
  id: string;
  nameAr: string;
  descriptionAr: string;
  image: string;
  imageAlt: string;
  category: 'مشويات' | 'مقبلات' | 'حلويات' | 'مشروبات';
}

interface MenuProps {
  items: MenuItem[];
}
```

### 4. Story Component

**المسؤولية**: عرض قصة المطعم وتاريخه.

**التعديلات المطلوبة**:
- كتابة قصة المطعم بالعربية
- إضافة alt text للصور
- استخدام H2 للعنوان الرئيسي

**Props Interface**:
```typescript
interface StoryProps {
  // No props needed - static content
}
```

### 5. Atmosphere Component

**المسؤولية**: عرض صور وأوصاف أجواء المطعم.

**التعديلات المطلوبة**:
- تحويل الأوصاف للعربية
- إضافة alt text وصفي للصور
- تحسين الصور
- التركيز على "أجواء عائلية"

**Props Interface**:
```typescript
interface AtmosphereImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

interface AtmosphereProps {
  images: AtmosphereImage[];
}
```

### 6. Footer Component

**المسؤولية**: تذييل الموقع مع معلومات الاتصال.

**التعديلات المطلوبة**:
- تحويل جميع النصوص للعربية
- عكس ترتيب الأعمدة (RTL)
- تحديث معلومات الاتصال

**Props Interface**:
```typescript
interface FooterProps {
  // No props needed - static content
}
```

### App Component

**التعديلات المطلوبة**:
- إزالة أي state أو logic متعلق بتبديل اللغة
- التأكد من ترتيب المكونات الصحيح

## Data Models

### SEO Metadata Model

```typescript
interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  lang: 'ar';
  dir: 'rtl';
}
```

**القيم المطلوبة**:
```typescript
const seoMetadata: SEOMetadata = {
  title: "مطعم الضيافة - أفضل مشويات وأكل مصري أصيل",
  description: "استمتع بأفضل تجربة مشويات وطعام مصري في مطعم الضيافة (Djafa). نقدم لكم تشكيلة فاخرة من المشويات، المقبلات الطازجة، والحلويات الشرقية في أجواء عائلية راقية.",
  keywords: [
    "مطعم مشويات",
    "أكل مصري أصيل",
    "كباب وكفتة",
    "مطاعم عائلية",
    "مشويات طازجة",
    "مطعم الضيافة",
    "Djafa Restaurant"
  ],
  ogTitle: "مطعم الضيافة - وجهتك الأولى لأفضل مشويات وأكل بيتي",
  ogDescription: "تشكيلة فاخرة من المشويات والمقبلات الطازجة والحلويات الشرقية في أجواء عائلية راقية",
  ogImage: "/og-image.jpg", // صورة بحجم 1200x630
  ogUrl: "https://djafa-restaurant.com",
  lang: "ar",
  dir: "rtl"
};
```

### Image Asset Model

```typescript
interface ImageAsset {
  src: string;
  srcWebP?: string; // WebP version for better performance
  srcSet?: string; // Responsive images
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}
```

### Content Translation Model

```typescript
interface ContentTranslation {
  hero: {
    heading: string;
    subheading: string;
    ctaButton: string;
  };
  navbar: {
    home: string;
    menu: string;
    story: string;
    atmosphere: string;
    contact: string;
  };
  menu: {
    sectionTitle: string;
    categories: {
      grills: string;
      appetizers: string;
      desserts: string;
      drinks: string;
    };
  };
  story: {
    sectionTitle: string;
    content: string;
  };
  atmosphere: {
    sectionTitle: string;
    description: string;
  };
  footer: {
    about: string;
    contact: string;
    hours: string;
    social: string;
    copyright: string;
  };
}
```

### Configuration Models

```typescript
// Vite config additions for optimization
interface ViteOptimizationConfig {
  build: {
    minify: 'terser';
    cssMinify: true;
    rollupOptions: {
      output: {
        manualChunks?: Record<string, string[]>;
      };
    };
  };
  plugins: Array<Plugin>;
}

// Image optimization config
interface ImageOptimizationConfig {
  formats: ['webp', 'jpg', 'png'];
  quality: number; // 80-85 recommended
  maxWidth: number; // 1920 for hero images
  lazyLoadThreshold: number; // pixels from viewport
}
```


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Arabic Content Universality

*For any* rendered text node in the website, the text content SHALL be in Arabic language (matching Arabic Unicode character ranges U+0600 to U+06FF) or be an acceptable exception (brand names, numbers, punctuation).

**Validates: Requirements 1.1**

### Property 2: Semantic Heading Hierarchy

*For any* page render, the HTML document SHALL contain exactly one H1 element, and all H2 elements SHALL appear after the H1, and heading levels SHALL not skip (e.g., H1 → H3 without H2).

**Validates: Requirements 4.2**

### Property 3: Image Accessibility Completeness

*For any* img element in the rendered DOM, the element SHALL have an alt attribute that either contains Arabic text (for content images) or is empty (for decorative images).

**Validates: Requirements 5.1, 5.3, 5.4**

### Property 4: Image Format Optimization

*For any* image asset used in the website, the image SHALL be in an optimized web format (WebP, optimized JPEG, or optimized PNG) with file size appropriate for its display dimensions.

**Validates: Requirements 7.1**

### Property 5: Lazy Loading for Below-Fold Images

*For any* img element that is positioned below the initial viewport (below the fold), the element SHALL have the loading="lazy" attribute to defer loading until needed.

**Validates: Requirements 7.2**

### Property 6: Responsive Image Implementation

*For any* img element displaying content images, the element SHALL use either srcset attribute or picture element to provide multiple image sizes for different viewport widths.

**Validates: Requirements 7.4**

## Error Handling

### Image Loading Failures

**Scenario**: Background or content images fail to load due to network issues or missing files.

**Handling Strategy**:
1. Hero component SHALL display a fallback background color (#2c1810 or similar warm tone)
2. Content images SHALL display alt text prominently
3. Console warnings SHALL be logged for debugging (development mode only)

**Implementation**:
```typescript
// Hero component error handling
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  console.warn('Image failed to load:', e.currentTarget.src);
  e.currentTarget.style.display = 'none';
  // Fallback background color will show
};
```

### Missing Alt Text

**Scenario**: Developer forgets to add alt text to an image.

**Handling Strategy**:
1. TypeScript interfaces SHALL require alt text as mandatory prop
2. ESLint rules SHALL warn about missing alt attributes (jsx-a11y plugin)
3. Development mode SHALL log warnings for images without alt text

**Implementation**:
```typescript
// Enforce alt text in TypeScript
interface ImageProps {
  src: string;
  alt: string; // Required, not optional
  loading?: 'lazy' | 'eager';
}
```

### RTL Layout Issues

**Scenario**: Some CSS properties don't automatically flip for RTL.

**Handling Strategy**:
1. Use logical CSS properties (margin-inline-start instead of margin-left)
2. Test all components in RTL mode during development
3. Use Tailwind's RTL plugin for automatic direction handling

**Implementation**:
```css
/* Use logical properties */
.element {
  margin-inline-start: 1rem; /* Automatically becomes margin-right in RTL */
  padding-inline-end: 2rem;  /* Automatically becomes padding-left in RTL */
}
```

### SEO Meta Tags Missing

**Scenario**: Meta tags are not properly set in index.html.

**Handling Strategy**:
1. Create a checklist for required meta tags
2. Use TypeScript interface to document required SEO metadata
3. Validate meta tags presence in build process (optional script)

### Font Loading Failures

**Scenario**: Arabic web fonts fail to load.

**Handling Strategy**:
1. Specify fallback fonts in CSS: `font-family: 'Cairo', 'Tajawal', Arial, sans-serif;`
2. Use system fonts as ultimate fallback
3. Consider using font-display: swap for better UX

**Implementation**:
```css
@font-face {
  font-family: 'Cairo';
  src: url('/fonts/cairo.woff2') format('woff2');
  font-display: swap; /* Show fallback font while loading */
}
```

## Testing Strategy

### Overview

نستخدم استراتيجية اختبار مزدوجة تجمع بين Unit Tests و Property-Based Tests لضمان تغطية شاملة:

- **Unit Tests**: للتحقق من أمثلة محددة، حالات حدية، ونقاط التكامل
- **Property Tests**: للتحقق من الخصائص العامة عبر مدخلات متعددة

### Testing Tools

**Framework**: Vitest (متوافق مع Vite)
**Property-Based Testing**: fast-check (مكتبة PBT لـ JavaScript/TypeScript)
**React Testing**: @testing-library/react
**Accessibility Testing**: jest-axe أو @axe-core/react

### Unit Testing Strategy

#### 1. Component Rendering Tests

اختبار أن كل مكون يعرض المحتوى العربي الصحيح:

```typescript
// Example: Hero component test
describe('Hero Component', () => {
  it('should display Arabic heading', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 }))
      .toHaveTextContent('مطعم الضيافة - وجهتك الأولى لأفضل مشويات وأكل بيتي');
  });

  it('should have RTL direction', () => {
    render(<Hero />);
    const hero = screen.getByTestId('hero-section');
    expect(hero).toHaveAttribute('dir', 'rtl');
  });

  it('should display fallback color when image fails', () => {
    render(<Hero />);
    const img = screen.getByAltText(/مطعم/);
    fireEvent.error(img);
    // Check fallback styling is applied
  });
});
```

#### 2. SEO Meta Tags Tests

اختبار وجود meta tags المطلوبة:

```typescript
describe('SEO Meta Tags', () => {
  it('should have correct lang and dir attributes', () => {
    expect(document.documentElement).toHaveAttribute('lang', 'ar');
    expect(document.documentElement).toHaveAttribute('dir', 'rtl');
  });

  it('should have meta description', () => {
    const metaDescription = document.querySelector('meta[name="description"]');
    expect(metaDescription).toHaveAttribute('content', expect.stringContaining('مطعم الضيافة'));
  });

  it('should have Open Graph tags', () => {
    expect(document.querySelector('meta[property="og:title"]')).toBeInTheDocument();
    expect(document.querySelector('meta[property="og:description"]')).toBeInTheDocument();
    expect(document.querySelector('meta[property="og:image"]')).toBeInTheDocument();
  });
});
```

#### 3. Accessibility Tests

اختبار إمكانية الوصول:

```typescript
import { axe } from 'jest-axe';

describe('Accessibility', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<App />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('all images should have alt text', () => {
    render(<App />);
    const images = screen.getAllByRole('img');
    images.forEach(img => {
      expect(img).toHaveAttribute('alt');
    });
  });
});
```

#### 4. Language Switcher Removal Tests

اختبار عدم وجود وظائف تبديل اللغة:

```typescript
describe('Language Switcher Removal', () => {
  it('should not render language switcher in navbar', () => {
    render(<Navbar />);
    expect(screen.queryByRole('button', { name: /language/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/english/i)).not.toBeInTheDocument();
  });

  it('should not have language switching state', () => {
    // Check that App component doesn't have language state
    // This can be done through code analysis or by checking that no language prop is passed
  });
});
```

### Property-Based Testing Strategy

نستخدم fast-check لاختبار الخصائص العامة. كل اختبار يجب أن يعمل على الأقل 100 iteration.

#### Configuration

```typescript
import fc from 'fast-check';

// Configure fast-check for all tests
const fcConfig = { numRuns: 100 };
```

#### Property Test 1: Arabic Content Universality

```typescript
/**
 * Feature: djafa-restaurant-arabic-seo
 * Property 1: For any rendered text node in the website, the text content 
 * SHALL be in Arabic language or be an acceptable exception
 */
describe('Property 1: Arabic Content Universality', () => {
  it('all text content should be in Arabic or acceptable exceptions', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('Hero', 'Menu', 'Story', 'Atmosphere', 'Footer'),
        (componentName) => {
          const component = renderComponent(componentName);
          const textNodes = getAllTextNodes(component);
          
          textNodes.forEach(text => {
            const isArabic = /[\u0600-\u06FF]/.test(text);
            const isException = /^[0-9\s\p{P}]+$/u.test(text) || 
                               text === 'Djafa'; // Brand name exception
            
            expect(isArabic || isException).toBe(true);
          });
        }
      ),
      fcConfig
    );
  });
});
```

#### Property Test 2: Semantic Heading Hierarchy

```typescript
/**
 * Feature: djafa-restaurant-arabic-seo
 * Property 2: For any page render, the HTML document SHALL contain exactly 
 * one H1 element and proper heading hierarchy
 */
describe('Property 2: Semantic Heading Hierarchy', () => {
  it('should maintain proper heading hierarchy', () => {
    fc.assert(
      fc.property(
        fc.constant(null), // No random input needed, testing static structure
        () => {
          const { container } = render(<App />);
          
          const h1s = container.querySelectorAll('h1');
          expect(h1s.length).toBe(1);
          
          const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
          let previousLevel = 0;
          
          headings.forEach(heading => {
            const level = parseInt(heading.tagName[1]);
            expect(level).toBeLessThanOrEqual(previousLevel + 1);
            previousLevel = level;
          });
        }
      ),
      fcConfig
    );
  });
});
```

#### Property Test 3: Image Accessibility Completeness

```typescript
/**
 * Feature: djafa-restaurant-arabic-seo
 * Property 3: For any img element in the rendered DOM, the element SHALL 
 * have an alt attribute
 */
describe('Property 3: Image Accessibility Completeness', () => {
  it('all images should have alt attributes', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('Hero', 'Menu', 'Atmosphere'),
        (componentName) => {
          const component = renderComponent(componentName);
          const images = component.querySelectorAll('img');
          
          images.forEach(img => {
            expect(img.hasAttribute('alt')).toBe(true);
            
            const altText = img.getAttribute('alt');
            // If not empty, should contain Arabic
            if (altText && altText.length > 0) {
              expect(/[\u0600-\u06FF]/.test(altText)).toBe(true);
            }
          });
        }
      ),
      fcConfig
    );
  });
});
```

#### Property Test 4: Image Format Optimization

```typescript
/**
 * Feature: djafa-restaurant-arabic-seo
 * Property 4: For any image asset used in the website, the image SHALL be 
 * in an optimized web format
 */
describe('Property 4: Image Format Optimization', () => {
  it('all images should use optimized formats', () => {
    fc.assert(
      fc.property(
        fc.constant(null),
        () => {
          const { container } = render(<App />);
          const images = container.querySelectorAll('img');
          
          images.forEach(img => {
            const src = img.getAttribute('src') || '';
            const isOptimized = /\.(webp|jpg|jpeg|png)$/i.test(src);
            expect(isOptimized).toBe(true);
            
            // Prefer WebP
            const hasWebP = src.includes('.webp') || 
                           img.querySelector('source[type="image/webp"]');
            // This is a soft check - we prefer WebP but allow other formats
          });
        }
      ),
      fcConfig
    );
  });
});
```

#### Property Test 5: Lazy Loading for Below-Fold Images

```typescript
/**
 * Feature: djafa-restaurant-arabic-seo
 * Property 5: For any img element positioned below the fold, the element 
 * SHALL have loading="lazy" attribute
 */
describe('Property 5: Lazy Loading for Below-Fold Images', () => {
  it('below-fold images should have lazy loading', () => {
    fc.assert(
      fc.property(
        fc.constant(null),
        () => {
          const { container } = render(<App />);
          const images = container.querySelectorAll('img');
          
          images.forEach(img => {
            const rect = img.getBoundingClientRect();
            const isBelowFold = rect.top > window.innerHeight;
            
            if (isBelowFold) {
              expect(img.getAttribute('loading')).toBe('lazy');
            }
          });
        }
      ),
      fcConfig
    );
  });
});
```

#### Property Test 6: Responsive Image Implementation

```typescript
/**
 * Feature: djafa-restaurant-arabic-seo
 * Property 6: For any img element displaying content images, the element 
 * SHALL use srcset or picture element
 */
describe('Property 6: Responsive Image Implementation', () => {
  it('content images should have responsive implementation', () => {
    fc.assert(
      fc.property(
        fc.constant(null),
        () => {
          const { container } = render(<App />);
          const images = container.querySelectorAll('img');
          
          images.forEach(img => {
            // Skip decorative images (empty alt)
            if (img.getAttribute('alt') === '') return;
            
            const hasSrcset = img.hasAttribute('srcset');
            const hasPictureParent = img.closest('picture') !== null;
            
            expect(hasSrcset || hasPictureParent).toBe(true);
          });
        }
      ),
      fcConfig
    );
  });
});
```

### Integration Testing

اختبار التكامل بين المكونات:

```typescript
describe('Full Page Integration', () => {
  it('should render complete Arabic website', () => {
    render(<App />);
    
    // Check all main sections are present
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Navbar
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
    
    // Check Arabic content in each section
    expect(screen.getByText(/مطعم الضيافة/)).toBeInTheDocument();
    expect(screen.getByText(/قائمة طعام/)).toBeInTheDocument();
    expect(screen.getByText(/قصتنا/)).toBeInTheDocument();
  });
});
```

### Performance Testing

اختبار الأداء (يمكن استخدام Lighthouse CI):

```typescript
// This would typically run in CI/CD pipeline
describe('Performance Metrics', () => {
  it('should meet performance budgets', async () => {
    // Use Lighthouse programmatically or in CI
    const metrics = await runLighthouse('http://localhost:3000');
    
    expect(metrics.performance).toBeGreaterThan(90);
    expect(metrics.accessibility).toBeGreaterThan(95);
    expect(metrics.seo).toBeGreaterThan(95);
  });
});
```

### Test Coverage Goals

- **Unit Test Coverage**: 80%+ للمكونات الرئيسية
- **Property Test Coverage**: جميع الخصائص الستة المحددة
- **Accessibility**: صفر انتهاكات في axe-core
- **SEO**: جميع meta tags المطلوبة موجودة

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run property tests only
npm run test -- --grep "Property"

# Run accessibility tests only
npm run test -- --grep "Accessibility"
```

### Continuous Integration

يجب تشغيل الاختبارات تلقائياً في CI/CD pipeline:
- قبل كل merge إلى main branch
- بعد كل deployment
- يومياً للتحقق من regression

