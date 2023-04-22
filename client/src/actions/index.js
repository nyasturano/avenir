
  
  export const appIdle = () => {
    return {
      type: 'IDLE'
    }
  }
  
  export const appInvalid = () => {
    return {
      type: 'INVALID'
    }
  }
  
  export const appFetching = () => {
    return {
      type: 'FETCHING'
    }
  }
  
  export const appFetched = () => {
    return {
      type: 'FETCHED'
    }
  }
  
  export const appFetchingError = (message) => {
    return {
      type: 'FETCHING_ERROR',
      payload: message
    }
  }
  