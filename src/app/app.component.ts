import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // 用于存储任务列表
  list = [];

  /**
   * 数据处理事件 - 添加任务
   * @param event
   */
  addTask (event) {

    // 如果是回车键
    // 则存储内容
    if (event.code === 'Enter') {
      this.list.push(event.target.value);

      // 重置输入框
      event.target.value = '';
    }
  }

  /**
   * 数据处理事件 - 添加任务
   * @param item
   */
  delTask (item) {
    this.list.splice(this.list.indexOf(item), 1);
  }
}
