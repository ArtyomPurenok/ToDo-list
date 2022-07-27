export const useDisplayToDoList = (data: any) => {
    if (data.key === "All") {       
        return data.arr
    }

    if (data.key === "Active") {        
        return data.arr.filter((el: any) => !el.state)
    }

    if (data.key === "Completed") {   
        return data.arr.filter((el: any) => el.state)
    }
}