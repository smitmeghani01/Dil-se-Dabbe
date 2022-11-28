// var assert = require('assert');
// var express = require('express');
// var chai = require('chai');
// var chaiHttp = require('chai-http')
// let server = require('../server')

// chai.should()
// chai.use(chaiHttp)

// const validateMenuItem = require('../app/models/menu')
// const validateUser = require('../app/models/user')
// const {validateOrder} = require('../app/models/order')


// // Test case 1
// describe('Testing validateMenuItem()', function () {
//     describe('Test Case 1: Add item to menu', function () {
//         it('Success message for all fields required', function () {
//             const res = validateMenuItem({
//                 name: 'Veg Thali',
//                 image: 'veg-thali.jpg',
//                 price: 200,
//                 size: 'medium'
//             })
//             assert.equal(typeof (res.error) === 'undefined', true);
//         });
//         it('Error message for few fields missing', function () {
//             const res = validateMenuItem({
//                 name: 'Veg Thali',
//                 image: 'veg-thali.jpg',
//                 // price: 400,
//                 size: 'medium'
//             })
//             assert.notEqual(typeof (res.error) === 'undefined', true);
//         });
//     });
// });

// // Test Case 2
// describe('Testing validateOrder()', () => {
//     describe('Test Case 2: Order placement', () => {
//         it('Success message for order sucessfully validated for placement', () => {
//             const resOrder = validateOrder({
//                 customerId: "63680d7baac0852f50bb7e57",
//                 items: {
//                     id: "5eee651f739f8c674fd736ee",
//                     name: 'Veg Thali',
//                     image: 'veg-thali.jpg',
//                     price: 200,
//                     size: 'medium'
//                 },
//                 phone: "+919699606227",
//                 address: "Sardar Patel College",
//                 paymentType: "COD",
//                 paymentStatus: false,
//                 status: "confirmed"
//             })
//             assert.equal(typeof (resOrder.error) === 'undefined', false);
//         })
//         it('Success message for order sucessfully placed', () => {
//             const resOrder = validateOrder({
//                 customerId: "63680d7baac0852f50bb7e57",
//                 items: {
//                     id: "5eee651f739f8c674fd736ee",
//                     name: 'Veg Thali',
//                     image: 'veg-thali.jpg',
//                     price: 200,
//                     size: 'medium'
//                 },
//                 // phone: "+919699606227",
//                 address: "Sardar Patel College",
//                 paymentType: "COD",
//                 paymentStatus: false,
//                 status: "confirmed"
//             })
//             assert.notEqual(typeof (resOrder.error) === 'undefined', true);
//         })
//     })
// })

// //Test Case 3
// describe('Testing GET Orders by ID', (done) => {
//     it('Test 3 : incorrect ID for orders ', (done) => {
//         chai
//             .request(server)
//             .get('/customer/orders/63662ed63b11ae21685c4ec8')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.text.should.not.equal('User does not exist');
//                 done();
//             });
//     });
// })

// //Test Case 4
// describe('Testing validateUser()', () => {
//     describe('Test Case 4: Add admin user to database', ()=>{
//         it('Success message for all fields required', ()=>{
//             const resUser = validateUser({
//                 name:'Sourabh',
//                 email: 'sourabhnair@gmail.com',
//                 password: "qwerty12",
//                 role: "admin"
//             })
//             assert.equal(typeof (resUser.error) === 'undefined', false);
//         })
//         it('Failure message for all fields required(few missing)', () => {
//             const resUser = validateUser({
//                 name:'Sourabh',
//                 // email: 'sourabhnair@gmail.com',
//                 password: "qwerty12",
//                 role: "admin"
//             })
//             assert.notEqual(typeof (resUser.error) === 'undefined', true);
//         })
//     })
// })

