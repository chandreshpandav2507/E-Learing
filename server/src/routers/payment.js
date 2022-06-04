const express = require('express');
const Razorpay = require('razorpay');
const router = express.Router();
const shortId = require('shortid')

var razorpay = new Razorpay({
    key_id: 'rzp_test_PSwyr1a6iFSICI',
    key_secret: 'OjsOcsb2jl3XzTPXZ5ZXF1Op',
});

router.post('/verification', (req, res) => {
    const SECRET = '123456789';

    console.log(req.body)

    const crypto = require('crypto')
    const shasum = crypto.createHmac('sha256', SECRET)
    shasum.update(JSON.stringify(req.body))
    const digest = shasum.digest('hex')

    console.log(digest, req.headers['x-razorpay-signature'])

    if(digest === req.headers['x-razorpay-signature']) {
        console.log('Request is legit!')
        // process it
    }else {
        console.log('payment not verified!')
        // res.status(502)
    }
    res.send({
        status: 'Okay!'
    });
});

router.post('/payment', async (req, res) => {
    const payment_capture = 1;
    const amount = 10;
    const currency = 'INR';

    const options = {
        amount: (amount * 100).toString(), 
        currency, 
        receipt: shortId.generate(), 
        payment_capture
    };
     
    try {
        const response = await razorpay.orders.create(options)
        // console.log(response);
        res.send({
            id: response.id,
            currency: response.currency,
            amount: response.amount
        });
    } catch(error) {
        console.log(error.message)
    }
});

module.exports = router