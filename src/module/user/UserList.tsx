import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { RootState } from '../../app/store'
import { Modal } from '../../components/modal'
import { ApiStatus, IUser } from './User.type'
import { getUserListAction } from './UserSlice'

const UserList = () => {

    const [userDataToView, setuserDataToView] = useState<IUser | null>(null);

    const { list, listStatus } = useAppSelector((state: RootState) => state.user)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getUserListAction())
    }, [])

  return (
    <>
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
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => setuserDataToView(user)}>View</button>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>)
          })}
      </table>
      {userDataToView && (
        <Modal title="User Details" onClose={() => setuserDataToView(null)}>
          <div>
            <p>Name: {userDataToView.name}</p>
            <p>Email: {userDataToView.email}</p>
          </div>
        </Modal>
      )
}
    </>
  )
}

export default UserList