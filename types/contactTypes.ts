export interface ContactTypes {
  id?: number;
  title: {
    en: string;
    ka: string;
    ru: string;
  };

  phone: number;
  email: string;
  address: {
    en: string;
    ka: string;
    ru: string;
  };
}
