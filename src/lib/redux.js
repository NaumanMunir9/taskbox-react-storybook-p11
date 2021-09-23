import { createStore } from "redux";

export const actions = {
  ARCHIVE_TASK: "ARCHIVE_TASK",
  PIN_TASK: "PIN_TASK",
};

export const archiveTask = (id) => ({ type: actions.ARCHIVE_TASK, id });

export const pinTask = (id) => ({ type: actions.PIN_TASK, id });

function taskStateReducer(taskState) {
  return (state, action) => {
    return {
      ...state,
      tasks: state.tasks.map((task) =>
        task.id === action.id ? { ...task, state: taskState } : task
      ),
    };
  };
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ARCHIVE_TASK:
      return taskStateReducer("TASK_ARCHIVED")(state, action);
    case actions.PIN_TASK:
      return taskStateReducer("TASK_PINNED")(state, action);
    default:
      return state;
  }
};

const defaultTasks = [
  {
    id: "1",
    title: "This is the first title",
    state: "TASK_INBOX",
  },
  {
    id: "2",
    title: "This is the second title",
    state: "TASK_INBOX",
  },
  {
    id: "3",
    title: "This is the third title",
    state: "TASK_INBOX",
  },
  {
    id: "4",
    title: "This is the fourth title",
    state: "TASK_INBOX",
  },
];

export default createStore(reducer, { tasks: defaultTasks });
