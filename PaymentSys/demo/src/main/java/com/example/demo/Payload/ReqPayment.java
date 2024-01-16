package com.example.demo.Payload;

import com.example.demo.entity.PaymentType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReqPayment {
    private PaymentType type;
    private Integer amount;
}
