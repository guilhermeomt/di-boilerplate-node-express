export interface CRUD<T> {
  getAll?: () => Promise<any>;
  create?: (resource: any) => Promise<any>;
  putById?: (id: number, resource: any) => Promise<T>;
  getById?: (id: number) => Promise<any>;
  deleteById?: (id: number) => Promise<T>;
}
