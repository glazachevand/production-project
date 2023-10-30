import {
  AnyAction, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
  const reducers = { ...initialReducers };

  // создаем корневой редюсер
  let combinedReducer = combineReducers(reducers);

  // хранит названия редюсеров, которые хотим удалить
  let keysToRemove: Array<StateSchemaKey> = [];

  return {
    getReducerMap: () => reducers,

    // сам редюсер
    reduce: (state: StateSchema, action: AnyAction) => {
      // If any reducers have been removed, clean up their state first
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          delete state[key];
        });
        keysToRemove = [];
      }

      // возвращаем редюсер уже без лишних ключей
      return combinedReducer(state, action);
    },

    // добавляем редюсер по ключу
    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },

    // Добавляет ключ в массив и удаляет ключ из редюссера
    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];
      // Add the key to the list of keys to clean up
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
}
