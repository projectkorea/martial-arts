export interface Trait {
  title: string;
  description: string;
}

export interface MBTIResult {
  title: string;
  description: string;
  traits: Trait[];
  imageUrl: string;
}
