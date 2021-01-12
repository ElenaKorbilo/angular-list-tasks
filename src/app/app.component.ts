import { Component } from "@angular/core";
import { DataService } from "./shared/data.service";
import { Task } from "./interfaces";
import { FilterPipe } from "./pipes/FilterPipe";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  tasks: Task[] = [];
  searchStr: string = "";

  constructor(private dataService: DataService) {}

  ngOnInit() {
    let storage = localStorage.getItem("tasks");

    if (!storage) {
      this.dataService.getTasks().subscribe(data => {
        this.tasks = data;
        localStorage.setItem("tasks", JSON.stringify(data));
      });
    } else {
      this.tasks = JSON.parse(storage);
    }
  }
}
