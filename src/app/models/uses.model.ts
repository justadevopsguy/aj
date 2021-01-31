export interface UsesType {
  name: string;
  description?: string;
  link?: string;
  items: UsesItem[];
}

export interface UsesItem {
  name: string;
  description?: string;
  link?: string;
}
