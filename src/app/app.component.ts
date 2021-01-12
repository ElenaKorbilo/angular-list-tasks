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
    this.dataService.getTasks().subscribe((data: any) => (this.tasks = data));
  }
}
