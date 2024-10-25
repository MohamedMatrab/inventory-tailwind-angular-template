export const  appTitle : string = $localize`Inventory`;

// About Invoices
export const invoice_number = $localize`Invoice Number`;
export const date = $localize`Date`;
export const status = $localize`Status`;
export const client = $localize`Client`;
export const amount = $localize`Amount`;
export const order_number = $localize`Order Number`;
export const next = $localize`Next`;
export const previous = $localize`Previous`;


export interface Column {
  label: string;
  sortable?: boolean;
}
export type Dictionary = { [key: string]: any };

export class InvoicesConstants {
  public static readonly COLUMNS : Column[]  = [
    {
      label : invoice_number,
      sortable: true,
    },
    {
      label:date,
      sortable:true
    },
    {
      label:status,
    },
    {
      label:order_number
    },
    {
      label : client,
      sortable:true
    },
    {
      label:amount,
      sortable:true
    }
  ];


  public static readonly STATUS_LABELS : Dictionary = {
    paid : $localize`Paid`,
    refund : $localize`Refunded`,
    cancelled : $localize`Cancelled`,
    pending : $localize`Pending`
  }
  public static readonly STATUS_CLASSES : Dictionary = {
    paid: 'inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800',
    pending: 'inline-flex items-center px-3 py-1 text-blue-400 rounded-full gap-x-2 bg-blue-100/60 dark:bg-gray-800',
    refund: 'inline-flex items-center px-3 py-1 text-gray-500 rounded-full gap-x-2 bg-gray-100/60 dark:bg-gray-800',
    cancelled: 'inline-flex items-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800'
  };

  public static readonly STATUS_ICONS : Dictionary = {
    paid: 'assets/icons/invoice-status-icons/check.svg',
    pending: 'assets/icons/invoice-status-icons/pending.svg',
    cancelled: `assets/icons/invoice-status-icons/x.svg`,
    refund: `assets/icons/invoice-status-icons/refund.svg`
  };
}
