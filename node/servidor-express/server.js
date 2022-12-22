const express = require('express')
const app = express()
const port = 3000

let animales = [
    {
        id: 1,
        nombre: 'León',
        tipo: 'Mamifero'
    },
    {
        id: 2,
        nombre: 'Rana',
        tipo: 'Anfibio'
    },
    {
        id: 3,
        nombre: 'Halcón',
        tipo: 'Ave'
    }
]

app.use(express.json())

app.get('/', (req, res) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.send(`API en <a href='${fullUrl}api'>${fullUrl}api</a>`)
})

app.get('/api', (req, res) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.send(`Animales en : <a href='${ fullUrl }/animales'>${ fullUrl }/animales</a>`)
})

//OBTENER TODOS LOS ANIMALES
app.get('/api/animales', (req, res) => {
    res.json({ animales })
})

// OBTENER UN ANIMAL DADO UN ID
app.get('/api/animales/:id', (req, res) => {
    let id = req.params.id
    let response = animales.filter((animal) => animal.id == id)
    res.json(response)
})

// CREAR NUEVO ANIMAL
app.post('/api/animales', (req, res) => {
    let animal = {
        id: animales[animales.length - 1].id + 1,
        nombre: req.body.nombre,
        tipo: req.body.tipo
    }

    animales.push(animal)
    res.json( animal )
})

// MODIFICAR ANIMAL
app.put('/api/animales/:id', (req, res) => {
    let id = req.params.id
    let tmpAnimal = {}

    for(let animal of animales){
        if(animal.id == id){
            animal.nombre = req.body.nombre
            animal.tipo = req.body.tipo
            tmpAnimal = animal
        }
    }

    if(tmpAnimal != {}){
        res.status(200).json(tmpAnimal)
    }else{
        res.status(404).send('Animal not found, error 404')
    }
})

// ELIMINAR ANIMAL
app.delete('/api/animales/:id', (req, res) => {
    animales = animales.filter((animal) => req.params.id != animal.id)
    res.json({result: 1})
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})