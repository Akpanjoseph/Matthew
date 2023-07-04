export const data:any = [];


export const update_data =(id:number,projectName:string,description:string,deadline:string)=>{
  data.push({id:id,projectName:projectName,deadline:deadline,description:description})

  console.log(data);
  
}
