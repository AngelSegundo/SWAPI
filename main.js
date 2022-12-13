
fetch('https://swapi.dev/api/starships')
    .then(response => response.json())
    .then(response => {
        let nextOne = response.next
        response.results.forEach(ship => {
            let starship = document.createElement('div')
            document.querySelector('body').appendChild(starship)
            starship.innerHTML = `
            <hr>
            <p>Name:</p>
            <h1>${ship.name}</h1>
            <p>Films in which it has appeared</p>
            
            `
            let filmLIst = document.createElement('ul')
            starship.appendChild(filmLIst)
            ship.films.forEach(film => {
                fetch(film)
                    .then(response => response.json())
                    .then(response => {
                        let filmTitle = document.createElement('li')
                        filmTitle.innerHTML = `${response.title}`
                        filmLIst.appendChild(filmTitle)
                    })

            });
        })

        fetch(nextOne)
            .then(response => response.json())
            .then(response => {
                let next2 = response.next
                response.results.forEach(ship => {
                    let starship = document.createElement('div')
                    document.querySelector('body').appendChild(starship)
                    starship.innerHTML =
                        `<hr>
                        <p>Name:</p>
                        <h1>${ship.name}</h1>
                        <p>Films in which it has appeared</p>
                        `
                    let filmLIst = document.createElement('ul')
                    starship.appendChild(filmLIst)
                    ship.films.forEach(film => {
                        fetch(film)
                            .then(response => response.json())
                            .then(response => {
                                let filmTitle = document.createElement('li')
                                filmTitle.innerHTML = `${response.title}`
                                filmLIst.appendChild(filmTitle)
                            })
                    });
                })

                fetch(next2)
                    .then(response => response.json())
                    .then(response => {
                        let next3 = response.next
                        response.results.forEach(ship => {
                            let starship = document.createElement('div')
                            document.querySelector('body').appendChild(starship)
                            starship.innerHTML =
                                `
                            <hr>
                            <p>Name:</p>
                            <h1>${ship.name}</h1>
                            <p>Films in which it has appeared</p>
                            `
                            let filmLIst = document.createElement('ul')
                            starship.appendChild(filmLIst)
                            ship.films.forEach(film => {
                                fetch(film)
                                    .then(response => response.json())
                                    .then(response => {
                                        let filmTitle = document.createElement('li')
                                        filmTitle.innerHTML = `${response.title}`
                                        filmLIst.appendChild(filmTitle)
                                    })
                            });
                        })




                        fetch(next3)
                            .then(response => response.json())
                            .then(response => {
                                let next4 = response.next
                                response.results.forEach(ship => {
                                    let starship = document.createElement('div')
                                    document.querySelector('body').appendChild(starship)
                                    starship.innerHTML =
                                        `
                                    <hr>
                                    <p>Name:</p>
                                    <h1>${ship.name}</h1>
                                    <p>Films in which it has appeared</p>
                                    `
                                    let filmLIst = document.createElement('ul')
                                    starship.appendChild(filmLIst)
                                    ship.films.forEach(film => {
                                        fetch(film)
                                            .then(response => response.json())
                                            .then(response => {
                                                let filmTitle = document.createElement('li')
                                                filmTitle.innerHTML = `${response.title}`
                                                filmLIst.appendChild(filmTitle)
                                            })
                                    });
                                })

                                fetch(next4)
                                    .then(response => response.json())
                                    .then(response => {
                                        response.results.forEach(ship => {
                                            let shipList = document.createElement('p')
                                            document.querySelector('body').appendChild(shipList)
                                            shipList.innerHTML = `${ship.name}`
                                        })

                                    })

                            })

                    })

            })

    })

