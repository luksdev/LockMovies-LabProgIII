const useState = (defaultValue) => {
    // 👆 We create a function useState with a default value
    let value = defaultValue;
    // 👆 We create a local variable value = defaultValue
    const getValue = () => value
    // 👇 We create a function to set the value with parameter newValue
    const setValue = newValue => value = newValue // 👈 We change the value for newValue
    return [getValue, setValue]; // 👈 We return an array with the value and the function
    }

export default useState
