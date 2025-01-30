import { writable } from "svelte/store";

const logInStore = writable(false);

export default{
    subscribe: logInStore.subscribe,
    set: (n) =>{
        logInStore.set(n);
    }
}