import React, { useEffect, useState } from 'react'

import MenuItemCard from './MenuItemCard'
import { useDispatch } from 'react-redux'
import { useGetMenuItemsQuery } from '../../../Apis/menuItemApi';
import { setMenuItem } from '../../../Storage/Redux/menuItemSlice';
import { menuItemModel } from '../../../Interfaces';
import { MainLoader } from '../Common';



function MenuItemList() {
  // const [menuItems, setMenuItems] = useState<menuItemModel[]>([])

  const dispatch = useDispatch();
  const {data, isLoading} = useGetMenuItemsQuery(null);

  useEffect(() => {
   if(!isLoading){
    dispatch(setMenuItem(data.result))
   }
  }, [isLoading,data])

  if(isLoading){
    return <MainLoader />
  }

  return (
    <div className='container row'>
      {data.result.length > 0 && data.result.map((menuItem: menuItemModel, index: number) => (
        <MenuItemCard menuItem={menuItem} key={index}/>
      ))}
    </div>
  )
}

export default MenuItemList