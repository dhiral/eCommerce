import axios                                from 'axios';
import axiosMiddleware                      from 'redux-axios-middleware';
import { legacy_createStore as createStore} from 'redux'
import {  applyMiddleware }                 from 'redux';
import rootReducer                          from '../reducers/index';
import session                              from '../utils/session';

import { NOT_AUTHORIZED,
         UNAUTHORIZED_ACTION_TYPES,ACCESS_DENIED_MSGS
          }          from '../utils/constants';
const axiosClients =  axios.create({
            baseURL: 'http://localhost:3000',
            responseType: 'json'
        });
    

          


const store = createStore(
    rootReducer,
    applyMiddleware(axiosMiddleware(axiosClients, {
        getRequestOptions: (action) => {
            action.payload.request.headers = action.payload.request.headers || {};
            action.payload.request.headers['Access-Control-Allow-Origin'] = "*";
            action.payload.request.headers['Access-Control-Allow-Methods']= "GET, POST,PUT,DELETE";

            return action
        },
        onComplete: ({ action }) => {
           
            if (action.error && action.error.response && 
                (action.error.response.status === NOT_AUTHORIZED || 
                (action.error.response.data && action.error.response.data.msg && 
                    ACCESS_DENIED_MSGS.indexOf(action.error.response.data.msg) !== -1))) {

                        console.log("in first if action",action);

                session.clear();
               
                return;
            }

            if (action.error && action.error.response && 
                action.error.response.data &&
                action.error.response.data.code && 
                action.error.response.data.code === 2) {
              
            }
            console.log("in error part",action)
           
            }
        
    }))
);
export default store;