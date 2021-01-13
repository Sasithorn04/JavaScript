//แสดงเฉพาะเลขคู่
counter = prompt()
for (let i = 0; i < counter; i++){
    if (counter%2 == 0) {
        continue
    }
    console.log(i)
}