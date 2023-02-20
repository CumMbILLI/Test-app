interface TestItems {
  id: string;
  name: string;
  completed: boolean;
}

export type ArticleState = {
  payload: TestItems[];
} | null;

export interface ActionType {
  type: string;
  payload: TestItems[];
}

export type DispatchType = (args: ActionType) => ActionType;
