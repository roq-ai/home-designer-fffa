import { DesignInterface } from 'interfaces/design';
import { ImageInterface } from 'interfaces/image';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  organization_id?: string;
  status: string;
  created_at?: any;
  updated_at?: any;
  design?: DesignInterface[];
  image?: ImageInterface[];
  organization?: OrganizationInterface;
  _count?: {
    design?: number;
    image?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
  status?: string;
}
