

export default function Page({
 params,
}:{
 params:{uuid:string}
}){

 return (
    <div>{params.uuid}</div>
 )
}