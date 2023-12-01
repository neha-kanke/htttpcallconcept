import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"
import { PostDashboredComponent } from "./shared/component/post-dashbored/post-dashbored.component";
import { PostComponent } from "./shared/component/post/post.component";
import { PostFormComponent } from "./shared/component/post-form/post-form.component";

const routes: Routes = [
    {
        path: "", component: PostDashboredComponent
    },
    {
        path: "posts", component: PostDashboredComponent
    },

    {
        path: "posts/add", component: PostFormComponent
    },

    {
        path: "posts/:post-id", component: PostComponent
    },
    {
        path: "posts/:post-id/edit", component: PostFormComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})



export class AppRoutingModule { }