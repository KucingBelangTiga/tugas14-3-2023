import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Countries } from 'output/entities/Countries';
import { Departments } from 'output/entities/Departments';
import { Employees } from 'output/entities/Employees';
import { JobHistory } from 'output/entities/JobHistory';
import { Jobs } from 'output/entities/Jobs';
import { Locations } from 'output/entities/Locations';
import { Regions } from 'output/entities/Regions';
import { Regions1 } from 'output/entities/Regions1';
import { ControllerController, ControllerController2, ControllerController3, ControllerController4, ControllerController5, ControllerController6 } from 'src/controller/controller.controller';
import { ServiceService, ServiceService2, ServiceService3, ServiceService4, ServiceService5, ServiceService6 } from 'src/service/service.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Regions,
      Countries,
      Locations,
      Departments,
      Employees,
      JobHistory,
      Jobs,
      Regions1,
    ]),
  ],
  providers: [ServiceService, ServiceService2, ServiceService3, ServiceService4, ServiceService5, ServiceService6],
  controllers: [ControllerController, ControllerController2, ControllerController3, ControllerController4, ControllerController5, ControllerController6],
})
export class ModuleModule { }
