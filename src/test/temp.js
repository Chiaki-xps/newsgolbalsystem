// fiter只是浅拷贝
var me = [{
    id: 0,
    name: 'a',
    friend: {
        from: 'china'
    } 
}, 
{
    id: 0,
    name: 'b',
    friend: {
        from: 'Japan'
    } 
},
{
    id: 1,
    name: 'c'
}]

var it = me.filter(data => data.id === 0)

// it [{ id: 0, name: 'a', friend: { from: 'china' } },  { id: 0, name: 'b', friend: { from: 'Japan' } } ]
// console.log('it', it)

it[0].friend.from = '测试'

console.log('me', me)

// me [
//     { id: 0, name: 'a', friend: { from: '测试' } }, 
//     { id: 0, name: 'b', friend: { from: 'Japan' } },  { id: 1, name: 'c' }
//   ]