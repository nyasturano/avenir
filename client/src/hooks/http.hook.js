import { useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { appIdle, appFetching, appFetched, appFetchingError } from "../actions";

export const useHttp = () => {

   const {appStatus} = useSelector(state => state);
    const dispatch = useDispatch();
  
  const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json;charset=utf-8', "Accept": "application/json"}) => {
    dispatch(appFetching());
    try {
    
      const response = await fetch(url, { method, headers, body});
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }
      const data = await response.json();
      setTimeout(() => dispatch(appFetched()), 200);
      return data;
    
    } catch(e) {
      dispatch(appFetchingError());
      throw e;
    }
  }, []);
  
  return {request};
}