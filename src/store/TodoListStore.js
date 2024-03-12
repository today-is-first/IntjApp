import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveData = async (data) => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem('@todoList', jsonValue);
  } catch (e) {
    console.error(e);
  }
};

const useTodoListStore = create((set, get) => ({
  todoId: 0,
  increaseTodoId: (id) => set((prev) => ({ todoId: prev.todoId + 1 })),
  editTitle: '',
  setEditTitle: (val) => set({ editTitle: val }),
  editTime: new Date().setMinutes(0),
  setEditTime: (val) => set({ editTime: val }),
  editType: '',
  setEditType: (val) => set({ editType: val }),
  editContent: '',
  setEditContent: (val) => set({ editContent: val }),
  todoList: [],
  setSuccess: (id) =>
    set((prev) => {
      const updatedCalendarTodoList = { ...prev.calendarTodoList };
      Object.keys(updatedCalendarTodoList).forEach((date) => {
        updatedCalendarTodoList[date] = updatedCalendarTodoList[date].map(
          (todo) => (todo.id === id ? { ...todo, isSuccess: true } : todo),
        );
      });
      setTimeout(() => get().saveToStorage(), 0);
      return { calendarTodoList: updatedCalendarTodoList };
    }),
  updateTodo: (id) =>
    set((prev) => {
      const updatedCalendarTodoList = Object.entries(
        prev.calendarTodoList,
      ).reduce((acc, [date, todos]) => {
        acc[date] = todos
          .map((todo) =>
            todo.id === id
              ? {
                  ...todo,
                  title: prev.editTitle,
                  time: prev.editTime,
                  type: prev.editType,
                  content: prev.editContent,
                }
              : todo,
          )
          .sort((a, b) => a.time - b.time);
        return acc;
      }, {});
      setTimeout(() => get().saveToStorage(), 0);
      return { calendarTodoList: updatedCalendarTodoList };
    }),
  addTodo: () =>
    set((prev) => {
      const selectedDate = prev.selectedDate;
      const newTodo = {
        id: prev.todoId + 1,
        title: prev.editTitle,
        time: prev.editTime,
        type: prev.editType,
        content: prev.editContent,
      };

      const existingTodos = prev.calendarTodoList[selectedDate];

      const updatedTodos = existingTodos
        ? [...existingTodos, newTodo].sort((a, b) => a.time - b.time)
        : [newTodo];

      const updatedCalendarTodoList = {
        ...prev.calendarTodoList,
        [selectedDate]: updatedTodos,
      };
      setTimeout(() => get().saveToStorage(), 0);
      return {
        ...prev,
        calendarTodoList: updatedCalendarTodoList,
        todoId: prev.todoId + 1,
      };
    }),

  calendarTodoList: {},
  selectedDate: new Date().toISOString().slice(0, 10),
  setSelectedDate: (date) => set(() => ({ selectedDate: date })),
  saveToStorage: async () => {
    const state = get();
    await saveData({
      calendarTodoList: state.calendarTodoList,
      todoId: state.todoId,
    });
  },
}));

export default useTodoListStore;

/**
 * 투두 형식
 *
 * title : 제목
 * time : 몇 시에 할 것인지
 * type : 운동 / 밥 / 공부
 * content : 공부한 내용
 * 성공 여부
 * 수정 / 성공 체크
 *
 */
