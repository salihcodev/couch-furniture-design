import HolyHunt5000 from './assets/item-base.png';
import HolyHunt50001 from './assets/item-1.png';
import HolyHunt50002 from './assets/item-2.png';
import HolyHunt50003 from './assets/item-3.png';
import HolyHunt50004 from './assets/item-4.png';

const productsApi = [
  {
    name: 'Holy Hunt 5000',
    description: 'description',
    imgUrl: HolyHunt5000,
    category: 'office',
    featured: false,
    price: 20,
    displayInShop: false,
    availableColors: ['red', 'gray', 'black', 'orange'],
    details: [
      'W 47.2" x D 23.6" x H 17.7"',
      'High Gloss Black or White Lacquer Finish Top',
      'Polished Stainless Steel Base',
      'Matching End Table Available',
      '51 LBS',
    ],
    returnAndExchange: true,
    freeShipping: false,
    images: [HolyHunt50001, HolyHunt50002, HolyHunt50003, HolyHunt50004],
  },
];

export default productsApi;
