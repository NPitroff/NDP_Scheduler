import React, { Component } from "react";

class App extends Component() {
  state = {
    tasks: [
      // default static data to hold while writing the app
      {
        title: "Drink a Smoothie",
        details: "Prepare a blueberry smoothie."
      },
      {
        title: "Get my coffee and head to work",
        details: "Start your first day with a hot coffee!"
      }
    ]
  }
  render() {
    let tasks_list = this.state.tasks.map(task => (
      // use the key of a task title to iterate through the array of objects as they currently have no id
      <p key = {task.title}>
        {task.title} - {task.details}
      </p>
    ));
    return (
      <div className="App">{tasks_list}</div>
    );
  }
}
export default App;
