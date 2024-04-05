const globalProperty = "globalProperty"
function parent() {
    const parentProperty = "parentProperty"
    console.log("Inside parent/outer function, Parent property:", parentProperty, "Gobal property:", globalProperty);
    // const child = () =>{
    return () => {
        const childProperty = "childProperty"
        console.log("Inside child/inner function, Child property:", childProperty, "Parent property:", parentProperty, "Gobal property:", globalProperty);
    }
}
child = parent()
child()