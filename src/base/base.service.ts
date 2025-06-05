import { Model } from 'mongoose';

export class BaseService<T> {
  constructor(protected readonly model: Model<T>) {}

  async findById(id: string) {
    return this.model.findById(id).exec();
  }

  async update(id: string, data: Partial<T>) {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
