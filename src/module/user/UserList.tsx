import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { RootState } from '../../app/store'
import { ApiStatus, IUser } from './User.type'
import { getUserListAction } from './UserSlice'

const UserList = () => {


    const { list, listStatus } = useAppSelector((state: RootState) => state.user)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getUserListAction())
    }, [])

  return (
    <table>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
        </tr>

        {listStatus === ApiStatus.loading && <tr><td>List Loading...</td></tr>}
        {listStatus === ApiStatus.error && <tr><td>Error Loading List</td></tr>}

        {listStatus === ApiStatus.ideal && list.map((user: IUser, index: number) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>Action</td>
            </tr>)
        })}
    </table>
  )
}

export default UserList