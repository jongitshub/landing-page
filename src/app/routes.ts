import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SittingComponent } from "./sitting/sitting.component";
import { WalkingComponent } from "./walking/walking.component";
import { BoardingComponent } from "./boarding/boarding.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'sitting',
        component: SittingComponent,
        title: 'Sitting Page'
    },
    {
        path: 'walking',
        component: WalkingComponent,
        title: 'Walking Page'
    },
    {
        path: 'boarding',
        component: BoardingComponent,
        title: 'Boarding Page'
    }

];

export default routeConfig;