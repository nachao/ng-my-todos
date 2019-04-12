import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // 用于存储任务列表
  list = [];

  // 表单数据
  editStatus = false
  editItem = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    describe: new FormControl('')
  });

  // 数据
  itemTask (id, title) {
  	return {
      id,
  		title,
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
      this.list.push(this.itemTask(this.list.length + 1, event.target.value));

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

  editTask (item) {
    this.editStatus = true
    this.editItem.patchValue(item)
  }

  editTaskSave () {
    console.log(this.editItem)
    this.editStatus = false
    const data = this.editItem.value
    const item = this.list.find(d => d.id === data.id)
    Object.assign(item, data)
  }

  editTaskQuit () {
    this.editStatus = false
  }
}
