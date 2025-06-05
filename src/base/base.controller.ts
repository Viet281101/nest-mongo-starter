import {
  Controller,
  Get,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { BaseService } from './base.service';

@Controller()
export class BaseController<T> {
  constructor(private readonly service: BaseService<T>) {}

  @Get(':id')
  async findById(@Param('id') id: string) {
    const result = await this.service.findById(id);
    if (!result) throw new NotFoundException('Entity not found');
    return result;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Partial<T>) {
    const result = await this.service.update(id, data);
    if (!result) throw new NotFoundException('Entity not found');
    return result;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const result = await this.service.delete(id);
    if (!result) throw new NotFoundException('Entity not found');
    return result;
  }
}
