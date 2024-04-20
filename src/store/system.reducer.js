export const LOADING_START = 'LOADING_START'
export const LOADING_DONE = 'LOADING_DONE'
export const POST_CREATED = 'POST_CREATED'
export const POST_NOT_CREATED ='POST_NOT_CREATED'

const initialState = {
  isLoading: false,
  isPostCreated: false
};

export function systemReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, isLoading: true }
    case LOADING_DONE:
      return { ...state, isLoading: false }
    case POST_CREATED:
      return { ...state, isPostCreated: true }
    case POST_NOT_CREATED:
      return { ...state, isPostCreated: false }
    default: return state
  }
}
