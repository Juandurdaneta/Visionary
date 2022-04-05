import { put, call } from 'redux-saga/effects'
import { setUser } from '../../ducks/user'
import { requestGetUser } from '../requests/user'

export function* handleGetUser(action){
    try{
        const response = yield call(requestGetUser)
        const { data } = response
        console.log(data)
        yield put(setUser(data))
    } catch(error){
        console.log(error);
        yield put(setUser(undefined))
    }
}