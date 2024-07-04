import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: $localize`Home`,
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/home.svg',
          label: $localize`Home`,
          route: '/home',
        }
      ],
    },
    {
      group: $localize`Inventory`,
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cube.svg',
          label: $localize`Articles`,
          route: '/download',
        },
        {
          icon: 'assets/icons/heroicons/outline/rectangle-group.svg',
          label: $localize`Item Groups`,
          route: '/gift',
        }
      ]
    },
    {
      group: $localize`Sells`,
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/user.svg',
          label: $localize`Clients`,
          route: '/clients',
        },
        {
          icon: 'assets/icons/heroicons/outline/document-arrow-down.svg',
          label:  $localize`Orders`,
          route: '/gift',
        },
        {
          icon: 'assets/icons/heroicons/outline/document-duplicate.svg',
          label: $localize`Billing`,
          route: '/billing',
          children: [
            { label: $localize`Invoices`, route: '/billing/invoices' },
            { label: $localize`Credit invoices`, route: '/billing/credit-invoices' },
          ]
        },
      ],
    },
    {
      group: $localize`Purchases`,
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/user.svg',
          label: $localize`Suppliers`,
          route: '/suppliers',
        },
        {
          icon: 'assets/icons/heroicons/outline/document-arrow-up.svg',
          label: $localize`Purchase orders`,
          route: '/purchase-orders',
        },
        {
          icon: 'assets/icons/heroicons/outline/document-duplicate.svg',
          label: $localize`Billing`,
          route: '/sell-invoices',
          children: [
            { label: $localize`Invoices`, route: '/sell-invoices/invoices' },
            { label: $localize`Credit invoices`, route: '/sell-invoices/credit-invoices' },
          ]
        },
      ],
    },
  ];
}
