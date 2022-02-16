const sen = {
    id: 1,
    friends: {
        name: 'sen',
        age: 18,
        now: true
    }
}

console.log('------', sen)
debugger
sen.friends.now = !sen.friends.now

console.log('++++++', sen)


const sen2 = {
    id: 1,
    friends: {
        name: 'sen',
        age: 18,
        now: true
    }
}

console.log('------', JSON.stringify(sen2))
debugger
sen2.friends.now = !sen2.friends.now

console.log('++++++', JSON.stringify(sen2))