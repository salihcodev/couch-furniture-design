// route preview images:

const shopRoutes = [
  {
    route: 'living room',
    path: '/shop/living-room',
    nested: [
      { subRoute: 'Coffee Tables', link: '#' },
      { subRoute: 'Lounge Chairs', link: '#' },
      { subRoute: 'Media Storage', link: '#' },
      { subRoute: 'Wall Units', link: '#' },
      { subRoute: 'Side Tables', link: '#' },
      { subRoute: 'Sofas', link: '#' },
      { subRoute: 'Sectional Sofas', link: '#' },
    ],
  },
  {
    route: 'entryway',
    path: '/shop/entryway',
    nested: [
      { subRoute: 'Benches', link: '#' },
      { subRoute: 'Consoles', link: '#' },
      { subRoute: 'Mirrors', link: '#' },
    ],
  },
  {
    route: 'dining room',
    path: '/shop/dining-room',
    nested: [
      { subRoute: 'Bar Stools', link: '#' },
      { subRoute: 'Dining Chairs', link: '#' },
      { subRoute: 'Dining Tables', link: '#' },
      { subRoute: 'Sideboards', link: '#' },
    ],
  },
  {
    route: 'office',
    path: '/shop/office',
    nested: [
      { subRoute: 'Bookcases', link: '#' },
      { subRoute: 'Chairs', link: '#' },
      { subRoute: 'Desks', link: '#' },
      { subRoute: 'Storage', link: '#' },
    ],
  },
  {
    route: 'bedroom',
    path: '/shop/bedroom',
    nested: [
      { subRoute: 'Beds', link: '#' },
      { subRoute: 'Dressers', link: '#' },
      { subRoute: 'Mattresses', link: '#' },
      { subRoute: 'Nightstands', link: '#' },
    ],
  },
  {
    route: 'decor',
    path: '/shop/decor',
    nested: [
      { subRoute: 'Rugs', link: '#' },
      { subRoute: 'Lighting', link: '#' },
      { subRoute: 'Accents', link: '#' },
      { subRoute: 'Wall Art', link: '#' },
    ],
  },
  {
    route: 'outdoor',
    path: '/shop/outdoor',
    nested: [
      { subRoute: 'Outdoor Chairs', link: '#' },
      { subRoute: 'Outdoor Dining', link: '#' },
      { subRoute: 'Outdoor Sofas', link: '#' },
      { subRoute: 'Outdoor Tables', link: '#' },
    ],
  },
  {
    route: 'recreation',
    path: '/shop/recreation',
    nested: [{ subRoute: 'Game Tables', link: '#' }],
  },
  {
    route: 'more',
    path: '/shop/more',
    nested: [
      { subRoute: 'Couch Black', link: '#' },
      { subRoute: 'Couch Exclusives', link: '#' },
      { subRoute: 'Trending', link: '#' },
      { subRoute: '@COUCH', link: '#' },
      { subRoute: 'Leave Review', link: '#' },
      {
        subRoute: 'COUCH BLACK. PREMIUM DESIGN FROM ACCLAIMED DESIGNERS',
        link: '#',
      },
    ],
  },
];

export default shopRoutes;
