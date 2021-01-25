export {AddressModel} from './address.model';

export interface UserModel {
  id: number;
  name: string;
  age: number;
  status: boolean;
  AddressModel;
}
