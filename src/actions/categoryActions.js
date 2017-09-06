import * as types from './actionTypes';
import * as NetworkAPI from '../helpers/NetworkAPI';

export const getAllCategories = () => dispatch => {
  // dispatch({type: types.FETCH_CATEGORIES_PENDING});
  // NetworkAPI.fetchCategories()
  //   .then(res => dispatch({type: types.FETCH_CATEGORIES_FULFILLED, payload: res}))
  //   .catch(() => dispatch({type: types.FETCH_CATEGORIES_REJECTED}));
};

// export const changeCategory = category => dispatch =>
//   dispatch({type: types.CHANGE_ADD_CATEGORY, payload: category});

// export const addCategory = () => dispatch => {
//   const category = store.getState().addCategory.category;
//   // if(!category.name) return pushAlert('danger', 'Please enter a category')(dispatch);
//   dispatch({type: types.ADD_CATEGORY_PENDING});
//   NetworkAPI.newCategory(category)
//     .then(newCategory => {
//       dispatch({type: types.ADD_CATEGORY_FULFILLED, payload: newCategory});
//     })
//     .catch(() => {
//       dispatch({type: types.ADD_CATEGORY_REJECTED});
//     });
// };
