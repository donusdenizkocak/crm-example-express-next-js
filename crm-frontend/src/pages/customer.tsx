import Menu from '@/components/menu'
import { AppDispatch, RootState } from '@/store'
import { getUsers } from '@/store/apps/user'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"

const Customer = () => {
  //** redux */
  const dispatch =useDispatch<AppDispatch>()
  usersLoading = useSelector((state:RootState) => state.user.usersLoading)
  const users:any[] = useSelector((state:RootState) => state.user.users)
 

  

  useEffect(() => {
    dispatch(getUsers)
  }, [dispatch])
  
  return (
    <>
      <Menu />
      {usersLoading  ? "yukleniyor": "yuklendi"}
    </>
  )
}

export default Customer