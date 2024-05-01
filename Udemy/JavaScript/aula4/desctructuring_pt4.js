        //array
        // let arr = [10,20,30,40]

        // let [ a, ...x ] = arr

        // console.log(a)
        // console.log(x)

        let obj = {
            a: 10, b: 20, c:30, d:40
        }

        let { a, b, ...z} = obj
        console.log(a)
        console.log(b)
        console.log(z)