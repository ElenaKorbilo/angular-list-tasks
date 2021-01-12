import { Component, Input, OnInit } from "@angular/core";
import { Task } from "../interfaces";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"]
})
export class TaskComponent implements OnInit {
  @Input() task: Partial<Task> = {};

  constructor() {}

  ngOnInit(): void {}
}
