package com.example.demo.controller;

import com.example.demo.Payload.ReqPayment;
import com.example.demo.entity.Db;
import com.example.demo.entity.Payment;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class PaymentController {

    @RequestMapping(path = "/payment", method = RequestMethod.GET)
    public List<Payment> getPayments(){
        return Db.payments;
    }

    @RequestMapping(path = "/payment", method = RequestMethod.POST)
    public void savePayment(@RequestBody ReqPayment reqPayment){
        Payment payment = new Payment(++Payment.lastId,reqPayment.getType(),reqPayment.getAmount());
        Db.payments.add(payment);
    }

    @RequestMapping(path = "/payment/{paymentId}", method = RequestMethod.PUT)
    public void savePayment(@RequestBody ReqPayment reqPayment, @PathVariable Integer paymentId){
        for (Payment payment : Db.payments) {
            if(payment.getId().equals(paymentId)){
                payment.setType(reqPayment.getType());
                return;
            }
        }
    }
}
