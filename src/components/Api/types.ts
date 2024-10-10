export type Response = Array<{
    breeds: BreedsProps[];
    id: string;
    url: string;
    width: number;
    height: number;
}>;

export interface BreedsProps{
    id?: string;
    name?: string;
    description?: string;

}
export interface PhotoItemProps {
  id: string;
  url: string;
    width: number;
    height: number;
}