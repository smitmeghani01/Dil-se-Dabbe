require('dotenv').config();
const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3300
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('express-flash')
const MongoDbStore = require('connect-mongo')
const passport = require('passport')
const Emitter = require('events')

// // Database connection
mongoose.connect("mongodb+srv://smotbot:qwerty12@cluster0.pa8f1ce.mongodb.net/pizza", 
    { 
        useNewUrlParser: true, 
        useCreateIndex:true, 
        useUnifiedTopology: true, 
        // useFindAndModify : true 
    });
    const connection = mongoose.connection;
    connection.once('open', () => {
    console.log('Database connected...');
    }).on('error', err => {
        console.log('Connection failed...')
});


// main()
//     .then((res) => {
//         console.log('Connection to DB successfull');
//     })
//     .catch((err) => {
//         console.log('Error connecting to DB');
//     });
// async function main() {
//     await mongoose.connect('mongodb+srv://jay:jay@cluster0.ft5hddt.mongodb.net/test');
// }


// mongoose.connect("mongodb+srv://smotbot:qwerty12@cluster0.pa8f1ce.mongodb.net/?retryWrites=true&w=majority",
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     },
//     (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Successfully Connected");
//         }
//     }
// );


// Session store
// let mongoStore = new MongoDbStore({
//                 mongooseConnection: connection,
//                 collection: 'sessions'
//             })

// Event emitter
const eventEmitter = new Emitter()
app.set('eventEmitter', eventEmitter)

const store = MongoDbStore.create({
    mongoUrl: 'mongodb+srv://smotbot:qwerty12@cluster0.pa8f1ce.mongodb.net/pizza',
    client: connection.getClient()
});

store.on('error', function (e) {
    console.log('Session store error: ', e);
});

// Session config
app.use(session({
    secret: 'thisismysecret',
    resave: false,
    store,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 24 hour
}))

// Passport config
const passportInit = require('./app/config/passport')
passportInit(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
// Assets
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Global middleware
app.use((req, res, next) => {
    res.locals.session = req.session
    res.locals.user = req.user
    next()
})
// set Template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

require('./routes/web')(app)
app.use((req, res) => {
    res.status(404).render('errors/404')
})

const server = app.listen(PORT , () => {
    console.log(`Listening on port ${PORT}`)
})

// Socket

const io = require('socket.io')(server)
io.on('connection', (socket) => {
      // Join
      socket.on('join', (orderId) => {
        socket.join(orderId)
      })
})

eventEmitter.on('orderUpdated', (data) => {
    io.to(`order_${data.id}`).emit('orderUpdated', data)
})

eventEmitter.on('orderPlaced', (data) => {
    io.to('adminRoom').emit('orderPlaced', data)
})

module.exports = server