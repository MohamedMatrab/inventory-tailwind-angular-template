import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Accueil',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/home.svg',
          label: 'Accueil',
          route: '/home',
        }
      ],
    },
    {
      group: 'Inventaire',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cube.svg',
          label: 'Articles',
          route: '/download',
        },
        {
          icon: 'assets/icons/heroicons/outline/rectangle-group.svg',
          label: "Groupe d'articles",
          route: '/gift',
        }
      ]
    },
    {
      group: 'Ventes',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/user.svg',
          label: 'Clients',
          route: '/clients',
        },
        {
          icon: 'assets/icons/heroicons/outline/document-arrow-down.svg',
          label: 'Commandes',
          route: '/gift',
        },
        {
          icon: 'assets/icons/heroicons/outline/document-duplicate.svg',
          label: 'Facturation',
          route: '/invoices',
          children: [
            { label: 'Factures', route: '/folders/current-files' },
            { label: 'Factures d\'avoirs', route: '/folders/download' },
          ]
        },
      ],
    },
    {
      group: 'Achats',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/user.svg',
          label: 'Fournisseurs',
          route: '/suppliers',
        },
        {
          icon: 'assets/icons/heroicons/outline/document-arrow-down.svg',
          label: 'Bons de Commande',
          route: '/supplier-orders',
        },
        {
          icon: 'assets/icons/heroicons/outline/document-duplicate.svg',
          label: 'Facturation',
          route: '/sell-invoices',
          children: [
            { label: 'Factures', route: '/sell-invoices/invoices' },
            { label: 'Factures d\'avoirs', route: '/sell-invoices/credit-invoices' },
          ]
        },
      ],
    },
  ];
}
