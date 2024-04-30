import { Routes } from "@angular/router";
import { NoticiasComponent } from "./noticias.component";
import { NoticiaComponent } from "./noticia/noticia.component";

export const NOTICIAS_ROUTE: Routes = [
    {
        path: "",
        component: NoticiasComponent
    },
    {
        path: ":slug",
        component: NoticiaComponent
    }

]