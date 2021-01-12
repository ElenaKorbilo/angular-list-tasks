import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HttpClientModule } from "@angular/common/http";
import { TaskComponent } from "./components/task.component";
import { FilterPipe } from "./pipes/FilterPipe";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, TaskComponent, FilterPipe],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
