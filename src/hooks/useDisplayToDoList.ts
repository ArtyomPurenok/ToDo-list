import React from "react"



export const useDisplayToDoList = (data: any) => {
    if (data.key === "All") {
        console.log('all');
        
        return data.arr
    }
    if (data.key === "Active") {
        console.log('Active');
              
        return data.arr.filter((el: any) => !el.state)
    }
    if (data.key === "Completed") {
        console.log('Completed');
        
        return data.arr.filter((el: any) => el.state)
    }
}