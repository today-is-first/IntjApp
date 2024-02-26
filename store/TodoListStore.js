import { create } from 'zustand';

const useTodoListStore = create((set) => ({
  todoId: 0,
  increaseTodoId: (id) => set((prev) => ({ todoId: prev.todoId + 1 })),
  editTitle: '',
  setEditTitle: (val) => set({ editTitle: val }),
  editTime: '',
  setEditTime: (val) => set({ editTime: val }),
  editType: '',
  setEditType: (val) => set({ editType: val }),
  editContent: '',
  setEditContent: (val) => set({ editContent: val }),
  todoList: [
    {
      id: 0,
      title: '토익 영어 단어 공부',
      time: '11:00',
      type: '공부',
      content: '토익 voca 챕터 1~12까지 몽땅 연필',
      isSuccess: true,
    },
    {
      id: 1,
      title: '헬스 - 등 하는 날',
      time: '12:00',
      type: '운동',
      content: '유산소 30분, 무산소 1시간, 식후 프로틴 필수',
      isSuccess: false,
    },
    {
      id: 2,
      title: '점심엔 햄버거',
      time: '13:00',
      type: '밥',
      content: '야무지게 먹어야지~',
      isSuccess: false,
    },
  ],
  setSuccess: (id) =>
    set((prev) => ({
      todoList: prev.todoList.map((todo) =>
        todo.id === id ? { ...todo, isSuccess: true } : todo,
      ),
    })),
  updateTodo: (id) =>
    set((prev) => ({
      todoList: prev.todoList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              title: prev.editTitle,
              time: prev.editTime,
              type: prev.editType,
              content: prev.editContent,
            }
          : todo,
      ),
    })),
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
