import { ProjectInterface } from 'interfaces/project';
import { GetQueryInterface } from 'interfaces';

export interface DesignInterface {
  id?: string;
  url: string;
  project_id?: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  project?: ProjectInterface;
  _count?: {};
}

export interface DesignGetQueryInterface extends GetQueryInterface {
  id?: string;
  url?: string;
  project_id?: string;
  status?: string;
}
