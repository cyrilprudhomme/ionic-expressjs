export interface Config {
  id: string | undefined;
  appname: string | undefined;
  lastname: string | undefined;
  firstname: string | undefined;
  compagny: string | undefined;
  adressline1: string | undefined;
  adressline2: string | undefined;
  postalcode: string | undefined;
  locality: string | undefined;
  phonenumber: string | undefined;
  email: string | undefined;
}
export interface Customer {
  id: string | undefined;
  status: StatusCustomer | undefined;
  lastname: string | undefined;
  firstname: string | undefined;
  compagny: string | undefined;
  adressline1: string | undefined;
  adressline2: string | undefined;
  postalcode: string | undefined;
  locality: string | undefined;
  phonenumber: string | undefined;
  email: string | undefined;
}

export interface Invoice {
  id: string | undefined;
  customerid: string | undefined;
  solde: number | undefined;
  statusinvoice: StatusInvoice | undefined;
  statuspayment: StatusPayment | undefined;
  productlist: ProductInvoices[] | undefined;
  total: number | undefined;
  created: string | undefined;
  updated: string | undefined;
}

export interface Category {
  id: string | undefined;
  name: string | undefined;
  description: string | undefined;
  productList: string | undefined;
  created: string | undefined;
  updated: string | undefined;
}

export interface Product {
  id: string | undefined;
  categoryid: string | undefined;
  name: string | undefined;
  description: string | undefined;
  vat: number | undefined;
  price: number | undefined;
  created: string | undefined;
  updated: string | undefined;
}

export interface ProductInvoices extends Product {
  quantity: number | undefined;
  total: number | undefined;
}

export enum StatusCustomer {
  PROSPECT = 'PROSPECT',
  OK = 'OK',
  ERROR = 'ERROR',
  ARCHIVED = 'ARCHIVED',
  CANCELED = 'CANCELED',
}

export enum StatusInvoice {
  DRAFT = 'DRAFT',
  INVOICE = 'INVOICE',
  ERROR = 'ERROR',
  ARCHIVED = 'ARCHIVED',
  CANCELED = 'CANCELED',
}

export enum StatusPayment {
  NONE = 'NONE',
  DEPOSIT = 'DEPOSIT',
  DEFAULT = 'DEFAULT',
  ERROR = 'ERROR',
  PAID = 'PAID',
}
