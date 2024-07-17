import flower1 from './Images/bir1.jpg';
import flower2 from './Images/bir2.jpg';
import flower3 from './Images/bir3.jpg';
import flower4 from './Images/bir4.jpg';
import flower5 from './Images/bir5.jpg';
import flower6 from './Images/bir6.jpg';
import flower7 from './Images/gra1.jpg';
import flower8 from './Images/gra2.jpg';
import flower9 from './Images/gra3.jpg';
import flower10 from './Images/gra4.jpg';
import flower11 from './Images/gra5.jpg';
import flower12 from './Images/gra6.jpg';
import flower13 from './Images/wed1.jpg';
import flower14 from './Images/wed2.jpg';
import flower15 from './Images/wed3.jpg';
import flower16 from './Images/wed4.jpg';
import flower17 from './Images/wed5.jpg';
import flower18 from './Images/wed6.jpg';
import flower19 from './Images/wed7.jpg';
import flower20 from './Images/wed8.jpg';
import flower21 from './Images/wed9.jpg';
import flower22 from './Images/homedec1.jpg';
import flower23 from './Images/homedec2.jpg';
import flower24 from './Images/homedec3.jpg';
import flower25 from './Images/homedec4.jpg';
import flower26 from './Images/homedec5.jpg';
import flower27 from './Images/homedec6.jpg';
import flower28 from './Images/val1.jpg';
import flower29 from './Images/val2.jpg';
import flower30 from './Images/val3.jpg';
import flower31 from './Images/val4.jpg';
import flower32 from './Images/val5.jpg';
import flower33 from './Images/val6.jpg';
import flower34 from './Images/Normal1.jpg';
import flower35 from './Images/Normal2.jpg';
import flower36 from './Images/Normal3.jpg';
import flower37 from './Images/Normal4.jpg';
import flower38 from './Images/Normal5.jpg';
import flower39 from './Images/Normal6.jpg';
import flower40 from './Images/Normal7.jpg';

const flowers = [
  { id: 1, title: 'Rose Bouquet', price: 'Rs.1500', image: flower1, category: 'birthday' ,description: 'A beautiful bouquet of fresh roses.' },
  { id: 2, title: 'Lily Bouquet', price: 'Rs.2000', image: flower2, category:'birthday', description: 'A lovely bouquet of lilies.' },
  { id: 3, title: 'Tulip Bouquet', price: 'Rs.2100', image: flower3, category:'birthday', description: 'A vibrant bouquet of tulips.' },
  { id: 4, title: 'Rose Bouquet', price: 'Rs.2100', image: flower4, category:'birthday', description: 'A beautiful bouquet of fresh roses.' },
  { id: 5, title: 'Lily Bouquet', price: 'Rs.1100', image: flower5,category:'birthday',  description: 'A lovely bouquet of lilies.' },
  { id: 6, title: 'Tulip Bouquet', price: 'Rs.3000', image: flower6,category:'birthday',  description: 'A vibrant bouquet of tulips.' },
  { id: 7, title: 'Rose Bouquet', price: 'Rs.2100', image: flower7, category:'graduation', description: 'A beautiful bouquet of fresh roses.' },
  { id: 8, title: 'Lily Bouquet', price: 'Rs.2000', image: flower8, category:'graduation',description: 'A lovely bouquet of lilies.' },
  { id: 9, title: 'Tulip Bouquet', price: 'Rs.2500', image: flower9, category:'graduation',description: 'A vibrant bouquet of tulips.' },
  { id: 10, title: 'Rose Bouquet', price: 'Rs.1000', image: flower10,category:'graduation', description: 'A beautiful bouquet of fresh roses.' },
  { id: 11, title: 'Lily Bouquet', price: 'Rs.2400', image: flower11, category:'graduation',description: 'A lovely bouquet of lilies.' },
  { id: 12, title: 'Tulip Bouquet', price: 'Rs.1000', image: flower12,category:'graduation', description: 'A vibrant bouquet of tulips.' },
  { id: 13, title: 'Rose Bouquet', price: 'Rs.2300', image: flower13,category:'wedding', description: 'A beautiful bouquet of fresh roses.' },
  { id: 14, title: 'Lily Bouquet', price: 'Rs.2000', image: flower14,category:'wedding', description: 'A lovely bouquet of lilies.' },
  { id: 15, title: 'Tulip Bouquet', price: 'Rs.2100', image: flower15, category:'wedding',description: 'A vibrant bouquet of tulips.' },
  { id: 16, title: 'Rose Bouquet', price: 'Rs.2600', image: flower16, category:'wedding',description: 'A beautiful bouquet of fresh roses.' },
  { id: 17, title: 'Lily Bouquet', price: 'Rs.3000', image: flower17,category:'wedding', description: 'A lovely bouquet of lilies.' },
  { id: 18, title: 'Tulip Bouquet', price: 'Rs.2000', image: flower18, category:'wedding',description: 'A vibrant bouquet of tulips.' },
  { id: 19, title: 'Rose Bouquet', price: 'Rs.1500', image: flower19, category:'wedding',description: 'A beautiful bouquet of fresh roses.' },
  { id: 20, title: 'Lily Bouquet', price: 'Rs.1700', image: flower20, category:'wedding',description: 'A lovely bouquet of lilies.' },
  { id: 21, title: 'Tulip Bouquet', price: 'Rs.2100', image: flower21, category:'wedding',description: 'A vibrant bouquet of tulips.' },
  { id: 22, title: 'Rose Bouquet', price: 'Rs.2200', image: flower22, category:'homedeco',description: 'A beautiful bouquet of fresh roses.' },
  { id: 23, title: 'Lily Bouquet', price: 'Rs.2400', image: flower23, category:'homedeco',description: 'A lovely bouquet of lilies.' },
  { id: 24, title: 'Tulip Bouquet', price: 'Rs.1800', image: flower24,category:'homedeco', description: 'A vibrant bouquet of tulips.' },
  { id: 25, title: 'Rose Bouquet', price: 'Rs.2100', image: flower25, category:'homedeco',description: 'A beautiful bouquet of fresh roses.' },
  { id: 26, title: 'Lily Bouquet', price: 'Rs.1700', image: flower26, category:'homedeco',description: 'A lovely bouquet of lilies.' },
  { id: 27, title: 'Tulip Bouquet', price: 'Rs.2300', image: flower27, category:'homedeco',description: 'A vibrant bouquet of tulips.' },
  { id: 28, title: 'Classic Love Red & White Roses', price: 'Rs.2600', image: flower28, category:'valentine',description: 'The Classic Love Red & White Roses bouquet is a sophisticated mix of a dozen red and white roses. This elegant combination symbolizes unity and pure love, accented with fresh greenery and delicate babys breath. Presented in a stylish wrap, it’s the perfect bouquet for a timeless Valentines Day gift.' },
  { id: 29, title: 'Eternal Love Rose Arrangement', price: 'Rs.2800', image: flower29, category:'valentine',description: 'Celebrate joyful love and friendship with the Golden Romance Yellow Rose Arrangement. This vibrant bouquet features a dozen sunny yellow roses, symbolizing friendship and joy. Accented with lush green foliage and delicate babys breath, its a cheerful and heartwarming way to express your affection this Valentines Day.' },
  { id: 30, title: 'Sweetheart Red Rose Ensemble', price: 'Rs.2100', image: flower30, category:'valentine',description: 'For a unique and enchanting gesture, choose the Passionate Purple Rose Bouquet. Featuring a dozen exquisite purple roses, symbolizing enchantment and love at first sight, this bouquet is beautifully complemented with sprigs of eucalyptus and soft babys breath. Its a captivating way to show your special someone how deeply you care.' },
  { id: 31, title: 'Classic Love Red & White Roses', price: 'Rs.1100', image: flower31,category:'valentine', description: 'The Classic Love Red & White Roses bouquet is a sophisticated mix of a dozen red and white roses. This elegant combination symbolizes unity and pure love, accented with fresh greenery and delicate babys breath. Presented in a stylish wrap, it’s the perfect bouquet for a timeless Valentines Day gift.' },
  { id: 32, title: 'Classic Love Red Roses', price: 'Rs.1700', image: flower32,category:'valentine', description: 'Delight your special someone with the Sweetheart Pink Rose Ensemble. This charming bouquet includes a dozen pink roses, signifying admiration and sweetness. Accented with delicate babys breath and lush greenery, its a perfect gift for expressing gentle affection and admiration.' },
  { id: 33, title: 'Golden Romance Rose Arrangement.', price: 'Rs.2100', image: flower33, category:'valentine',description: 'Show your everlasting love with the Eternal Love Rose Arrangement. This exquisite bouquet boasts two dozen premium long-stemmed red roses, artistically arranged with rich green foliage and delicate gypsophila. Presented in a classic glass vase, this bouquet is the ultimate declaration of enduring devotion.' },
  { id: 34, title: 'Tulip Bouquet', price: 'Rs.2300', image: flower34,category:'normal', description: 'A vibrant bouquet of tulips.' },
  { id: 34, title: 'Rose Bouquet', price: 'Rs.2600', image: flower35,category:'normal', description: 'A beautiful bouquet of fresh roses.' },
  { id: 36, title: 'Lily Bouquet', price: 'Rs.2800', image: flower36, category:'normal',description: 'A lovely bouquet of lilies.' },
  { id: 37, title: 'Tulip Bouquet', price: 'Rs.2100', image: flower37, category:'normal',description: 'A vibrant bouquet of tulips.' },
  { id: 38, title: 'Rose Bouquet', price: 'Rs.1100', image: flower38, category:'normal',description: 'A beautiful bouquet of fresh roses.' },
  { id: 39, title: 'Lily Bouquet', price: 'Rs.1700', image: flower39, category:'normal',description: 'A lovely bouquet of lilies.' },
  { id: 40, title: 'Tulip Bouquet', price: 'Rs.2100', image: flower40, category:'normal',description: 'A vibrant bouquet of tulips.' },
];

export default flowers;
