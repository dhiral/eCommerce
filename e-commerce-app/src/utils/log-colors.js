export const getColor=(action)=>{
  if(action === "created" || action === "added"){
      return "rgb(175, 225, 175)"
  }else if(action === "updated"){
      return "rgb(111, 143, 175)"
  }else if(action === "deleted"){
      return "rgb(250, 160, 160)"
  }
}