const initialState = {
    appStatus: 'idle',
    serverMessage: ''
  }
  
  const reducer = (state = initialState, action) => {
  
    switch(action.type) {  
      case 'IDLE':
        return {
          ...state,
          appStatus: 'idle'
        }
  
      case 'FETCHING':
        return {
          ...state, 
          appStatus: 'fetching'
        }
  
      case 'FETCHED':
        return {
          ...state,
          appStatus: 'fetched'
        }
  
        case 'FETCHING_ERROR':
          return {
            ...state,
            apptatus: 'error',
            serverMessage: action.payload
          }
  
      default: return state
    }
  }
  
  export default reducer;