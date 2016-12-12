import { HomeComponent } from './home.component';
import { BmiComponent } from './bmi.component';
import { TempUnitConvertorComponent } from './temp-unit-convertor.component';

export const AppRoutes: any = [
    {path: "Home",component: HomeComponent},
    {path: "BMI", component: BmiComponent},
    {path: "TempConvert", component: TempUnitConvertorComponent}
];

export const AppComponents: any = [
    HomeComponent,
    BmiComponent,
    TempUnitConvertorComponent
];