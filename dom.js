let box = document.querySelector('.box')

export default async function getData(data) {
    data.forEach((e) => {
        let div = document.createElement('div')

        let h1name = document.createElement('h1')
        h1name.innerHTML = e.name 

        let pStatus = document.createElement('p')
        pStatus.innerHTML = e.status ? 'Active' : 'Inactive'

        div.append(h1name,pStatus)
        box.append(div)
    })
}