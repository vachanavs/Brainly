export function generate(len: number) {
    const options = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const lenght = options.length;
    let ans = "";

    for(let i = 0; i < len; i++) {
        ans += options[Math.floor(Math.random() * lenght)];           // 0 to 62(random number of options)   
    }

    return ans;
}