// Code your solution here
const findMatching =(names, returnDrivers)=>{
    return names.filter((filterdNames) => 
    filterdNames.toUpperCase() === returnDrivers.toUpperCase());
}

const fuzzyMatch = (names, returnDrivers) =>{
    return names.filter((filterdNames) => 
    filterdNames.toUpperCase().indexOf(returnDrivers.toUpperCase()) === 0);
}

const matchName = (names, hometown) =>{
    return names.filter((filterdNames) => 
    filterdNames.name ===hometown)
}