const foo = () => {
    setTimeout(
        () => {setTimeout(
            () => {console.log('11')}, 0)
            console.log('22')
        }
            
        ,0)

        console.log('33')
}

foo()