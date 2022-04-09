interface Model<GenericModel> {
  create(data: GenericModel): Promise<GenericModel>;
  getAll(): Promise<GenericModel[]>;
  getOne(id: string): Promise<GenericModel | null>;
  update(id: string, data: GenericModel): Promise<GenericModel | null>;
  delete(id: string): Promise<GenericModel | null>;
}

export default Model;
