import { Component } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private todoService: TodoService) {}

  // 用于存储任务列表
  list = [];

  // 表单数据
  editStatus = false
  
  // 获取列表
  getHeroes() {
    this.list = this.todoService.getTodos();
  }

  // 数据
  itemTask (id, title) {
  	return {
      id,
      title,
      finish: false,
  		describe: ''
  	}
  }

  /**
   * 数据处理事件 - 添加任务
   * @param event
   */
  addTask (event) {

    // 如果是回车键
    // 则存储内容
    if (event.code === 'Enter') {
      const item = this.itemTask(this.list.length + 1, event.target.value)
      this.todoService.addTodo(item);

      // 重置输入框
      event.target.value = '';
    }
  }

  /**
   * 数据处理事件 - 添加任务
   * @param item
   */
  delTask (item) {
    this.todoService.delTodo(item);
  }

  // ----

  // 编辑数据  
  editItem = null

  /**
   * 编辑操作
   */
  editTask (item) {
    this.editItem = Object.assign({}, item)
  }
  editTaskSave () {
    const item = this.list.find(d => d.id === this.editItem.id)
    Object.assign(item, this.editItem)
    this.todoService.setTodo(item)
    this.editTaskQuit()
  }
  editTaskQuit () {
    this.editItem = null
  }

  // ----

  // 初始化
  ngOnInit() {
    this.getHeroes();
  }
}
