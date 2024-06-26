export const loggerMidleWare=(store)=>(next)=>(action)=>{
    if(!action.type){
        return next(action)
    }
    console.log('type : ',action.type)
    console.log('payload : ',action.payload);
    console.log('currentState : ',store.getState())

    next(action);
    console.log('NEXT  State : ',store.getState())

}