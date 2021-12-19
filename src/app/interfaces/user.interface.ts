export interface UserInterface {
  id: number;
  name: string;
  id_right: number;
  id_google: string;
  id_facebook: string;
  blocked: boolean;
  right: {
    id: number;
    name: string;
  };
}
